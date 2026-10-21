---
type: Objective
title: Shuttle Flights to Major Cities
resource: clearpoint://scorecard/77147/objective/207732
cps:
  object: objective
  objectId: 207732
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
      weight: 50
    - object: measure
      objectId: 423510
      concept: scorecard-77147/measures/measure-423510
      weight: 50
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/objective-207732-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:36:45.200Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T19:02:01.657Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** James Crockett (Sales)

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

Our shuttle routes have been perfected over the past month, leading to more happy customers.

### Recommendations

Communicate more with customers about which cities they would like shuttle flights too.

## Categories

- [Internal](/scorecard-77147/categories/category-203617.md)

## Parents

- [Direct Routes](/scorecard-77146/objectives/objective-207715.md)
- [Direct Routes](/scorecard-77147/objectives/objective-207727.md)

## Measures

- [Major cities with direct flights 3+ times per day](/scorecard-77147/measures/measure-423510.md)

## Initiatives

- [Expand to serve two new locations](/scorecard-77147/initiatives/initiative-163375.md)
