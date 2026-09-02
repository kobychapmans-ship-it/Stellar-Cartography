# Administratum Stellar Cartographica — Revision 23.5.2

Build: `23.5.2-in-system-navigation-v12`

This build is based on the stable v23.5.1 Fleet Operations runtime and corrects fleet movement inside a star system without removing any prior campaign systems.

## In-System Navigation

Sector and sub-sector campaigns now track two separate fleet positions:

- **Strategic System** — the star system containing the fleet. This remains unchanged during local movement.
- **Local Position** — System Translation Point, world, moon, asteroid/belt, station, or other spatial object inside that system.

The Fleets tab contains a dedicated **In-System Navigation** panel. Local travel uses AU realspace movement, one fleet action, Supply, and **0 Command**. It never initiates a Warp/inter-system translation.

You can move locally either by:

1. Selecting a world/object from the In-System Navigation dropdown and choosing **Move Within System**; or
2. Choosing **Plot Local Move on System Map** and clicking a world, moon, asteroid, or spatial object on the current system map.

Confirmed local routes display directly on the system map with the fleet marker moving along the route.

The separate **Inter-System Journey Planner** remains available for travel to other star systems, including direct translations, manual waypoints, and automatic Multi-Journey routes.

## Retained systems

The build retains full diplomacy, Diplomatic Standing and allied detachments, settlement founding, fleet-colonies, Expedition & Survey districts and expedition caps, Decrees, fleet roles and development, recruitment/mobilisation limits, fleet action limits, major threats, AI warfare and diplomacy, technology-ceiling breakthroughs, battle auto-resolve detail, and offline PWA support.

## GitHub Pages deployment

Replace the repository-root files with the contents of this package. After GitHub Pages completes deployment, open once while online:

`https://kobychapmans-ship-it.github.io/Stellar-Cartography/?rev=23.5.2-in-system-navigation-v12`

The service worker then caches the application shell for offline use.
