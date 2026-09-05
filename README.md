# Administratum Stellar Cartographica — Revision 25.1
## Full Deep-Time History & Unified Faction Rosters

Build: `25.1-demographic-momentum-strategic-armies-v33-tested`

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
The PWA uses the distinct cache key `25.1-demographic-momentum-strategic-armies-v33-tested`. The service worker removes older Cartographica caches during install/activation, and navigation requests prefer the network before the canonical offline shell.

## Validation
See `TEST-REPORT.txt` and `BUILD-VERIFICATION.txt` for the validation performed on this exact package.


## Revision 25.1 — Demographic Momentum & Strategic Armies
Settlement Size now changes through accumulated development/decline pressure rather than a random growth roll. Task Forces derive eleven strategic traits from their actual unit composition; ground auto-resolve weights those traits against the battle theatre before command/doctrine resolution.
