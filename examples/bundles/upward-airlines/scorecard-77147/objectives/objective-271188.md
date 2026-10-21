---
type: Objective
title: New Technology
resource: clearpoint://scorecard/77147/objective/271188
cps:
  object: objective
  objectId: 271188
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Default
  evaluation:
    enabled: true
    bands:
    - status: Above Target
      statusId: 18578
      compare: gte
      calculation: "2.5"
      sortOrder: 1
    - status: Caution
      statusId: 18579
      compare: gte
      calculation: "1.5"
      sortOrder: 2
    - status: Below Plan
      statusId: 18580
      compare: lt
      calculation: "1.5"
      sortOrder: 3
    - status: No Information
      statusId: 18581
      compare: any
      sortOrder: 4
    weights:
    - object: initiative
      objectId: 211896
      concept: scorecard-77149/initiatives/initiative-211896
      weight: 50
    - object: initiative
      objectId: 211899
      concept: scorecard-77147/initiatives/initiative-211899
      weight: 50
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/objective-271188-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:43:54.207Z"
      name: Clarice Strong (Operations)
    owner:
      name: Mark Cutler
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:43:54.123Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Mark Cutler
- **Reporting frequency:** Default

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

New technology is very important to making customers happy. We have been doing a great job of updating planes with the newest technology.

### Recommendations

Continue to update all planes with Wifi, and ensure that we have TV monitors for every seat.

## Parents

- [Comparable To Other Travel](/scorecard-77146/objectives/objective-207711.md)
- [Fun Experience](/scorecard-77146/objectives/objective-207716.md)

## Initiatives

- [New website design](/scorecard-77147/initiatives/initiative-211899.md)
- [Purchase new TV Screens](/scorecard-77149/initiatives/initiative-211896.md)
