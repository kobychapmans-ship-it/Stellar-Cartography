# v28.0 — Faction Leaders of Renown

Built from the supplied v27.2 stable autonomous-end-turn package.

- Leader dropdown immediately under faction selection, with benefits and doctrine preview.
- 109 unique character profiles, including all 18 Legion Primarchs; 71 specialist packages; 26 used campaign protocols.
- Protected character/initial-retinue detachment, specialist recruitment unlocks, persistent command benefits and save migration without duplicate starting grants.
- Campaign effects include fortification, occupation integration, covert presence, consumable fleet translations, prophetic system withdrawals, civic terror, contagion, repair, specialist reinforcement, collected exhibits and persistent daemonic breaches.
- Chaos Daemons and Ruinstorm campaign foundations added. Non-repository factions are not assigned invented characters.
- Existing Craftworld, Deep Time, exports, settlement controls and single-pass asynchronous end-turn architecture retained. Historical audit files in this package describe their original releases, not new device testing.

## Repository coverage

| Campaign faction | Eligible profile count |
| --- | ---: |
| Legiones Astartes | 77 |
| Solar Auxilia | 2 |
| Mechanicum | 4 |
| Questoris Knights | 1 |
| Talons of the Emperor | 2 |
| Craftworld | 7 |
| Necron | 1 |
| Dark Compliance | 28 |
| Chaos Daemons | 15 |
| Ruinstorm | 3 |
| Militia | 0 |

Counts overlap where source characters are shared. Supplement catalogues are not separate campaign civilizations. Militia keeps normal command; no generic commander is presented as a named renowned character.

Source: https://github.com/BSData/horus-heresy-1st-edition

Snapshot: `0a4c10da15f4ea40eea0932090fadafe3b90b696`.

Leader profiles and costs derive from source catalogue entries. Lore-driven campaign effects and specialist package profiles are condensed adaptations for Cartographica, not a tabletop rules simulator. Leaders sharing a doctrine still have individual profiles, faction eligibility and retinue selections; this release does not promise 109 completely distinct mechanical subsystems.

## Verification

- Both inline scripts compile in Node.
- Full application evaluates with a stubbed DOM; exposed leader audit passes source/coverage, protocol, specialist, launcher, battle-hook and migration checks.
- Functional state checks passed for repeat-safe Horus starting benefits, permanent Command capacity, character/retinue creation, consumable translation generation, specialist unlocks, Curze's civic terror and Ahriman's system-level omen withdrawal.
- PWA manifest/service-worker identity updated; application ID intentionally retained.
- No physical iOS/Android or live browser visual test was performed. Deep Time and older systems were preserved, but the inherited historical stress reports are not a fresh full-system regression run.
