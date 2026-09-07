# Stellar Cartographica v28.3 — Authoritative Fleet Transit End-Turn Audit

Build: `28.3-fleet-transit-authoritative-endturn-v60-tested`

## Why v28.2 failed

v28.2 correctly identified that the v27.2 single-pass End Turn rewrite had dropped fleet travel, but its repair was attached from a later script by wrapping `campaignFinalizePendingFleetSettlements262`. In the running application, the authoritative End Turn function retained the earlier function binding from its own script scope, so the later wrapper was not the function actually invoked by End Turn.

This was reproduced in a rendered Chromium game session: a fleet was ordered into transit, End Turn completed, and its remaining distance was unchanged. `lastFleetTransitPass282` never appeared. The prior isolated harness therefore did not represent the binding used by the live game.

## v28.3 correction

The fleet movement phase is now physically inside the same main application script and directly inside `campaignRunAutonomousTurn272`, immediately after the 90-day turn boundary is advanced. No later wrapper or settlement finalisation hook is required.

`campaignAdvanceFleetTransit283` iterates every faction and every fleet, then calls the existing final `campaignAdvanceFleet` chain so all established movement rules are preserved:

- System campaigns: AU strategic movement between generated sites.
- Subsector/Sector campaigns: LY strategic movement between systems.
- Subsector/Sector in-system navigation: AU movement between translation points, worlds and moons.
- Long multi-turn journeys continue reducing remaining distance every End Turn.
- Multiple active fleets advance in the same End Turn; movement is not limited to the selected fleet.
- One fleet error is isolated and cannot stop later fleets.
- Stale `navPending247` battle locks are repaired; genuinely Pending player fleet battles remain paused.
- A per-completed-turn marker prevents duplicate travel if the End Turn completion path is invoked twice.

## Live rendered-game regression tests

The following tests used the real launcher, fleet controls and End Turn button in a rendered Chromium session rather than calling the movement function directly.

### System campaign — strategic AU transit

PASS — launched a System campaign from the normal campaign launcher.

PASS — selected a real fleet and destination with the Fleet Command UI.

PASS — fleet entered `In Transit` with a 0.4 AU journey.

PASS — clicked the actual End Turn button.

PASS — after the End Turn the fleet was `Ready`, the destination became its current site and the transit record cleared.

PASS — `lastFleetTransitPass283` recorded 1 active voyage, 1 advanced and 1 arrived with 0 errors.

### Sector campaign — in-system AU transit

PASS — launched a generated Sector campaign.

PASS — ordered a fleet from the system translation point to `Eidolon Vigil Primus`, distance 0.213 AU, using the in-system navigation controls.

PASS — before End Turn the fleet was `In-System Transit` with 0.213 AU remaining.

PASS — after the actual End Turn the strategic system remained `SUB1-SYS1`, local location changed to the target world, status became `Ready` and `localTransit2352` cleared.

### Sector campaign — long inter-system LY transit

PASS — ordered a fleet from `Eidolon Vigil` to `Alectan Ultima`, 373.7 ly.

PASS — after one actual End Turn the remaining distance reduced from 373.7 ly to 328.1536261796984 ly.

PASS — after another End Turn it reduced again to 310.2452616400006 ly.

PASS — the rendered Fleet UI showed `In transit • 17%` and `310.25 ly remaining of 373.7 ly. Marker progress 17%.` This directly verifies the reported 0%-stuck symptom is no longer present.

### Two fleets in the same End Turn

PASS — while the first fleet remained on the long inter-system route, a second fleet was ordered on a 0.213 AU in-system move.

PASS — one End Turn processed both fleets: `active: 2`, `advanced: 2`, `arrived: 1`, `errors: 0`.

PASS — the in-system fleet arrived while the long-distance fleet continued reducing its LY remaining distance.

### Inter-system arrival

PASS — the second fleet was then ordered from `Eidolon Vigil` to `Fenris`, 19.73 ly.

PASS — one End Turn processed both active fleets.

PASS — the Fenris fleet arrived at `SUB1-SYS2`, became `Ready` and cleared its strategic transit record.

PASS — simultaneously, the long Alectan Ultima route reduced from 310.2452616400006 ly to 264.87412597678076 ly.

## Static/PWA checks

PASS — all inline JavaScript blocks parse with `node --check`.

PASS — `sw.js` parses with `node --check`.

PASS — `manifest.webmanifest` parses as JSON.

PASS — required shell assets are present.

PASS — visible revision, bootstrap revision, manifest revision and service-worker cache are all v28.3.

PASS — v28.1 campaign-launch handling and Chaos Daemons / Daemons of the Ruinstorm registrations remain in the runtime.

## Environment note

The container browser policy blocks normal localhost/file navigation, so the rendered application document was injected into Chromium for the click-through tests. The tests still exercised the real DOM launcher, real campaign generation/launch controls, real Fleet Command controls and the actual End Turn button. Service-worker and manifest behaviour were validated separately by static syntax/package checks.
