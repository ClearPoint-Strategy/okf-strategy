---
type: Milestone
title: Build a planning committee
resource: clearpoint://scorecard/149810/milestone/974571
tags:
- "Milestone Template #1"
cps:
  object: milestone
  objectId: 974571
  scorecardId: 149810
  scorecard: Metropolis City Scorecard (Demo Rewrite)
  access:
    derivedFrom: clearpoint://scorecard/149810
  periodicity: Monthly
  startDate: "2021-12-26"
  endDate: "2022-08-16"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 5992082
    series:
    - name: Milestone Percent Complete
      seriesId: 5992082
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
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-149810/data/milestone-974571-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-03-23T17:38:29.113Z"
      name: ClearPoint Support
    owner:
      name: Ron Troupe (Director of Public Safety)
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-03-23T17:38:28.227Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard (Demo Rewrite)
- **Owner:** Ron Troupe (Director of Public Safety)
- **Reporting frequency:** Monthly
- **Tags:** Milestone Template #1

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution
