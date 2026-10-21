---
type: Measure
title: Customer Support Calls
resource: clearpoint://scorecard/77149/measure/542408
cps:
  object: measure
  objectId: 542408
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Quarterly
  measure:
    series:
    - name: Number of calls
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: YTD Calls
      seriesDataTypeId: 5
      aggregateType: SUM
      calculation: "CASE \n    WHEN [m542408][Number of calls][CurrentPeriod] IS NULL THEN NULL \n    ELSE [m542408][Number of calls][CalendarYTDAverage] \nEND\n"
    dataResource: scorecard-77149/data/measure-542408-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77149/data/measure-542408-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T20:15:30.227Z"
      name: Clarice Strong (Operations)
    owner:
      name: Kimberly Kupcha
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:26.340Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Kimberly Kupcha
- **Reporting frequency:** Quarterly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 1200 (target 1200)

## Parents

- [# customer complaints per 1,000 tickets](/scorecard-77146/measures/measure-423488.md)

## Objectives

- [Flight Attendant Customer Service](/scorecard-77149/objectives/objective-271189.md)
- [Employee Satisfaction](/scorecard-77149/objectives/objective-207747.md)

## Measure Initiatives

- [Redesign Employee Satisfaction Survey](/scorecard-77149/initiatives/initiative-163379.md)
- [Implement wifi on all planes](/scorecard-77149/initiatives/initiative-211897.md)
