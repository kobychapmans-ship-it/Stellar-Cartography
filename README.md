# Administratum Stellar Cartographica — Revision 23 PWA

Revision 22 adds persistent Colonial Structure tabs, a non-overlapping settlement-development workspace, fleet cartographic position/focus controls, full strategic-doctrine explanations, resource-extraction expeditions for worlds/moons/asteroids/void sites, autonomous AI resource exploitation, and an Expansion & Population district that changes settlement growth/decline chances.

## GitHub Pages / iPhone
1. Replace the files in the repository root with this package.
2. GitHub Pages: deploy from `main` / `(root)`.
3. Open `index.html?rev=23-grand-strategy-diplomacy-mobilisation-v2` once while online.
4. On iPhone, remove an older Cartographica Home Screen icon before adding this revision again.
5. Safari → Share → Add to Home Screen.

The service worker uses the Revision 23.1 cache and deletes older Cartographica caches during activation.

## Revision 23 — Grand Strategy Diplomacy & Mobilisation

Revision 23 expands the campaign layer with:

- Settlement Strategic Programmes: spend 4 Supply + 3 Influence for +2 Productivity, Order, or Piety/Cohesion for the current 90-day resolution.
- Empire-wide recruitment mobilisation ceilings derived from collective settlement Size, recruitment districts, defence districts, and military/industrial support.
- A 2-action-per-turn strategic action limit for each fleet, covering movement/invasion, embarkation, disembarkation, and role redesignation.
- More proactive autonomous warfare when active wars exist, plus visible pop-up notifications for AI attacks and treaty escalations.
- Influence leverage on negotiations (+5 acceptance per extra Influence committed).
- Difficult technology-ceiling breakthroughs requiring current-ceiling research, a Size 5 settlement with Tier IV+ Research, major resources, Command, and a d12 roll; repeated breakthroughs become more expensive/difficult.
- Expanded diplomacy: improve relations, non-aggression pacts, military access, mutual trade, unilateral aid/trade concessions, guarantees, defensive pacts, alliances, vassalisation, peace, war, and treaty termination.
- AI-to-AI diplomacy and treaty-triggered war escalation, plus vassal tribute and recurring trade benefits.
- End Turn overlay raised above the Campaign Manager/Viewer and revisioned service-worker cache for reliable PWA updates.
