---
type: Milestone
title: Hire consultants
resource: clearpoint://scorecard/77147/milestone/281264
cps:
  object: milestone
  objectId: 281264
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Monthly 2025-26
  startDate: "2025-03-01"
  endDate: "2025-05-31"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 3482807
    series:
    - name: Milestone Percent Complete
      seriesId: 3482807
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
    dataResource: scorecard-77147/data/milestone-281264-series.json
  status:
    currentPeriod:
      periodId: 168171
      period: Apr-25
      periodDate: "2025-04-30"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77147/data/milestone-281264-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-09-30T14:44:43.003Z"
      name: Clarice Strong (Operations)
    owner:
      name: Donald Duff
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-04-29T19:51:56.647Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Donald Duff
- **Reporting frequency:** Monthly 2025-26

## Details

- **Milestone Review:** at_risk

## Status

- **Period:** Apr-25 (2025-04-30)
- **Status:** Below Plan

## Action Items

- [Schedule conference call and create agenda for the partners to review airline traffic patterns.](/scorecard-77146/action-items/actionItem-182621.md)
