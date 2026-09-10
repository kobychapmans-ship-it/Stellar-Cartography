# Stellar Cartographica v30.0 — Campaign Core Consolidation Audit

Build: `30.0-campaign-core-consolidation-v1`

## Purpose

v30.0 is a consolidation release built from v29.3. It fixes the runtime integration failures identified in the v29.3 full-code audit and establishes authoritative interfaces for the Horus Heresy campaign layer without replacing the proven fleet/end-turn implementation.

## Corrected blockers and critical issues

- **Book Nine / Thramas runtime scope repaired.** The v29.3 Thramas implementation now executes inside the same authoritative runtime closure as the campaign engine. The former external scope that could throw `hhcProfile291 is not defined` has been removed.
- **One v30 build identity.** HTML bootstrap, document title, manifest, `VERSION.txt`, and service-worker cache/canonical URL now identify v30.0.
- **Fleet transit retained rather than rewritten.** The working v28.3 authoritative transit pass remains the fleet movement implementation. v30 adds a runtime regression self-test instead of layering another movement wrapper over it.
- **Grand Heresy seed separated from theatre seeds.** Historical theatres derive from an immutable grand-campaign seed plus mission identity, so generating one mission no longer changes the deterministic seed of a later mission.
- **Large mission saves detached.** Saved mission theatres use an IndexedDB store (`stellar-cartographica-v30` / `heresy-theatres`) when available instead of nesting multi-megabyte sector snapshots into the small grand campaign state. A legacy embedded fallback remains for browsers/environments where IndexedDB is unavailable.
- **Portable Heresy save schema.** Heresy exports are schema 30 and explicitly contain grand-campaign state, active theatre, mission ID, and saved theatre data. The v30 importer restores this schema and migrates saved theatre snapshots back to detached storage when available.
- **Chronology notes filtered.** Editorial/reconciliation notes are not offered as playable missions.
- **Canonical historical force transport enforced.** Authored historical task forces are either embarked on a canonical fleet or deliberately established on territory. The generic sandbox starter-fleet safety net is suppressed for canonical formations. Signus daemons correctly remain territory/manfestation based rather than receiving an empty transport fleet.

## Campaign functionality added to the authoritative layer

### Automatic objective event bus

v30 introduces campaign events used by historical objectives. Current emitters include territory capture, battle resolution, fleet arrival, expedition completion, and leader-casualty reporting. Manual objective reporting remains as a fallback for tabletop outcomes and unusual objectives that cannot yet be inferred from the strategic simulation.

### Signus

- Persistent Sanguinius and Ka'Bandha casualty tracks.
- Four-step campaign casualty progression.
- Six Signus Prime war zones with persistent control.
- Home-zone defensive-trait stripping before capture.
- War-zone victories and hero outcomes emit objective events.

### Chondax

- Deception phase: The Lure, The Snare, The Break.
- Destruction phase: Tendrils of Doubt, Serpent Hunt.
- Persistent phase/mission progression.
- Campaign-result and Boon ledger scaffold.
- Note: v30 tracks earned Boons, but the individual Black Book Boon effect tables are not yet fully simulated. This is intentionally recorded as remaining content work rather than hidden behind a generic effect.

### Thramas / Book Nine

- The Logic of War.
- No Stone Upon Stone.
- Confrontation.
- The Last Bastion.
- Thramas, Triplex, Aegis, Gulgorahd and Tithe Road theatre selection.
- Spoils, Fealty and Ruin accounting.
- Triplex, Aegis, Gulgorahd and Tithe Road strategic result modifiers.
- Ruin-limit campaign conclusion with Spoils then Fealty determining the victor.

## Architecture cleanup

The v29.3 Book Nine external patch scope is removed, new v30 campaign actions use one delegated controller, and production packaging no longer carries the large collection of historical audit/test files from v26-v29.

The source still contains earlier compatibility implementations and wrapper chains for long-lived systems. They are not all physically deleted in this release because doing so simultaneously with the state migration would introduce unnecessary regression risk. v30 treats the currently proven pathways as authoritative and quarantines new development to the v30 layer. A later source-modularisation release can remove those historical implementations after equivalence tests exist for each subsystem.

## Known deliberate compatibility provisions

- Manual objective completion remains available alongside automatic objective events.
- IndexedDB theatre storage has a complete embedded-snapshot fallback.
- Existing pre-v30 standard campaign JSON imports continue through the legacy importer.
- Historical campaign content can still use deterministic fallback profiles when a Black Book-specific authored Order of Battle has not yet been entered.
