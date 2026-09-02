# Administratum Stellar Cartographica — Revision 23.4

Revision 23.4 extends the Revision 23 grand-strategy campaign layer while retaining settlement founding, mobilisation limits, fleet action limits, AI warfare, strategic colony programmes and the v23-only PWA migration.

## Revision 23.4 additions

- Full diplomacy options are displayed directly in the Factions / Diplomacy tab rather than hidden behind a generic Negotiate button.
- Diplomatic Standing ranges from 0–200 and combines relations with active treaties.
- At 120+ Diplomatic Standing and Allied relations, the player may request one allied detachment per allied faction per turn. The detachment is generated from that faction's own troop catalogue and joins a selected Task Force.
- New Expedition & Survey settlement district. A resource expedition now requires this district in a settlement on the exact planet or spatial object being exploited.
- Expedition launches are capped per local hub and faction each turn. Higher district tiers increase capacity; an Expedition Support Directive temporarily raises it.
- Battle auto-resolve now stores and displays effective points, command/doctrine rolls, fortification contribution, combat multipliers, victory margin, casualty calculation, surviving Strength and territorial outcome.
- New Decrees tab with four neutral one-turn directives: Resource Allocation, Expedition Support, Operational Coordination and Diplomatic Initiative. Each costs Supply, Influence and Command.

## GitHub Pages / PWA deployment

Replace the repository-root files with the contents of this package. `index.html`, `manifest.webmanifest` and `sw.js` must remain in the root of the Pages deployment.

Canonical launch URL:

`index.html?rev=23.4-grand-strategy-expeditions-decrees-v5`

The service worker uses a new Revision 23.4 cache key and deletes older Cartographica caches during install/activation.
