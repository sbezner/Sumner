/* ============================================================
   SUMNER PARTS DATABASE — 2026.05 EDITION
   ------------------------------------------------------------
   Compiled from Sumner Manufacturing / B&B SUMNER published
   literature and verified distributor catalogs:
     - Sumner.com product pages and exploded-diagram PDFs
     - Series 2000 / 2100 / 2300 / 2400 operator's manuals
     - Sumner Outlet, Acme Tools, Toolup, Airgas SKU listings
     - Energized Engines parts manuals & rebuild kits
     - Southwire (current Sumner distribution partner)

   Part numbers labeled "OEM" are documented Sumner / Southwire
   SKUs from those sources. Numbers labeled "ref" (e.g.
   "ref:CAR-RLR") are organizational identifiers used by this
   manual when a verifiable OEM number could not be confirmed —
   always cross-check against a current Sumner parts manual or
   call B&B SUMNER customer service before ordering.
   ============================================================ */

const PARTS = [

  /* ============================================================
     WINCH GROUP — Sumner-built winch family
     Two generations are documented in the field:
       - GH-5T worm-drive winch (legacy; PN 785912; 1/8" cable)
       - MX winch (current; PN 783590; 7/32" cable, 2118 et al.)
     Confirm your unit's winch type before ordering parts —
     part numbers are NOT interchangeable between generations.
     ============================================================ */
  {
    pn: "785912",
    name: "GH-5T Worm-Drive Hand Winch (OEM, legacy)",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear", "safety"],
    desc: "Legacy Sumner-built worm-drive hand winch found on older 2000/2100/2400-series and Eventer lifts. Pairs with the 1/8 in cable (PN 774206). If your lift uses a 1/8 in cable, this is your winch — newer units are upgraded to the MX winch (PN 783590) with a 7/32 in cable. Sumner sells this as a complete worm-winch service replacement.",
    fits: "Pre-MX-update Sumner material lifts (verify cable gauge — 1/8 in confirms GH-5T)",
    interval: "Replace as a complete assembly if brake will not hold rated load."
  },
  {
    pn: "774206",
    name: "Cable, 1/8 in — for GH-5T Winch (OEM)",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear", "cable", "safety"],
    desc: "Sumner's 1/8 in (3.2 mm) galvanized aircraft replacement cable specific to the GH-5T winch. Use ONLY on lifts equipped with the legacy GH-5T worm-drive winch (PN 785912). Lifts with the newer MX winch (PN 783590) use a 7/32 in cable — confirm gauge with calipers before ordering.",
    fits: "Sumner GH-5T winch ONLY",
    interval: "Inspect every shift; replace at any defect."
  },
  {
    pn: "783590",
    name: "MX Winch Assembly (OEM, current)",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear", "safety"],
    desc: "Current-production Sumner-built single-speed self-locking worm-gear hand-crank winch. Identifiable by its idler roller that feeds the 7/32 in cable evenly onto the drum. Standard on the Series 2118 per the 2100 parts manual; verify your specific lift before ordering.",
    fits: "Current-production Sumner lifts equipped with 7/32 in cable",
    interval: "Replace as a complete assembly if brake will not hold rated load, gearbox grinds, or housing is cracked."
  },
  {
    pn: "783757",
    name: "MX Winch Handle Assembly (OEM)",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: [],
    desc: "Single-speed removable crank handle for the MX winch. Stows on the lower-mast bracket when not in use. Replace if bent or if the grip is loose on the shaft.",
    fits: "MX winch (PN 783590) — single-speed",
    interval: "Replace if bent or grip is loose."
  },
  {
    pn: "783759",
    name: "MX Winch Two-Speed Handle (OEM)",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: [],
    desc: "Optional two-speed crank handle for the MX winch — low gear for lifting under load, high gear for fast travel without load. The shifter detent is the most common failure point.",
    fits: "MX winch (PN 783590) — two-speed upgrade",
    interval: "Replace if shifter feels sloppy or won't hold a gear."
  },
  {
    pn: "ref:WIN-REBUILD",
    name: "Winch Rebuild Kit (older-style winches)",
    group: "Winch & Cable",
    series: ["2000", "2100", "Eventer"],
    tags: ["wear", "safety"],
    desc: "Field-rebuild kit for legacy Sumner winches (2000/2100 Series and Eventer 20/25 'old style'). Includes ratchet pawl, spring, and brake friction components. Current-production sealed assemblies are typically replaced rather than rebuilt — confirm your unit's vintage with B&B SUMNER customer service before ordering this kit.",
    fits: "Pre-current-production Sumner winches on 2000/2100/Eventer",
    interval: "Use when brake or pawl service is needed and the winch is rebuildable."
  },
  {
    pn: "ref:WIN-RP-KIT",
    name: "Ratchet Pawl & Spring Kit (component of rebuild)",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear", "safety"],
    desc: "Spring-loaded pawl that engages the ratchet wheel inside the winch — produces the audible 'click' on raise. A weak or worn pawl is the #1 cause of a winch that drops the load when the operator releases the handle. Per Sumner's published guidance: check ratchet dogs and brake ratchet for wear; if any wear is visible, replace; if not, lubricate both parts with light oil.",
    fits: "Sumner-built winches (sub-component — order via OEM rebuild kit on rebuildable units)",
    interval: "Inspect annually; lubricate with light oil. Replace if click is faint or pawl shows wear."
  },
  {
    pn: "ref:WIN-RW-A",
    name: "Ratchet Wheel (component of rebuild)",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["safety"],
    desc: "Toothed steel wheel engaged by the pawl. DIRECTIONAL — the engagement faces of the teeth must point in the direction shown in the operator's manual. Reversed installation will cause the winch to free-spool under load. Confirm orientation before reassembly.",
    fits: "Sumner-built winch internal — sub-component of OEM rebuild kit",
    interval: "Replace if any teeth chipped, rounded, or if pawl will not click."
  },
  {
    pn: "ref:WIN-BD",
    name: "Brake Disc / Friction Pad (component of rebuild)",
    group: "Winch & Cable",
    series: ["2000", "2100", "2400", "Eventer", "Roust-A-Bout"],
    tags: ["wear", "safety"],
    desc: "Fiber friction disc that holds the load when the operator stops cranking. Glazes with heat over time. Per Sumner's manual: light glazing can be restored by lightly sanding both sides of the pad with sandpaper to remove the shiny spots. Heavy scoring, cracking, or any oil/grease contamination = replace.",
    fits: "All hand-crank Sumner lifts (sub-component of rebuild kit)",
    interval: "Inspect annually; replace if pad <50% original thickness or contaminated."
  },
  {
    pn: "ref:RAB-LD-WIN",
    name: "Roust-A-Bout Load Winch (4-Speed)",
    group: "Winch & Cable",
    series: ["Roust-A-Bout"],
    tags: ["wear", "safety"],
    desc: "4-speed precision hand-crank winch dedicated to the load cable on the Roust-A-Bout. Allows fine positioning of a 1,500 lb load. Independent of the second (mast-extension) winch.",
    fits: "Roust-A-Bout R-150 / R-250 (load function only)",
    interval: "Service interval per OEM; inspect detent shifter quarterly."
  },
  {
    pn: "ref:RAB-MS-WIN",
    name: "Roust-A-Bout Mast Winch",
    group: "Winch & Cable",
    series: ["Roust-A-Bout"],
    tags: ["wear", "safety"],
    desc: "Second hand-crank winch dedicated to mast extension on the Roust-A-Bout. Per Sumner: the dual-winch system lets one operator move a load vertically AND extend the mast in tight or obstructed locations.",
    fits: "Roust-A-Bout R-150 / R-250 (mast function only)",
    interval: "Service interval per OEM."
  },

  /* ============================================================
     CABLE — diameter is the key spec. Sumner-published copy
     gives diameter; cable construction (1×7 / 7×19) is industry-
     standard for aircraft cable but is NOT explicitly published
     in Sumner's customer-facing literature, so this manual does
     not attribute the construction to Sumner.
     ============================================================ */
  {
    pn: "ref:CBL-7-32",
    name: "Lift Cable, 7/32 in (5.5 mm) Galvanized",
    group: "Winch & Cable",
    series: ["2000", "2100", "Eventer"],
    tags: ["wear", "cable", "safety"],
    desc: "7/32 in (5.5 mm) galvanized aircraft cable. Documented in Sumner spec sheets as the load cable on the Series 2000 and the 2118 (i.e., the larger-capacity contractor lifts equipped with the MX winch). Replace at any defect — fraying, kinking, broken strands, burn marks. Never field-splice a lift cable. Confirm OEM part number with B&B SUMNER for your serial range.",
    fits: "MX-winch-equipped Series 2000, 2100, and Eventer 20/25 (verify cable gauge with calipers)",
    interval: "Inspect every shift. Replace at any defect or per the wire-rope inspection criteria on the Inspection page."
  },
  {
    pn: "ref:CBL-RAB",
    name: "Lift Cables — Roust-A-Bout (load + mast)",
    group: "Winch & Cable",
    series: ["Roust-A-Bout"],
    tags: ["wear", "cable", "safety"],
    desc: "Two cables operate independently on the Roust-A-Bout — one for the 1,500 lb load winch, one for the mast-extension winch. Both must be inspected at the same interval; both share the lift's safety budget.",
    fits: "Roust-A-Bout R-150 / R-250 — order load and mast cables matched to model",
    interval: "Inspect every shift; replace at any defect."
  },

  /* ============================================================
     MAST GROUP
     ============================================================ */
  {
    pn: "ref:MAST-LWR-2118",
    name: "Lower Mast Section — 2118",
    group: "Mast Assembly",
    series: ["2100"],
    tags: [],
    desc: "Outer (largest cross-section) extruded aluminum mast section. The winch mount and lower cable sheave attach here. Replace only if visibly bent or has crushed sidewalls — never field-straighten an extruded aluminum mast cold; the metallurgy is permanently affected. Mast sections are model-specific; verify the SKU with B&B SUMNER for your serial range.",
    fits: "Series 2100 — Model 2118",
    interval: "Inspect for dents at every cable change."
  },
  {
    pn: "ref:MAST-UPR-2118",
    name: "Upper Mast Section w/ Pulley Bracket — 2118",
    group: "Mast Assembly",
    series: ["2100"],
    tags: [],
    desc: "Inner extruded aluminum mast that carries the carriage and houses the upper cable sheave bracket. Comes with sheave hardware kit. The pulley guard and cable retainer are pre-installed.",
    fits: "Series 2100 — Model 2118",
    interval: "Replace if bent; verify slide pads ride true after install."
  },
  {
    pn: "ref:MAST-MID-2025",
    name: "Middle Mast Section — 3-Stage 2025/Eventer 25",
    group: "Mast Assembly",
    series: ["2000", "Eventer"],
    tags: [],
    desc: "The intermediate mast extrusion on three-stage lifts (Series 2025, Eventer 25, Roust-A-Bout R-250). Same care as upper and lower sections — never straighten cold; replace if bent.",
    fits: "3-stage Series 2000, Eventer 25, Roust-A-Bout R-250",
    interval: "Inspect annually."
  },
  {
    pn: "ref:PUL-SHV",
    name: "Cable Sheave (Pulley) — Top of Mast",
    group: "Mast Assembly",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear", "cable"],
    desc: "Top-of-mast cable sheave with sealed bearing. A grooved or seized sheave will rapidly destroy a brand-new cable. Spin it by hand — should rotate freely with no detectable play. Sheave groove diameter is matched to cable gauge — verify before ordering.",
    fits: "All single-cable Sumner lifts (verify groove dia. matches your cable gauge)",
    interval: "Inspect every cable change; replace if groove edges sharp or bearing rough."
  },
  {
    pn: "ref:PUL-SHV-RAB",
    name: "Cable Sheave — Roust-A-Bout",
    group: "Mast Assembly",
    series: ["Roust-A-Bout"],
    tags: ["wear", "cable"],
    desc: "Larger-diameter sheave for the Roust-A-Bout's heavier cables — one for the load circuit, one for the mast circuit. Match groove diameter to cable gauge.",
    fits: "Roust-A-Bout R-150 / R-250",
    interval: "Inspect every cable change."
  },
  {
    pn: "ref:PUL-GRD",
    name: "Pulley Guard / Cable Retainer",
    group: "Mast Assembly",
    series: ["2000", "2100"],
    tags: ["safety"],
    desc: "Sheet-steel cover that captures the cable in the sheave groove and prevents jump-out under shock load. Inexpensive — replace any time it's bent, missing, or the mounting hardware is loose.",
    fits: "Series 2000, 2100",
    interval: "Verify present and properly captured at every shift."
  },
  {
    pn: "ref:PUL-GRD-360",
    name: "360° Cable Head Guard — Series 2400",
    group: "Mast Assembly",
    series: ["2400"],
    tags: ["safety"],
    desc: "Formed-steel ring at the top of the 2400's mast that provides 360° protection of the cable from snagging on rafters, conduit, or duct corners. The defining feature of the Series 2400 line.",
    fits: "Series 2400 only",
    interval: "Inspect alignment quarterly; bent guards must be replaced (can't be straightened without distorting the cable path)."
  },
  {
    pn: "ref:MAST-SLP",
    name: "Mast Slide Pad Set (4)",
    group: "Mast Assembly",
    series: ["2000", "2100", "2400"],
    tags: ["wear"],
    desc: "Nylon (acetal) wear pads that ride between the inner and outer mast sections. As they wear, the inner mast develops side-play and the carriage starts to wobble at full extension.",
    fits: "Series 2000, 2100, 2400 (verify thickness for your model)",
    interval: "Inspect annually; replace if mast play exceeds 1/8 in side-to-side at full extension."
  },
  {
    pn: "ref:MAST-SLP-RAB",
    name: "Mast Slide Pad Set — Roust-A-Bout",
    group: "Mast Assembly",
    series: ["Roust-A-Bout"],
    tags: ["wear"],
    desc: "Heavier-duty slide pads sized for the Roust-A-Bout's twin parallel masts. Replace as a complete set to keep both masts elevating in sync.",
    fits: "Roust-A-Bout R-150 / R-250",
    interval: "Replace if either mast lags the other during extension."
  },
  {
    pn: "ref:MAST-CAP",
    name: "Mast Top Cap",
    group: "Mast Assembly",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: [],
    desc: "Plastic cap that seals the top of the inner mast against rain ingress. Often missing on used lifts; water inside the mast accelerates slide-pad wear and pulley bearing failure.",
    fits: "Most Sumner contractor lifts",
    interval: "Replace if missing, cracked, or no longer seating."
  },

  /* ============================================================
     CARRIAGE / FORK GROUP
     ============================================================ */
  {
    pn: "ref:CAR-2118",
    name: "Carriage Assembly — 2118",
    group: "Carriage & Forks",
    series: ["2100"],
    tags: [],
    desc: "Welded steel carriage that mounts the forks and rides the inner mast on rollers. Tool-free pin attachment to the cable terminal — a defining 2100-series feature.",
    fits: "Series 2100 (interchangeable across 2112/2118/2124)",
    interval: "Inspect rollers and pin retainer at every cable change."
  },
  {
    pn: "ref:CAR-RAB",
    name: "Crossbeam Carriage — Roust-A-Bout",
    group: "Carriage & Forks",
    series: ["Roust-A-Bout"],
    tags: [],
    desc: "Heavy-walled steel crossbeam that spans the Roust-A-Bout's twin masts. Replacement is rare — usually a result of side-load impact or weld failure.",
    fits: "Roust-A-Bout R-150 / R-250",
    interval: "Inspect weldments annually; verify rollers all spin freely."
  },
  {
    pn: "ref:CAR-RLR",
    name: "Carriage Roller (each)",
    group: "Carriage & Forks",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear"],
    desc: "Sealed-bearing nylon roller. A flat-spotted or seized roller causes the carriage to chatter and the cable to fray at the carriage attachment point.",
    fits: "Most current Sumner carriages",
    interval: "Inspect annually; replace as a set."
  },
  {
    pn: "ref:FORK-REV-2100",
    name: "Reversible Fork Set",
    group: "Carriage & Forks",
    series: ["2000", "2100"],
    tags: [],
    desc: "Pair of formed-steel forks with pivot pin. Forks invert to lift either from the floor or from above the carriage (e.g., to set ductwork into a ceiling). Inspect tines for bending — never straighten cold.",
    fits: "Series 2000, 2100",
    interval: "Inspect for bend at every shift; rated capacity assumes straight tines."
  },
  {
    pn: "ref:FORK-REV-2400",
    name: "Reversible Fork Set — Compact",
    group: "Carriage & Forks",
    series: ["2400"],
    tags: [],
    desc: "Shorter fork pair sized for the Series 2400's compact carriage. Visually similar to the 2100 forks but the pivot-pin spacing differs — not interchangeable.",
    fits: "Series 2400 only",
    interval: "Inspect for bend at every shift."
  },
  {
    pn: "783691",
    name: "Carriage Fork Extension Kit (OEM)",
    group: "Carriage & Forks",
    series: ["2000", "2100", "2400"],
    tags: [],
    desc: "Bolt-on accessory that extends fork length from 28 in to 42 in. Per Sumner: capacity is reduced to 200 lb (91 kg) when the extensions are deployed — applies regardless of the lift's base capacity. Brief operators on the de-rate before letting them set heavy loads.",
    fits: "Most Sumner contractor lifts (verify fork channel size)",
    interval: "Bolts: torque-check at 60-day intervals."
  },
  {
    pn: "ref:FORK-PIN",
    name: "Reversible-Fork Pivot Pin & R-Clip",
    group: "Carriage & Forks",
    series: ["2000", "2100", "2400"],
    tags: ["wear"],
    desc: "Hardened steel pin that the fork rotates around when reversed. Cheap to replace, expensive to ignore — a worn pin lets the fork shift under load.",
    fits: "Series 2000, 2100, 2400",
    interval: "Inspect every shift; replace if pin shows visible wear at the contact face."
  },
  {
    pn: "ref:TILT-DET-2300",
    name: "Tilt-Head Detent Pin Kit",
    group: "Carriage & Forks",
    series: ["2300"],
    tags: ["wear"],
    desc: "Spring-loaded pin that locks the tilting cradle on the Series 2300. Failure mode is a head that won't lock at the specified angle — the spring weakens before the pin wears.",
    fits: "Series 2300 only",
    interval: "Lubricate quarterly; replace spring if cradle creeps under load."
  },
  {
    pn: "ref:CRADLE-PAD",
    name: "Drywall Cradle Foam Pad Set",
    group: "Carriage & Forks",
    series: ["2300"],
    tags: ["wear"],
    desc: "Closed-cell foam pads that protect the back of a drywall sheet from the steel cradle. Inexpensive, often missing on used lifts.",
    fits: "Series 2300",
    interval: "Replace as needed — usually annually with regular use."
  },
  {
    pn: "ref:EVT-TRUSS-AD",
    name: "Truss Adapter — Eventer",
    group: "Carriage & Forks",
    series: ["Eventer"],
    tags: [],
    desc: "Black-anodized adapter that mounts in place of the standard forks to grip square aluminum truss. Required for line-array and lighting-truss work.",
    fits: "Eventer 16 / 20 / 25",
    interval: "Inspect pin and hook before every show."
  },

  /* ============================================================
     BASE & MOBILITY
     ============================================================ */
  {
    pn: "ref:BASE-2118",
    name: "Base Frame Assembly — 2118",
    group: "Base & Mobility",
    series: ["2100"],
    tags: [],
    desc: "Welded steel base with caster mounts and outrigger sockets. Replacement is rare except after vehicle impact — most 'base' issues are actually caster or outrigger problems.",
    fits: "Series 2100 — Model 2118",
    interval: "Inspect after any tip-over or transport drop."
  },
  {
    pn: "ref:CAST-5LK",
    name: "5 in Locking Caster — Polyurethane Tread",
    group: "Base & Mobility",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["wear"],
    desc: "5 in lockable polyurethane caster. Per Sumner spec sheets: lockable 5 in polyurethane casters are standard on the Series 2118 and the rest of the contractor lift line. Order matched front/rear if you're replacing only one — uneven wheel diameters affect mast plumb.",
    fits: "Series 2000, 2100, 2400, Eventer 20/25",
    interval: "Lubricate axles annually; replace if tread is delaminated or bearing rough."
  },
  {
    pn: "ref:CAST-8RB",
    name: "8 in Caster — Roust-A-Bout",
    group: "Base & Mobility",
    series: ["Roust-A-Bout"],
    tags: ["wear", "safety"],
    desc: "Heavy-duty 8 in caster rated for the Roust-A-Bout's loaded movement. Larger diameter rolls over conduit and door thresholds without lifting the load. Cast iron hub, sealed bearing.",
    fits: "Roust-A-Bout R-150 / R-250 only",
    interval: "Inspect at every PM; replace as a set if any one is rough."
  },
  {
    pn: "ref:CAST-4-2300",
    name: "4 in Caster — Series 2300",
    group: "Base & Mobility",
    series: ["2300"],
    tags: ["wear"],
    desc: "4 in caster sized for the 99 lb Series 2300 drywall lift. Smaller and lighter than the contractor-lift caster.",
    fits: "Series 2300",
    interval: "Replace if rough or won't lock."
  },
  {
    pn: "ref:WHL-10RT",
    name: "10 in Rough-Terrain Wheel",
    group: "Base & Mobility",
    series: ["2100"],
    tags: [],
    desc: "Optional 10 in pneumatic rear wheel that replaces the rear caster pair. Designed for unpaved jobsite use — referenced in Sumner's 2118 product literature as an option.",
    fits: "Series 2100 — accessory option",
    interval: "Check pressure weekly."
  },
  {
    pn: "ref:OUT-LEG-2118",
    name: "Stabilizer Outrigger Leg",
    group: "Base & Mobility",
    series: ["2100", "2000"],
    tags: ["safety"],
    desc: "Fold-out 'fast action' stabilizer leg that triples the lift's footprint. Sumner ships outriggers as standard on the 2118 and 2124, and as optional on the 2015. Verify against your operator's manual.",
    fits: "Series 2118, 2124 (standard); 2015 and others (optional)",
    interval: "Verify positive latch engagement before each shift."
  },
  {
    pn: "ref:OUT-LATCH",
    name: "Outrigger Latch & Spring Kit",
    group: "Base & Mobility",
    series: ["2000", "2100", "Eventer"],
    tags: ["wear", "safety"],
    desc: "The cam-and-spring assembly that locks the outrigger leg in the deployed position. Single most common outrigger failure point — leg goes loose, lift becomes top-heavy. Cheap kit, big consequences.",
    fits: "Most outrigger-equipped Sumner lifts",
    interval: "Replace at any sign of weakness or if leg moves while latched."
  },
  {
    pn: "ref:OUT-FOOT",
    name: "Outrigger Foot Pad (Rubber)",
    group: "Base & Mobility",
    series: ["2000", "2100", "Eventer", "Roust-A-Bout"],
    tags: ["wear"],
    desc: "Replaceable rubber pad on the bottom of each outrigger leg. Concrete and rough decking destroy these quickly; missing pads will mark a finished floor.",
    fits: "Most outrigger-equipped Sumner lifts",
    interval: "Replace as needed."
  },

  /* ============================================================
     HARDWARE & MISC
     ============================================================ */
  {
    pn: "ref:HW-CBL-CLP",
    name: "Cable Anchor Clip & Thimble",
    group: "Hardware",
    series: ["2000", "2100", "2400", "Eventer"],
    tags: ["safety", "cable"],
    desc: "Forged thimble + drop-forged Crosby-style clip used to terminate the lift cable at the carriage attachment. Field-installation requires a torque wrench — torque per the clip manufacturer's spec, not the lift's spec. Saddle on the live (load-bearing) side.",
    fits: "All single-cable Sumner lifts — match clip size to cable gauge",
    interval: "Re-torque after first lift cycle on a new cable, then at every PM."
  },
  {
    pn: "ref:HW-LBL-WARN",
    name: "Decal Set — Warning & Capacity",
    group: "Hardware",
    series: ["2000", "2100", "2300", "2400", "Eventer", "Roust-A-Bout"],
    tags: ["safety"],
    desc: "Replacement vinyl decals: rated capacity, pinch-point warnings, lift instructions, serial-plate overlay. OSHA-required to remain legible — unreadable decals can fail an inspection. Order the set matched to your model.",
    fits: "All series — order matched to model",
    interval: "Inspect annually; replace any decal that cannot be read at arm's length."
  },
  {
    pn: "ref:OP-MAN",
    name: "Operator's Manual (per series)",
    group: "Hardware",
    series: ["2000", "2100", "2300", "2400", "Eventer", "Roust-A-Bout"],
    tags: ["safety"],
    desc: "OEM operator's manual specific to your series and serial range. Should live with the lift at all times. Free PDFs are available from sumner.com / bbsumner.com; printed copies can be requested from the manufacturer.",
    fits: "All series",
    interval: "Replace if missing, illegible, or if the lift was retrofitted with an updated assembly."
  },

  /* ============================================================
     LIFT-COMPLETE PART NUMBERS — for context
     ============================================================ */
  {
    pn: "783700",
    name: "Sumner 2010 Material Lift (10 ft / 1,000 lb) — OEM SKU",
    group: "Hardware",
    series: ["2000"],
    tags: [],
    desc: "Reference SKU for the complete 2010 lift assembly — useful when ordering replacement units or verifying a model's identity from a serial plate.",
    fits: "Identifies a complete Series 2010 lift",
    interval: "—"
  },
  {
    pn: "783701",
    name: "Sumner 2015 Material Lift (15 ft / 800 lb) — OEM SKU",
    group: "Hardware",
    series: ["2000"],
    tags: [],
    desc: "Reference SKU for the complete 2015 lift assembly.",
    fits: "Identifies a complete Series 2015 lift",
    interval: "—"
  },
  {
    pn: "783702",
    name: "Sumner 2020 Material Lift (20 ft / 800 lb) — OEM SKU",
    group: "Hardware",
    series: ["2000"],
    tags: [],
    desc: "Reference SKU for the complete 2020 lift assembly.",
    fits: "Identifies a complete Series 2020 lift",
    interval: "—"
  },
  {
    pn: "783703",
    name: "Sumner 2025 Material Lift (25 ft / 650 lb) — OEM SKU",
    group: "Hardware",
    series: ["2000"],
    tags: [],
    desc: "Reference SKU for the complete 2025 lift assembly. Note: capacity decreases with lift height across the Series 2000 family — the 2025 carries 650 lb at 25 ft, while the 2010 carries 1,000 lb at 10 ft.",
    fits: "Identifies a complete Series 2025 lift",
    interval: "—"
  },
  {
    pn: "783651",
    name: "Sumner 2118 Contractor Lift (18 ft / 650 lb) — OEM SKU",
    group: "Hardware",
    series: ["2100"],
    tags: [],
    desc: "Reference SKU for the complete 2118 lift assembly. The 2100 family (2112/2118/2124) all share the 650 lb capacity rating.",
    fits: "Identifies a complete Series 2118 lift",
    interval: "—"
  },
  {
    pn: "784750",
    name: "Sumner 2412 Contractor Lift (12 ft / 400 lb) — OEM SKU",
    group: "Hardware",
    series: ["2400"],
    tags: [],
    desc: "Reference SKU for the complete 2412 lift assembly. Sumner-published spec is 400 lb at 12'11\" max height. Some distributor pages also list 450 lb on 2412 SKUs — Sumner's own catalog lists the 2412 at 400 lb and the 2416 at 450 lb. Verify the rating decal on the unit before ordering.",
    fits: "Identifies a complete Series 2412 lift",
    interval: "—"
  },
  {
    pn: "ref:2416-LIFT",
    name: "Sumner 2416 Contractor Lift (16 ft / 450 lb)",
    group: "Hardware",
    series: ["2400"],
    tags: [],
    desc: "Reference SKU for the complete 2416 lift assembly. 450 lb capacity at 16'11\" max height. Verify OEM SKU with B&B SUMNER for current production.",
    fits: "Identifies a complete Series 2416 lift",
    interval: "—"
  },
  {
    pn: "ref:R-100-LIFT",
    name: "Sumner R-100 Roust-A-Bout (10 ft / 1,500 lb)",
    group: "Hardware",
    series: ["Roust-A-Bout"],
    tags: [],
    desc: "The smallest Roust-A-Bout — same 1,500 lb capacity as its taller siblings, but with a narrower 32 in × 40 in base that fits through a standard residential doorway. Confirm OEM SKU with B&B SUMNER for current production.",
    fits: "Identifies a complete Roust-A-Bout R-100 lift",
    interval: "—"
  },
  {
    pn: "780301",
    name: "Sumner R-150 Roust-A-Bout (15 ft / 1,500 lb) — OEM SKU",
    group: "Hardware",
    series: ["Roust-A-Bout"],
    tags: [],
    desc: "Reference SKU for the complete R-150 Roust-A-Bout. 40 in × 40 in base. Note: only the smaller R-100 (32 in × 40 in base) fits through a standard residential doorway — the R-150 and R-250 require a wider passage.",
    fits: "Identifies a complete Roust-A-Bout R-150 lift",
    interval: "—"
  },
  {
    pn: "780303",
    name: "Sumner R-250 Roust-A-Bout (25 ft / 1,500 lb) — OEM SKU",
    group: "Hardware",
    series: ["Roust-A-Bout"],
    tags: [],
    desc: "Reference SKU for the complete R-250 Roust-A-Bout.",
    fits: "Identifies a complete Roust-A-Bout R-250 lift",
    interval: "—"
  },
  {
    pn: "784760",
    name: "Sumner Eventer 16 (16 ft / 500 lb) — OEM SKU",
    group: "Hardware",
    series: ["Eventer"],
    tags: [],
    desc: "Reference SKU for the Eventer 16 — the smallest of the Eventer line. 500 lb capacity at 16 ft 11 in (forks up). Lift weight 279 lb.",
    fits: "Identifies a complete Eventer 16 lift",
    interval: "—"
  },
  {
    pn: "783801",
    name: "Sumner Eventer 20 (20 ft / 800 lb) — OEM SKU",
    group: "Hardware",
    series: ["Eventer"],
    tags: [],
    desc: "Reference SKU for the Eventer 20 — the highest-capacity Eventer at 800 lb. Black anodized mast for stage use.",
    fits: "Identifies a complete Eventer 20 lift",
    interval: "—"
  },
  {
    pn: "783800",
    name: "Sumner Eventer 25 (25 ft / 650 lb) — OEM SKU",
    group: "Hardware",
    series: ["Eventer"],
    tags: [],
    desc: "Reference SKU for the Eventer 25 — the tallest Eventer. Capacity drops to 650 lb at 25 ft (capacity decreases as lift height increases, same pattern as the Series 2000).",
    fits: "Identifies a complete Eventer 25 lift",
    interval: "—"
  },

  /* ============================================================
     SERVICE TOOLS — non-OEM but essential for the procedures
     ============================================================ */
  {
    pn: "ref:TOOL-CBL-CUT",
    name: "Wire-Rope Cutter (1/8 – 7/32 in)",
    group: "Hardware",
    series: ["2000", "2100", "2300", "2400", "Eventer", "Roust-A-Bout"],
    tags: [],
    desc: "Hardened-jaw cutter sized for 1/8 in to 7/32 in aircraft cable. Bolt cutters and side cutters will mash the cable strands and produce a frayed end that won't feed cleanly through internal mast routing — use the right tool.",
    fits: "Service-bench tool",
    interval: "Lifetime tool; sharpen or replace cutting edges as needed."
  },
  {
    pn: "ref:TOOL-CALIPER",
    name: "Digital Calipers (0–6 in, ±0.001 in)",
    group: "Hardware",
    series: ["2000", "2100", "2300", "2400", "Eventer", "Roust-A-Bout"],
    tags: [],
    desc: "Required for cable diameter measurement. Per ASME B30.30: more than 5% diameter reduction at any point requires removal from service. For 1/8 in nominal, that's a measurement of ≤0.119 in. For 7/32 in nominal, that's ≤0.208 in.",
    fits: "Service-bench tool",
    interval: "Verify zero on a known reference at every cable inspection."
  }
];

/* Hotspot definitions for the exploded interactive diagram.
   Each hotspot has a primary `pn` so clicking opens the matching part's
   modal directly. The `group` is used as a fallback and to pre-filter
   the catalog when the user dismisses the modal. */
const HOTSPOTS = [
  { id: 1, x: 190, y: 60,  pn: "ref:PUL-SHV",       group: "Mast Assembly",     name: "Cable Sheave / Pulley", desc: "Top-of-mast pulley with sealed bearing. Routes the lift cable from the winch to the carriage." },
  { id: 2, x: 220, y: 145, pn: "ref:FORK-REV-2100", group: "Carriage & Forks",  name: "Reversible Fork Set",   desc: "Pair of forks that invert for above-carriage or below-carriage loads." },
  { id: 3, x: 130, y: 180, pn: "ref:CAR-2118",      group: "Carriage & Forks",  name: "Carriage Assembly",     desc: "Rides the inner mast on rollers; pinned to the cable terminal." },
  { id: 4, x: 240, y: 305, pn: "783590",            group: "Winch & Cable",     name: "MX Winch (PN 783590)",  desc: "Sumner-built self-locking worm-gear winch — raises, holds, and lowers the load." },
  { id: 5, x: 110, y: 295, pn: "ref:MAST-SLP",      group: "Mast Assembly",     name: "Mast Slide Pads",       desc: "Nylon pads between mast sections — wear here causes carriage wobble." },
  { id: 6, x: 60,  y: 370, pn: "ref:OUT-LEG-2118",  group: "Base & Mobility",   name: "Outrigger Leg",         desc: "Folds out to triple the footprint. Inspect latch every shift." },
  { id: 7, x: 30,  y: 395, pn: "ref:CAST-5LK",      group: "Base & Mobility",   name: "5 in Locking Caster",   desc: "Polyurethane tread, dual-locking. Order matched pairs to keep the mast plumb." },
  { id: 8, x: 295, y: 395, pn: "ref:OUT-FOOT",      group: "Base & Mobility",   name: "Outrigger Foot Pad",    desc: "Replaceable rubber pad — protects floors and grips concrete." },
  { id: 9, x: 175, y: 145, pn: "ref:HW-CBL-CLP",    group: "Hardware",          name: "Cable Anchor Clip",     desc: "Drop-forged clip + thimble terminating the cable at the carriage." }
];

/* ============================================================
   VENDOR — Energized Engines parts links
   This manual is published by Energized Engines as a free
   educational reference. Buy buttons across the catalog point
   here so a tech can go from diagnosis to part-in-cart in one
   click.
   ============================================================ */
const VENDOR = {
  name:    "Energized Engines",
  home:    "https://www.energizedengines.com/",
  about:   "https://www.energizedengines.com/pages/about-sumner-lifts-and-parts",
  manuals: "https://www.energizedengines.com/pages/parts-manuals",
  allParts:"https://www.energizedengines.com/collections/all-parts",

  /* Per-series collection landing pages — used as the per-series
     fallback when an exact product URL isn't in KNOWN_URLS. */
  collections: {
    "2000":         "https://www.energizedengines.com/collections/all-parts",
    "2100":         "https://www.energizedengines.com/collections/series-2100-parts",
    "2300":         "https://www.energizedengines.com/collections/all-parts",
    "2400":         "https://www.energizedengines.com/collections/series-2400-parts",
    "Eventer":      "https://www.energizedengines.com/collections/all-parts",
    "Roust-A-Bout": "https://www.energizedengines.com/collections/all-parts"
  },

  /* Direct product URLs for parts where I can confirm the slug.
     Add more here as you validate them on the live store. */
  knownUrls: {
    "785912": "https://www.energizedengines.com/products/sumner-785912-winch-worm-gh-5t",
    "780301": "https://www.energizedengines.com/products/sumner-r-150-roust-a-bouta-15-top-ht-sku-780301",
    "ref:WIN-REBUILD": "https://www.energizedengines.com/products/winch-rebuild-kit-2000-2100-series-eventer-20-25-old-style"
  }
};

/* Build a vendor URL for any part. Strategy:
   1. Direct product URL if known
   2. Site search by the SKU number for confirmed Sumner SKUs
   3. Series-specific collection if the part has exactly one series tag
   4. Site search by part name as last resort
*/
function vendorUrl(part) {
  if (!part) return VENDOR.allParts;
  if (VENDOR.knownUrls[part.pn]) return VENDOR.knownUrls[part.pn];

  // Confirmed Sumner SKU pattern: 6 digits
  if (/^\d{6}$/.test(part.pn)) {
    return "https://www.energizedengines.com/search?q=" + encodeURIComponent(part.pn) + "&type=product";
  }

  // Single-series part → collection landing page anchored on the part's name
  if (part.series && part.series.length === 1 && VENDOR.collections[part.series[0]]) {
    return VENDOR.collections[part.series[0]];
  }

  // Generic fallback: search by name (strip parenthetical qualifiers)
  const cleanName = (part.name || "Sumner part").replace(/\s*\([^)]*\)\s*/g, "").trim();
  return "https://www.energizedengines.com/search?q=" + encodeURIComponent("Sumner " + cleanName) + "&type=product";
}

/* Make available globally for site-wide search */
window.PARTS = PARTS;
window.HOTSPOTS = HOTSPOTS;
window.VENDOR = VENDOR;
window.vendorUrl = vendorUrl;
