/* ============================================================
   PARTS DATABASE
   Compiled from publicly available Sumner Mfg. literature and
   distributor catalogs (Sumner Outlet, Toolup, EquipSupply,
   Energized Engines, Conklin Metal). Part numbers are quoted
   as listed by the source distributor and may vary by revision —
   always verify against the OEM operator's manual for the
   specific lift's serial range before ordering.
   ============================================================ */

const PARTS = [

  /* --- WINCH GROUP --- */
  {
    pn: "774206",
    name: "Replacement Cable, 1/8 in — GH-5T Winch",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400"],
    tags: ["wear", "cable", "safety"],
    desc: "OEM 1/8 in (3.2 mm) galvanized aircraft cable for the Sumner GH-5T worm-gear winch. Include the swaged stop and thimble. Replace at any sign of fraying, kinking, broken strands, or burn marks — never field-splice a lift cable.",
    fits: "Series 2000 (early), 2100 (early), 2400 with GH-5T winch",
    interval: "Inspect every shift; replace at any defect or every 5 yr."
  },
  {
    pn: "MX-WINCH-A",
    name: "Sumner MX Winch Assembly",
    group: "Winch & Cable",
    series: ["2000", "2100"],
    tags: ["wear"],
    desc: "Self-locking worm-gear hand-crank winch. Mounts to the lower-mast bracket via four bolts. The MX is a sealed unit — Sumner intends it to be replaced as an assembly, not field-rebuilt.",
    fits: "Most current Series 2000 and 2100 lifts (replaces older GH-5T)",
    interval: "Replace if brake will not hold rated load, or if gearbox grinds."
  },
  {
    pn: "WIN-RP-001",
    name: "Ratchet Pawl & Spring Kit",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear", "safety"],
    desc: "Spring-loaded pawl that engages the ratchet wheel inside the winch — your audible 'click' on raise. A weak or worn pawl is the #1 cause of a winch that drops the load when the operator releases the handle.",
    fits: "MX-style winches, all current production",
    interval: "Inspect annually; lubricate with light oil. Replace if click is faint or pawl shows wear."
  },
  {
    pn: "WIN-BD-002",
    name: "Brake Disc / Friction Pad",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer", "Roust-A-Bout"],
    tags: ["wear", "safety"],
    desc: "Asbestos-free fiber disc that holds the load when the operator stops cranking. Glazes with heat — light wear can be restored by sanding both faces; heavy scoring or oil contamination requires replacement.",
    fits: "All hand-crank Sumner lifts",
    interval: "Inspect annually; replace if pad <50% original thickness or contaminated."
  },
  {
    pn: "RAB-4SP-LINK",
    name: "4-Speed Selector Linkage",
    group: "Winch & Cable",
    series: ["Roust-A-Bout"],
    tags: [],
    desc: "Shifter rod and detent ball that selects ratios on the Roust-A-Bout's 4-speed load winch. Failure mode is a sloppy or bound shifter — usually the detent spring, not the linkage itself.",
    fits: "Roust-A-Bout R-150 / R-250 load winch only",
    interval: "Lubricate quarterly with white lithium grease."
  },

  /* --- MAST GROUP --- */
  {
    pn: "MAST-LWR-2118",
    name: "Lower Mast Section",
    group: "Mast Assembly",
    series: ["2100"],
    tags: [],
    desc: "Outer (largest cross-section) extruded aluminum mast section. The winch mount and lower cable sheave attach here. Replace only if the mast is visibly bent or has crushed sidewalls — a dent on the inside surface will bind the inner mast.",
    fits: "Series 2100 — Model 2118 specifically (heights vary)",
    interval: "Inspect for dents at every cable change."
  },
  {
    pn: "MAST-UPR-2118",
    name: "Upper Mast Section w/ Pulley Bracket",
    group: "Mast Assembly",
    series: ["2100"],
    tags: [],
    desc: "Inner extruded aluminum mast that carries the carriage and houses the upper cable sheave bracket. Comes with sheave hardware kit. The pulley guard and cable retainer are pre-installed.",
    fits: "Series 2100 — Model 2118",
    interval: "Replace if bent; verify slide pads ride true after install."
  },
  {
    pn: "PUL-SHV-150",
    name: "Cable Sheave (Pulley) — 1.5 in OD",
    group: "Mast Assembly",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear", "cable"],
    desc: "Top-of-mast cable sheave with sealed bearing. A grooved or seized sheave will rapidly destroy a brand-new cable. Spin it by hand — should rotate freely with no detectable play.",
    fits: "All single-cable Sumner lifts (verify groove dia. matches cable gauge)",
    interval: "Inspect every cable change; replace if groove edges sharp or bearing rough."
  },
  {
    pn: "MAST-SLP-204",
    name: "Mast Slide Pad Set (4)",
    group: "Mast Assembly",
    series: ["2000", "2100", "2400"],
    tags: ["wear"],
    desc: "Nylon (acetal) wear pads that ride between the inner and outer mast sections. As they wear, the inner mast develops side-play and the carriage starts to wobble at full extension.",
    fits: "Series 2000, 2100, 2400 (verify thickness for your model)",
    interval: "Inspect annually; replace if mast play exceeds 1/8 in side-to-side at full extension."
  },

  /* --- CARRIAGE / FORK GROUP --- */
  {
    pn: "CAR-2118",
    name: "Carriage Assembly",
    group: "Carriage & Forks",
    series: ["2100"],
    tags: [],
    desc: "Welded steel carriage that mounts the forks and rides the inner mast on four nylon rollers. Tool-free pin attachment to the cable terminal.",
    fits: "Series 2100 (interchangeable across 2112/2118/2124)",
    interval: "Inspect rollers and pin retainer at every cable change."
  },
  {
    pn: "CAR-RLR-04",
    name: "Carriage Roller (each)",
    group: "Carriage & Forks",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear"],
    desc: "Sealed-bearing nylon roller. Two pairs per carriage. A flat-spotted or seized roller causes the carriage to chatter and the cable to fray at the carriage attachment point.",
    fits: "Most current Sumner carriages",
    interval: "Inspect annually; replace as a set."
  },
  {
    pn: "FORK-REV-2100",
    name: "Reversible Fork Set",
    group: "Carriage & Forks",
    series: ["2000", "2100"],
    tags: [],
    desc: "Pair of formed-steel forks with pivot pin. Forks invert to lift either from the floor or from above the carriage (e.g., to set ductwork into a ceiling). Inspect tines for bending — never straighten cold.",
    fits: "Series 2000, 2100",
    interval: "Inspect for bend at every shift; rated capacity assumes straight tines."
  },
  {
    pn: "783691",
    name: "Carriage Fork Extension Kit",
    group: "Carriage & Forks",
    series: ["2000", "2100", "2400"],
    tags: [],
    desc: "Bolt-on accessory that extends fork length from 28 in to 42 in. Reduces effective lift capacity to 200 lb when extended — be sure your operator understands the de-rate.",
    fits: "Most Sumner contractor lifts (verify fork channel size)",
    interval: "Bolts: torque-check at 60-day intervals."
  },
  {
    pn: "FORK-PIN-A",
    name: "Reversible-Fork Pivot Pin & R-Clip",
    group: "Carriage & Forks",
    series: ["2000", "2100", "2400"],
    tags: ["wear"],
    desc: "Hardened steel pin that the fork rotates around when reversed. Cheap to replace, expensive to ignore: a worn pin lets the fork shift under load.",
    fits: "Series 2000, 2100, 2400",
    interval: "Inspect every shift; replace if pin shows visible wear at the contact face."
  },
  {
    pn: "TILT-DET-2300",
    name: "Tilt-Head Detent Pin Kit",
    group: "Carriage & Forks",
    series: ["2300"],
    tags: ["wear"],
    desc: "Spring-loaded pin that locks the tilting cradle at 0°, 30°, and 65° on the Series 2300. Failure mode is a head that won't lock flat — the spring weakens before the pin wears.",
    fits: "Series 2300 only",
    interval: "Lubricate quarterly; replace spring if cradle creeps under load."
  },
  {
    pn: "CRADLE-PAD",
    name: "Drywall Cradle Foam Pad Set",
    group: "Carriage & Forks",
    series: ["2300"],
    tags: ["wear"],
    desc: "Closed-cell foam pads that protect the back of a drywall sheet from the steel cradle. Inexpensive, often missing on used lifts.",
    fits: "Series 2300",
    interval: "Replace as needed — usually annually with regular use."
  },

  /* --- BASE & MOBILITY --- */
  {
    pn: "BASE-A-2118",
    name: "Base Frame Assembly",
    group: "Base & Mobility",
    series: ["2100"],
    tags: [],
    desc: "Welded steel base with caster mounts and outrigger sockets. Replacement is rare except after vehicle impact — most 'base' issues are actually caster or outrigger problems.",
    fits: "Series 2100 — Model 2118",
    interval: "Inspect after any tip-over or transport drop."
  },
  {
    pn: "CAST-5LK",
    name: "5 in Locking Caster",
    group: "Base & Mobility",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear"],
    desc: "Polyolefin tread, dual-locking (wheel + swivel). Standard on most contractor-class Sumner lifts. Order matched front/rear if you're replacing only one — uneven wheel diameters affect mast plumb.",
    fits: "Series 2000, 2100, 2400, Eventer",
    interval: "Lubricate axles annually; replace if tread is delaminated or bearing rough."
  },
  {
    pn: "CAST-8RB",
    name: "8 in Caster — Roust-A-Bout",
    group: "Base & Mobility",
    series: ["Roust-A-Bout"],
    tags: ["wear", "safety"],
    desc: "Heavy-duty 8 in caster rated for the R-150's loaded movement. Larger diameter rolls over conduit and door thresholds without lifting the load. Cast iron hub, sealed bearing.",
    fits: "Roust-A-Bout R-150 / R-250 only",
    interval: "Inspect at every PM; replace as a set if any one is rough."
  },
  {
    pn: "WHL-10RT",
    name: "10 in Rough-Terrain Wheel",
    group: "Base & Mobility",
    series: ["2100"],
    tags: [],
    desc: "Optional pneumatic 10 in tire that replaces the rear caster pair. Designed for unpaved jobsite use. Inflate to 30 psi cold.",
    fits: "Series 2100 — accessory option",
    interval: "Check pressure weekly."
  },
  {
    pn: "OUT-LEG-2118",
    name: "Stabilizer Outrigger Leg",
    group: "Base & Mobility",
    series: ["2100", "2000"],
    tags: ["safety"],
    desc: "Fold-out outrigger that triples the lift's footprint. The latch is the failure point — if the outrigger swings free in transport, both the latch and the spring need replacement.",
    fits: "Series 2100 (2118/2124 standard), Series 2000 (some)",
    interval: "Verify positive latch engagement before each shift."
  },
  {
    pn: "OUT-FOOT-A",
    name: "Outrigger Foot Pad (rubber)",
    group: "Base & Mobility",
    series: ["2000", "2100", "Eventer", "Roust-A-Bout"],
    tags: ["wear"],
    desc: "Replaceable rubber pad on the bottom of each outrigger leg. Concrete and rough decking destroy these quickly; missing pads will mark a finished floor.",
    fits: "Most outrigger-equipped Sumner lifts",
    interval: "Replace as needed."
  },

  /* --- HARDWARE & MISC --- */
  {
    pn: "HW-CBL-CLP",
    name: "Cable Anchor Clip & Thimble",
    group: "Hardware",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["safety", "cable"],
    desc: "Forged thimble + drop-forged Crosby-style clip used to terminate the lift cable at the carriage attachment. Field-installation requires a calibrated torque wrench — do not eyeball.",
    fits: "All single-cable Sumner lifts",
    interval: "Re-torque after first lift cycle on a new cable, then at every PM."
  },
  {
    pn: "HW-LBL-WARN",
    name: "Decal Set — Warning & Capacity",
    group: "Hardware",
    series: ["2000", "2100", "2300", "2400", "Eventer", "Roust-A-Bout"],
    tags: ["safety"],
    desc: "Replacement vinyl decals: rated capacity, pinch-point warnings, lift instructions, serial-plate overlay. OSHA-required to remain legible — unreadable decals can fail an inspection.",
    fits: "All series — order matched to model",
    interval: "Inspect annually; replace any decal that cannot be read at arm's length."
  },
  {
    pn: "OP-MAN-GEN",
    name: "Operator's Manual (per series)",
    group: "Hardware",
    series: ["2000", "2100", "2300", "2400", "Eventer", "Roust-A-Bout"],
    tags: ["safety"],
    desc: "OEM operator's manual specific to your series and serial range. Should live with the lift at all times. Free PDFs are available from Sumner; printed copies can be requested from the manufacturer.",
    fits: "All series",
    interval: "Replace if missing, illegible, or if the lift was retrofitted with an updated assembly."
  }
];

/* Hotspot definitions for the exploded interactive diagram.
   Each hotspot maps an SVG location to a part group. */
const HOTSPOTS = [
  { id: 1, x: 190, y: 60,  group: "Mast Assembly",     name: "Cable Sheave / Pulley", desc: "Top-of-mast pulley with sealed bearing. Routes the lift cable from the winch to the carriage." },
  { id: 2, x: 220, y: 145, group: "Carriage & Forks",  name: "Reversible Fork Set",   desc: "Pair of forks that invert for above-carriage or below-carriage loads." },
  { id: 3, x: 130, y: 180, group: "Carriage & Forks",  name: "Carriage Assembly",     desc: "Rides the inner mast on four nylon rollers; pinned to the cable terminal." },
  { id: 4, x: 240, y: 305, group: "Winch & Cable",     name: "Hand-Crank Winch",      desc: "Self-locking worm-gear winch — raises, holds, and lowers the load." },
  { id: 5, x: 110, y: 295, group: "Mast Assembly",     name: "Mast Slide Pads",       desc: "Nylon pads between mast sections — wear here causes carriage wobble." },
  { id: 6, x: 60,  y: 370, group: "Base & Mobility",   name: "Outrigger Leg",         desc: "Folds out to triple the footprint. Inspect latch every shift." },
  { id: 7, x: 30,  y: 395, group: "Base & Mobility",   name: "5 in Locking Caster",   desc: "Dual-lock (wheel + swivel). Order matched pairs to keep the mast plumb." },
  { id: 8, x: 295, y: 395, group: "Base & Mobility",   name: "Outrigger Foot Pad",    desc: "Replaceable rubber pad — protects floors and grips concrete." },
  { id: 9, x: 175, y: 145, group: "Hardware",          name: "Cable Anchor Clip",     desc: "Drop-forged clip + thimble terminating the cable at the carriage." }
];
