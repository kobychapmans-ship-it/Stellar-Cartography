# Administratum Stellar Cartographica — Revision 20 PWA

Revision 20 gives settlements physical settlement silhouettes, graphical building/district icons, an ongoing Settlement Operations panel, and a configurable map-intelligence layer system. The default campaign map only shows standing-force (T) and population (P) identifiers; resources, colonies, fleet-contact badges, defences, adventures and ownership halos can be switched on individually from Campaign Command.

## GitHub Pages / iPhone update
1. Replace the repository-root `index.html`, `manifest.webmanifest`, `sw.js`, and icons with the files in this package.
2. Keep GitHub Pages set to `main` and `/ (root)`.
3. Open `index.html?rev=20-visual-settlements-v1` once in Safari while online.
4. If an older Cartographica Home Screen icon is installed, remove it and add Revision 20 again with Share → Add to Home Screen.

The Revision 20 service worker uses a new cache/PWA identity and deletes older Cartographica caches during installation.
