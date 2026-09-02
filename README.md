# Administratum Stellar Cartographica — Revision 23.4.1 Stable Runtime

This is the corrected, feature-complete v23.4 campaign PWA. It fixes the runtime scope failure that prevented the post-v22/v23 feature layers from initialising while preserving the full campaign systems already created.

## Deploy to GitHub Pages
Replace the files in the repository root with **all files in this package**. Keep both `sw.js` and `sw-v23-4.js`; the latter is a compatibility update path for existing v23.4 Home Screen installs. GitHub Pages should remain configured for `main` / `(root)`.

After the Pages deployment completes, open once while online:

`https://kobychapmans-ship-it.github.io/Stellar-Cartography/?rev=23.4.1-stable-runtime-v9`

The page does **not** force-reload when the service worker changes. It updates the URL revision in-place and registers the stable worker after the game has loaded.

## Offline
On the first successful online load, the worker caches `index.html`, the canonical start URL, manifest and icons. Navigation is network-first while online and falls back to the cached stable build when offline. The game HTML has no external script/style/CDN dependency.

## Included campaign systems
Full direct diplomacy and Influence leverage; 0–200 Diplomatic Standing; allied detachments; settlement founding; settlement Supply/Influence programmes; Expedition & Survey districts and launch caps; Decrees; detailed auto-resolve; fleet action limits; empire recruitment/mobilisation limits; proactive AI attacks and popups; technology-ceiling breakthroughs; trade/access/guarantees/defensive pacts/alliances/vassalisation; save/data and turn-cycle systems.

See `BUILD-VERIFICATION.txt` for the runtime test results and root-cause notes.
