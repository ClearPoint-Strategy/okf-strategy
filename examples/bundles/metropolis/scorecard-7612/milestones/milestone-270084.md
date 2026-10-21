---
type: Milestone
title: Market analysis
resource: clearpoint://scorecard/7612/milestone/270084
tags:
- "Milestone Template #1"
cps:
  object: milestone
  objectId: 270084
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  startDate: "2022-04-23"
  endDate: "2023-01-10"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 3495804
    series:
    - name: Milestone Percent Complete
      seriesId: 3495804
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: =80
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: =50
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: =50
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Budget
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Elapsed Days
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Milestone Percent Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7612/data/milestone-270084-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/milestone-270084-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-10T17:16:21.100Z"
      name: ClearPoint Support
    owner:
      name: Rhonda Fields (Assistant City Manager)
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-01-11T13:14:49.740Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Rhonda Fields (Assistant City Manager)
- **Reporting frequency:** Monthly
- **Tags:** Milestone Template #1

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target
