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
| Administrator | Lance Cummins (Police Chief), Ted Jackson, Brandon Kline, Joseph Lucco, ClearPoint Support |
| No Access | Melanie Burton, Mark Cutler, Richard Grayson, Jerry Johnson, Steve Lombard, Dylan Miyake, Maggie Sawyer, John Smith |
| Editor | Rhonda Fields (Assistant City Manager), Jimmy Olsen (Director of Parks and Recreation), Neil Patel (Director of Economic Development), Catherine Yochum |
| Assign Group | Andrew Foley, Andy Foley, Cat Grant, Perry White |
| Browser | Alex Hilleary, Ted test user |
| By Scorecard | Neil Patel |
| Scorecard Admin | Moira Reilly, Ron Troupe (Director of Public Safety) |
| Updater | ClearPoint Browser Support |

### By-Scorecard

Users whose profile grants a different access level per scorecard.

| User | Scorecard | Level |
| --- | --- | --- |
| Neil Patel | Metropolis City Scorecard (7612) | Scorecard Admin |
| Neil Patel | Airport (7631) | Browser |
| Neil Patel | Police Department (7805) | Scorecard Admin |
| Neil Patel | Fire Department (7807) | No Access |
| Neil Patel | Parks and Recreation (149811) | Browser |
| Neil Patel | Police Department (149812) | Scorecard Admin |
| Neil Patel | Fire Department (149813) | No Access |
| Neil Patel | Scorecard Template (111676) | No Access |
| Neil Patel | ClearPoint Implementation (114119) | No Access |
| Neil Patel | Metropolis City Scorecard (Demo Rewrite) (149810) | Scorecard Admin |
| Neil Patel | Manassas, VA (155558) | No Access |

### Groups

#### Update Finance

Members: —

| Priority | Level | Object | Target | Scorecard |
| --- | --- | --- | --- | --- |
| 1 | Editor | objective | 53689 | 7612 |
| 2 | Updater | measure | 110207 | 7612 |
| 3 | Updater | initiative | all | 7612 |

#### Update Finance (Copy)

Members: —

| Priority | Level | Object | Target | Scorecard |
| --- | --- | --- | --- | --- |
| 1 | Editor | objective | 53689 | 7612 |
| 2 | Updater | measure | 110207 | 7612 |
| 3 | Updater | initiative | all | 7612 |

#### Testing

Members: —

| Priority | Level | Object | Target | Scorecard |
| --- | --- | --- | --- | --- |
| 1 | Browser | measure | all | 7612 |
| 2 | Editor | measure | all | 7612 |
| 3 | Updater | objective | all | 7612 |

#### Group A

Members: —

#### Browse and EDIT?

Members: —

| Priority | Level | Object | Target | Scorecard |
| --- | --- | --- | --- | --- |
| 1 | Editor | initiative | 43615 | 7631 |
| 2 | Editor | initiative | 43613 | 7631 |
| 3 | Browser | scorecard | all | 7631 |
