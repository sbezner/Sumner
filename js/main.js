/* ============================================================
   Shared site behavior — theme toggle, nav, global search
   ============================================================ */

/* ---------- Theme toggle ---------- */
(function () {
  const KEY = 'sumner-theme';
  const root = document.documentElement;
  const stored = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  window.toggleTheme = function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(KEY, next);
    updateThemeIcon();
  };

  function updateThemeIcon() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.innerHTML = isDark
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }
  // Run once everything is parsed
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateThemeIcon);
  } else {
    updateThemeIcon();
  }
})();

/* ---------- Active nav link ---------- */
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .nav-pro a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
    else a.classList.remove('active');
  });
  // mark dropdown if any descendant is active
  document.querySelectorAll('.nav-pro .dropdown').forEach(d => {
    if (d.querySelector('a.active')) d.classList.add('has-active');
  });
})();

/* ---------- Nav dropdown behaviour ---------- */
(function () {
  document.addEventListener('click', e => {
    const trigger = e.target.closest('.dropdown > button');
    if (trigger) {
      const dd = trigger.parentElement;
      const wasOpen = dd.classList.contains('open');
      document.querySelectorAll('.nav-pro .dropdown.open').forEach(d => d.classList.remove('open'));
      if (!wasOpen) dd.classList.add('open');
      e.stopPropagation();
      return;
    }
    if (!e.target.closest('.dropdown-menu')) {
      document.querySelectorAll('.nav-pro .dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-pro .dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });
})();

/* ---------- Mobile menu toggle ---------- */
window.toggleNav = function () {
  const nav = document.querySelector('.nav-pro') || document.querySelector('.nav');
  if (nav) nav.classList.toggle('open');
};

/* ---------- Lift context (persisted across pages) ---------- */
(function () {
  const KEY = 'sumner-lift-ctx';
  const sel = document.getElementById('lift-ctx');
  const display = document.getElementById('lift-ctx-display');
  const clear = document.getElementById('lift-ctx-clear');
  if (!sel) return;

  const stored = localStorage.getItem(KEY);
  if (stored) sel.value = stored;
  updateDisplay();

  sel.addEventListener('change', () => {
    if (sel.value) localStorage.setItem(KEY, sel.value);
    else localStorage.removeItem(KEY);
    updateDisplay();
    // Notify any listeners on the page
    document.dispatchEvent(new CustomEvent('lift-ctx-changed', { detail: sel.value }));
  });

  if (clear) clear.addEventListener('click', () => {
    sel.value = '';
    localStorage.removeItem(KEY);
    updateDisplay();
    document.dispatchEvent(new CustomEvent('lift-ctx-changed', { detail: '' }));
  });

  function updateDisplay() {
    if (!display) return;
    if (sel.value) {
      display.innerHTML = '<span class="ctx-active">' + sel.options[sel.selectedIndex].textContent + '</span>';
      if (clear) clear.style.display = 'inline';
    } else {
      display.innerHTML = '<em style="color:var(--steel-400);font-style:normal;">No lift selected</em>';
      if (clear) clear.style.display = 'none';
    }
  }
})();

/* ---------- Recently viewed (localStorage) ---------- */
(function () {
  const KEY = 'sumner-recent';
  const max = 6;

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch (e) { return []; }
  }
  function save(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list.slice(0, max))); }
    catch (e) {}
  }
  function add(entry) {
    if (!entry || !entry.title || !entry.href) return;
    const list = load().filter(x => x.href !== entry.href);
    list.unshift({ ...entry, t: Date.now() });
    save(list);
  }

  // Auto-track current page
  const path = location.pathname.split('/').pop() || 'index.html';
  const titleMap = {
    'index.html':         { title: 'Overview',                    where: 'Field Manual' },
    'models.html':        { title: 'Lift Models',                 where: 'Chapter 1' },
    'parts.html':         { title: 'Parts Catalog',               where: 'Chapter 2' },
    'repairs.html':       { title: 'Repair Procedures',           where: 'Chapter 3' },
    'maintenance.html':   { title: 'Maintenance Schedule',        where: 'Chapter 4' },
    'troubleshooting.html': { title: 'Troubleshooter',            where: 'Chapter 5' },
    'safety.html':        { title: 'Safety',                      where: 'Chapter 6' },
    'inspection.html':    { title: 'Cable Inspection Guide',      where: 'Chapter 7' },
    'calculators.html':   { title: 'Capacity Calculator',         where: 'Chapter 8' },
    'tools.html':         { title: 'Tools & Torque',              where: 'Chapter 9' },
    'pipe-equipment.html':{ title: 'Pipe Handling',               where: 'Chapter 10' },
    'history.html':       { title: 'Heritage',                    where: 'Appendix B' },
    'glossary.html':      { title: 'Glossary',                    where: 'Appendix A' }
  };
  const meta = titleMap[path];
  if (meta && path !== 'index.html') {
    add({ title: meta.title, where: meta.where, href: path });
  }

  // Render the widget if present
  const widget = document.getElementById('recent-list');
  if (widget) {
    const list = load();
    if (!list.length) {
      widget.innerHTML = '<div class="empty">Pages you visit will appear here.</div>';
    } else {
      widget.innerHTML = '<ul>' + list.map(r =>
        `<li><a href="${r.href}"><strong style="font-weight:600;">${r.title}</strong><small>${r.where}</small></a></li>`
      ).join('') + '</ul>';
    }
  }

  window.recordRecent = add;
})();

/* ---------- Print helper ---------- */
window.printPage = function () { window.print(); };

/* ---------- Global search index ----------
   A flat list of pages + key sections + key procedures + parts.
   The parts catalog page also injects PARTS into this index.
*/
window.SITE_INDEX = [
  // Pages
  { title: "Overview",                  where: "Field Manual",     href: "index.html",          body: "Sumner Lift Field Manual home. Anatomy, model family, service workflow." },
  { title: "Lift Models",               where: "Chapter 1",        href: "models.html",         body: "Series 2000 2100 2300 2400 Eventer Roust-A-Bout specifications identification capacity lift height" },
  { title: "Parts Catalog",             where: "Chapter 2",        href: "parts.html",          body: "Searchable parts catalog with exploded diagram. Winch cable mast carriage forks base." },
  { title: "Repair Procedures",         where: "Chapter 3",        href: "repairs.html",        body: "Step-by-step repair procedures for common Sumner lift failures." },
  { title: "Maintenance Schedule",      where: "Chapter 4",        href: "maintenance.html",    body: "Pre-shift checklist monthly quarterly annual maintenance lubrication." },
  { title: "Troubleshooter",            where: "Chapter 5",        href: "troubleshooting.html",body: "Interactive symptom-to-cause decision tree." },
  { title: "Safety",                    where: "Chapter 6",        href: "safety.html",         body: "Cardinal rules stability service-tech safety LOTO records." },
  { title: "Cable Inspection Guide",    where: "Chapter 7",        href: "inspection.html",     body: "Visual reference for wire rope cable damage broken wires diameter reduction kinks burns ASME B30 OSHA inspection criteria." },
  { title: "Capacity Calculator",       where: "Chapter 8",        href: "calculators.html",    body: "Interactive de-rate calculator fork extension off-center load slope outrigger stowed." },
  { title: "Tools & Torque",            where: "Chapter 9",        href: "tools.html",          body: "Tools required for service torque specifications grade 5 grade 8 fastener bolts." },
  { title: "Pipe Handling",             where: "Chapter 10",       href: "pipe-equipment.html", body: "Pro Jack Mr Jack Adjust-A-Roll pipe stand tripod V-head roller-head pipe handling Sumner." },
  { title: "Heritage",                  where: "Appendix B",       href: "history.html",        body: "Sumner Manufacturing Houston Texas company history founded 1965 pipe stands material lifts." },
  { title: "Glossary",                  where: "Appendix A",       href: "glossary.html",       body: "Definitions terminology aircraft cable anchor clip carriage caster pawl pulley sheave thimble." },

  // Procedures
  { title: "P-01: Replace lift cable",                  where: "Repair · 45 min",    href: "repairs.html#p01",  body: "Cable replacement aircraft cable thimble anchor clip safety critical wire rope" },
  { title: "P-02: Service winch ratchet & brake",       where: "Repair · 30 min",    href: "repairs.html#p02",  body: "Pawl ratchet wheel brake disc glaze sandpaper lubrication safety critical" },
  { title: "P-03: Replace cable sheave",                where: "Repair · 20 min",    href: "repairs.html#p03",  body: "Top mast pulley sheave bearing groove" },
  { title: "P-04: Replace mast slide pads",             where: "Repair · 40 min",    href: "repairs.html#p04",  body: "Nylon slide pads mast wobble side play extension" },
  { title: "P-05: Replace carriage rollers",            where: "Repair · 25 min",    href: "repairs.html#p05",  body: "Carriage roller bearing flat spot chatter" },
  { title: "P-06: Replace winch assembly",              where: "Repair · 35 min",    href: "repairs.html#p06",  body: "Full winch replacement MX worm gear bolt-on" },
  { title: "P-07: Service outrigger latch",             where: "Repair · 20 min",    href: "repairs.html#p07",  body: "Stabilizer leg latch spring keeper deployment" },
  { title: "P-08: Replace reversible-fork pivot pin",   where: "Repair · 15 min",    href: "repairs.html#p08",  body: "Fork pin r-clip wear safety" },
  { title: "P-09: Install fork extension kit",          where: "Repair · 20 min",    href: "repairs.html#p09",  body: "Fork extension kit 28 to 42 inch derate 200 lb" },
  { title: "P-10: Replace decals",                      where: "Repair · 15 min",    href: "repairs.html#p10",  body: "Decal warning capacity replacement vinyl OSHA legibility" },

  // Anatomy / topics
  { title: "Anatomy: Cable Sheave",         where: "Anatomy",     href: "parts.html#exploded",  body: "Top of mast pulley sealed bearing groove" },
  { title: "Anatomy: Carriage",             where: "Anatomy",     href: "parts.html#exploded",  body: "Reversible forks rollers cable terminal" },
  { title: "Anatomy: Winch",                where: "Anatomy",     href: "parts.html#exploded",  body: "Hand crank worm gear ratchet brake MX GH-5T" },
  { title: "Anatomy: Mast",                 where: "Anatomy",     href: "parts.html#exploded",  body: "Telescoping aluminum slide pads internal cable routing" },
  { title: "Anatomy: Base & Outriggers",    where: "Anatomy",     href: "parts.html#exploded",  body: "Casters outriggers stabilizer legs foot pads" }
];

/* ---------- Global search behavior ---------- */
(function () {
  const input = document.getElementById('site-search');
  const out   = document.getElementById('search-results');
  if (!input || !out) return;

  function escape(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }

  function highlight(text, q) {
    if (!q) return escape(text);
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return escape(text).replace(re, '<mark>$1</mark>');
  }

  function score(item, q) {
    const t = item.title.toLowerCase();
    const b = item.body.toLowerCase();
    if (t.startsWith(q)) return 100;
    if (t.includes(q))   return 70;
    if (b.includes(q))   return 30;
    return 0;
  }

  function search() {
    const q = (input.value || '').trim().toLowerCase();
    if (q.length < 2) { out.classList.remove('open'); return; }

    // include parts if available
    const corpus = (window.SITE_INDEX || []).slice();
    if (window.PARTS) {
      window.PARTS.forEach(p => corpus.push({
        title: p.name,
        where: 'Part · PN ' + p.pn,
        href: 'parts.html?pn=' + encodeURIComponent(p.pn),
        body: p.desc + ' ' + p.group + ' ' + p.fits + ' ' + p.tags.join(' ')
      }));
    }

    const ranked = corpus
      .map(i => ({ i, s: score(i, q) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 10)
      .map(x => x.i);

    if (!ranked.length) {
      out.innerHTML = '<div class="empty">No matches for &ldquo;' + escape(q) + '&rdquo;</div>';
    } else {
      out.innerHTML = ranked.map(r => `
        <a class="result" href="${r.href}">
          <span class="where">${escape(r.where)}</span>
          <strong>${highlight(r.title, q)}</strong>
          <p>${highlight(r.body.length > 140 ? r.body.slice(0, 140) + '…' : r.body, q)}</p>
        </a>
      `).join('');
    }
    out.classList.add('open');
  }

  input.addEventListener('input', search);
  input.addEventListener('focus', search);
  document.addEventListener('click', e => {
    if (!e.target.closest('.global-search')) out.classList.remove('open');
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { input.value = ''; out.classList.remove('open'); input.blur(); }
  });
})();
