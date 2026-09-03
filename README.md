# Administratum Stellar Cartographica — Revision 23.8

**Build:** `23.8-frontier-contact-expeditions-v15`

Revision 23.8 extends the stable Revision 23.7 planetary-territory campaign without removing the existing fleet navigation, settlement, diplomacy, battle, threat, Decree, terraforming or offline-PWA systems.

## Revision 23.8 additions

### Individual territorial sovereignty
Multi-territory planets and moons can now be divided between competing factions. Each territory carries its own claimant, so two or more powers may hold different regions of the same world. Territory claims are shown on the planetary territory map and feed directly into settlement founding and territory warfare.

### Native sovereignty
Organised native inhabitants block claims and settlement creation until resolved. A faction may pursue Influence-based integration or military pacification with a present Task Force. Existing settlements are migrated as already-integrated sovereignty so older saves remain usable.

### Expedition recovery operations
Player resource expeditions now open a short recovery-operation mini-game. Puzzles include arithmetic, sequence, signal and cogitator problems. Difficulty ranges from 1–5 and increases with deposit/reward value. Higher difficulties use additional stages and can award extra research or a temporary Technology advantage. AI expeditions continue to resolve automatically.

### Expanded local navigation
The in-system destination catalogue includes worlds, moons and non-empty spatial features even when they are not claimable or settleable. Empty void is excluded. This sits on top of the existing AU/local travel and inter-system journey systems.

### Hierarchical registers
Colonies are grouped `Faction → System → Planet/Object → Settlement`. Fleets are grouped `Faction → System → Local Planet/Object → Fleet`, reducing late-campaign interface clutter.

### Fleet troop-capacity enforcement
Embarked forces may not exceed the fleet's allocated troop-point capacity. Overloaded fleets cannot translate or make local moves, recruitment cannot overflow an embarked force's transport, and allied detachments cannot be added when lift capacity is insufficient. The UI explains the capacity failure.

### Strategic Command networks
Command Support now increases the faction's per-turn Command ceiling. Every 2 Command Support grants +1 maximum Command, to a maximum of +10 additional Command. A new Strategic Command & Communications district chain provides a dedicated late-game route to build Command capacity.

### Contact-limited diplomacy
Diplomacy only shows factions with established contact. Contact is created when your fleet/colony enters their operating system, their fleet/colony enters yours, both powers operate in the same system, or an existing treaty/war provides a diplomatic channel. First contact generates a popup notification.

### Territory battles
The Battles tab can declare a battle for one specific planetary/moon territory. An attacker victory transfers only the selected territory and occupation of settlements inside it. The rest of the world and the star-system owner are left unchanged unless changed by separate campaign actions.

## Existing systems retained

Revision 23.8 retains Revision 23.7 and earlier stable systems, including planetary territory maps and terraforming, faction race subtags, year-based campaign time, in-system AU navigation, map-click movement, inter-system and Multi-Journey travel, fleet roles, fleet settlements/fleet-colony factions, major threats, full diplomacy, Diplomatic Standing, allied detachments, Orbital Platforms, detailed infrastructure/support effects, Expedition & Survey districts/caps, Decrees, fleet action limits, recruitment/mobilisation limits, AI warfare, technology-ceiling breakthroughs, battle auto-resolve breakdowns and offline PWA support.

## Deployment

Upload the files from this ZIP directly into the GitHub Pages repository root.

Canonical launch URL:

`https://kobychapmans-ship-it.github.io/Stellar-Cartography/?rev=23.8-frontier-contact-expeditions-v15`

Open it once online after deployment so the Revision 23.8 worker can cache the application shell. The runtime contains no external JavaScript/CSS dependencies; after the first successful load, the PWA can fall back to its cached application shell offline.
