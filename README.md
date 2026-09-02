# Administratum Stellar Cartographica — Revision 23.6

Revision 23.6 consolidates settlement sovereignty and colony management on top of the stable v23.5.2 in-system navigation runtime.

## Revision 23.6 additions

- Fleet settlements are managed through **Colonies**, not the Fleets tab. Tier III+ fleets appear as mobile settlements and use the normal district/building development web, infrastructure, support, strategic programmes, economy, defence, recruitment and expedition interactions.
- Fleet development projects that lead to mobile-settlement status are surfaced in Colonies. The Fleets tab remains focused on fleet operations, routing and designation rules.
- Infrastructure and support installation now explains what each option does, why it is required/recommended and its immediate/ongoing effects. The Colonies UI includes full reference lists.
- **Orbital Platform** is a selectable settlement archetype when founding. It remains a normal settlement while adding +2 strategic Defence to its system and starting with orbital defensive infrastructure.
- Planets, moons, asteroids and spatial objects now have persistent local claims. Claim ownership is shown in object information, settlement-founding selectors and campaign intel.
- Local object claims and strategic claims produce clear success, failure and blocked-action popups, including resource requirements, roll results and foreign-claim restrictions. Losing a claim to an AI faction also produces a notice.
- In-system settlement lists are grouped by faction in collapsible registers. Fleets are grouped the same way to reduce clutter.
- Factions receive deterministic, type-appropriate campaign names plus unique identity codes, giving generated campaigns clearer faction identities.
- Existing v23.5.2 local AU navigation, multi-journey fleet routing, route visualisation, fleet-colony factions and major-threat mechanics remain intact.
- Existing full diplomacy, allied detachments, expedition districts/caps, Decrees, recruitment/mobilisation limits, AI offensives, technology-ceiling breakthroughs and battle auto-resolve breakdowns remain intact.

## PWA deployment

Upload every file in this package directly to the repository root. GitHub Pages should deploy from `main` / `(root)`.

Open once online after deployment:

`https://kobychapmans-ship-it.github.io/Stellar-Cartography/?rev=23.6-colony-sovereignty-v13`

The application intentionally retains the established Cartographica PWA app ID so an existing Home Screen installation can update in place. The service worker uses a new v23.6 cache, deletes older Cartographica caches during activation and caches the complete application shell for offline use after the first successful online load.
