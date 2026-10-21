---
type: Lookup
title: User Access
cps:
  lookup: userAccess
---

## User Access

The account's access model in three tiers. Portable: recreate these profiles, per-scorecard grants, groups, rules, and memberships in a target account to reproduce access. Elements point to their scorecard via cps.access.derivedFrom; element-scoped exceptions appear under cps.access.rules.

### Global Profiles

Each user's account-wide baseline access (their profile type).

| Profile | Users |
| --- | --- |
| Administrator | Alexis Angulo, Ted Jackson, Jill Jones, Joseph Lucco, Xavier Prova, Gary Statler, Clarice Strong (Operations), ClearPoint Support1, ClearPoint Support1, ClearPoint Support2, ClearPoint Support3, ClearPoint Support4, ClearPoint Support5, ClearPoint Support6, ClearPoint Support7, Intercom Test, T-google Jackson Z, Demo Admin Zimmerman |
| Editor | Demo Admin, Kara Cleary, Mark Cutler, Greg Garcia, Kimberly Kupcha, James Madison, Catherine Mendoza, Mobile Demo Ziller, Editor Upward Zonier |
| Browser | Ashley Caper, James Crockett (Sales), Tammy Cuzco (Operations), Janice Jones, Trudy Joplin (Sales), Izzy Moreno (Sales), Lawrence Sito, x x, Upward Browser Zimmer |
| Updater | Donald Duff |
| No Access | Reed Richards |
| By Scorecard | Steve Smith |
| Scorecard Admin | Scorecard Admin Ziegler |

### By-Scorecard

Users whose profile grants a different access level per scorecard.

| User | Scorecard | Level |
| --- | --- | --- |
| Steve Smith | Clarice Strong (186239) | No Access |
| Steve Smith | Upward Airlines Corporate (77146) | Editor |
| Steve Smith | 🌐 Eastern Division (77147) | Editor |
| Steve Smith | 🎯 Central Division (77148) | Editor |
| Steve Smith | 🏜️ Western Division (77149) | Editor |
| Steve Smith | Scorecard Template (110889) | No Access |
| Steve Smith | QBO (147060) | No Access |

### Groups

#### User Access Group

Members: —

| Priority | Level | Object | Target | Scorecard |
| --- | --- | --- | --- | --- |
| 1 | Scorecard Admin | scorecard | all | 77146 |

#### No Finances

Members: —

| Priority | Level | Object | Target | Scorecard |
| --- | --- | --- | --- | --- |
| 1 | Updater | scorecard | all | 77146 |
| 2 | No Access | measure | 423496 | 77146 |
| 3 | No Access | measure | 423497 | 77146 |
| 4 | No Access | measure | 423481 | 77146 |
