# Horus Heresy Strategic Campaign Framework — v29.0

## Scope
Revision 29.0 introduces the first overarching Horus Heresy campaign layer while retaining the existing Cartographica system/sub-sector/sector sandbox as the local mission theatre.

## Chronology import
- 41 consecutive 90-day chronology segments are embedded from the supplied `Horus_Heresy_90_Day_Timeline.docx`.
- 871 event appearances are represented across those windows, corresponding to 153 distinct named events/theatres.
- Dated/best-placed events are distinguished from broad/ongoing theatres.
- Broad/ongoing events intentionally recur in every overlapping 90-day window.

## Campaign start
The campaign launcher now includes a Campaign Structure selector:
- Standard Cartographica sandbox
- Horus Heresy Strategic Campaign

Heresy mode adds:
- selectable starting 90-day chronology window;
- default participation mode (own faction or either historical side);
- faction-based baseline mission funding;
- modest lore-scaled starting local-theatre resource grant.

## Mission board
Every chronology window exposes its event entries as mission opportunities. Multiple missions can be activated, and unfinished missions can carry into later windows.

Each mission records:
- chronology segment and dating confidence category;
- historical-side labels inferred from the event;
- participation choice: direct-control historical side A, historical side B, or add the player's chosen faction;
- mission funding;
- generated objectives based on event type.

Objective families currently include capture, hold/defend, major battle, void approach, fleet transit, expedition/extraction, destruction, political/subversion, operational presence, survival and event-specific special objectives.

## Mission Points
- Each objective has a Mission Point value.
- Partial completion can score Mission Points even if the historical result is not fully reproduced.
- A mission finalised with zero completed objectives is recorded as Failed and awards 0 Mission Points.
- Completing every objective grants a small perfect-operation bonus.
- Mission history and the total Mission Point bank persist in the campaign save.

## Persistent strategic rewards
Initial reward framework:
- Expanded Logistics Bureau: +10 future mission funding.
- Strategic Command Staff: +1 maximum Command.
- Reinforcement Reserve: immediate Supply/Materiel reserve.
- Named Character Requisition: banks a Named Character token for future character-specific content.
- Unique Starting Fleet Charter: banks a fleet token and increases future mission funding.

The token rewards deliberately establish the progression contract without inventing all named-character/fleet packages in this first framework pass.

## End Turn integration
A successful Cartographica End Turn advances the Heresy chronology by exactly one 90-day segment and refreshes the mission board. Active unfinished missions are not forcibly discarded.

## Regression protection
The v28.3 authoritative fleet-transit runtime and audit surface remain present. Revision 29.0 changes PWA cache/build identity so installed clients do not continue serving the v28.3 shell.
