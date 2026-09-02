# Administratum Stellar Cartographica — Revision 23.4 Complete

This is the consolidated feature-complete Revision 23.4 build. It is based on the full v23.4 campaign expansion, with PWA anti-reversion safeguards applied outside the campaign feature/compatibility code.

## Included systems
- Restored campaign settlement founding and generated-object colony/settlement controls.
- Full direct diplomacy actions, Influence leverage, AI diplomacy, treaties, war escalation and vassalisation.
- 0–200 Diplomatic Standing and Allied Detachments.
- Expedition & Survey district chain with local and empire-wide expedition launch caps.
- Decrees tab and Supply/Influence/Command-funded decrees.
- Detailed battle auto-resolve breakdown.
- Settlement strategic programmes for Productivity, Order and Piety/Cohesion.
- Fleet action caps and empire recruitment/mobilisation limits.
- More proactive AI attacks with battle/pop-up integration.
- Difficult technology-ceiling breakthroughs.
- End Turn overlay above the Campaign Manager.

## Canonical PWA launch
`index.html?rev=23.4-complete-consolidated-v7`

The manifest uses the same v23.4 app ID as the previous v23.4-only package so an installed v23.4 app can update in place. The service worker deletes older Cartographica caches and redirects older/root navigation to the canonical v23.4 Complete URL.
