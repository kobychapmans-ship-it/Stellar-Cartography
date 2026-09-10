# Administratum Stellar Cartographica v30.0

Build `30.0-campaign-core-consolidation-v1`.

v30.0 consolidates the campaign runtime after the v28-v29 feature expansion. It keeps the proven autonomous End Turn and fleet-transit path, repairs the Book Nine/Thramas runtime integration, separates Horus Heresy grand-campaign identity from generated mission theatres, adds detached theatre saves, introduces automatic historical-objective events, and turns Signus, Chondax and Thramas campaign data into persistent campaign state.

Open `index.html` directly or host the folder as a static PWA. The service worker uses the v30 cache identity. For installed copies, load the new build online once so the new service worker can replace older cached shells.

See `V30-CONSOLIDATION-AUDIT.md` and `TEST-REPORT-v30.0.txt` for implementation and regression details.
