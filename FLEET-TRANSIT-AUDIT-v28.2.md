# Stellar Cartographica v28.2 — Fleet Transit End-Turn Audit

Build: `28.2-fleet-transit-endturn-fix-v59-tested`

## Reproduced fault

The v27.2 single-pass autonomous End Turn runner successfully replaced the older polling-wrapper chain, but it did not call the fleet movement phase. Older builds advanced fleets after the base End Turn completed via `campaignAdvanceAllFleets(root)`. Once v27.2 became authoritative, fleets could receive a valid `transit` or `localTransit2352` record yet remain unchanged across repeated normal End Turns.

This explains the reported symptom: the fleet card remained `In Transit` even though the rest of the campaign advanced normally.

## v28.2 correction

- Restores one fleet movement phase to every ordinary End Turn while the existing v27.2 loading overlay is still active.
- Hooks the movement phase into the already-authoritative single-pass runner rather than re-enabling any historical polling wrappers.
- Strategic translation, multi-journey legs and in-system navigation use the existing final `campaignAdvanceFleet` wrapper chain, preserving translation hazards, BFG interception, journey continuation and local movement logic.
- Each fleet advances inside its own recovery boundary. An exception in one fleet no longer prevents later fleets from advancing during that End Turn.
- Invalid or non-numeric saved transit fields are normalised before movement.
- Invalid destinations are cancelled safely to the last valid node; active multi-journeys are paused rather than left permanently committed.
- Stale `navPending247` pointers are cleared when their referenced battle no longer exists or is no longer Pending.
- A genuinely Pending player naval engagement remains paused and is not auto-bypassed.
- Untouched voyages whose `remaining` distance still exactly equals their original distance can catch up missed v27.2–v28.1 movement ticks, capped at 50 ticks in one recovery pass.
- A per-completed-turn marker prevents the restored phase from running twice during one normal End Turn.

## Regression tests

PASS — all three inline JavaScript blocks parse with `node --check`.

PASS — service worker JavaScript parses with `node --check`.

PASS — manifest JSON parses successfully and all PWA shell assets are present.

PASS — normal strategic transit advances exactly once at the End Turn boundary.

PASS — in-system transit advances through the same restored End Turn movement phase.

PASS — calling the hooked finalisation function twice for the same completed turn does not advance fleets twice.

PASS — an untouched legacy voyage from an earlier turn receives bounded catch-up movement and can arrive normally.

PASS — a synthetic exception in one fleet does not stop the next fleet from advancing.

PASS — stale naval-engagement locks are cleared and movement resumes.

PASS — a real Pending naval engagement remains intentionally paused.

PASS — an invalid strategic target is safely cancelled and an active multi-journey is paused.

PASS — v28.1 launch interception and the Chaos Daemons / Daemons of the Ruinstorm faction registrations remain present and were not replaced by this patch.

## Browser limitation

The container Chromium binary is administrator-blocked from opening both localhost and file URLs (`net::ERR_BLOCKED_BY_ADMINISTRATOR`), so a full click-through browser smoke test cannot be claimed in this environment. Runtime movement behaviour was instead verified with an isolated JavaScript integration harness against the exact v28.2 patch plus static checks of the existing launch/end-turn call graph.
