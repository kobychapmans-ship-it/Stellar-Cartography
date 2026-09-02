# Administratum Stellar Cartographica — Revision 23.4 Complete / Offline Locked

This package contains the full accumulated campaign feature set through Revision 23.4. Legacy revision-labelled compatibility functions remain internally where newer systems depend on them, but they can no longer relabel or launch the application as an older revision.

## Installation on GitHub Pages

Upload the **contents** of this folder to the repository root. `index.html`, `manifest.webmanifest`, `sw.js`, and `sw-v23-4.js` must all sit in the root together.

Open once while online:

`index.html?rev=23.4-final-offline-v8`

The application registers the versioned `sw-v23-4.js` worker at the root scope, purges older Cartographica caches, claims the page immediately, and caches the complete self-contained application shell for offline use.

## PWA / Home Screen

This build has a new v23.4-only PWA identity so it cannot be mistaken for an older installed revision. If an existing Home Screen icon was originally installed from Revision 12 or another old manifest, remove that old icon and add the site to the Home Screen again after the first v23.4 online load. The new icon will then open `23.4-final-offline-v8` and continue to work offline.

## Included campaign systems

- Full direct diplomacy and Influence leverage
- Non-aggression, access, trade, aid, guarantees, defensive pacts, alliances, peace, war, treaty cancellation and vassalisation
- Diplomatic Standing and allied detachments
- Settlement founding/restoration and colonial strategic programmes
- Expedition & Survey districts with local and empire launch caps
- Decrees for resources, expeditions, battle and diplomacy
- Detailed battle auto-resolve breakdowns
- Fleet action and empire recruitment/mobilisation caps
- Proactive AI wartime attacks and pop-up notifications
- Difficult technology-ceiling breakthroughs
- Offline PWA cache and update migration
