# Administratum Stellar Cartographica — Revision 23.5

Build: `23.5-fleet-operations-stable-v11`

This package is built directly on the known-good Revision 23.4.1 Stable Runtime. The v23.5 fleet/threat systems remain inside the same campaign runtime and do not recreate the old out-of-scope extension failure.

## Revision 23.5 additions

### Fleet Journey Planner
The Fleets tab now provides navigation without repeated map clicks:
- Direct Translation to any generated campaign navigation node.
- Multi-Journey waypoint planning, up to 24 waypoints.
- Auto-Route for long trips.
- Route summary with legs, distance, estimated turns, Supply and Command.
- The complete multi-journey reserves its Supply once and consumes one fleet strategic action when confirmed.
- Later legs begin automatically after arrival unless a threat/disruption pauses the route.
- Paused journeys can be resumed or cancelled.

Confirmed fleet movement is displayed on the strategic map. Sector/sub-sector movement retains the existing route arrows, multi-journeys add the full itinerary, and direct AU movement now visibly draws the origin/destination line and moving fleet marker on system maps.

### Translation failure notices
Player translation attempts now show a modal reason when rejected, including invalid destinations, current transit, active journey, strategic disruption, cargo overload, exhausted fleet actions, threat/warp blockade, insufficient Supply or insufficient Command. Invasion translation also reports missing/invalid targets and missing embarked ground forces.

### Fleet Designation Rules
The Fleets tab contains an open Fleet Designation Roles reference showing each role's description and its Speed, Capacity, Void, Assault and Colony modifiers.

### Fleet Development and Fleet-Colony factions
Fleets can progress through:
1. Sustained Logistics Refit
2. Habitat & Civilian Decks
3. Mobile Colony Core
4. Migratory Enclave
5. Fleet-City

At Tier III the fleet becomes both a fleet and a mobile settlement. It contributes settlement economy, defence and political power and appears in the Colonies interface as well as the Fleet interface. Higher tiers add survey/expedition capacity and stronger strategic contributions. A faction with a Tier III+ mobile colony may adopt a Fleet-Colony polity.

### Major Threat Table
A major system-scale threat is scheduled 1–50 turns after the previous threat. The table includes Solar Flares, Necron Awakenings, Xenos Uprisings, Warp Storms, Space Hulk Incursions, Plague Blooms, Gravitic Shears, Archeotech Cascades, Greenskin Migrations, Empyric Incursions, Relativistic Debris Storms and Psychic Resonance Crises.

Threats have persistent multi-turn effects and can damage forces, settlements, Defence and resources or disrupt/block fleet translation. Active threats and the next scheduled threat check appear in the campaign overview.

## Preserved systems
Revision 23.5 retains the complete Revision 23.4.1 campaign feature set including full diplomacy, allied detachments, restored settlement founding, strategic settlement programmes, Expedition & Survey districts and launch caps, Decrees, detailed battle auto-resolve, fleet action limits, empire recruitment/mobilisation ceilings, proactive AI attacks, Influence negotiation leverage and technology-ceiling breakthroughs.

## GitHub Pages / PWA installation
Upload the **contents** of this folder directly to the repository root. `index.html`, `manifest.webmanifest`, `sw.js` and the icon files must sit directly in the Pages root.

Canonical launch URL:

`https://kobychapmans-ship-it.github.io/Stellar-Cartography/?rev=23.5-fleet-operations-stable-v11`

Open that URL once while online after GitHub Pages finishes deploying. The service worker caches the application shell and icons for subsequent offline launches. The existing PWA application ID is intentionally retained so a working v23.4.x Home Screen installation can update in place.

The service worker deletes older Cartographica caches during activation and uses network-first navigation with the v23.5 cached application as the offline fallback.
