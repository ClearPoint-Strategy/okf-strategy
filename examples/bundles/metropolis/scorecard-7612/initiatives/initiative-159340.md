---
type: Initiative
title: Update master plans (Milestone Roll Up)
resource: clearpoint://scorecard/7612/initiative/159340
tags:
- "Initiative Template #1"
cps:
  object: initiative
  objectId: 159340
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  startDate: "2021-08-29"
  endDate: "2023-04-23"
  evaluation:
    enabled: true
    statusSeries: Initiative Percent Complete
    statusSeriesId: 3495813
    series:
    - name: Initiative Percent Complete
      seriesId: 3495813
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
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Initiative Percent Complete
      seriesDataTypeId: 6
      aggregateType: AVERAGE
    dataResource: scorecard-7612/data/initiative-159340-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/initiative-159340-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-15T15:23:55.337Z"
      name: ClearPoint Support
    owner:
      name: Steve Lombard
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-01-11T13:14:47.957Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Steve Lombard
- **Reporting frequency:** Monthly
- **Tags:** Initiative Template #1

## Description

As seen in the data table below, this Initiative is tracking related quantitative information, including budget, elapsed days, and initiative percent complete. The percent complete is an aggregate average of the 3 milestones. The status of this initiative is based off of the initiative percent complete. Similarly, the milestones' status are based off of the milestones' percent complete. The initiative percent complete is aggregated from the milestones' percent complete.

## Details

- **Level of Effort:** Medium
- **Level of Impact:** Medium
- **Initiative Percent Complete:** {[i159340][@3495813]}
- **Budget:** $15,000
- **Priority:** Medium

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target

### Analysis

We noticed that the current master plans needed updating. We are on target to successfully complete this based on the established timeline.

### Recommendations

We will continue to update the master plans for all departments to meet the needs of the community.

## Objectives

- [Financial Health & Economic Vitality](/scorecard-7612/objectives/objective-53689.md)

## Milestones

- [Build a planning committee](/scorecard-7612/milestones/milestone-270085.md)
- [Market analysis](/scorecard-7612/milestones/milestone-270084.md)
- [Finalize the plan and formal implementation report](/scorecard-7612/milestones/milestone-270087.md)

## Action Items

- [Get the dashboards up by end of year](/scorecard-7612/action-items/actionItem-21986.md)
- [Set up meeting to discuss location of safety events](/scorecard-7612/action-items/actionItem-177815.md)

## Children

- [Update Airport Master Plan](/scorecard-7631/initiatives/initiative-43615.md)
- [Update Police Department Master Plan and Layout Plan](/scorecard-7805/initiatives/initiative-44449.md)
- [Update Fire Department Master Plan and Layout Plan](/scorecard-7807/initiatives/initiative-44459.md)

## Initiative Measures

- [Revenue](/scorecard-7612/measures/measure-110208.md)
- [Expenses](/scorecard-7612/measures/measure-110209.md)
- [Budget Surplus](/scorecard-7612/measures/measure-110207.md)
