---
type: Milestone
title: Finalize the plan and formal implementation report
resource: clearpoint://scorecard/149810/milestone/974572
tags:
- "Milestone Template #1"
cps:
  object: milestone
  objectId: 974572
  scorecardId: 149810
  scorecard: Metropolis City Scorecard (Demo Rewrite)
  access:
    derivedFrom: clearpoint://scorecard/149810
  periodicity: Monthly
  startDate: "2022-04-28"
  endDate: "2022-11-19"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 5992085
    series:
    - name: Milestone Percent Complete
      seriesId: 5992085
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
      statusId: 3950
      status: On Target
    statusResource: scorecard-149810/data/milestone-974572-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-03-23T17:38:29.113Z"
      name: ClearPoint Support
    owner:
      name: Lance Cummins (Police Chief)
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-03-23T17:38:28.227Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard (Demo Rewrite)
- **Owner:** Lance Cummins (Police Chief)
- **Reporting frequency:** Monthly
- **Tags:** Milestone Template #1

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target
