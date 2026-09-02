# Administratum Stellar Cartographica — Revision 23.3

Revision 23.3 restores settlement creation and fully exposes the Grand Strategy diplomacy layer.

## Settlement restoration
- Campaign settlements can again be founded from the normal Overview strategic orders.
- The Colonies tab now contains a dedicated **Found New Campaign Settlement** workspace.
- Founding is allowed at controlled territory, established faction presence, a local Task Force, or a fleet physically present at the node.
- Standard and accelerated Size 5 foundation packages are both supported.
- World, moon, asteroid and void-site inspectors retain **Add Colony / Settlement** and **Add Colonial Prospect** controls.

## Full diplomacy
- Improve Relations
- Non-Aggression Pacts
- Request or grant Military Access
- Mutual Trade Agreements
- One-Way Export Agreements
- Request One-Way Imports
- Immediate Aid
- Guarantees of Independence
- Defensive Pacts
- Full Alliances
- Demand Vassalisation
- Offer Vassalage
- Negotiate Peace
- Declare War
- Break individual treaties or all treaties
- Spend extra Influence for +5 percentage points of negotiation acceptance per Influence
- Trade and vassal agreements have recurring economic effects
- Defensive treaties can widen wars

## PWA deployment
Replace the repository-root files with this package and deploy GitHub Pages from `main` / `(root)`.

Canonical launch URL:
`index.html?rev=23-full-diplomacy-settlement-restoration-v4`

The v23-only PWA identity is retained and the service-worker cache is advanced to the v4 package so older v23.2 assets are removed.
