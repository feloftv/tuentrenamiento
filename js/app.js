// ============================
// Configuración del plan
// ============================
const PLAN = {
  "Día 1": [
    { n: "Puxada alta articulada", img: "espalda/puxada-alta-articulada.gif", series: "4 x 12" },
    { n: "Remada cavalo", img: "espalda/remada-cavalo.jpg", series: "4 x 12" },
    { n: "Remada hammer", img: "espalda/remada-hammer.jpg", series: "4 x 12" },
    { n: "Remada articulada", img: "espalda/remada-articulada.jpg", series: "4 x 12" },
    { n: "Rosca directa con barra", img: "biceps/rosca-directa-con-barra.jfif", series: "4 x 12" },
    { n: "Rosca bíceps en polea baja", img: "biceps/rosca-biceps-en-polea-baja.png", series: "Biserie 12 x 10" },
    { n: "Rosca con barra H", img: "biceps/rosca-con-barra-h.jfif", series: "4 x 12" },
    { n: "Pullface", img: "hombro/pullface.webp", series: "4 x 12" },
    { n: "Tabata (core)", img: "core/plancha-frontal-2x30-40s.jpg", series: "20 segundos de trabajo x 10 segundos de descanso" }
  ],
  "Día 2": [],
  "Día 3": [],
  "Día 4": []
};

// ============================
// Estado y almacenamiento
// ============================
const STORAGE_KEY = "entreno_progreso_v2";
const getState = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const setState = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

// ============================
// Renderizado
// ============================
const tabsEl = document.getElementById("tabs");
const dayContainer = document.getElementById("dayContainer");
let currentDay = Object.keys(PLAN)[0];

function renderTabs() {
  tabsEl.innerHTML = "";
  Object.keys(PLAN).forEach((day) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (day === currentDay ? " active" : "");
    btn.textContent = day;
    btn.onclick = () => { currentDay = day; render(); };
    tabsEl.appendChild(btn);
  });
}

function render() {
  renderTabs();
  dayContainer.innerHTML = "";
  const state = getState();
  const items = PLAN[currentDay];

  items.forEach((it, idx) => {
    const saved = state[currentDay]?.[idx] || { carga: "", hecho: false };
    const isTabata = it.n.toLowerCase().includes("tabata");

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="media">
        <img src="img/${it.img}" alt="${it.n}" onerror="this.style.display='none'">
      </div>
      <h3>${it.n}</h3>
      <div class="fields ${isTabata ? "onecol" : ""}">
        <div class="field ${isTabata ? "full" : ""}">
          <label>Series x Reps</label>
          <div class="static">${it.series}</div>
        </div>
        ${!isTabata ? `
          <div class="field">
            <label>Carga (kg)</label>
            <input type="number" value="${saved.carga}" data-field="carga" step="0.5" placeholder="0">
          </div>` : ""
        }
      </div>
      <div class="foot">
        <label class="chk">
          <input type="checkbox" ${saved.hecho ? "checked" : ""} data-field="hecho"> Hecho
        </label>
      </div>
    `;

    card.querySelectorAll("[data-field]").forEach((inp) => {
      inp.addEventListener("input", () => save(idx));
      inp.addEventListener("change", () => save(idx));
    });

    dayContainer.appendChild(card);
  });
}

function save(idx) {
  const state = getState();
  const items = PLAN[currentDay];
  const card = dayContainer.children[idx];
  const isTabata = items[idx].n.toLowerCase().includes("tabata");

  state[currentDay] = state[currentDay] || {};
  state[currentDay][idx] = {
    carga: !isTabata ? card.querySelector('[data-field="carga"]').value : "",
    hecho: card.querySelector('[data-field="hecho"]').checked,
  };
  setState(state);
}

// ============================
// Utilidades export / reset
// ============================
function download(filename, text) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}

function exportProgress() {
  const data = getState();
  const stamp = new Date().toISOString().slice(0, 10);
  download(`progreso-entreno-${stamp}.json`, JSON.stringify(data, null, 2));
}

function resetDay() {
  if (!confirm(`¿Reiniciar campo y check de ${currentDay}?`)) return;
  const st = getState();
  delete st[currentDay];
  setState(st);
  render();
}

// ============================
// Botones (arriba y abajo)
// ============================
document.getElementById("btnExport")?.addEventListener("click", exportProgress);
document.getElementById("btnResetDay")?.addEventListener("click", resetDay);
document.getElementById("btnExportBottom")?.addEventListener("click", exportProgress);
document.getElementById("btnResetDayBottom")?.addEventListener("click", resetDay);

// Inicialización
render();
