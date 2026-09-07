# v28.1 — Campaign launch and daemon factions

## Reproduced launch failure and fix

The single-system launcher does not render the optional canonical-location control `campaignLoreStart264`. Launch preparation called `val()` on that missing element before entering the launch error handler. Clicking Launch therefore rejected with `Cannot read properties of null (reading 'value')` and left the launcher open.

Optional lore and Craftworld controls now use safe defaults when absent. Launch preparation is covered by error handling that restores the button and displays a failure reason. The previously failing button event now creates a campaign, renders its dashboard and removes the launch overlay.

## Faction corrections

- Chaos Daemons and Daemons of the Ruinstorm remain separate faction choices, with their own leader pools, rosters, technology, AI archetypes, naval doctrines, faction districts and infrastructure.
- Daemonic strategic travel now respects single-system local movement instead of overriding it with interstellar breach translation.
- Ruinstorm now has 14 base strategic roster entries, including Lesser Daemons, Greater Daemon Beasts and the Arch-Daemon. Base costs, model limits, profiles and unit types were reconciled with the supplied repository snapshot. Swarm D6 attacks use 3.5 in the strategic estimator and retain the source expression in a rule note.
- Chaos Daemons now has 20 base strategic roster entries, including additional greater daemons, Fiends, Plague Drones, Seekers and Horror types. Flamer costs and several profiles/model limits were corrected. Soul Grinder now uses its walker armour and hull profile, with patron upgrades excluded from its base cost.
- The 109-character leader catalogue, including 15 eligible Chaos Daemons profiles and 3 eligible Ruinstorm profiles, is retained. Shared named leaders count in each eligible pool.

These remain campaign adaptations. Optional tabletop gifts, patron restrictions, formations and every BattleScribe conditional rule are not fully simulated. Chaos Daemons is an expanded strategic roster, not an exhaustive tabletop catalogue. Previously saved army packages retain their saved points and profiles; new recruitment uses the corrected templates.

## Verification

Test environment: Node with JSDOM, executing both page scripts, generating campaign theatres, changing the actual dropdown elements and dispatching the Launch button click through the application's event listeners. Canvas drawing was disabled. This exercises DOM interactions and game state; it is not physical-device or browser visual testing.

| Scenario | Result |
| --- | --- |
| Single-system launch before fix | Reproduced missing-control exception |
| Single-system launch after fix: Militia, Legion, Chaos Daemons, Ruinstorm | Pass; dashboard reached and overlay removed |
| Sector normal launch: Militia, Legion, Chaos Daemons, Ruinstorm | Pass |
| Sector normal launch: Craftworld with Asurmen | Pass |
| Sub-sector normal launch: both daemon factions, no named leader | Pass |
| Sub-sector Deep Time T2: both daemon factions with leaders | Pass |
| Sector Deep Time T1000 existing power: both daemon factions | Pass |
| T1000 to T1001: both daemon factions | Pass; one turn advanced |
| Single-system T0 to T1: both daemon factions | Pass; one turn advanced |
| Selected leader attachment | Exactly one selected character unit in checked campaigns |
| Daemon faction income and AI actions | Pass; treasury values remain finite |
| Daemon faction unique district and infrastructure effects | Pass; command support and civic increases present |
| Daemon travel selection | Local within a system; daemonic between systems |

Deep Time checks used a small generated theatre. They do not constitute a fresh maximum-sector stress test. Earlier audit files in this package remain historical reports for their stated revisions.

Source snapshot: BSData/horus-heresy-1st-edition, commit `0a4c10da15f4ea40eea0932090fadafe3b90b696`.

The PWA manifest, page identity and service-worker cache are v28.1. The installed application ID is preserved. Open the updated deployment online once to refresh its offline assets; confirm the screen shows revision 28.1.
