/* Interactive troubleshooting decision tree */
const TREE = {
  start: {
    q: "What's the lift doing wrong?",
    options: [
      { label: "Won't lift / cable won't move",      next: "wont_lift" },
      { label: "Drops or drifts when released",      next: "drops" },
      { label: "Mast won't extend smoothly",         next: "mast_bind" },
      { label: "Carriage chatters or wobbles",       next: "chatter" },
      { label: "Cable is damaged",                   next: "cable_damage" },
      { label: "Lift won't roll properly",           next: "roll" }
    ]
  },

  /* --- WON'T LIFT --- */
  wont_lift: {
    q: "Is the winch handle turning at all?",
    options: [
      { label: "Yes, but cable doesn't move", next: "winch_spinning" },
      { label: "No, handle is locked solid",  next: "handle_locked" }
    ]
  },
  winch_spinning: {
    q: "Inspect the cable spool. Is the cable still attached to the drum?",
    options: [
      { label: "Yes, spooling normally", next: "winch_internal" },
      { label: "No — cable detached or unspooled", next: "cable_off_drum" }
    ]
  },
  winch_internal: {
    terminal: true,
    title: "Likely cause: internal winch failure",
    body: "If the handle turns and the cable is on the drum but nothing moves, the worm gear or drive shaft inside the winch has failed. The current-production MX winch (PN 783590) is intended to be replaced as a sealed assembly; legacy GH-5T units (PN 785912) may be field-rebuildable. See Procedure 06 for the swap.",
    link: { href: "repairs.html", text: "Open Procedure 02 →" }
  },
  cable_off_drum: {
    terminal: true,
    title: "Cable has come off the drum",
    body: "Sumner specifies a per-series minimum number of cable wraps on the drum at full carriage extension — 4 for Series 2100, 3 for Series 2400; confirm against the operator's manual for your model. If you're below the spec'd minimum and the cable has come free, do not return the lift to service. Re-spool the cable per Procedure 01 step 7, and inspect for damage to the cable terminus on the drum.",
    link: { href: "repairs.html", text: "Open Procedure 01 →" }
  },
  handle_locked: {
    q: "Has the lift been outdoors or in a wet environment?",
    options: [
      { label: "Yes — could be corrosion",  next: "winch_corrosion" },
      { label: "No — recently serviced",    next: "winch_misassembled" },
      { label: "No — neither",              next: "winch_internal" }
    ]
  },
  winch_corrosion: {
    terminal: true,
    title: "Likely cause: corrosion in the winch",
    body: "Outdoor exposure can rust the worm gear or seize the brake assembly. Light penetrating oil, then a slow exercise cycle, will free a lightly corroded winch. Heavy corrosion = replace the winch assembly. After freeing, perform Procedure 02 to verify pawl and brake function.",
    link: { href: "repairs.html", text: "Open Procedure 02 →" }
  },
  winch_misassembled: {
    terminal: true,
    title: "Check ratchet wheel orientation",
    body: "If the lift was serviced recently and the handle is now locked, the most common cause is a ratchet wheel installed backwards. Re-do the relevant steps in Procedure 02 — the engagement faces of the ratchet teeth must point in the direction shown in the operator's manual.",
    link: { href: "repairs.html", text: "Open Procedure 02 →" }
  },

  /* --- DROPS --- */
  drops: {
    q: "When does the load drop?",
    options: [
      { label: "Immediately when handle released", next: "drops_immediate" },
      { label: "Slowly drifts over minutes",       next: "drops_drift" },
      { label: "Only after recent service",        next: "winch_misassembled" }
    ]
  },
  drops_immediate: {
    terminal: true,
    title: "Likely cause: ratchet pawl failure",
    body: "Immediate release usually means the pawl is not engaging the ratchet wheel. Listen for the characteristic 'click' as you raise — if it's faint or absent, replace the pawl and spring (sub-component of the OEM winch rebuild kit on legacy GH-5T units; sealed-assembly replacement on current MX winches). If ratchet teeth are damaged, replace the full pawl assembly. Critical: do not return the lift to service until the brake holds rated load.",
    link: { href: "repairs.html", text: "Open Procedure 02 →" }
  },
  drops_drift: {
    terminal: true,
    title: "Likely cause: glazed brake disc",
    body: "Slow drift = brake disc is glazed or contaminated with oil. Per Sumner's manual, light glazing can be restored by sanding both faces of the pad to remove the shiny spots. Heavy glaze, scoring, or any oil/grease contamination = replace the disc (sub-component of the OEM winch rebuild kit on rebuildable units; sealed-assembly replacement on current MX). Test at 100% rated load for 5 minutes after service — verify no detectable drift.",
    link: { href: "repairs.html", text: "Open Procedure 02 →" }
  },

  /* --- MAST BIND --- */
  mast_bind: {
    q: "When does the bind occur?",
    options: [
      { label: "Throughout the travel",          next: "mast_bent" },
      { label: "Only at the joint between sections", next: "mast_pads" },
      { label: "Only after a transport / drop",  next: "mast_bent" }
    ]
  },
  mast_bent: {
    terminal: true,
    title: "Likely cause: bent mast or damaged sidewall",
    body: "Sight along the mast — if you can see any deflection, or if there's an internal dent, the mast section is compromised and must be replaced. Never attempt to straighten an extruded aluminum mast cold; the metallurgy is permanently affected by any plastic deformation.",
    link: { href: "models.html", text: "Find the right mast section →" }
  },
  mast_pads: {
    terminal: true,
    title: "Likely cause: worn slide pads",
    body: "Bind that's localized to the joint between mast sections is almost always a worn or damaged nylon slide pad. Procedure 04 covers full replacement. Always replace as a complete set — uneven pad wear causes mast plumb to drift. Verify OEM part number for your specific model with B&B SUMNER customer service.",
    link: { href: "repairs.html", text: "Open Procedure 04 →" }
  },

  /* --- CHATTER --- */
  chatter: {
    q: "Where is the chatter coming from?",
    options: [
      { label: "Carriage area as it travels",         next: "chatter_rollers" },
      { label: "Top of mast — could be the pulley",   next: "sheave" },
      { label: "Mast moves laterally at full extend", next: "mast_pads" }
    ]
  },
  chatter_rollers: {
    terminal: true,
    title: "Likely cause: worn carriage rollers",
    body: "A flat-spotted or seized roller chatters as the carriage travels and accelerates cable wear. Procedure 05 covers replacement. Always replace as a set of four — even if only one is bad — so the carriage rides true.",
    link: { href: "repairs.html", text: "Open Procedure 05 →" }
  },
  sheave: {
    terminal: true,
    title: "Likely cause: sheave bearing or groove",
    body: "Spin the sheave by hand. Roughness, wobble, or detectable play = replace the sheave. Match the new sheave's groove diameter to your cable gauge. A grooved or sharp-edged sheave will fray a brand-new cable in days, so always inspect the cable when replacing the sheave.",
    link: { href: "repairs.html", text: "Open Procedure 03 →" }
  },

  /* --- CABLE DAMAGE --- */
  cable_damage: {
    q: "What kind of damage?",
    options: [
      { label: "Frayed strands or broken wires",     next: "cable_replace" },
      { label: "Kinked",                             next: "cable_replace" },
      { label: "Burn marks (arc strike)",            next: "cable_replace" },
      { label: "Wear concentrated at one point",     next: "cable_localized" }
    ]
  },
  cable_replace: {
    terminal: true,
    title: "Replace the cable immediately",
    body: "Per Sumner's published guidance: a cable with frays, cuts, kinks, or burns must not be used. Procedure 01 covers full replacement (PN 774206 for GH-5T-style winches; verify cable diameter for your model). Never attempt to splice or re-form a damaged cable.",
    link: { href: "repairs.html", text: "Open Procedure 01 →" }
  },
  cable_localized: {
    terminal: true,
    title: "Wear concentrated = sheave or guide problem",
    body: "If the cable is wearing in just one spot, something is mechanically attacking it. Most often: a grooved sheave (Procedure 03) or a misaligned cable guide. Replace both the cable and the offending part — installing a new cable on a worn sheave will destroy the new cable in a matter of days.",
    link: { href: "repairs.html", text: "Open Procedure 03 →" }
  },

  /* --- ROLL --- */
  roll: {
    q: "What's the rolling problem?",
    options: [
      { label: "One caster won't swivel",       next: "caster_seized" },
      { label: "Caster wobbles / makes noise",  next: "caster_bearing" },
      { label: "Lift drifts when locked",       next: "caster_lock" }
    ]
  },
  caster_seized: {
    terminal: true,
    title: "Likely cause: corroded caster swivel bearing",
    body: "Replace the caster — 5 in lockable polyurethane on the contractor lifts (Series 2000/2100/2400/Eventer); 8 in heavy-duty on the Roust-A-Bout. Order in matched pairs — uneven caster heights tilt the mast off plumb, which the operator will feel as a heavy crank.",
    link: { href: "parts.html", text: "Find casters in the catalog →" }
  },
  caster_bearing: {
    terminal: true,
    title: "Caster wheel bearing failure",
    body: "Lubricate the axle annually with white lithium grease. If the noise persists or the wheel has visible play, replace the caster as a unit. On Roust-A-Bout 8-inch casters, the bearing is sealed and replacement is by complete caster assembly only.",
    link: { href: "parts.html", text: "Find casters in the catalog →" }
  },
  caster_lock: {
    terminal: true,
    title: "Caster lock mechanism failure",
    body: "Sumner casters are dual-locking — wheel + swivel. If a lock won't engage, the spring or the lock pawl in that caster is worn. Replace the caster; field-rebuilding the lock is not practical and most distributors stock the complete assembly.",
    link: { href: "parts.html", text: "Find casters in the catalog →" }
  }
};

(function () {
  let trail = [];
  const flowEl = document.getElementById('flow');
  const trailEl = document.getElementById('trail');
  const resetBtn = document.getElementById('reset');

  function render(nodeKey, label) {
    const node = TREE[nodeKey];
    if (!node) return;
    if (label) trail.push(label);

    flowEl.innerHTML = '';
    if (node.terminal) {
      flowEl.innerHTML = `
        <div class="flow-node terminal active">
          <div style="font-family:var(--mono);font-size:.78rem;letter-spacing:.12em;color:var(--signal-green);text-transform:uppercase;margin-bottom:6px;">DIAGNOSIS</div>
          <h3>${node.title}</h3>
          <p>${node.body}</p>
          ${node.link ? `<a class="btn btn--accent" href="${node.link.href}">${node.link.text}</a>` : ''}
          <div style="margin-top:16px;">
            <button class="reset-btn" onclick="window._restartFlow()">↺ Diagnose another problem</button>
          </div>
        </div>`;
    } else {
      flowEl.innerHTML = `
        <div class="flow-node active">
          <h3>${node.q}</h3>
          <div class="options">
            ${node.options.map((o, i) => `<button data-next="${o.next}" data-label="${o.label.replace(/"/g, '&quot;')}">${o.label}</button>`).join('')}
          </div>
        </div>`;
      flowEl.querySelectorAll('button[data-next]').forEach(b => {
        b.addEventListener('click', () => render(b.dataset.next, b.dataset.label));
      });
    }
    renderTrail();
  }

  function renderTrail() {
    if (!trail.length) {
      trailEl.innerHTML = '';
    } else {
      trailEl.innerHTML = 'Path: ' + trail.map(t => `<span>${t}</span>`).join(' → ');
    }
  }

  window._restartFlow = function () {
    trail = [];
    render('start');
  };
  resetBtn.addEventListener('click', window._restartFlow);
  render('start');
})();
