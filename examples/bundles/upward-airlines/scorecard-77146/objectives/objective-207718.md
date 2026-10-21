---
type: Objective
title: No Frills
resource: clearpoint://scorecard/77146/objective/207718
cps:
  object: objective
  objectId: 207718
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  evaluation:
    enabled: true
    bands:
    - status: Above Target
      statusId: 18578
      compare: eq
      calculation: "3"
      sortOrder: 1
    - status: Caution
      statusId: 18579
      compare: eq
      calculation: "2"
      sortOrder: 2
    - status: Below Plan
      statusId: 18580
      compare: eq
      calculation: "1"
      sortOrder: 3
    - status: No Information
      statusId: 18581
      compare: any
      sortOrder: 4
    weights:
    - object: measure
      objectId: 423490
      concept: scorecard-77146/measures/measure-423490
      weight: 100
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77146/data/objective-207718-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T16:04:35.580Z"
      name: Clarice Strong (Operations)
    owner:
      name: Janice Jones
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2016-07-27T21:50:56.710Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Janice Jones

## Description

Part of the reason we are able to offer such low prices is because we keep our costs low, through the "no frills" policy. While we still provide our customers with top notch service (and snacks!), we want to eliminate any wasteful spending.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution

### Analysis

While our overall performance does not look great, the real problem seems to be in the East Region. We should start bench marking some performance from the Central region to see if we can bring some best practices to the east.

### Recommendations

Assign a task force to create a bench marking measure to better understand the differences between the Eastern Region and the Central Region.

## Categories

- [🔄 Internal Processes](/scorecard-77146/categories/category-203613.md)

## Measures

- [Internal cost per flight (Department aggregate/MM)](/scorecard-77146/measures/measure-423490.md)

## Initiatives

- [Find new food service provider](/scorecard-77146/initiatives/initiative-163371.md)

## Children

- [No Frills](/scorecard-77147/objectives/objective-207731.md)
- [No Frills](/scorecard-77148/objectives/objective-207741.md)
- [No Frills](/scorecard-77149/objectives/objective-207750.md)

## Child Measures

- [Cost per plane trip](/scorecard-77147/measures/measure-423509.md)
- [Internal cost per flight](/scorecard-77148/measures/measure-423522.md)
- [Cost per plane trip](/scorecard-77149/measures/measure-423533.md)
