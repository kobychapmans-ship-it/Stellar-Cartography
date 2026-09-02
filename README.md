# Administratum Stellar Cartographica — Revision 23.2 PWA

This package is a hard v23-only migration. Revision 22 is not used as the PWA identity, launch URL, or navigation fallback.

## Deploy to GitHub Pages
1. Replace the repository-root files with the contents of this package.
2. Keep GitHub Pages deployed from `main` / `(root)`.
3. Open `index.html?rev=23-grand-strategy-diplomacy-mobilisation-v3` once in Safari while online.
4. If an older Home Screen icon still identifies itself as Revision 22, remove that old icon and add the site to the Home Screen again. The new manifest uses a distinct Revision 23 app ID.

## Hard migration behaviour
- The manifest ID is Revision 23 only.
- The start URL is Revision 23 only.
- Any old root/index launch URL, including `rev=22...`, is redirected to the canonical Revision 23 URL by the service worker once the new worker is active.
- All older Cartographica caches are deleted during service-worker install/activation.
- The HTML also canonicalises its own URL to Revision 23 before the application UI runs.

## Revision 23 systems
- Settlement strategic programmes using Supply + Influence for Productivity, Order, or Piety/Cohesion.
- Empire-wide mobilisation/recruitment ceilings based on settlement size and military development.
- Per-fleet strategic action limits.
- More proactive AI wartime offensives with attack notifications.
- Influence leverage in negotiations.
- Difficult technology-ceiling breakthroughs.
- Expanded Total War / HOI-style diplomacy including treaties, trade, guarantees, alliances, peace and vassalisation.
