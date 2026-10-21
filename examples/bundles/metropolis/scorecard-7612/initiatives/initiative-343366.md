---
type: Initiative
title: Create new revenue streams
resource: clearpoint://scorecard/7612/initiative/343366
cps:
  object: initiative
  objectId: 343366
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Custom
  startDate: "2022-01-28"
  endDate: "2022-12-21"
  evaluation:
    enabled: true
    statusSeries: Actual % Complete
    statusSeriesId: 3907031
    series:
    - name: Actual % Complete
      seriesId: 3907031
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 3907032
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.9"
        referenceSeries: Planned % Complete
        referenceSeriesId: 3907032
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 3907032
        sortOrder: 4
  measure:
    series:
    - name: Revenue
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Expenses
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: City Budget
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Actual % Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Planned % Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7612/data/initiative-343366-series.json
  status:
    currentPeriod:
      periodId: 168157
      period: Jan-22
      periodDate: "2022-01-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/initiative-343366-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-03-16T21:52:52.357Z"
      name: ClearPoint Support
    owner:
      name: ClearPoint Support
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-01-11T13:17:10.133Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** ClearPoint Support
- **Reporting frequency:** Custom

## Description

As our population grows, it is important to identify and create new revenue streams so we can continue providing high quality services to our citizens.

## Details

- **Level of Effort:** Medium
- **Level of Impact:** Low
- **Budget:** $57,000
- **Priority:** Medium

## Status

- **Period:** Jan-22 (2022-01-31)
- **Status:** On Target

## Measures

- [Revenue](/scorecard-7612/measures/measure-110208.md)

## Milestones

- [Analyze current revenue sources](/scorecard-7612/milestones/milestone-690952.md)
- [Convene committee to discuss new sources of revenue](/scorecard-7612/milestones/milestone-690953.md)
- [Present plan to City Council](/scorecard-7612/milestones/milestone-690954.md)
