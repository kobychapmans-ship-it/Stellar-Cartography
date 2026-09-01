# Administratum Stellar Cartographica — iPhone PWA Revision 21

Revision 21 focuses on campaign turn flow and colony clarity.

## Main changes
- Established colonies and settlements no longer expose manual 90-day advance or reroll controls during a campaign. Settlement growth happens automatically at End Turn.
- End Turn now presents a 10-second campaign-resolution progress screen before AI, fleet, economy, colony and event processing completes.
- Campaign save/export/import controls are moved to their own Save / Data tab.
- Territory view now explains Site Defence, Fortify costs and auto-resolve effects.
- Colony cards are reformatted for phone screens so colony characteristics, operations and output no longer overlap.
- Settlement development screens show the Size growth roll, current district capacity and the next Size/district unlock.

## Install through GitHub Pages
1. Replace the files in the root of `kobychapmans-ship-it/Stellar-Cartography` with the files in this package.
2. Keep Pages set to `main` → `/ (root)`.
3. Open `https://kobychapmans-ship-it.github.io/Stellar-Cartography/index.html?rev=21-turn-cycle-colony-ui-v1` in Safari while online.
4. If an older Home Screen copy exists, remove it first.
5. Share → Add to Home Screen.
6. Launch once while online so the Revision 21 service worker takes control.

The service worker uses a new Revision 21 cache identity and deletes older Cartographica caches when activated.
