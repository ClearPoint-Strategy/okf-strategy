---
type: Milestone
title: Build a planning committee
resource: clearpoint://scorecard/7612/milestone/270085
tags:
- "Milestone Template #1"
cps:
  object: milestone
  objectId: 270085
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  startDate: "2021-12-26"
  endDate: "2022-08-16"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 3495807
    series:
    - name: Milestone Percent Complete
      seriesId: 3495807
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
    dataResource: scorecard-7612/data/milestone-270085-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/milestone-270085-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-10T17:16:35.553Z"
      name: ClearPoint Support
    owner:
      name: Ron Troupe (Director of Public Safety)
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-01-11T13:14:49.337Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Ron Troupe (Director of Public Safety)
- **Reporting frequency:** Monthly
- **Tags:** Milestone Template #1

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution
