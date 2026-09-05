# Administratum Stellar Cartographica — Revision 24.9
## Full Deep-Time History & Unified Faction Rosters

Build: `24.9-full-deep-time-unified-rosters-v31-tested`

Revision 24.9 is a regression-fix and integration release built on Revision 24.8. It preserves Autonomous District Economy, Hard Fleet Troop Lift, Full/expanded rosters and Battlefleet Operations while restoring a genuine Deep-Time campaign simulation.

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
The PWA uses the distinct cache key `24.9-full-deep-time-unified-rosters-v31-tested`. The service worker removes older Cartographica caches during install/activation, and navigation requests prefer the network before the canonical offline shell.

## Validation
See `TEST-REPORT.txt` and `BUILD-VERIFICATION.txt` for the validation performed on this exact package.
