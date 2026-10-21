---
type: Objective
title: Ground Turnaround
resource: clearpoint://scorecard/77147/objective/207726
cps:
  object: objective
  objectId: 207726
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
      objectId: 163373
      concept: scorecard-77147/initiatives/initiative-163373
      weight: 33
    - object: initiative
      objectId: 163374
      concept: scorecard-77147/initiatives/initiative-163374
      weight: 33
    - object: measure
      objectId: 423500
      concept: scorecard-77147/measures/measure-423500
      weight: 34
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77147/data/objective-207726-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:37:41.043Z"
      name: Clarice Strong (Operations)
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:37:40.973Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Izzy Moreno (Sales)

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

We need to turn planes faster.

### Recommendations

Our new training initiative will help.

## Categories

- [Internal](/scorecard-77147/categories/category-203617.md)

## Parents

- [Fast Ground Turnaround](/scorecard-77146/objectives/objective-207713.md)

## Measures

- [Average plane turnaround time](/scorecard-77147/measures/measure-423500.md)

## Initiatives

- [Create Upskilling for Employees](/scorecard-77147/initiatives/initiative-163373.md)
- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)
