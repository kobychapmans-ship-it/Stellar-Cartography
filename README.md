# Administratum Stellar Cartographica — Revision 28.2

The v28.2 hotfix restores fleet movement to the authoritative single-pass End Turn pipeline. Strategic translations, multi-journey legs and in-system fleet navigation now advance during End Turn again. The movement pass is isolated per fleet, repairs malformed legacy transit fields, and can catch up untouched voyages that were left stationary by the v27.2–v28.1 omission. Pending player-controlled naval engagements remain intentionally paused until resolved.

The v28.1 campaign-launch and Chaos Daemons / Daemons of the Ruinstorm fixes remain intact, along with the v28.0 Faction Leaders of Renown system. See `FLEET-TRANSIT-AUDIT-v28.2.md` for the fault analysis and regression coverage.

# Administratum Stellar Cartographica — Revision 28.1

The v28.1 hotfix repairs campaign launching from the single-system setup, handles errors during launch preparation, and corrects daemon faction roster/travel integration. See LAUNCH-FACTION-AUDIT-v28.1.md for the reproduced failure and verification. The earlier release notes below are retained as history.

## Faction Leaders of Renown

Choose a faction, then choose its optional Leader of Renown directly underneath. The preview explains the command benefits, specialist unlocks and campaign doctrine. Starting a campaign adds the character and initial retinue to a protected Faction Command detachment. The overview records leader actions and banked orders.

Includes 109 unique character profiles, all 18 Primarchs, 71 specialist packages and 26 active campaign protocols. Covers Legion, Solar Auxilia, Mechanicum, Knights, Talons, Craftworld, Necron, Dark Compliance, Chaos Daemons and Ruinstorm pools. Militia retains normal command because no eligible named commander was identified; factions outside the repository remain unlinked. Shared characters may appear in more than one eligible faction.

Characters and source profiles are based on BSData/horus-heresy-1st-edition, commit 0a4c10da15f4ea40eea0932090fadafe3b90b696. Campaign doctrines, resource benefits and condensed specialist packages are game adaptations, not a complete implementation of tabletop special rules. See PATCH-NOTES-v28.0.md for scope and verification.

Extract the ZIP and serve this folder over HTTPS or localhost for installation and offline caching. Open index.html for a local-file launch where supported; service-worker installation requires a secure web origin. Export an existing save before updating. The application identity is retained for PWA continuity while the cache is versioned to v28.0.

## Earlier release history

# Administratum Stellar Cartographica — Revision 25.1.1
## Full Deep-Time History & Unified Faction Rosters

Build: `25.1.1-demographic-momentum-strategic-armies-bootstrap-fix-v34-tested`

Revision 25.1 builds on the fully restored v24.9 runtime. It retains exact Deep-Time simulation, Autonomous District Economy, Hard Fleet Troop Lift, full unified rosters and Battlefleet Operations, then adds centred settlement governance, capped rebellion/secession, recurring civic upkeep and wider Size/Technology recruitment locks.

## Revision 25.1 additions
- Settlement governance, rebellion and infrastructure/support panels now remain full-width inside the settlement card. Mobile layouts collapse the planner into a single centred column instead of squeezing text into the left edge.
- Rebellions have a Size/Technology-scaled hard points cap. Severe unresolved rebellions normally secede after roughly 8–12 turns, or sooner after remaining at their cap for several cycles.
- Secession creates a normal autonomous faction named `Rebellion (Former Faction)`, transfers the rebellious settlement/local claim, gives it a generated starting army equal to the final rebellion points, and immediately sets relations with the former ruler to War.
- Infrastructure, support upgrades and district tiers now provide recurring civic upkeep toward Complacency, Productivity, Order and Piety/Cohesion targets. Aggressive factions emphasise Order/Productivity; Orks deliberately tolerate lower Complacency/Piety.
- AI district selection now responds to civic deficits as well as economic output, allowing Administration, Habitation, Defence and Research districts to be built when settlements need stability rather than only more resources.
- Unit recruitment requirements now use the full Size 1–10 and Technology 1–10 range. Ordinary troops remain accessible early; rare/elite/super-heavy/relic/Lord of War units can require much more developed mustering worlds.

## Deep-Time restoration
- Deep-Time no longer substitutes a displayed target turn or compressed economy for missing history.
- Every selected prehistory turn is processed individually at the normal campaign scale of 90 days.
- Turn 100 performs 100 complete historical AI/economy/colony/fleet/event cycles; Turn 1000 performs 1000.
- Each historical turn includes autonomous faction actions, AI district construction, faction income, settlement growth, mobile/core colony growth, fleet movement, raiders/threat processing, sector events, settlement consequences, automated resource extraction, Command refresh, claims/contact maintenance and periodic record consolidation.
- Established-polity player factions participate as AI during history and are handed back to the player at the target turn. Emerging expeditions remain dormant until the history is complete.
- The campaign overview records before/after metrics for controlled systems, settlements, districts and total army points, so the historical changes are visible rather than inferred from the turn label.

## Unified faction roster
- `campaignFactionTemplates()` now resolves through one authoritative live faction roster pool.
- The cohesive army generator, campaign Add Unit selector and campaign-start manual muster all consume that same pool.
- Expanded Revision 24.8 entries, including Lord of War choices, are retained.
- Dark Compliance now correctly combines the current Legion and Imperialis Militia pools instead of falling through to an unrelated procedural-xenos shortlist.
- Craftworld forces also include non-duplicate legacy Aeldari entries that are already available elsewhere in Cartographica.
- Unit-specific weapons/wargear/upgrades remain available through each unit's Armoury controls and through generator auto-refits when the faction's technology allows them.
- The Lord of War legality gate uses the intended 25% ceiling rather than the prior internal 23.5% pre-filter.

## Revision 24.8 features retained
- AI factions reserve resources for districts before expansion and make a second district-investment pass afterward.
- Tall / Balanced / Wide settlement maintenance remains active.
- Fleet troop lift is a hard cap. Invalid legacy/deep-time overloads are disembarked automatically at the fleet's current system.
- Battlefleet identities, strategic cross-territory attacks, fleet engagements, BFG-style auto-resolve and persistent fleet damage remain active.
- Settlement governance, rebellions, occupation effects, generated settlement networks, T4/T5 resource automation and strategic expedition rewards remain active.

## Cache/install identity
The PWA uses the distinct cache key `25.1.1-demographic-momentum-strategic-armies-bootstrap-fix-v34-tested`. The service worker removes older Cartographica caches during install/activation, and navigation requests prefer the network before the canonical offline shell.

## Validation
See `TEST-REPORT.txt` and `BUILD-VERIFICATION.txt` for the validation performed on this exact package.


## Revision 25.1 — Demographic Momentum & Strategic Armies
Settlement Size now changes through accumulated development/decline pressure rather than a random growth roll. Task Forces derive eleven strategic traits from their actual unit composition; ground auto-resolve weights those traits against the battle theatre before command/doctrine resolution.


## v25.1.1 bootstrap hotfix
The v25.1 mechanics were present in the previous archive, but the original startup bootstrap still re-enforced the v25.0 title, badge, URL revision and service-worker registration on DOMContentLoaded/load/pageshow. This hotfix makes v25.1.1 authoritative from the first parsed script and removes the active legacy v25.0 identity writers.


## Revision 25.2 — Stack-Safe Full-Sector Deep Time
Deep-Time is processed as 1:1 historical turns in asynchronous bounded phases. Large faction/settlement sets yield to the browser between batches, campaign persistence is suppressed during internal historical actions, unbounded campaign spread operations have been removed from key paths, and Safari RangeError stack overflows are recovered per subsystem without aborting the entire campaign start. Designed for full-sector simulations through Turn 1000.


### Deep-Time execution model
Revision 25.2 cannot and does not attempt to increase Safari/Chromium's fixed JavaScript call-stack limit. Instead, Deep-Time is stack-safe by architecture. Histories under 100 turns on modest maps may use the detailed per-turn runner. Histories of 100–1000 turns, or sufficiently large/full-sector campaigns, use up to 10 bounded historical epochs. Each epoch represents a real span of 90-day campaign turns and scales treasury income, demographic momentum, district investment, claims, recruitment, resource activity and other strategic changes across that span. The campaign always hands over at the exact requested turn.


## Revision 25.3 — Infrastructure Depth, Army Drill-down & Naval Growth
- Infrastructure networks now progress from Level 1 to Level 10, capped by settlement Size. Repeated upgrades provide stronger direct and recurring civic benefits and can satisfy new population-development infrastructure requirements.
- Task Forces and detachments are collapsible; every unit package has an expandable strategic trait breakdown.
- Strategic Supply & Influence Programme cards span the settlement content width, including mobile layouts.
- Deep-Time AI now commissions additional fleets and advances existing fleets through larger classes and 10 refit levels as territory, settlement count, age and Materiel allow.


## Revision 25.3.1 — Deep-Time Fleet Coverage Hotfix
Deep-Time naval progression no longer directly calls the fragile `campaignEnsureFleetCoverage` helper. It now normalises fleet ownership through the stable `campaignEnsureFleetState` path before historic fleet construction/refits, fixing Safari launch failures reporting “Can’t find variable: campaignEnsureFleetCoverage”.


## Revision 25.5 — Archetype Empires & Diplomacy
Deep-Time established player polities now remain fully autonomous until handover. Every faction uses a racial/faction archetype to prioritise settlement founding, districts, infrastructure, research, armies, fleets and diplomacy. Orks actively seek and maintain wars; industrial, defensive, opportunistic and diplomatic factions spend resources differently.


## Revision 25.5 — Fleet Polities & Historical Foundations
Deep Time now uses a historical foundation fallback for fixed settlements and treats Legion/Astartes, Craftworld and other mobile archetypes as true fleet polities. Their fleets spend Materiel on actual capital/escort/support hull growth and class advancement, can become Tier III+ mobile settlements, and those mobile settlements receive normal demographic, civic, district and infrastructure progression.

### v25.5 validation
The v25.5 release was statically checked for historical fixed-settlement foundations, mobile fleet-settlement progression, normal settlement maintenance for mobile colonies, and real hull/class naval growth distinct from refit levels. The available Chromium process did not finish a bounded headless load, so an interactive browser pass is not claimed.


## Revision 25.6 — Managed Empires & Strong Fleet Foundations
Fleet polities now directly commission fleet-class formations instead of waiting for Scout Flotillas to satisfy Mobile Colony prerequisites. Deep-Time reserves resources for managed settlement cores and performs a final managed handover for established player polities. Long histories use smaller epochs, chunked final settlement processing and aggressive transient-state compaction for Safari stack safety.


## Revision 25.7 — Independent Stack-Safe Deep Time

Deep Time no longer enters the layered v25.2→v25.6 historical wrapper chain. A single bounded macro-history engine advances 100–1000 turns through 10–24 iterative epochs. It directly processes income, settlement maintenance and growth, historical foundations, districts, infrastructure, territorial expansion, diplomacy, fleet/hull growth, mobile fleet settlements and military strength while yielding to the browser between bounded batches.

The audit also found and fixed a genuine infinite recursion affecting developed mobile fleet settlements: settlement enumeration → colony lookup → colony effectiveness → PF calculation → mobile-colony ensure → settlement enumeration. Colony lookup now scans fixed settlement records and already-created mobile colonies directly without materialising every fleet-settlement proxy.


## Revision 25.8 — Operational Roles & Rebellion Warfare
- Removes the obsolete Player Strategic Orders panel; Territory, Colonies, Army and Fleets are authoritative.
- Fleet-tab disembarkation targets a specific territory on the fleet's current planet/moon; surface embarkation requires the fleet to be at that same object.
- Fleet roles and strategic doctrines now alter campaign speed, naval profiles, invasion/defence strength and civic development where applicable.
- Expansion & Population districts now contribute directly to demographic momentum and decline-pressure reduction.
- Rebellions require identifiable political stress and show why they can or did begin; deployed Task Forces can fight a rebellion in its exact territory.


## Revision 25.9 — Interaction Audit & Reliable Ground Operations
- Replaced the shared Fleet-tab Ground Force selector with separate Embarkable Force and Embarked Force selectors.
- Disembarkation now directly deploys an actually embarked Task Force into the chosen territory on the fleet's exact planet/moon and consumes one fleet action.
- Embarkation lists only ground forces deployed on that exact planet/moon and continues to enforce troop-lift capacity.
- System-scale campaigns resolve the fleet's strategic site as the landing planetary object, while sector/sub-sector campaigns use true in-system orbital position.
- Removed the dead legacy `Use Fleet Movement Plot` button. Current Journey Planner and in-system navigation controls are authoritative.
- Removed the Campaign Colonies `Advance Extra 90 Days` shortcut because settlement time already advances through the campaign turn cycle.
- Added a release-time interaction audit for campaign buttons and data-action families.


## Revision 26.0 — Combat, Claims & Fleet Lifecycle
- Direct fleet-on-fleet engagement button for co-located fleets.
- Overview and planetary inspector ground-battle controls for attacks across territories on the same world/moon.
- Campaign Save export now prefers the iOS/PWA share/save sheet, with JSON download and new-tab fallbacks.
- Fleets can be fully repaired for Materiel + Supply while stationary; 0% Hull means permanent destruction and loss of embarked troops.
- Territory claim buttons use one delegated handler from planetary inspectors and the Territory-tab claim modal.
- Partially claimed planets remain valid in the claim/settlement founder; the selected territory determines whether foundation is legal.
- Every faction receives a Tier-0 Expeditionary Vessel so any polity has a fleet-settlement development path.


## Revision 26.1 — Complete Deep-Time T2–T1000
- Deep-Time chronology accepts every integer turn from T2 through T1000. T2–T20 execute one exact bounded epoch per requested turn; longer histories use 10–24 macro epochs and still finish on the exact requested turn.
- The independent v25.7 stack-safe engine remains the base. v26.1 adds a bounded feature-compatibility layer for current territorial claims, fleet repairs and 0%-Hull destruction, Tier-0 expeditionary vessels, abstract role/doctrine-aware void wars, strategic-trait-aware ground wars and active-rebellion suppression.
- Existing settlement maintenance, demographic growth/decline, districts, infrastructure, historical settlement founding, diplomacy, recruitment, fleet construction/refit/mobile settlements and faction archetypes continue to run inside Deep Time.
- Deep-Time deliberately does not invoke player-facing export/share, modal, render, notice or detailed pending-battle UI handlers during history; their game effects are represented by compact historical equivalents to keep Safari call depth and object growth bounded.


## Revision 26.2 — Fleet Settlements & Site Economies
- Tier III fleet-settlement conversion is now pending until the player completes End Turn; the mobile settlement does not exist before that turn boundary.
- Active fleet settlements use the full Level 1–10 infrastructure/support system and the normal district-development web.
- Fleet-Colony polity has visible benefits: 20% cheaper fleet-settlement development, 15% cheaper fleet commissioning, +5% campaign fleet speed, and +1 Supply/turn per active mobile settlement.
- New settlements can be founded directly at Size 1, 2, 3, 4, or 5 for progressively larger resource packages.
- Resource recovery can be set to Mixed Recovery, Sequence Analysis, Cogitator Checksum, or Signal Amplification before extraction.
- Added unique district chains for Orbital Defence Platforms, Gas Harvesting Platforms, and Fleet Settlements.
- Site Defence is presented as one effective defensive value assembled automatically from fortifications, settlement depth, and orbital/fleet defence.

## Revision 26.3 — Era Anchors, Living Polities & Faction Civilisations
- Campaign Era selection is now at the top of Generation Scale.
- Optional era-specific lore anchors seed relevant named 30k/40k locations into generated theatres; Segmentum Solar prioritises Sol.
- 30k anchor catalogue includes the Sol System, Primarch/Legion homeworlds and selected Heresy-associated locations such as Davin. Names are anchored to generated campaign coordinates rather than presented as false exact canonical LY coordinates.
- Territory environments now include positive strategic and tabletop advantages alongside hazards.
- Legacy astronomical-inspector Add/Found Colony controls are removed. World generation remains responsible for native/existing population records.
- Small native Size 1–3 settlement networks become lightweight Minor Polities. They grow slowly without full AI overhead and promote to a normal autonomous faction when one settlement reaches Size 4.
- Minor-polity development is compatible with normal turns and compressed T2–T1000 Deep Time.
- Every campaign faction archetype now receives an exclusive civilisation district chain with mechanical economic, military, technological, defensive or command effects.

### Jambonium reference
Era-specific lore anchors are primarily modelled on the Jambonium Warhammer 40K Interactive Map (v8-era reference), including its separate 30k/40k modes and its distinction between high/medium/low/zero placement confidence. Cartographica uses those as broad lore anchors and deliberately keeps procedural campaign light-year coordinates separate from claimed canonical coordinates.


## Revision 26.4 — Forced Lore Starts, Craftworld Polities & Stability
- Campaign launch can force an era/Segmentum-appropriate canonical location into the generated theatre. The chosen system becomes an available starting node.
- Optional Lore-Linked Polity generation creates the associated faction, several established settlements, territorial claims, and a lore-linked strategic army. Barbarus, for example, creates a Death Guard Legiones Astartes presence.
- Faction-exclusive districts are shown in a dedicated highlighted construction panel rather than being buried in the generic district list.
- Faction-exclusive infrastructure is shown in a dedicated highlighted panel with direct upgrade buttons.
- Rebellion risk now uses civic deficits and surpluses, infrastructure depth, support installations, occupation, hostility and only modest Size pressure above Size 5. Healthy well-developed settlements can reach 0% rebellion risk.
- Craftworld Eldar can select a Craftworld World-Ship start. The normal starting fleet is replaced with one massive Craftworld with five independent Size 6–10 settlement realms, each capable of reaching Size 10.
- Craftworld world-ships have 250,000 points of strategic troop lift, very high void strength, slow strategic movement, full settlement construction, and bounded Deep-Time development.

## Revision 26.5 — Craftworld Launch & Guaranteed Unique Construction
- Craftworld Eldar launch now always prompts for Normal Fleet Start or Craftworld World-Ship Start when Launch Campaign is pressed.
- The old discoverability-dependent Craftworld start button is removed from the launcher.
- Faction-exclusive districts are injected directly into the AVAILABLE BUILDING CHAINS palette and highlighted as FACTION UNIQUE.
- Faction-exclusive infrastructure is injected directly into the live Infrastructure & Support Planner with direct Level 1–10 upgrade controls.

## Revision 26.6 — Visible Craftworld Start & Native Faction Construction
- Starting Fleet is now a permanent setup control located between Player Faction and Starting Strategic Site.
- Craftworld Eldar in 30k/40k can directly choose Normal Expeditionary Fleet or Craftworld World-Ship without a popup.
- Faction-unique infrastructure now appears inside the real infrastructure dropdown, before standard networks, with effects written into each option.
- Faction-unique districts now appear as the first highlighted tile in the real BUILDING DISTRICTS viewer.


## Revision 26.7 — Consolidated Craftworld & Faction Construction
The v26.3–v26.6 feature block was previously outside the core runtime scope and aborted on `generateSector is not defined`. It is now consolidated into the core runtime. The Craftworld start selector, faction infrastructure and faction district systems were then audited using the actual final render/action functions. All 15 faction archetypes expose two unique infrastructure networks and a unique district, while Craftworld Eldar can launch with a tested five-realm world-ship.


## Revision 26.8 — Craftworld Embarkation, Realm Stability & Fleet-Scoped Settlements
- Craftworld starts preserve the chosen/generated starting Task Force and embark it directly aboard the Craftworld.
- Craftworld polities satisfy the universal Tier-0 expeditionary-vessel requirement, so no redundant seed expeditionary fleet is generated. Existing broken saves migrate cargo from an auto-seeded expeditionary vessel back onto the Craftworld and delete only that automatic vessel.
- Each of the five Craftworld realms starts with mature standard + Aeldari infrastructure and multiple developed districts. Its starting Population Development progress is +0 and its current-cycle momentum is calibrated to +0; later construction, damage and civic changes alter that normally.
- Craftworld settlement panels are removed from the top of the Colonies view and rendered inside the Fleets view under their parent world-ship.
- Craftworld Open Settlement & Districts buttons use a delegated, proxy-aware handler and survive dashboard re-renders.
- Faction-unique infrastructure remains inside the main Infrastructure & Support Planner dropdown/level cards; the separate duplicate unique-infrastructure panel is removed.


## Revision 26.10 — In-Core Settlement District Button Repair
- Root cause: the v26.9 repair lived outside the private campaign runtime and could not reliably call campaign functions.
- The opener, resolver and click handler are now inside the consolidated core runtime.
- Every Open Settlement & Districts button has delegated handling plus a direct inline fallback.
- Craftworld settlement proxy resolution has an explicit last-resort path.
- Repeated audit: 12 direct open/close cycles plus 12 fresh-button/re-render cycles all passed on an actual Craftworld realm.


## Revision 26.11 — One-Turn Craftworld Growth Grace
- Craftworld settlement calibration is no longer permanent. New realms show +0 momentum for their first 90-day cycle only.
- After that first cycle, the real momentum from civic stats, infrastructure and districts is used normally.
- Existing saves carrying the old negative equilibrium calibration are migrated by clearing it immediately.
- Deep Time applies one neutral represented turn, then normal momentum for the rest of the historical span.
- Craftworld realms now receive an explicit normal settlement cycle after each ordinary campaign turn.

## Revision 27.2 — Stable Autonomous End Turn
- Replaces the accumulated historical End Turn polling-wrapper chain with one authoritative asynchronous pipeline.
- AI factions, economies, fixed settlements, fleet settlements and Craftworld realms are processed in bounded batches with browser yields.
- Post-turn governance, automatic extraction, fleet projects, minor polities, threats, raiders, command networks, claims, contacts and fleet-lift auditing execute once each.
- Nested AI actions cannot trigger repeated full saves/dashboard renders during End Turn.
- The loading screen is work-coupled: its phase and percentage follow actual completed turn operations and it closes immediately after the final save/UI rebuild rather than waiting a fixed ten seconds.
- Turn histories and notification queues are compacted to prevent long-session memory growth.
