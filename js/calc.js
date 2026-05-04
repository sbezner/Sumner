/* Capacity de-rate calculator */
(function () {
  const $ = id => document.getElementById(id);

  // Series rated capacities (lb)
  const RATED = {
    "2010": 650, "2015": 650, "2020": 800, "2025": 1000,
    "2112": 650, "2118": 650, "2124": 650,
    "2300": 150,
    "2412": 450, "2416": 450,
    "Eventer 20": 500, "Eventer 25": 800,
    "R-150": 1500, "R-250": 1500
  };

  function update() {
    const model = $('cf-model').value;
    const rated = RATED[model] || 650;
    const forks = $('cf-forks').value;
    const offset = +$('cf-offset').value;
    const slope = +$('cf-slope').value;
    const outriggers = $('cf-outriggers').value;
    const wind = $('cf-wind').value;
    const ext = +$('cf-ext').value;

    $('cf-offset-out').value = offset + ' in';
    $('cf-slope-out').value = slope + '°';
    $('cf-ext-out').value = ext + '%';

    let factor = 1.0;
    let notes = [];

    // Fork extension de-rate (per Sumner: 200 lb max with extension kit installed)
    if (forks === 'extended') {
      // cap output at 200 lb regardless of model
      factor = Math.min(factor, 200 / rated);
      notes.push("Fork extension kit installed → capacity capped at 200 lb (per Sumner spec for PN 783691).");
    }

    // Off-center load — engineering rule of thumb: every inch of off-center reduces capacity proportionally
    if (offset > 0) {
      const off = Math.max(0.4, 1 - (offset / 18));  // 18 inch off-center ≈ 0% capacity
      factor *= off;
      notes.push("Off-center load increases tipping moment and reduces stability margin.");
    }

    // Slope — capacity falls off rapidly with slope; 3° already = 25% loss
    if (slope > 0) {
      const sf = Math.max(0.25, 1 - (slope / 12));
      factor *= sf;
      notes.push("Slope reduces effective capacity by introducing horizontal load components.");
    }

    // Outriggers
    if (outriggers === 'no') {
      factor *= 0.4;
      notes.push("Outriggers NOT deployed: rated capacity assumes outriggers extended and latched.");
    }

    // Wind
    if (wind === 'breeze') {
      factor *= 0.7;
      notes.push("Light wind: lateral force on extended mast and load reduces stability margin.");
    } else if (wind === 'windy') {
      factor *= 0.4;
      notes.push("Strong wind: outdoor operation in wind is hazardous — Sumner recommends not operating in wind.");
    }

    // Mast extension — at full extension, dynamic effects + slide-pad slop reduce safe load
    if (ext > 0) {
      const ef = 1 - (ext / 100) * 0.10;  // up to 10% reduction at full extension
      factor *= ef;
    }

    factor = Math.max(0, Math.min(1, factor));
    const safeLoad = Math.round(rated * factor);

    $('cf-rated').textContent = rated + ' lb';
    $('cf-safe').textContent = safeLoad + ' lb';
    $('cf-pct').textContent = Math.round(factor * 100) + '%';

    const fillEl = $('cf-fill');
    fillEl.style.width = Math.round(factor * 100) + '%';

    // Verdict
    const v = $('cf-verdict');
    v.classList.remove('ok','warn','bad');
    if (factor >= 0.85)       { v.classList.add('ok');   v.textContent = "✓ Within design margin"; }
    else if (factor >= 0.55)  { v.classList.add('warn'); v.textContent = "⚠ Reduced — verify load"; }
    else                      { v.classList.add('bad');  v.textContent = "✕ Hazardous — adjust setup"; }

    const list = $('cf-notes');
    if (!notes.length) {
      list.innerHTML = '<li style="color:var(--steel-500);">All factors at nominal — full rated capacity.</li>';
    } else {
      list.innerHTML = notes.map(n => '<li>' + n + '</li>').join('');
    }
  }

  document.querySelectorAll('#calc-form input, #calc-form select').forEach(el => {
    el.addEventListener('input', update);
    el.addEventListener('change', update);
  });
  update();
})();
