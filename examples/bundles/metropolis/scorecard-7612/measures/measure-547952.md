---
type: Measure
title: Project Status Count
resource: clearpoint://scorecard/7612/measure/547952
cps:
  object: measure
  objectId: 547952
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: "% Green"
    statusSeriesId: 2684665
    series:
    - name: "% Green"
      seriesId: 2684665
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: =75
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: =25
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: =25
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: On track
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Slightly behind schedule
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Behind Schedule
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Total
      seriesDataTypeId: 9
      aggregateType: SUM
      calculation: "[m547952][On track][CurrentPeriod]+[m547952][Slightly behind schedule][CurrentPeriod]+[m547952][Behind Schedule][CurrentPeriod]"
    - name: "% Green"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: ([m547952][On track][CurrentPeriod]/[m547952][Total][CurrentPeriod])*100
    dataResource: scorecard-7612/data/measure-547952-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-547952-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-10T15:10:43.447Z"
      name: ClearPoint Support
    owner:
      name: Steve Lombard
    lastEditedBy:
      name: ClearPoint Support
      at: "2019-04-24T18:16:51.013Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Steve Lombard
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

Our project statuses have not changed very much from last month.

### Recommendations

Focus on getting more initiatives from caution to meeting target.
