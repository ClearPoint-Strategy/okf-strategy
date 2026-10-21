---
type: Objective
title: Reliable Departures
resource: clearpoint://scorecard/77147/objective/207725
cps:
  object: objective
  objectId: 207725
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
      objectId: 423498
      concept: scorecard-77147/measures/measure-423498
      weight: 34
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77147/data/objective-207725-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:36:18.790Z"
      name: Clarice Strong (Operations)
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:36:18.690Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Greg Garcia

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

We really need to focus on getting our planes out on time.

### Recommendations

Let's link this to our plane turnaround time. Hopefully, the additional employee training and upskilling will help us improve.

## Categories

- [Customer](/scorecard-77147/categories/category-203616.md)

## Parents

- [Frequent Reliable Departures (Automatic Eval)](/scorecard-77146/objectives/objective-207710.md)

## Measures

- [% of on time departures](/scorecard-77147/measures/measure-423498.md)

## Initiatives

- [Create Upskilling for Employees](/scorecard-77147/initiatives/initiative-163373.md)
- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)
