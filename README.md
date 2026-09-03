# Administratum Stellar Cartographica — Revision 23.7

**Build:** `23.7-planetary-territories-v14`

Revision 23.7 extends the stable v23.6 campaign with a planetary strategic layer while retaining the existing fleet, diplomacy, settlement, battle and offline systems.

## Revision 23.7 additions

### Faction race identity
Faction names now carry a compact race/species subtag throughout campaign ownership badges, faction-grouped colony/fleet registers and diplomacy. The campaign-start faction selector also identifies the race beside each faction type. Examples include Human, Astartes, Aeldari, Necron, Ork, Kroot, Rak’Gol and Rangdan.

### Campaign calendar in years
The Overview tracks campaign time in quarter-years. Every completed campaign turn is 0.25 years, so five completed turns display **1.25 years elapsed**.

### Planetary territory maps
Every solid planet and moon receives a dedicated Territory Map beneath the system layer. Natural territorial capacity is based on body diameter:

- 1 territory per 1,000 km of diameter.
- 1 Size-7-capable region per 3,000 km of diameter.
- 1 Size-10-capable region per 5,000 km of diameter.
- Size-10 regions form part of the Size-7-capable total.

A roughly 12,000 km world therefore has 12 territories, four regions capable of supporting settlements up to Size 7, and two of those capable of supporting Size 10.

Territories are latitude- and environment-informed. The generator uses the world's climate, habitability, atmosphere, hydrology and geology to produce polar ice, glacial expanses, forests, fertile basins, wetlands, deserts, volcanic provinces, mountains, wastes and similar regions. Clicking a territory opens its full territory inspector.

### Settlement carrying capacity
Surface settlements are assigned to a specific planetary territory. Multiple Size-5-or-smaller settlements may exist on the same planet. A settlement can only grow above Size 5 when its territory has the appropriate regional capacity, and one large-settlement slot cannot simultaneously support multiple settlements above that ceiling.

### Territory environment and habitation
The same world-wide and Territory battlefield rules used by the planetary battle generator now feed into settlement conditions. Extreme temperatures, desolation, fertility, virulence, high ground, mountains, wetlands and other conditions can modify effective Productivity, Order and Complacency. They can also generate regional environmental events during normal colony cycles. Appropriate existing infrastructure such as Power or Water can mitigate some events.

### Terraforming
A faction may terraform a solid claimed planet or moon when it has:

- the local planetary/object claim;
- at least one Size 5 surface settlement on that world;
- Technology 4 or higher;
- the displayed Supply, Materiel, Influence and Command cost.

Terraforming supports up to three campaign stages. Each stage adds engineered territories, expands Size-7/Size-10 carrying capacity, adds +5 Abundance to surveyed resource deposits, and may improve habitability.

## Existing systems retained

Revision 23.7 retains the stable v23.6/v23.5.2 systems: in-system AU fleet navigation, map-click movement, inter-system and Multi-Journey travel, visible routes, fleet designation rules, fleet settlements and fleet-colony factions, major threats, full diplomacy, 0–200 Diplomatic Standing, allied detachments, settlement claims, Orbital Platforms, settlement infrastructure/support explanations, Expedition & Survey districts/caps, Decrees, fleet action limits, recruitment/mobilisation limits, AI warfare, technology-ceiling breakthroughs, battle auto-resolve breakdowns and offline PWA operation.

## Deployment

Upload the contents of this ZIP directly to the GitHub Pages repository root rather than placing the files inside another folder.

Canonical launch URL:

`https://kobychapmans-ship-it.github.io/Stellar-Cartography/?rev=23.7-planetary-territories-v14`

Open it once online after deployment so the Revision 23.7 service worker can install and cache the application shell. The app contains no external JavaScript/CSS runtime dependencies and remains usable offline after the first successful load.
