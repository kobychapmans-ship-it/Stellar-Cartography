# Administratum Stellar Cartographica — Revision 24.1

Revision 24.1 adds the dedicated **Sector → Sub-sector → System → Planetoid** navigation layer.

## New Planetoid layer
- Clicking a surveyed planet or true moon enters a full-screen Planetoid Map rather than only opening a small inspector.
- The main planet is rendered as an interactive orthographic globe with irregular, continent-like territorial regions outlined in black.
- Settlement markers rise from the actual territory and scale visually with settlement Size.
- Planetary rings, true moons, lesser moons, captured asteroids and other generated orbital features are shown on survey-relative orbital paths.
- Selecting a true moon displays its own territorial globe inset while preserving the whole parent planetary system in view.
- Drag rotates the globe and wheel/trackpad scrolling zooms the Planetoid scene.
- The existing Territory Map uses the same organic territorial renderer instead of rectangular four-corner cells.

## Preserved Revision 24.0 systems
Research-based Technology upgrades, Technology 7–10 apex architecture, claim-aware search, expedition arcade games, raiders, territory battles, native sovereignty, diplomacy, fleet movement, colonies, Decrees, planetary territories and terraforming are retained.

## GitHub Pages
Upload all files from this package directly to the repository root and launch:

`?rev=24.1-planetoid-orbital-territories-v18`

The PWA is fully self-contained and remains usable offline after the first successful online launch.
