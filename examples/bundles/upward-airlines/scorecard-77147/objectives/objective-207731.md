---
type: Objective
title: No Frills
resource: clearpoint://scorecard/77147/objective/207731
cps:
  object: objective
  objectId: 207731
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
    - object: measure
      objectId: 423509
      concept: scorecard-77147/measures/measure-423509
      weight: 100
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77147/data/objective-207731-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:39:20.920Z"
      name: Clarice Strong (Operations)
    owner:
      name: Steve Smith
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:39:20.737Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Steve Smith

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

While our overall performance does not look great, the real problem seems to be in the this region. Need to create some sort of benchmarking against other regions,

### Recommendations

Watch this information closely to see if we can improve dramatically against our competition.

## Categories

- [Internal](/scorecard-77147/categories/category-203617.md)

## Parents

- [No Frills](/scorecard-77146/objectives/objective-207718.md)

## Measures

- [Cost per plane trip](/scorecard-77147/measures/measure-423509.md)
