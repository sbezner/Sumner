/* Parts catalog: search, filter, modal */
(function () {
  const grid     = document.getElementById('parts-grid');
  const search   = document.getElementById('parts-search');
  const chipsGrp = document.querySelectorAll('.chip[data-group]');
  const chipsSer = document.querySelectorAll('.chip[data-series]');
  const chipsTag = document.querySelectorAll('.chip[data-tag]');
  const counter  = document.getElementById('parts-count');

  let activeGroup  = null;
  let activeSeries = null;
  let activeTag    = null;

  function escape(s) {
    return s.replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }

  function highlight(text, q) {
    if (!q) return escape(text);
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return escape(text).replace(re, '<mark>$1</mark>');
  }

  function tagClass(t) {
    if (t === 'wear')   return 'tag tag--wear';
    if (t === 'safety') return 'tag tag--safety';
    if (t === 'cable')  return 'tag tag--cable';
    return 'tag';
  }

  function render() {
    const q = (search.value || '').trim().toLowerCase();
    const filtered = PARTS.filter(p => {
      if (activeGroup  && p.group  !== activeGroup) return false;
      if (activeSeries && !p.series.includes(activeSeries)) return false;
      if (activeTag    && !p.tags.includes(activeTag)) return false;
      if (q) {
        const hay = (p.pn + ' ' + p.name + ' ' + p.desc + ' ' + p.group + ' ' + p.fits).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    counter.textContent = filtered.length + ' part' + (filtered.length === 1 ? '' : 's');

    if (!filtered.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;color:var(--steel-500);text-align:center;padding:48px 0;">No parts match your filters. <button class="btn btn--ghost btn--sm" onclick="window._resetFilters()">Reset filters</button></p>';
      return;
    }

    grid.innerHTML = filtered.map((p, i) => `
      <article class="part-card" data-idx="${PARTS.indexOf(p)}" tabindex="0">
        <div class="pn">PN ${escape(p.pn)}</div>
        <h4>${highlight(p.name, q)}</h4>
        <p class="desc">${highlight(p.desc.length > 130 ? p.desc.slice(0, 130) + '…' : p.desc, q)}</p>
        <div class="tags">
          <span class="tag">${escape(p.group)}</span>
          ${p.tags.map(t => `<span class="${tagClass(t)}">${escape(t)}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  function openModal(idx) {
    const p = PARTS[idx];
    if (!p) return;
    document.getElementById('m-pn').textContent   = 'PN ' + p.pn;
    document.getElementById('m-name').textContent = p.name;
    document.getElementById('m-group').textContent = p.group;
    document.getElementById('m-desc').textContent = p.desc;
    document.getElementById('m-fits').textContent = p.fits;
    document.getElementById('m-int').textContent  = p.interval;
    document.getElementById('m-series').innerHTML = p.series.map(s => `<span class="tag">${s}</span>`).join('');
    document.getElementById('m-tags').innerHTML   = p.tags.length
      ? p.tags.map(t => `<span class="${tagClass(t)}">${t}</span>`).join('')
      : '<span style="color:var(--steel-500);font-size:.85rem;">no special tags</span>';
    document.getElementById('modal').classList.add('open');
  }

  function closeModal() {
    document.getElementById('modal').classList.remove('open');
  }

  /* Filter chip wiring */
  function bindChips(chips, accessor) {
    chips.forEach(c => c.addEventListener('click', () => {
      const val = c.dataset[accessor];
      const wasActive = c.getAttribute('aria-pressed') === 'true';
      chips.forEach(x => x.setAttribute('aria-pressed', 'false'));
      if (wasActive) {
        if (accessor === 'group')  activeGroup  = null;
        if (accessor === 'series') activeSeries = null;
        if (accessor === 'tag')    activeTag    = null;
      } else {
        c.setAttribute('aria-pressed', 'true');
        if (accessor === 'group')  activeGroup  = val;
        if (accessor === 'series') activeSeries = val;
        if (accessor === 'tag')    activeTag    = val;
      }
      render();
    }));
  }
  bindChips(chipsGrp, 'group');
  bindChips(chipsSer, 'series');
  bindChips(chipsTag, 'tag');

  search.addEventListener('input', render);

  grid.addEventListener('click', e => {
    const card = e.target.closest('.part-card');
    if (card) openModal(+card.dataset.idx);
  });
  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const card = e.target.closest('.part-card');
      if (card) openModal(+card.dataset.idx);
    }
  });
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal' || e.target.classList.contains('close-btn')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  window._resetFilters = function () {
    activeGroup = activeSeries = activeTag = null;
    [...chipsGrp, ...chipsSer, ...chipsTag].forEach(c => c.setAttribute('aria-pressed', 'false'));
    search.value = '';
    render();
  };

  /* ----- Exploded diagram hotspots ----- */
  const svg = document.getElementById('exploded-svg');
  const list = document.getElementById('hotspot-list');
  if (svg && list) {
    HOTSPOTS.forEach(h => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'hotspot');
      g.setAttribute('data-id', h.id);

      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', h.x); c.setAttribute('cy', h.y); c.setAttribute('r', 13);
      c.setAttribute('fill', '#0b1117');
      c.setAttribute('stroke', '#ffc419');
      c.setAttribute('stroke-width', 2);
      c.setAttribute('class', 'hotspot-circle');

      const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      t.setAttribute('x', h.x); t.setAttribute('y', h.y + 4);
      t.setAttribute('text-anchor', 'middle');
      t.setAttribute('class', 'hotspot-label');
      t.setAttribute('fill', '#ffc419');
      t.textContent = h.id;

      g.appendChild(c); g.appendChild(t);
      svg.appendChild(g);

      g.addEventListener('click', () => activateHotspot(h.id));
    });

    list.innerHTML = HOTSPOTS.map(h => `
      <li data-id="${h.id}">
        <span class="num">${h.id}</span>
        <div>
          <strong>${h.name}</strong>
          <small>${h.group}</small>
          <p style="margin:6px 0 0;font-size:.88rem;color:var(--ink-soft);">${h.desc}</p>
        </div>
      </li>
    `).join('');

    list.addEventListener('click', e => {
      const li = e.target.closest('li');
      if (li) activateHotspot(+li.dataset.id);
    });

    function activateHotspot(id) {
      svg.querySelectorAll('.hotspot-circle').forEach(c => c.classList.remove('active'));
      list.querySelectorAll('li').forEach(li => li.classList.remove('active'));
      const g = svg.querySelector(`g[data-id="${id}"] .hotspot-circle`);
      const li = list.querySelector(`li[data-id="${id}"]`);
      if (g) g.classList.add('active');
      if (li) {
        li.classList.add('active');
        li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      // jump catalog to matching group
      const h = HOTSPOTS.find(x => x.id === id);
      if (h) {
        document.querySelectorAll('.chip[data-group]').forEach(c => {
          c.setAttribute('aria-pressed', c.dataset.group === h.group ? 'true' : 'false');
        });
        activeGroup = h.group;
        render();
      }
    }
  }

  render();

  /* ----- Honor ?pn=… URL parameter: pre-fill search and auto-open the
     matching part's modal. Lets external links deep-link to a part. */
  (function () {
    const params = new URLSearchParams(location.search);
    const pn = params.get('pn');
    if (!pn) return;
    const idx = PARTS.findIndex(p => p.pn === pn);
    if (idx >= 0) {
      // Open modal directly
      openModal(idx);
    } else {
      // No exact match — pre-fill the search box so user sees fuzzy matches
      search.value = pn;
      render();
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  })();
})();
