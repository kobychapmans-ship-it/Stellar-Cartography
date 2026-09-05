# Administratum Stellar Cartographica — Revision 25.1.1
## Full Deep-Time History & Unified Faction Rosters

Build: `25.1.1-demographic-momentum-strategic-armies-bootstrap-fix-v34-tested`

Revision 25.1 builds on the fully restored v24.9 runtime. It retains exact Deep-Time simulation, Autonomous District Economy, Hard Fleet Troop Lift, full unified rosters and Battlefleet Operations, then adds centred settlement governance, capped rebellion/secession, recurring civic upkeep and wider Size/Technology recruitment locks.

## Revision 25.1 additions
- Settlement governance, rebellion and infrastructure/support panels now remain full-width inside the settlement card. Mobile layouts collapse the planner into a single centred column instead of squeezing text into the left edge.
- Rebellions have a Size/Technology-scaled hard points cap. Severe unresolved rebellions normally secede after roughly 8–12 turns, or sooner after remaining at their cap for several cycles.
- Secession creates a normal autonomous faction named `Rebellion (Former Faction)`, transfers the rebellious settlement/local claim, gives it a generated starting army equal to the final rebellion points, and immediately sets relations with the former ruler to War.
- Infrastructure, support upgrades and district tiers now provide recurring civic upkeep toward Complacency, Productivity, Order and Piety/Cohesion targets. Aggressive factions emphasise Order/Productivity; Orks deliberately tolerate lower Complacency/Piety.
- AI district selection now responds to civic deficits as well as economic output, allowing Administration, Habitation, Defence and Research districts to be built when settlements need stability rather than only more resources.
- Unit recruitment requirements now use the full Size 1–10 and Technology 1–10 range. Ordinary troops remain accessible early; rare/elite/super-heavy/relic/Lord of War units can require much more developed mustering worlds.

## Deep-Time restoration
- Deep-Time no longer substitutes a displayed target turn or compressed economy for missing history.
- Every selected prehistory turn is processed individually at the normal campaign scale of 90 days.
- Turn 100 performs 100 complete historical AI/economy/colony/fleet/event cycles; Turn 1000 performs 1000.
- Each historical turn includes autonomous faction actions, AI district construction, faction income, settlement growth, mobile/core colony growth, fleet movement, raiders/threat processing, sector events, settlement consequences, automated resource extraction, Command refresh, claims/contact maintenance and periodic record consolidation.
- Established-polity player factions participate as AI during history and are handed back to the player at the target turn. Emerging expeditions remain dormant until the history is complete.
- The campaign overview records before/after metrics for controlled systems, settlements, districts and total army points, so the historical changes are visible rather than inferred from the turn label.

## Unified faction roster
- `campaignFactionTemplates()` now resolves through one authoritative live faction roster pool.
- The cohesive army generator, campaign Add Unit selector and campaign-start manual muster all consume that same pool.
- Expanded Revision 24.8 entries, including Lord of War choices, are retained.
- Dark Compliance now correctly combines the current Legion and Imperialis Militia pools instead of falling through to an unrelated procedural-xenos shortlist.
- Craftworld forces also include non-duplicate legacy Aeldari entries that are already available elsewhere in Cartographica.
- Unit-specific weapons/wargear/upgrades remain available through each unit's Armoury controls and through generator auto-refits when the faction's technology allows them.
- The Lord of War legality gate uses the intended 25% ceiling rather than the prior internal 23.5% pre-filter.

## Revision 24.8 features retained
- AI factions reserve resources for districts before expansion and make a second district-investment pass afterward.
- Tall / Balanced / Wide settlement maintenance remains active.
- Fleet troop lift is a hard cap. Invalid legacy/deep-time overloads are disembarked automatically at the fleet's current system.
- Battlefleet identities, strategic cross-territory attacks, fleet engagements, BFG-style auto-resolve and persistent fleet damage remain active.
- Settlement governance, rebellions, occupation effects, generated settlement networks, T4/T5 resource automation and strategic expedition rewards remain active.

## Cache/install identity
The PWA uses the distinct cache key `25.1.1-demographic-momentum-strategic-armies-bootstrap-fix-v34-tested`. The service worker removes older Cartographica caches during install/activation, and navigation requests prefer the network before the canonical offline shell.

## Validation
See `TEST-REPORT.txt` and `BUILD-VERIFICATION.txt` for the validation performed on this exact package.


## Revision 25.1 — Demographic Momentum & Strategic Armies
Settlement Size now changes through accumulated development/decline pressure rather than a random growth roll. Task Forces derive eleven strategic traits from their actual unit composition; ground auto-resolve weights those traits against the battle theatre before command/doctrine resolution.


## v25.1.1 bootstrap hotfix
The v25.1 mechanics were present in the previous archive, but the original startup bootstrap still re-enforced the v25.0 title, badge, URL revision and service-worker registration on DOMContentLoaded/load/pageshow. This hotfix makes v25.1.1 authoritative from the first parsed script and removes the active legacy v25.0 identity writers.


## Revision 25.2 — Stack-Safe Full-Sector Deep Time
Deep-Time is processed as 1:1 historical turns in asynchronous bounded phases. Large faction/settlement sets yield to the browser between batches, campaign persistence is suppressed during internal historical actions, unbounded campaign spread operations have been removed from key paths, and Safari RangeError stack overflows are recovered per subsystem without aborting the entire campaign start. Designed for full-sector simulations through Turn 1000.


### Deep-Time execution model
Revision 25.2 cannot and does not attempt to increase Safari/Chromium's fixed JavaScript call-stack limit. Instead, Deep-Time is stack-safe by architecture. Histories under 100 turns on modest maps may use the detailed per-turn runner. Histories of 100–1000 turns, or sufficiently large/full-sector campaigns, use up to 10 bounded historical epochs. Each epoch represents a real span of 90-day campaign turns and scales treasury income, demographic momentum, district investment, claims, recruitment, resource activity and other strategic changes across that span. The campaign always hands over at the exact requested turn.


## Revision 25.3 — Infrastructure Depth, Army Drill-down & Naval Growth
- Infrastructure networks now progress from Level 1 to Level 10, capped by settlement Size. Repeated upgrades provide stronger direct and recurring civic benefits and can satisfy new population-development infrastructure requirements.
- Task Forces and detachments are collapsible; every unit package has an expandable strategic trait breakdown.
- Strategic Supply & Influence Programme cards span the settlement content width, including mobile layouts.
- Deep-Time AI now commissions additional fleets and advances existing fleets through larger classes and 10 refit levels as territory, settlement count, age and Materiel allow.


## Revision 25.3.1 — Deep-Time Fleet Coverage Hotfix
Deep-Time naval progression no longer directly calls the fragile `campaignEnsureFleetCoverage` helper. It now normalises fleet ownership through the stable `campaignEnsureFleetState` path before historic fleet construction/refits, fixing Safari launch failures reporting “Can’t find variable: campaignEnsureFleetCoverage”.


## Revision 25.5 — Archetype Empires & Diplomacy
Deep-Time established player polities now remain fully autonomous until handover. Every faction uses a racial/faction archetype to prioritise settlement founding, districts, infrastructure, research, armies, fleets and diplomacy. Orks actively seek and maintain wars; industrial, defensive, opportunistic and diplomatic factions spend resources differently.


## Revision 25.5 — Fleet Polities & Historical Foundations
Deep Time now uses a historical foundation fallback for fixed settlements and treats Legion/Astartes, Craftworld and other mobile archetypes as true fleet polities. Their fleets spend Materiel on actual capital/escort/support hull growth and class advancement, can become Tier III+ mobile settlements, and those mobile settlements receive normal demographic, civic, district and infrastructure progression.

### v25.5 validation
The v25.5 release was statically checked for historical fixed-settlement foundations, mobile fleet-settlement progression, normal settlement maintenance for mobile colonies, and real hull/class naval growth distinct from refit levels. The available Chromium process did not finish a bounded headless load, so an interactive browser pass is not claimed.
