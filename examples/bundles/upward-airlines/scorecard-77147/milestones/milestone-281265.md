---
type: Milestone
title: Analyze current airline traffic
resource: clearpoint://scorecard/77147/milestone/281265
cps:
  object: milestone
  objectId: 281265
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Monthly 2025-26
  startDate: "2025-05-31"
  endDate: "2025-09-01"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 3482810
    series:
    - name: Milestone Percent Complete
      seriesId: 3482810
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: =80
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: =50
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: =50
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Budget
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Elapsed Days
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Milestone Percent Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-77147/data/milestone-281265-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77147/data/milestone-281265-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-09-21T19:18:05.750Z"
      name: Clarice Strong (Operations)
    owner:
      name: Tammy Cuzco (Operations)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-02-26T15:20:44.193Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Tammy Cuzco (Operations)
- **Reporting frequency:** Monthly 2025-26

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 33
