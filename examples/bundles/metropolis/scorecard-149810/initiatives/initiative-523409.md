---
type: Initiative
title: Update master plans (Milestone Roll Up)
resource: clearpoint://scorecard/149810/initiative/523409
tags:
- "Initiative Template #1"
cps:
  object: initiative
  objectId: 523409
  scorecardId: 149810
  scorecard: Metropolis City Scorecard (Demo Rewrite)
  access:
    derivedFrom: clearpoint://scorecard/149810
  periodicity: Monthly
  startDate: "2021-08-29"
  endDate: "2023-04-23"
  evaluation:
    enabled: true
    statusSeries: Initiative Percent Complete
    statusSeriesId: 5992070
    series:
    - name: Initiative Percent Complete
      seriesId: 5992070
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
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-149810/data/initiative-523409-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-03-23T17:38:29.087Z"
      name: ClearPoint Support
    owner:
      name: Steve Lombard
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-03-23T17:38:28.190Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard (Demo Rewrite)
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

- [Financial Health & Economic Vitality (Auto Eval)](/scorecard-149810/objectives/objective-555858.md)

## Milestones

- [Market analysis](/scorecard-149810/milestones/milestone-974570.md)
- [Build a planning committee](/scorecard-149810/milestones/milestone-974571.md)
- [Finalize the plan and formal implementation report](/scorecard-149810/milestones/milestone-974572.md)

## Action Items

- [Get the dashboards up by end of year](/scorecard-149810/action-items/actionItem-356089.md)
- [Set up meeting to discuss location of safety events](/scorecard-149810/action-items/actionItem-356092.md)

## Children

- [Update Airport Master Plan](/scorecard-149811/initiatives/initiative-523413.md)
- [Update Police Department Master Plan and Layout Plan](/scorecard-149812/initiatives/initiative-523417.md)
- [Update Fire Department Master Plan and Layout Plan](/scorecard-149813/initiatives/initiative-523423.md)

## Initiative Measures

- [Revenue](/scorecard-149810/measures/measure-1426483.md)
- [Expenses](/scorecard-149810/measures/measure-1426484.md)
- [Budget Surplus](/scorecard-149810/measures/measure-1426482.md)
