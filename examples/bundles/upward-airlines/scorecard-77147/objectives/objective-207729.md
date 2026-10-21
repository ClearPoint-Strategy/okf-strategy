---
type: Objective
title: Employee Compensation
resource: clearpoint://scorecard/77147/objective/207729
cps:
  object: objective
  objectId: 207729
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
    - object: measure
      objectId: 423504
      concept: scorecard-77147/measures/measure-423504
      weight: 100
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/objective-207729-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:43:20.260Z"
      name: Clarice Strong (Operations)
    owner:
      name: Trudy Joplin (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:43:20.157Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Trudy Joplin (Sales)
- **Reporting frequency:** Default

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

We have been doing well with this objective.

### Recommendations

Let's make sure we continue to monitor this so we do not relapse on the gains we have made.

## Categories

- [Learning and Growth](/scorecard-77147/categories/category-203618.md)

## Parents

- [High Compensation](/scorecard-77146/objectives/objective-207721.md)

## Measures

- [Wage Growth](/scorecard-77147/measures/measure-423504.md)
