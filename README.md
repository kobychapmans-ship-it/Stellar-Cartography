# Administratum Stellar Cartographica — Revision 24.4
## Cohesive Army Doctrine

Revision 24.4 replaces the old random-legal army fill with a Force Organisation aware, threat-responsive army planner for both player and AI campaign forces.

### Army construction
- Builds compulsory Force Organisation slots before discretionary selections.
- Respects each faction's actual chart minima/maxima, including non-standard compulsory slots.
- Validates each battlegroup/detachment separately on large armies.
- Enforces the Lord of War 25% ceiling with headroom for upgrades.
- Keeps generated selections as distinct formations so duplicate squads do not collapse into one apparent FOC slot.
- Uses deliberate role budgets for line troops, command, specialists, mobility, armour and heavy support instead of a random pool.

### Threat response
Generated and refitted forces assess the expected enemy for:
- horde / mass infantry
- armour
- elite infantry
- monsters / automata
- air threats
- siege assets
- mobility

The planner then favours appropriate unit packages and upgrade options. Examples include high-volume guns and mobile line elements into hordes; melta, graviton, haywire, lances and heavy armour into vehicle/knight forces; and plasma/power weapon specialists into elite targets.

### Player tools
The Army / Detachments tab now includes a Cohesive Army Generator with:
- Expected Opponent
- Counter-Doctrine
- Target Points
- Generate New Force
- Refit Selected Force

New forces obey the empire mobilisation ceiling. Imported BattleScribe forces are never automatically rewritten; manual/imported upgrades are retained during a refit.

### AI behaviour
AI factions use the same cohesive generator. When at war they identify their strongest enemy, tailor new recruitment to that opposition, and can refit the force that is about to fight rather than carrying a generic loadout into every battle.

### PWA
Build: `24.4-cohesive-armies-v25`

Deploy all files in this directory to the repository root, then open:
`?rev=24.4-cohesive-armies-v25`

The PWA remains self-contained and offline-capable after the first successful online load.
