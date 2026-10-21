---
type: Objective
title: Good Locations
resource: clearpoint://scorecard/77147/objective/207730
cps:
  object: objective
  objectId: 207730
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
      objectId: 163375
      concept: scorecard-77147/initiatives/initiative-163375
      weight: 50
    - object: measure
      objectId: 423506
      concept: scorecard-77147/measures/measure-423506
      weight: 50
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/objective-207730-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:38:23.590Z"
      name: Clarice Strong (Operations)
    owner:
      name: Lawrence Sito
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:38:23.507Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Lawrence Sito
- **Reporting frequency:** Default

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

Convenience and availability of flights is of the utmost importance to our customers, which is why we strive to serve them in as many locations as possible.

### Recommendations

We must continue to expand to new locations as rapidly as possible if we are going to maintain our market share.

## Categories

- [Internal](/scorecard-77147/categories/category-203617.md)

## Parents

- [Good Locations](/scorecard-77146/objectives/objective-207714.md)

## Measures

- [% of population served within 25 miles](/scorecard-77147/measures/measure-423506.md)

## Initiatives

- [Expand to serve two new locations](/scorecard-77147/initiatives/initiative-163375.md)
