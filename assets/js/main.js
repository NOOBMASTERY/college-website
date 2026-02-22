/* ===============================
   MAIN.JS — Bangna Commercial College
   Refactored: single source of truth
================================ */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Reveal ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      if (entry.target.classList.contains("counter")) startCounter(entry.target);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1 }
);
function observeReveal() {
  $$(".reveal, .counter").forEach((el) => revealObserver.observe(el));
}

/* ── Counter ── */
function startCounter(el) {
  const target = +el.dataset.target;
  let count = 0;
  const step = target / 60;
  const tick = () => {
    count = Math.min(count + step, target);
    el.textContent = Math.ceil(count).toLocaleString("th-TH");
    if (count < target) requestAnimationFrame(tick);
  };
  tick();
}

/* ── Dark Mode ── */
function initDark() {
  const btn = $("#darkToggle");
  const apply = (isDark) => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("dark", isDark);
    if (btn) btn.textContent = isDark ? "☀️" : "🌙";
  };
  apply(localStorage.getItem("dark") === "true");
  btn?.addEventListener("click", () =>
    apply(!document.body.classList.contains("dark"))
  );
}

/* ── Mobile Nav ── */
function initNav() {
  const burger = $(".hamburger");
  const nav = $(".nav-links");
  if (!burger || !nav) return;
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
    burger.setAttribute("aria-expanded", nav.classList.contains("show"));
  });
  $$(".nav-links a").forEach((link) =>
    link.addEventListener("click", () => nav.classList.remove("show"))
  );
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  $$(".nav-links a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === currentPage);
  });
}

/* ── Modal ── */
function initModal() {
  const modal = $("#profileModal");
  if (!modal) return;
  const close = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal-close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function openModal(person) {
  const modal = $("#profileModal");
  if (!modal) return;

  const img = modal.querySelector(".modal-img");
  if (img) {
    if (person.image) {
      img.src = person.image;
      img.alt = person.name;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }

  const set = (cls, val) => {
    const el = modal.querySelector(cls);
    if (el) el.textContent = val || "—";
  };
  set(".modal-name", person.name);
  set(".modal-role", person.role);
  set(".modal-department", person.department);
  set(".modal-education", person.education);

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

/* ── Profile Card ── */
/* บุคลากรที่ image = null / undefined / "" จะไม่สร้าง card เลย */
function createProfileCard(person) {
  if (!person.image) return null;   // ← ไม่มีรูป → ข้าม

  const card = document.createElement("div");
  card.className = "profile-card reveal";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", person.name);

  card.innerHTML = `
    <div class="img-frame">
      <img src="${person.image}" alt="${person.name}" loading="lazy">
    </div>
    <div class="card-body">
      <h3 class="staff-name">${person.name}</h3>
      <p class="staff-role">${person.role || ""}</p>
    </div>
  `;

  const open = () => openModal(person);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") open();
  });
  return card;
}

/* ── Management ── */
function renderManagement() {
  const dirBox = $("#directorContainer");
  const depBox = $("#deputyContainer");
  if (!dirBox || typeof staffData === "undefined") return;

  staffData.directors.forEach((p) => {
    const card = createProfileCard(p);
    if (card) dirBox.appendChild(card);
  });
  if (depBox) {
    staffData.deputies.forEach((p) => {
      const card = createProfileCard(p);
      if (card) depBox.appendChild(card);
    });
  }
  observeReveal();
}

/* ── Staff Tabs ── */
function renderStaff() {
  const tabsContainer = $("#staffTabs");
  const staffContainer = $("#staffContainer");
  if (!tabsContainer || !staffContainer || typeof staffCategoryData === "undefined") return;

  const categories = Object.keys(staffCategoryData);
  let activeTab = categories[0];

  categories.forEach((key) => {
    const tab = document.createElement("button");
    tab.className = "tab-btn" + (key === activeTab ? " active" : "");
    tab.textContent = staffCategoryData[key].label;
    tab.dataset.key = key;
    tab.addEventListener("click", () => {
      $$(".tab-btn").forEach((b) => b.classList.remove("active"));
      tab.classList.add("active");
      activeTab = key;
      renderStaffGrid(key);
    });
    tabsContainer.appendChild(tab);
  });

  renderStaffGrid(activeTab);
}

function renderStaffGrid(key) {
  const staffContainer = $("#staffContainer");
  if (!staffContainer) return;

  staffContainer.innerHTML = "";
  const people = staffCategoryData[key]?.members || [];

  /* กรองเฉพาะคนที่มีรูป */
  const withPhoto = people.filter((p) => p.image);

  if (!withPhoto.length) {
    staffContainer.innerHTML = `<p class="empty-msg">ยังไม่มีข้อมูล</p>`;
    return;
  }

  withPhoto.forEach((p) => {
    const card = createProfileCard(p);
    if (card) staffContainer.appendChild(card);
  });

  observeReveal();
  requestAnimationFrame(() => {
    $$(".reveal", staffContainer).forEach((el) => revealObserver.observe(el));
  });
}

/* ── Bootstrap ── */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
  initDark();
  initNav();
  initModal();
  renderManagement();
  renderStaff();
  observeReveal();
});