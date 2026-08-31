# Administratum Stellar Cartographica — iPhone PWA

This build is intended to be served from an HTTPS static host (for example GitHub Pages). On iPhone, open the hosted URL in Safari, then use **Share → Add to Home Screen**. The service worker caches the complete application after the first successful load, so it can then run offline as a standalone Home Screen app.

## GitHub Pages
1. Create a repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Select the default branch and `/ (root)`.
5. Open the Pages URL in Safari on the iPhone.
6. Use **Share → Add to Home Screen**.
7. Launch it once while online so the offline cache completes.

The generator itself does not require remote APIs or external assets after installation.
