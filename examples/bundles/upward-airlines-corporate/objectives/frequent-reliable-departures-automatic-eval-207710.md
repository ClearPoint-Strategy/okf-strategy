---
type: Objective
title: Frequent Reliable Departures (Automatic Eval)
description: One negative flight experience can have a major impact on customer
  brand loyalty. As such, we need to ensure that we are providing our customers
  with multiple daily flight options and these flights must be prompt.
resource: clearpoint://scorecard/77146/objective/207710
tags:
  - perspective:financial
timestamp: 2025-11-17T17:18:49.370Z
cps:
  object: objective
  objectId: 207710
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Objective
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: objectives
      to: clearpoint://scorecard/77147/objective/207725
      object: objective
      objectId: 207725
      name: Reliable Departures
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: objectives
      to: clearpoint://scorecard/77147/objective/271191
      object: objective
      objectId: 271191
      name: Morning Departures
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: objectives
      to: clearpoint://scorecard/77148/objective/207734
      object: objective
      objectId: 207734
      name: Reliable Departures
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: objectives
      to: clearpoint://scorecard/77149/objective/207743
      object: objective
      objectId: 207743
      name: Reliable Departures
      scorecard: 🏜️ Western Division
      access: Administrator
    - fieldId: measures
      to: /measures/average-number-of-daily-departures-per-route-423483.md
      object: measure
      objectId: 423483
      name: Average Number of Daily departures per route
      scorecard: Upward Airlines Corporate
      access: Administrator
  time:
    periodGroupId: -1
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18580
      status: Below Plan
    historyResource: /data/frequent-reliable-departures-automatic-eval-207710-periods.json
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
    owner:
      name: Izzy Moreno
      userId: 24971
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2025-11-17T17:18:49.370Z
  customFields:
    - fieldId: custom197607
      name: Balanced Scorecard
      fieldType: kanban
      value: financial
---

One negative flight experience can have a major impact on customer brand loyalty. As such, we need to ensure that we are providing our customers with multiple daily flight options and these flights must be prompt.

## Related

- [Average Number of Daily departures per route](/measures/average-number-of-daily-departures-per-route-423483.md)

## Status — Dec-25 (Below Plan)

**Analysis.** We are meeting our objective of having frequent reliable departures. There are two key components of this objective: Reliable (on-time) departures Frequent departures While we have been doing excellent on the turnaround time/frequent departure aspect of this, we need to do better on the reliability side. We are still missing too many departure times. We are doing well overall because we have so many departures now, that this part of the calculation is swamping the reliability part.

**Recommendations.** If we continue to be below plan on the reliability side, we need to get to the root of the problem. Either we must re-look at the process to see what is causing all of our delays or we must examine whether we are just scheduling too tightly.

## Status — Nov-25 (Below Plan)

## Status — Oct-25 (Below Plan)

## Status — Sep-25 (Below Plan)
