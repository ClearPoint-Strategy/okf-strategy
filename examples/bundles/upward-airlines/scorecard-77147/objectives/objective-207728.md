---
type: Objective
title: Employee Satisfaction
resource: clearpoint://scorecard/77147/objective/207728
cps:
  object: objective
  objectId: 207728
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
      objectId: 163372
      concept: scorecard-77147/initiatives/initiative-163372
      weight: 34
    - object: measure
      objectId: 423502
      concept: scorecard-77147/measures/measure-423502
      weight: 33
    - object: measure
      objectId: 423503
      concept: scorecard-77147/measures/measure-423503
      weight: 33
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77147/data/objective-207728-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:42:18.483Z"
      name: Clarice Strong (Operations)
    owner:
      name: Mark Cutler
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:42:18.370Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Mark Cutler

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution

### Analysis

Our employees are very satisfied, but we want to increase employee retention.

### Recommendations

Create a new process to moniter employee happiness.

## Categories

- [Learning and Growth](/scorecard-77147/categories/category-203618.md)

## Parents

- [High Employee Ownership](/scorecard-77146/objectives/objective-207723.md)

## Measures

- [Percent of employees that are happy](/scorecard-77147/measures/measure-423502.md)
- [% of employees who see themselves at Upward for 7+ years](/scorecard-77147/measures/measure-423503.md)

## Initiatives

- [Create New Employee Satisfaction Survey](/scorecard-77147/initiatives/initiative-163372.md)
