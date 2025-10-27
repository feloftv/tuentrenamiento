// ============================
// Configuración del plan
// ============================
const PLAN = {
  "Día 1": [
    // Espalda
    { g: "Espalda", n: "Puxada alta articulada", img: "espalda/puxada-alta-articulada.gif", series: "4 x 12" },
    { g: "Espalda", n: "Remada cavalo", img: "espalda/remada-cavalo.jpg", series: "4 x 12" },
    { g: "Espalda", n: "Remada hammer", img: "espalda/remada-hammer.jpg", series: "4 x 12" },
    { g: "Espalda", n: "Remada articulada", img: "espalda/remada-articulada.jpg", series: "4 x 12" },

    // Bíceps
    { g: "Bíceps", n: "Rosca directa con barra", img: "biceps/rosca-directa-con-barra.jfif", series: "4 x 12" },
    { g: "Bíceps", n: "Rosca bíceps en polea baja", img: "biceps/rosca-biceps-en-polea-baja.png", series: "Biserie 12 x 10" },
    { g: "Bíceps", n: "Rosca con barra H", img: "biceps/rosca-con-barra-h.jfif", series: "4 x 12" },

    // Hombros
    { g: "Hombros", n: "Pullface", img: "hombro/pullface.webp", series: "4 x 12" },

    // Core
    { g: "Core", n: "Tabata (core)", img: "core/plancha-frontal-2x30-40s.jpg", series: "20 segundos de trabajo x 10 segundos de descanso" }
  ],

  "Día 2": [
    // Piernas
    { g: "Piernas", n: "Sentadilla Hack",        img: "cuadriceps/sentadilla-hack.webp",        series: "4 x 12", kg: 35 },
    { g: "Piernas", n: "Abductor articulado",    img: "cuadriceps/abductor-articulado.png",     series: "4 x 12", kg: 50 },
    { g: "Piernas", n: "Prensa 45°",             img: "cuadriceps/prensa-45.gif",               series: "4 x 12", kg: 100 },
    { g: "Piernas", n: "Extensión de rodillas",  img: "cuadriceps/extension-de-rodillas.jfif",  series: "4 x 12 (biserie)", kg: "25 / 20" },
    { g: "Piernas", n: "Mesa flexora",           img: "cuadriceps/mesa-flexora.jpg",            series: "4 x 12", kg: "25 / 20" },
    { g: "Piernas", n: "Peso muerto rumano",     img: "posteriores/peso-muerto-rumano.webp",    series: "4 x 12", kg: 35 },
    { g: "Piernas", n: "Pantorrilla de pie",     img: "pantorrilla/pantorrilla-de-pie.jpg",     series: "4 x 12", kg: 70 },

    // Core
    { g: "Core", n: "Tabata (core)",             img: "core/plancha-frontal-2x30-40s.jpg",      series: "20 × 10" }
  ],

  "Día 3": [
    // Pecho
    { g: "Pecho", n: "Press plano con barra",            img: "pecho/press-plano-barra.jpg",                 series: "4 x 12", kg: 40 },
    { g: "Pecho", n: "Press inclinado con mancuernas",   img: "pecho/press-inclinado-mancuernas.jpg",        series: "4 x 12", kg: 30 },
    { g: "Pecho", n: "Press en máquina articulada",      img: "pecho/press-maquina-articulada.jpg",          series: "4 x 12", kg: 35 },
    { g: "Pecho", n: "Aperturas con Polea",              img: "pecho/aperturas-maquina-polea.jpg",           series: "4 x 12", kg: 5 },

    // Tríceps
    { g: "Tríceps", n: "Fondos en paralelas",            img: "triceps/fondos-paralelas.jpg",                series: "4 x 12", kg: "peso corporal" },
    { g: "Tríceps", n: "Extensión de tríceps en polea",  img: "triceps/extension-triceps-polea.webp",        series: "4 x 12", kg: 25 },
    { g: "Tríceps", n: "Triceps en Cajón",               img: "triceps/triceps-cajon.jpg",                   series: "4 x 12", kg: 10 },

    // Core
    { g: "Core", n: "Tabata (core)",                     img: "core/plancha-lateral-rotacion.webp",          series: "20 seg trabajo / 10 seg descanso x 8" }
  ],

  "Día 4": [
    // Piernas
    { g: "Piernas", n: "Prensa 45º",            img: "cuadriceps/prensa-45.gif",              series: "4 x 12",          kg: 100 },
    { g: "Piernas", n: "Peso Muerto Rumano",    img: "posteriores/peso-muerto-rumano.webp",   series: "4 x 12",          kg: 35 },

    // Pecho
    { g: "Pecho",   n: "Press de pecho",        img: "pecho/press-de-pecho-con-mancuernas.webp", series: "4 x 12",        kg: 12.5 },
    { g: "Pecho",   n: "Supino declinado",      img: "pecho/supino-declinado-articulado.jfif",   series: "4 x 12",        kg: 25 },

    // Espalda
    { g: "Espalda", n: "Dominadas",             img: "espalda/dominadas-asistidas-o-lat-pulldown.jfif", series: "4 x 12", kg: 35 },
    { g: "Espalda", n: "Remo en Barra",         img: "espalda/remada-hammer.jpg",              series: "4 x 12",          kg: 10 },

    // Core (circuito)
    { g: "Core", n: "Cortitas (Crunch cortito)", img: "core/abdominal-supra-corto-con-piernas-elevadas.jpg", series: "20 reps (3 vueltas, 30s desc.)" },
    { g: "Core", n: "Bicicleta abdominal",       img: "core/abdominales-bicicleta.png",          series: "20 reps" },
    { g: "Core", n: "Remadores",                 img: "core/abdominal-remador.jpg",              series: "20 reps" },
    { g: "Core", n: "Plancha Spiderman",         img: "core/plancha-frontal-2x30-40s.jpg",       series: "30 segs" },
    { g: "Core", n: "V-Ups",                     img: "core/v-ups.jpg",                          series: "20 reps" },
    { g: "Core", n: "Russian Twist",             img: "core/russian-twist.webp",                 series: "20 reps" },
    { g: "Core", n: "Elevación de piernas",      img: "core/elevacion-de-piernas.jpg",           series: "20 reps" },
    { g: "Core", n: "Plancha frontal estática",  img: "core/plancha-frontal-2x30-40s.jpg",       series: "30 segs" }
  ]
};

const DIA4_EXTRAS = {
  Piernas: { n: "SUMO", g: "Piernas", img: "cuadriceps/sumo.jpg", series: "4 x 12", kg: 70 },
  Pecho:   { n: "Crucifijo inclinado",   g: "Pecho",   img: "pecho/crucifijo-inclinado-con-mancuernas.jpg", series: "4 x 12", kg: 9 },
  Espalda: { n: "Remada hammer (extra)", g: "Espalda", img: "espalda/remada-hammer.jpg", series: "4 x 12", kg: 35 }
};

// ============================
// Estado y almacenamiento
// ============================
const STORAGE_KEY = "entreno_progreso_v2";
const PREFS_KEY   = "entreno_prefs_v1";

const getState = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const setState  = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

const getPrefs = () => JSON.parse(localStorage.getItem(PREFS_KEY)) || {};
const setPrefs = (data) => localStorage.setItem(PREFS_KEY, JSON.stringify(data));

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

// Devuelve los items a renderizar, aplicando la lógica especial de Día 4
function computeItemsForDay(day) {
  const items = PLAN[day] || [];
  if (day !== "Día 4") return items;

  const prefs = getPrefs();
  const coreDone = !!prefs.coreDoneDia4;

  // Si NO hizo core → mostrar todo tal cual (incluye Core)
  if (!coreDone) return items;

  // Sí hizo core → ocultar Core y agregar 1 extra en Piernas, Pecho, Espalda
  const withoutCore = items.filter(it => (it.g || "") !== "Core");

  // Agrupar por g preservando el orden de aparición de los grupos
  const groupsOrder = [];
  const groupsMap = {};
  withoutCore.forEach(it => {
    const g = it.g || "General";
    if (!groupsMap[g]) { groupsMap[g] = []; groupsOrder.push(g); }
    groupsMap[g].push(it);
  });

  // Extras a insertar dentro de cada grupo (al final del grupo)
  const extrasByGroup = {
    "Piernas": DIA4_EXTRAS.Piernas,
    "Pecho":   DIA4_EXTRAS.Pecho,
    "Espalda": DIA4_EXTRAS.Espalda
  };

  // Reconstruir la lista intercalando el extra al final de cada grupo objetivo
  const out = [];
  groupsOrder.forEach(g => {
    const arr = groupsMap[g];
    arr.forEach(it => out.push(it));
    if (extrasByGroup[g]) out.push(extrasByGroup[g]);
  });

  return out;
}


function render() {
  renderTabs();
  dayContainer.innerHTML = "";
  const state = getState();

  // Banner especial Día 4 (si lo usás)
  if (currentDay === "Día 4") {
    const prefs = getPrefs();
    const coreDone = !!prefs.coreDoneDia4;

    const banner = document.createElement("div");
    banner.className = "card";
    banner.style.marginBottom = "12px";
    banner.innerHTML = `
      <div class="card-head" style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;">
        <strong>¿Hiciste zona media hoy?</strong>
        <div>
          <button class="btn" id="btnDia4No">No (mostrar Core)</button>
          <button class="btn" id="btnDia4Si">Sí (agregar 3 extras)</button>
        </div>
      </div>
      <div class="small" style="padding:0 12px 12px;color:#9fb0c9;">
        ${coreDone ? "Seleccionado: Sí — Core oculto y agregados 3 ejercicios extra." : "Seleccionado: No — se muestra el bloque de Core."}
      </div>
    `;
    dayContainer.appendChild(banner);

    banner.querySelector("#btnDia4No").onclick = () => {
      const p = getPrefs(); p.coreDoneDia4 = false; setPrefs(p); render();
    };
    banner.querySelector("#btnDia4Si").onclick = () => {
      const p = getPrefs(); p.coreDoneDia4 = true; setPrefs(p); render();
    };
  }

  const items = computeItemsForDay(currentDay);

  // Agrupar por g y mantener orden original
  let lastGroup = null;
  items.forEach((it, idx) => {
    const group = it.g || "General";

    // Título de grupo cuando cambia
    if (group !== lastGroup) {
      const h = document.createElement("div");
      h.className = "group-title";
      h.textContent = group;
      dayContainer.appendChild(h);
      lastGroup = group;
    }

    const saved = state[currentDay]?.[idx] || { carga: "", hecho: false };
    const isTabata = (it.n || "").toLowerCase().includes("tabata");

    const card = document.createElement("article");
    card.className = "card";
    card.dataset.i = String(idx); // <- clave para save()

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
            <input type="number"
                   value="${(saved.carga !== "" && saved.carga !== undefined) ? saved.carga : (it.kg ?? "")}"
                   data-field="carga" step="0.5" placeholder="0">
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
  const items = computeItemsForDay(currentDay);
  // buscar por data-i para ignorar títulos de grupo y/o banner
  const card = dayContainer.querySelector(`article.card[data-i="${idx}"]`);
  const isTabata = (items[idx].n || "").toLowerCase().includes("tabata");

  state[currentDay] = state[currentDay] || {};
  state[currentDay][idx] = {
    carga: !isTabata ? (card.querySelector('[data-field="carga"]')?.value ?? "") : "",
    hecho: !!card.querySelector('[data-field="hecho"]')?.checked,
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

document.getElementById("btnTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Inicialización
render();