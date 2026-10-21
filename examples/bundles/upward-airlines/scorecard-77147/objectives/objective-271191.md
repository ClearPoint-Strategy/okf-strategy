---
type: Objective
title: Morning Departures
resource: clearpoint://scorecard/77147/objective/271191
cps:
  object: objective
  objectId: 271191
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
    - object: objective
      objectId: 207710
      concept: scorecard-77146/objectives/objective-207710
      weight: 100
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77147/data/objective-271191-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:44:52.513Z"
      name: Clarice Strong (Operations)
    owner:
      name: Steve Smith
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-11-12T18:44:52.417Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Steve Smith
- **Reporting frequency:** Default

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

We have been doing a decent job of ensuring that we have flights in the mornings of week days. We need to continue to work on scheduling these flights.

### Recommendations

Work with airports, and operations team to ensure that we have plenty of early flights.

## Parents

- [Frequent Reliable Departures (Automatic Eval)](/scorecard-77146/objectives/objective-207710.md)
