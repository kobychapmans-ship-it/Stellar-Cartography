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


## Revision 23.4 launch hotfix
This package is hard-pinned to Revision 23.4. The manifest uses a v23.4-specific PWA ID, the canonical launch URL is `index.html?rev=23.4-grand-strategy-expeditions-decrees-v6`, the service worker redirects any other app navigation to that URL, and all visible fallback revision labels have been updated to 23.4.

For an iPhone Home Screen install that was originally created from v23.3, open the v23.4 canonical URL once in Safari while online so the new service worker activates. If the old icon still preserves the old installed-app metadata, remove that Home Screen icon and add it again from the canonical v23.4 page.
