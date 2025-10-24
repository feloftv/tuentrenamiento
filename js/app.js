// ============================
// Configuración del plan
// ============================
const PLAN = {
"Lunes - Tracción": [
  { n: "Puxada alta articulada", img: "espalda/puxada-alta-articulada.gif", series: "4 x 12" },
  { n: "Remada cavalo",            img: "espalda/remada-cavalo.jpg",            series: "4 x 12" },
  { n: "Remada hammer",            img: "espalda/remada-hammer.jpg",            series: "4 x 12" },
  { n: "Remada articulada",        img: "espalda/remada-articulada.jpg",        series: "4 x 12" },

  { n: "Rosca directa con barra",  img: "biceps/rosca-directa-con-barra.jfif",  series: "4 x 12" },
  { n: "Rosca bíceps en polea baja", img: "biceps/rosca-biceps-en-polea-baja.png", series: "Biserie 12 x 10" },
  { n: "Rosca con barra H",        img: "biceps/rosca-con-barra-h.jfif",        series: "4 x 12" },

  { n: "Pullface (deltoides posteriores)", img: "hombro/pullface.webp",         series: "4 x 12" },

  { n: "Tabata",                   img: "core/plancha-frontal-2x30-40s.jpg",    series: "20 x 10" }
],


  "Martes - Empuje": [
    { n: "Press de pecho con mancuernas", img: "pecho/press-de-pecho-con-mancuernas.webp" },
    { n: "Crucifijo inclinado con mancuernas", img: "pecho/crucifijo-inclinado-con-mancuernas.jpg" },
    { n: "Supino declinado articulado", img: "pecho/supino-declinado-articulado.jfif" },
    { n: "Supino máquina", img: "pecho/supino-maquina.webp" },
    { n: "Extensión de tríceps en polea alta", img: "triceps/extension-de-triceps-en-polea-alta.webp" },
    { n: "Tríceps con cuerda", img: "triceps/triceps-con-cuerda.webp" },
    { n: "Press militar con mancuernas", img: "hombro/press-militar-con-mancuernas.webp" },
    { n: "Elevación lateral con mancuernas", img: "hombro/elevacion-lateral-con-mancuernas.webp" },
    { n: "Elevación frontal con mancuernas", img: "hombro/elevacion-frontal-con-mancuernas.webp" },
    { n: "Pullface", img: "hombro/pullface.webp" },
    { n: "Abdominal supra corto con piernas elevadas", img: "core/abdominal-supra-corto-con-piernas-elevadas.jpg" },
    { n: "Abdominal remador", img: "core/abdominal-remador.jpg" },
  ],

  "Jueves - Tren inferior": [
    { n: "Sentadilla Hack", img: "cuadriceps/sentadilla-hack.webp" },
    { n: "Abductor articulado", img: "cuadriceps/abductor-articulado.png" },
    { n: "Prensa 45°", img: "cuadriceps/prensa-45.gif" },
    { n: "Extensión de rodillas", img: "cuadriceps/extension-de-rodillas.jfif" },
    { n: "Mesa flexora", img: "cuadriceps/mesa-flexora.jpg" },
    { n: "Pantorrilla de pie", img: "pantorrilla/pantorrilla-de-pie.jpg" },
    { n: "Peso muerto rumano", img: "posteriores/peso-muerto-rumano.webp" },
    { n: "Plancha frontal 2x30-40s", img: "core/plancha-frontal-2x30-40s.jpg" },
  ],

  "Viernes - Full Body": [
    { n: "Prensa 45° o Sentadilla con barra", img: "cuadriceps/prensa-45.gif" },
    { n: "Press de pecho con barra", img: "pecho/press-de-pecho-con-mancuernas.webp" },
    { n: "Dominadas asistidas o Lat Pulldown", img: "espalda/dominadas-asistidas-o-lat-pulldown.jfif" },
    { n: "Remo con barra", img: "espalda/remada-hammer.jpg" },
    { n: "Peso muerto rumano (moderado)", img: "posteriores/peso-muerto-rumano.webp" },
    { n: "Press militar con mancuernas", img: "hombro/press-militar-con-mancuernas.webp" },
    { n: "Elevación lateral con mancuernas", img: "hombro/elevacion-lateral-con-mancuernas.webp" },
    { n: "Plancha frontal", img: "core/plancha-frontal-2x30-40s.jpg" },
    { n: "Abdominal remador", img: "core/abdominal-remador.jpg" },
    { n: "Cardio opcional 10-15 min", img: "core/cardio.jpg" },
  ],
};

// ============================
// Funciones base
// ============================
const STORAGE_KEY = "entreno_progreso_v1";

const getState = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
};

const setState = (data) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

const todayStr = () =>
  new Date().toLocaleDateString("es-UY", {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

function srcFor(img) {
  const isInHtmlFolder = window.location.pathname.split("/").includes("html");
  const base = isInHtmlFolder ? "../img" : "./img";
  return `${base}/${img}`;
}

// ============================
// Renderizado de interfaz
// ============================
const tabsEl = document.getElementById("tabs");
const dayContainer = document.getElementById("dayContainer");
const dateLabel = document.getElementById("dateLabel");
let currentDay = Object.keys(PLAN)[0];

function renderTabs() {
  tabsEl.innerHTML = "";
  Object.keys(PLAN).forEach((day) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (day === currentDay ? " active" : "");
    btn.textContent = day;
    btn.onclick = () => {
      currentDay = day;
      render();
    };
    tabsEl.appendChild(btn);
  });
}

function getDayKey() {
  return currentDay;
}

function render() {
  renderTabs();
  dateLabel.textContent = todayStr();
  dayContainer.innerHTML = "";
  const items = PLAN[currentDay];
  const state = getState();
  const dayKey = getDayKey();

  items.forEach((it, idx) => {
    const s =
      state[dayKey]?.[idx] || { series: "3 x 10", carga: "", notas: "", hecho: false };
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-head">
        <span class="tag">${idx + 1}</span>
        <h3>${it.n}</h3>
      </div>
      <div class="media">
        <img alt="${it.n}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'missing',textContent:'Coloca la imagen en /img/${it.img}'}))" src="${srcFor(it.img)}"/>
      </div>
      <div class="fields">
        <div class="field"><label>Series x Reps</label><input type="text" value="${s.series || it.series || '3 x 10'}" data-field="series"/></div>
        <div class="field"><label>Carga (kg)</label><input type="number" step="0.5" placeholder="0" value="${s.carga}" data-field="carga"/></div>
        <div class="field"><label>RPE / Dificultad (1-10)</label><input type="number" min="1" max="10" placeholder="-" value="${s.rpe || ""}" data-field="rpe"/></div>
        <div class="field" style="grid-column:1/-1"><label>Notas / Progresión</label><textarea data-field="notas">${s.notas || ""}</textarea></div>
      </div>
      <div class="foot">
        <label class="chk"><input type="checkbox" ${s.hecho ? "checked" : ""} data-field="hecho"> Hecho</label>
        <div class="spacer"></div>
        <div class="small">Se guarda automáticamente</div>
      </div>`;

    card.querySelectorAll("[data-field]").forEach((inp) => {
      inp.addEventListener("input", () => save(idx));
      inp.addEventListener("change", () => save(idx));
    });

    dayContainer.appendChild(card);
  });
}

function save(idx) {
  const state = getState();
  const dayKey = getDayKey();
  state[dayKey] = state[dayKey] || {};
  const card = dayContainer.children[idx];
  const payload = {
    series: card.querySelector('[data-field="series"]').value,
    carga: card.querySelector('[data-field="carga"]').value,
    rpe: card.querySelector('[data-field="rpe"]').value,
    notas: card.querySelector('[data-field="notas"]').value,
    hecho: card.querySelector('[data-field="hecho"]').checked,
    ts: Date.now(),
  };
  state[dayKey][idx] = payload;
  setState(state);
}

// ============================
// Exportar / Importar progreso
// ============================
function download(filename, text) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

document.getElementById("btnExport").onclick = () => {
  const data = getState();
  const stamp = new Date().toISOString().slice(0, 10);
  download(`progreso-entreno-${stamp}.json`, JSON.stringify(data, null, 2));
};

document.getElementById("btnImport").onclick = () => {
  document.getElementById("fileInput").click();
};

document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      setState(JSON.parse(reader.result));
      render();
      alert("Progreso importado.");
    } catch {
      alert("Archivo inválido.");
    }
  };
  reader.readAsText(file);
  e.target.value = "";
});

// ============================
// Reset del día
// ============================
document.getElementById("btnResetDay").onclick = () => {
  if (!confirm(`¿Reiniciar campo y check de ${currentDay}?`)) return;
  const st = getState();
  delete st[getDayKey()];
  setState(st);
  render();
};

// Inicialización
render();
