# Administratum Stellar Cartographica — Revision 24.6
## Settlement Governance, Occupation & Expedition Economy

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
