# Administratum Stellar Cartographica — Revision 24.5
## Territory Operations & Campaign UX

Build: `24.5-territory-operations-v26`

Revision 24.5 keeps the v24.4 cohesive army generator and adds a territory-first political/ground operations pass.

### Territory-first claims
- The old Overview `Claim Adjacent` control is removed from the normal player workflow.
- Planet/moon claims open a territory chooser showing every region, biome, current claimant and occupation modifier.
- Planet/object claim buttons and map-click claims route through the same territorial chooser where territories exist.
- Claim success/failure, blocked native sovereignty, foreign claims, insufficient resources and occupying-force modifiers all use explicit notices.

### Ground operations
- Embarked Task Forces can disembark into a specific planetary territory.
- Deployed armies are marked on territory maps and generate a deployment notice.
- A deployed force gives +2 to the claim roll in its occupied territory and +1 elsewhere on the same object.
- Ground forces may move one territory per campaign turn for 1 Supply and may re-embark when an eligible fleet has capacity.
- Planetside-adventure deployment now shares the same physical ground-force state.

### Technology and UI
- Technology advancement uses permanent Technology rather than temporary colony bonuses when checking upgrade eligibility.
- The Upgrade Technology button consumes the displayed Research threshold and advances the permanent tier.
- Military Research explicitly states its yield: `1d6 + research-infrastructure bonus` Research for 8 Materiel, 3 Influence and 1 Command.
- Open campaign details/dropdowns persist across dashboard rerenders.
- Apex System Architecture is collapsible and remembers its open state.

### Gas giants
- Gas giants are now included in the campaign location catalogue.
- They generate 2–3 atmospheric deposits, mainly Hydrogen/Helium, Helium-3, methane/volatiles, noble-gas catalysts or exotic atmospheric compounds.
- Gas giants cannot host normal surface colonies. They use a Gas Harvesting Platform / atmospheric station settlement instead.

### Remnant settlements
- In Campaign Mode, the legacy planet-side `Add Colony / Settlement` bar is removed from object pages.
- Existing settlements remain visible.
- Worlds can generate Ghost Colonies, Lost Mining Enclaves, Pre-Imperial Settlements, Xenos Habitation Ruins, Derelict Research Stations or War-Torn Refuges.
- Deployed forces may investigate them for encounters, Materiel, Research, Influence or new resource caches.

### Fleet intelligence
- Foreign fleets use high-contrast faction-coloured directional markers in strategic scenes.
- System-map foreign fleets and raider bands receive explicit arrow markers; raiders use hostile red markers.

### Deployment
Upload the files in this directory to the repository root and launch:

`https://kobychapmans-ship-it.github.io/Stellar-Cartography/?rev=24.5-territory-operations-v26`

The application remains self-contained and PWA/offline capable after the first successful online load.
