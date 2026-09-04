# Administratum Stellar Cartographica — Revision 24.7
## Deep-Time Campaigns & Battlefleet Operations

Build: `24.7-deep-time-battlefleet-v29-tested`

Revision 24.7 extends the v24.6 settlement-governance campaign with a sector-history start mode and a dedicated void-war layer.

## Clean integration / tested build v29
- Revision 24.6 settlement-governance and Revision 24.7 deep-time/battlefleet code are now integrated inside the core runtime scope instead of being loaded as isolated scripts. This fixes the regression where the newer layers could not access core campaign/world functions and the PWA appeared to fall back to an older revision.
- Active legacy v24.5/v24.6 title and badge overwrites are disabled.
- The cache/build key is `24.7-deep-time-battlefleet-v29-tested`, forcing a distinct service-worker cache from the earlier v28 package.
- Deep-Time starts use up to 250 detailed historical simulation steps. Starts above 250 turns compress multiple historical turns into each step while scaling positive income, keeping Turn 1000 practical without simply changing the displayed turn number.
- Browser-harness regression tests passed for Turn 0 launch, campaign chronology controls, BFG-inspired fleet identity, cross-system strategic targets, fleet-battle creation and auto-resolve, 100-turn established-polity prehistory, 1000-turn established-polity prehistory, and campaign JSON serialization.

### Campaign chronology and autonomous prehistory
- The campaign launcher now includes a chronology choice beside faction/start setup.
- **Normal** starts player control at **Turn 0**.
- **Deep-Time** exposes linked slider and number controls from **100 to 1000 turns**.
- Deep-Time runs the campaign AI through economy, settlement maintenance, expansion, recruitment, fleet movement, wars, consequences and sector events before player handover.
- Established-polity starts participate in the historical simulation and are handed to the player in their evolved state.
- Emerging-expedition starts remain outside the sector simulation and arrive only after prehistory, preventing the player's expedition from being consumed by the AI before play begins.
- Longer histories can create additional procedural polities and periodically consolidate runaway campaign records so very long starts remain practical.

### Strategic attack movement
- Fleet movement and attack orders can target any strategic system, not only an adjacent territorial border.
- Distance continues to determine supply and transit time.
- The order panel now identifies major controlled systems near the direct translation corridor as context, but intervening political ownership is not a hard movement wall.
- Ground invasions only proceed after the attacking fleet has established local void access.

### Fleet engagements
- Hostile fleets at an attack destination create a persistent **Fleet Engagement** before the invasion lands.
- Player-involved engagements pause for a decision: **Auto-resolve**, or play a Battlefleet Gothic tabletop battle and report Attacker Victory, Defender Victory or Draw.
- AI-vs-AI fleet battles auto-resolve without interrupting play.
- Auto-resolve uses faction doctrine, strategic fleet class, role, command quality, gunnery, lance emphasis, ordnance, boarding, resilience, speed, veteran experience and existing fleet damage.
- Fleet damage persists between engagements and therefore affects later strategic naval strength.
- Victorious attackers continue their invasion transit; defenders and draws repulse the attacking movement.

### Faction naval identities
Every existing Cartographica campaign faction receives its own naval doctrine. Canonical Warhammer-aligned factions use the nearest Battlefleet Gothic fleet family as inspiration, while Cartographica-specific factions receive analogue doctrines rather than copied ship profiles. Fleet cards show doctrine, strategic style, typical vessel categories, suggested tabletop battle size and the strategic combat profile used by auto-resolve.

The implementation is deliberately an abstraction layer: it does not reproduce Battlefleet Gothic ship data sheets or copyrighted fleet-list text. It uses the uploaded Remastered rulebook/fleet-book concepts as design inspiration for movement, command, weapons emphases, fleet identity and campaign persistence.

## Previous revision — 24.6 Settlement Governance
Build: `24.6-settlement-governance-v27`

Revision 24.6 builds on v24.5 Territory Operations with a campaign-maintenance and long-game usability pass aimed at turns 30+.

### Collapsible long-game UI
- Campaign option panels beneath H3/H4/H5 banner headings can be collapsed and remember their state.
- From Turn 30 onward, eligible option-heavy campaign sections default to collapsed to reduce dashboard clutter.
- Every settlement is now its own persistent collapsible entry. Player settlements begin open in the early campaign and can be closed manually at any time.

### Ground-force territory operations
- Ground-force territory movement is bound at the document level so it works from the planetary inspector as well as the campaign dashboard.
- Moving to the territory already occupied is rejected without spending Supply.
- Occupation now scales with effective Task Force points:
  - 1–499 pts: +1 Claim
  - 500–1,499 pts: +2 Claim, +1 Order
  - 1,500–2,999 pts: +3 Claim, +2 Order
  - 3,000–5,999 pts: +4 Claim, +3 Order
  - 6,000+ pts: +5 Claim, +4 Order
- Multiple forces can stack up to +8 Claim and +5 Order. Same-world forces outside the exact territory contribute partial occupation and rebellion suppression.

### World-generated settlement networks
- Inhabited worlds now generate 1–7 settlement centres as part of population/world generation, based on development level and settlement pattern.
- Advanced, orbital and voidfaring societies begin with denser, larger settlements, more infrastructure and regional cultural variants.
- These generated population centres are converted into functioning campaign settlements at campaign initialization, with territories, infrastructure, support and starter districts.
- New surface settlements can no longer be stacked onto an object that is already inhabited or already has a surface settlement. Frontier founding remains available on genuinely unsettled objects; orbital/gas infrastructure remains separately buildable.

### Settlement governance and construction choice
- Each settlement exposes a governance panel with consequence risk, environmental hostility, occupation support and generated culture.
- Players choose which Infrastructure to install for 5 Materiel rather than being forced to build the randomly suggested item. Any chosen infrastructure resolves the current infrastructure requirement.
- Players may also choose installed Support infrastructure for 6 Materiel.
- Existing district/building choices remain available through the settlement development web, now alongside explicit infrastructure planning.

### Settlement consequences and rebellions
- Every 90-day settlement cycle checks a visible risk built from territorial hostility, low Order, low Complacency, low Piety/Cohesion, infrastructure backlog, excessive stagnation and active rebellion.
- Occupying ground forces lower practical risk through Order and suppression.
- Triggered d10 consequences are: 1–2 disorder, 3–4 sabotage/administrative paralysis, 5 sectarian agitation, 6 infrastructure failure, 7–8 separatism at lower risk or rebellion escalation at high risk, and 9–10 open rebellion.
- Rebellions carry an insurgent points value. Ground forces and garrison support can suppress them; unresolved rebellions can grow.

### Tall / Wide AI settlement management
- AI factions now receive a persistent Tall, Balanced or Wide growth strategy derived from personality/doctrine.
- AI turns reserve Command for settlement upkeep before expansion completes.
- AI maintenance restores ghost settlements when affordable, resolves infrastructure backlogs, installs useful support, fights rebellions, performs emergency stabilisation and constructs districts in healthy colonies.
- Tall factions concentrate more heavily on developed cores; Wide factions tolerate a lower stability floor and a larger settlement cap, but still maintain existing settlements before uncontrolled expansion.

### Resource economy
- Plentiful resource deposits have higher yields and lower Supply/Influence extraction friction.
- Tier IV Resource Exploitation automatically harvests one local deposit each campaign turn without expedition cost.
- Tier V automatically harvests two deposits per turn and adds +25% automated yield.
- This gives mature industrial settlements a way to bypass repetitive manual extraction gameplay.

### Expeditions
- Planetside expeditions now support Balanced, Cautious, Bold, Scholarly and Force-led approaches.
- Rewards are strategic-scale rather than minor one-off gains, including examples such as +30 Research, temporary Technology, 20–35% discounts on the next district, major Supply/Materiel/Influence caches, extra Command, and +25% effective army power for several campaign turns.
- Cautious expeditions improve reliability and reduce losses; Bold expeditions increase rewards but punish failure; Scholarly and Force-led approaches specialise toward research and military deployments.

### Compatibility
- The v24.5 territory claim, native sovereignty, gas giant, remnant, fleet, battle and ground-deployment systems remain in place.
- The revision is layered over the existing save structure. New campaigns receive full generated settlement networks; existing campaign records are preserved rather than blindly duplicating world-generated settlements.
- No external JavaScript or CSS runtime dependency was added.

### Deployment
Upload the files in this directory to the repository root and launch with the revision query:

`?rev=24.6-settlement-governance-v27`

The application remains PWA/offline capable after the first successful online load.

## Revision 24.8 — Autonomous Economy, Hard Fleet Lift & Full Rosters

This revision addresses three campaign-scale issues found during extended-start playtesting.

- **AI district economy:** AI factions now reserve a portion of Supply/Materiel for development and attempt district construction before their expansion phase, then invest again after their normal turn when resources remain. Tall, Balanced and Wide strategies use different priorities, with productive Industry, Resource Exploitation and Logistics chains deliberately weighted to improve long-run income.
- **Hard fleet troop lift:** Embarkation is rejected before a fleet can exceed its troop-lift points. The player receives a full-capacity notice explaining the used/capacity/requested values and must increase lift, disembark/reorganise, or use another fleet. Legacy and deep-history overloaded fleets are automatically repaired by disembarking excess task forces at the fleet's current location.
- **Expanded army pools:** Canonical faction pools have been broadened across HQ, Troops, Elites, Fast Attack, Heavy Support, Dedicated Transport and Lord of War roles. Lords of War are now explicit candidates for sufficiently large forces instead of being absent from most pools. Existing Force Organisation, technology, local support and points restrictions continue to govern legality.

Build identity: `24.8-ai-district-lift-full-roster-v30-tested`.
