---
type: Objective
title: Direct Routes
resource: clearpoint://scorecard/77147/objective/207727
cps:
  object: objective
  objectId: 207727
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
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
      objectId: 163375
      concept: scorecard-77147/initiatives/initiative-163375
      weight: 25
    - object: measure
      objectId: 423501
      concept: scorecard-77147/measures/measure-423501
      weight: 25
    - object: measure
      objectId: 423510
      concept: scorecard-77147/measures/measure-423510
      weight: 25
    - object: objective
      objectId: 207732
      concept: scorecard-77147/objectives/objective-207732
      weight: 25
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/objective-207727-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:41:00.747Z"
      name: Clarice Strong (Operations)
    owner:
      name: Janice Jones
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:41:00.617Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Janice Jones

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

We have established relationships with some cities already, and are continuing to fly to as many new places directly as possible.

### Recommendations

Continue speaking to airport officials about setting up gates specifically for us.

## Categories

- [Internal](/scorecard-77147/categories/category-203617.md)

## Parents

- [Direct Routes](/scorecard-77146/objectives/objective-207715.md)

## Measures

- [% of tickets with direct routes](/scorecard-77147/measures/measure-423501.md)

## Children

- [Shuttle Flights to Major Cities](/scorecard-77147/objectives/objective-207732.md)

## Child Measures

- [Major cities with direct flights 3+ times per day](/scorecard-77147/measures/measure-423510.md)

## Child Initiatives

- [Expand to serve two new locations](/scorecard-77147/initiatives/initiative-163375.md)
