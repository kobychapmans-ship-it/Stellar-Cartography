# Administratum Stellar Cartographica — Revision 23.9

**Build:** `23.9-planetside-expeditions-raiders-megastructures-v16`

Revision 23.9 is an additive expansion of the verified Revision 23.8 stable campaign runtime. It retains the existing territorial sovereignty, native integration/pacification, resource-expedition puzzles, fleet navigation, territory battles, diplomacy contacts, settlements, Decrees, fleet colonies, threats and all earlier campaign systems.

## Revision 23.9 additions

### Planetside Adventure Expeditions
Chapter II planetside adventures now become campaign operations attached to a specific planetary territory. The player must physically bring a Task Force to the planet or moon, deploy it into the assigned territory, and make an expedition roll. Difficulty reflects the danger/complication/reward profile. Rewards translate into campaign effects such as temporary military strength, research/Technology advantages, navigation/Command support, colonial foundation advantages, Supply, Materiel or Influence.

### Planetary Map Settlement Visualisation
Planet territory maps display settlement markers inside their assigned territories. Marker scale/symbol changes across the colony-size spectrum from Ghost Town through Metropolis/Hive. Orbital defence platforms are displayed separately outside the planetary globe as DEF markers. These additions are visual only and do not change existing settlement statistics.

### Roaming Raider & Mercenary Armies
Every completed campaign turn has a 0.5% chance to generate an independent 500–3,000 point raider army. Raider origin is drawn from the campaign faction/race catalogue, but the band is an independent hostile power rather than a normal faction. Raiders seek weakly defended systems, avoid major powers, strip resource Abundance and treasury resources, and damage poorly protected settlements.

The Diplomacy tab gains a separate Mercenary & Raider Contacts section with temporary options rather than alliances:
- Buy Safe Conduct
- Bribe Withdrawal
- Hire Diversion against a contacted rival

### Moon Colonisation
All generated true moons, including moons orbiting gas giants, are added to the settlement-site catalogue. Small moons under roughly 3,000 km are normally limited to one surface settlement and a maximum Size of 5. Larger moons receive additional settlement/territorial capacity. Orbital Platforms remain separate from the moon surface limit.

### Technology 10 & System Architecture
All faction technology ceilings can ultimately be broken through to Technology 10. The final tiers support system-scale construction:
- T7 Heliophagic Collector Swarm
- T7 Orbital Foundry Ring
- T8 Stellar Lifting Array
- T8 Stabilised Warp / Webway Portal
- T9 System Bastion Grid
- T9 Orbital Habitat Ring
- T10 Stellar Energy Enclosure
- T10 Reality Anchorage Network

These are built in-system through the Colonies/System Architecture panel and provide economy, mobilisation, defence, translation or strategic-resource effects.

## Installation / GitHub Pages
Replace the files in the repository root with the contents of this ZIP. Do not upload the containing folder itself.

The canonical launch URL is:

`https://kobychapmans-ship-it.github.io/Stellar-Cartography/?rev=23.9-planetside-expeditions-raiders-megastructures-v16`

The manifest keeps the established Cartographica PWA identity so an existing v23.x Home Screen installation can update in place. The service worker uses a fresh Revision 23.9 cache and deletes older Cartographica caches during install/activation.

After deployment, open the canonical URL once while online. The application shell is then cached for offline use.

## Offline package
The runtime uses no external JavaScript or CSS dependencies. The service worker pre-caches the main HTML, manifest and icons and uses the cached Revision 23.9 shell when navigation is attempted offline.
