# Administratum Stellar Cartographica — iPhone PWA

Phone-ready offline build of Administratum Stellar Cartographica.

## Install on iPhone
1. Enable GitHub Pages for the repository: Settings → Pages → Deploy from branch → main → /(root).
2. Open the Pages URL in Safari.
3. Tap Share → Add to Home Screen.
4. Launch the Home Screen app once while online. The service worker caches the full app shell for later offline use.

## Updating
Replace the root files with a newer build. This package uses a versioned service-worker cache so an updated deployment replaces older cached application files after the site is opened online once.
