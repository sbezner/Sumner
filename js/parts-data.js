/* ============================================================
   PARTS DATABASE
   Compiled from publicly available Sumner Mfg. and B&B Sumner
   literature plus distributor catalogs (Sumner Outlet, Toolup,
   EquipSupply, Energized Engines, Conklin Metal, Airgas).
   Part numbers are quoted as listed by the source distributor
   and may vary by revision — always verify against the OEM
   operator's manual for the lift's serial range before ordering.
   ============================================================ */

const PARTS = [

  /* --- WINCH GROUP --- */
  {
    pn: "774206",
    name: "Replacement Cable, 1/8 in — GH-5T Winch",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400"],
    tags: ["wear", "cable", "safety"],
    desc: "OEM 1/8 in (3.2 mm) galvanized aircraft cable for the Sumner GH-5T worm-gear winch. Includes the swaged stop and thimble. Replace at any sign of fraying, kinking, broken strands, or burn marks — never field-splice a lift cable.",
    fits: "Series 2000 (early), 2100 (early), 2400 with GH-5T winch",
    interval: "Inspect every shift; replace at any defect or every 5 yr."
  },
  {
    pn: "774207",
    name: "Replacement Cable, 5/32 in — Heavy-Duty",
    group: "Winch & Cable",
    series: ["2000", "Eventer"],
    tags: ["wear", "cable", "safety"],
    desc: "Heavier 5/32 in (4 mm) galvanized aircraft cable used on the 800–1,000 lb capacity Sumner lifts (2025, Eventer 25). Visually similar to the 1/8 in cable — always confirm gauge with calipers before ordering.",
    fits: "2025, Eventer 25 (verify by serial range)",
    interval: "Inspect every shift; replace at any defect or every 5 yr."
  },
  {
    pn: "RAB-CBL-LD",
    name: "Replacement Cable — Roust-A-Bout Load Winch",
    group: "Winch & Cable",
    series: ["Roust-A-Bout"],
    tags: ["wear", "cable", "safety"],
    desc: "Heavy-gauge cable for the Roust-A-Bout R-150 / R-250 load winch. Sized for 1,500 lb working load with appropriate factor of safety. Length differs between R-150 (15 ft) and R-250 (25 ft) — order by lift model.",
    fits: "Roust-A-Bout R-150 / R-250",
    interval: "Inspect every shift; replace at any defect."
  },
  {
    pn: "RAB-CBL-MS",
    name: "Replacement Cable — Roust-A-Bout Mast Winch",
    group: "Winch & Cable",
    series: ["Roust-A-Bout"],
    tags: ["wear", "cable", "safety"],
    desc: "Mast-extension cable for the Roust-A-Bout. Operates the second (mast) winch independently of the load cable. Inspect at the same interval as the load cable; both cables share the lift's safety budget.",
    fits: "Roust-A-Bout R-150 / R-250",
    interval: "Inspect every shift; replace at any defect."
  },
  {
    pn: "MX-WINCH-A",
    name: "Sumner MX Winch Assembly",
    group: "Winch & Cable",
    series: ["2000", "2100"],
    tags: ["wear"],
    desc: "Self-locking worm-gear hand-crank winch. Mounts to the lower-mast bracket via four bolts. The MX is a sealed unit — Sumner intends it to be replaced as an assembly, not field-rebuilt. Replaces the older GH-5T on most current production.",
    fits: "Most current Series 2000 and 2100 lifts",
    interval: "Replace if brake will not hold rated load, or if gearbox grinds."
  },
  {
    pn: "GH-5T-A",
    name: "GH-5T Legacy Winch Assembly",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400"],
    tags: ["wear"],
    desc: "Older-generation 1,000 lb hand-crank winch found on pre-2010 Sumner lifts. Identifiable by the cast aluminum housing and 1/8 in cable. Backward-compatible mounting on most lower-mast brackets — confirm bolt pattern before swapping.",
    fits: "Pre-2010 Series 2000, 2100, 2400 (verify by mount pattern)",
    interval: "Replace if brake will not hold or if cable spool wobbles."
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
    pn: "WIN-RW-A",
    name: "Ratchet Wheel",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["safety"],
    desc: "Toothed steel wheel engaged by the pawl. Directional — the engagement faces of the teeth must point in the direction shown in the operator's manual. Reversed installation will free-spool under load.",
    fits: "MX winch internal — orderable as service part",
    interval: "Replace if any teeth chipped, rounded, or if pawl will not click."
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
    pn: "WIN-HND-A",
    name: "Crank Handle Assembly",
    group: "Winch & Cable",
    series: ["2000", "2100", "2300", "2400", "Eventer"],
    tags: [],
    desc: "Removable hand crank with knurled grip. Stows on the lower mast bracket when not in use. Bent or broken handles are common after the lift tips during transport.",
    fits: "All hand-crank Sumner lifts (verify shaft diameter)",
    interval: "Replace if bent or grip is loose."
  },
  {
    pn: "WIN-HND-2SP",
    name: "Two-Speed Crank Handle — Series 2300",
    group: "Winch & Cable",
    series: ["2300"],
    tags: [],
    desc: "Two-speed shifter-equipped crank for the Series 2300 drywall lift. Low gear for lifting, high gear for fast travel without load. The shifter detent ball is the most common failure point.",
    fits: "Series 2300 only",
    interval: "Replace handle if shifter feels sloppy or won't hold a gear."
  },
  {
    pn: "RAB-4SP-LINK",
    name: "4-Speed Selector Linkage — Roust-A-Bout",
    group: "Winch & Cable",
    series: ["Roust-A-Bout"],
    tags: [],
    desc: "Shifter rod and detent ball that selects ratios on the Roust-A-Bout's 4-speed load winch. Failure mode is a sloppy or bound shifter — usually the detent spring, not the linkage itself.",
    fits: "Roust-A-Bout R-150 / R-250 load winch only",
    interval: "Lubricate quarterly with white lithium grease."
  },
  {
    pn: "WIN-DRM-A",
    name: "Cable Drum",
    group: "Winch & Cable",
    series: ["2000", "2100"],
    tags: ["safety"],
    desc: "Grooved steel drum onto which the cable winds. Replacement is rare — usually only after a drum is bent from a side-load impact, or when the cable termination point on the drum has worn open.",
    fits: "MX winches, factory replacement",
    interval: "Inspect at every cable change for groove damage."
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
    pn: "MAST-MID-2025",
    name: "Middle Mast Section — 3-Stage 2025/Eventer 25",
    group: "Mast Assembly",
    series: ["2000", "Eventer"],
    tags: [],
    desc: "The intermediate mast extrusion on three-stage lifts (Series 2025, Eventer 25, Roust-A-Bout R-250). Same care as upper and lower sections — never straighten cold; replace if bent.",
    fits: "3-stage Series 2000, Eventer 25, Roust-A-Bout R-250",
    interval: "Inspect annually."
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
    pn: "PUL-SHV-200",
    name: "Cable Sheave (Pulley) — 2 in OD, Roust-A-Bout",
    group: "Mast Assembly",
    series: ["Roust-A-Bout"],
    tags: ["wear", "cable"],
    desc: "Larger-diameter sheave for the Roust-A-Bout's heavier cable. Two per mast (one per cable). Match groove diameter to cable gauge — mismatched groove will deform a new cable in days.",
    fits: "Roust-A-Bout R-150 / R-250",
    interval: "Inspect every cable change."
  },
  {
    pn: "PUL-GRD-A",
    name: "Pulley Guard / Cable Retainer",
    group: "Mast Assembly",
    series: ["2000", "2100"],
    tags: ["safety"],
    desc: "Sheet-steel cover that captures the cable in the sheave groove and prevents jump-out under shock load. Inexpensive — replace any time it's bent, missing, or its mounting hardware is loose.",
    fits: "Series 2000, 2100",
    interval: "Verify present and properly captured at every shift."
  },
  {
    pn: "PUL-GRD-360",
    name: "360° Cable Head Guard — Series 2400",
    group: "Mast Assembly",
    series: ["2400"],
    tags: ["safety"],
    desc: "Formed-steel ring at the top of the 2400's mast that protects the cable on all four sides from snagging on rafters, conduit, or duct corners. The defining feature of the Series 2400.",
    fits: "Series 2400 only",
    interval: "Inspect alignment quarterly; bent guards must be replaced (can't be straightened without distorting the cable path)."
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
  {
    pn: "MAST-SLP-RAB",
    name: "Mast Slide Pad Set — Roust-A-Bout",
    group: "Mast Assembly",
    series: ["Roust-A-Bout"],
    tags: ["wear"],
    desc: "Heavier-duty slide pads sized for the Roust-A-Bout's twin parallel masts. Eight pads per lift (four per mast). Replace as a complete set to keep both masts elevating in sync.",
    fits: "Roust-A-Bout R-150 / R-250",
    interval: "Replace if either mast lags the other during extension."
  },
  {
    pn: "MAST-CAP",
    name: "Mast Top Cap",
    group: "Mast Assembly",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: [],
    desc: "Cast plastic cap that seals the top of the inner mast against rain ingress. Often missing on used lifts; water inside the mast accelerates slide-pad wear and pulley bearing failure.",
    fits: "Most Sumner contractor lifts",
    interval: "Replace if missing, cracked, or no longer seating."
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
    pn: "CAR-RAB",
    name: "Crossbeam Carriage — Roust-A-Bout",
    group: "Carriage & Forks",
    series: ["Roust-A-Bout"],
    tags: [],
    desc: "Heavy-walled steel crossbeam that spans the Roust-A-Bout's twin masts. Eight rollers (four per side) maintain alignment between the two masts. Replacement is rare — usually a result of side-load impact or weld failure.",
    fits: "Roust-A-Bout R-150 / R-250",
    interval: "Inspect weldments annually; verify rollers all spin freely."
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
    pn: "FORK-REV-2400",
    name: "Reversible Fork Set — Compact",
    group: "Carriage & Forks",
    series: ["2400"],
    tags: [],
    desc: "Shorter fork pair sized for the Series 2400's compact carriage. Visually similar to the 2100 forks but the pivot-pin spacing is different — not interchangeable.",
    fits: "Series 2400 only",
    interval: "Inspect for bend at every shift."
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
  {
    pn: "EVT-TRUSS-AD",
    name: "Truss Adapter — Eventer",
    group: "Carriage & Forks",
    series: ["Eventer"],
    tags: [],
    desc: "Black-anodized adapter that mounts in place of the standard forks to grip square aluminum truss (12 in / 305 mm typical). Includes safety pin and capture hook. Required for any line-array work.",
    fits: "Eventer 20 / Eventer 25",
    interval: "Inspect pin and hook before every show."
  },
  {
    pn: "EVT-PIN-STP",
    name: "Pin-Stop Kit — Eventer",
    group: "Carriage & Forks",
    series: ["Eventer"],
    tags: ["safety"],
    desc: "Mechanical pin stops that drop into the mast at fixed heights, providing a positive mechanical backup to the winch brake. Not a replacement for the brake — a redundant safety system for AV use.",
    fits: "Eventer 20 / Eventer 25",
    interval: "Verify pins drop fully home before placing a permanent load."
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
    pn: "CAST-4LT",
    name: "4 in Lightweight Caster — Series 2300",
    group: "Base & Mobility",
    series: ["2300"],
    tags: ["wear"],
    desc: "Smaller caster sized for the Series 2300's 99 lb body. Single-lock (wheel only). Plastic hub, shielded bearing — cheaper to replace as an assembly than rebuild.",
    fits: "Series 2300",
    interval: "Replace if rough or won't lock."
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
    pn: "OUT-LATCH-A",
    name: "Outrigger Latch & Spring Kit",
    group: "Base & Mobility",
    series: ["2000", "2100", "Eventer"],
    tags: ["wear", "safety"],
    desc: "The cam-and-spring assembly that locks the outrigger leg in the deployed position. Single most common outrigger failure — leg goes loose, lift becomes top-heavy. Cheap kit, big consequences.",
    fits: "Most outrigger-equipped Sumner lifts",
    interval: "Replace at any sign of weakness or if leg moves while latched."
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
    pn: "HW-SWAGE",
    name: "Swage-Stop Sleeve",
    group: "Hardware",
    series: ["2000", "2100", "2400"],
    tags: ["safety", "cable"],
    desc: "Copper or zinc-plated steel sleeve crimped onto the cable at the winch-drum end. Acts as a positive stop preventing the cable from pulling free of the drum. Single-use — do not re-form a swage.",
    fits: "Most single-cable Sumner lifts (verify cable gauge)",
    interval: "Replace at every cable change."
  },
  {
    pn: "HW-BLT-KIT",
    name: "Lift Hardware Kit (Bolts, Nuts, Washers)",
    group: "Hardware",
    series: ["2000", "2100", "2400"],
    tags: [],
    desc: "Bag of replacement Grade 5 hardware: 3/8-16 carriage roller bolts, 1/4-20 winch mount bolts, lock washers, nylock nuts. The full set of fasteners for one carriage + winch service.",
    fits: "Most contractor-class Sumner lifts",
    interval: "Stock for any bench rebuild."
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
    pn: "HW-LBL-MAINT",
    name: "Maintenance Record Decal",
    group: "Hardware",
    series: ["2000", "2100", "2300", "2400", "Eventer", "Roust-A-Bout"],
    tags: ["safety"],
    desc: "Printable / writeable vinyl decal applied to the lower mast or base, where the technician records cable changes, inspection dates, and initials. Part of the safety system — no usable record means no documented service history.",
    fits: "All series",
    interval: "Replace when full or unreadable."
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
  },
  {
    pn: "TOOL-CBL-CUT",
    name: "Wire-Rope Cutter",
    group: "Hardware",
    series: ["2000", "2100", "2300", "2400", "Eventer", "Roust-A-Bout"],
    tags: [],
    desc: "Hardened-jaw cutter sized for 1/8 in to 5/32 in aircraft cable. Bolt cutters and side cutters will mash the cable strands and produce a frayed end that won't feed cleanly through internal mast routing — use the right tool.",
    fits: "Service-bench tool",
    interval: "Lifetime tool; sharpen or replace cutting edges as needed."
  },
  {
    pn: "TOOL-SWAGE",
    name: "Hand Swage Tool",
    group: "Hardware",
    series: ["2000", "2100", "2400"],
    tags: [],
    desc: "Manual cable swager for forming the stop sleeve at the winch-drum end. Field-formed swages are stronger than the original cable — when done correctly. Practice on scrap cable first.",
    fits: "Service-bench tool",
    interval: "Calibrate against a go/no-go gauge yearly."
  }
];

/* Hotspot definitions for the exploded interactive diagram. */
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

/* Make available globally for site-wide search */
window.PARTS = PARTS;
window.HOTSPOTS = HOTSPOTS;
