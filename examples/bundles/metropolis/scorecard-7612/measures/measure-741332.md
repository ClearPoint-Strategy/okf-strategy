---
type: Measure
title: City-wide Overhead Costs (Aggregate/MM)
resource: clearpoint://scorecard/7612/measure/741332
cps:
  object: measure
  objectId: 741332
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3499534
    series:
    - name: Actual
      seriesId: 3499534
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3499535
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: lte
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 3499535
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3499535
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: YTD
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m741332][Actual][CalendarYTDSum]"
    - name: Airport
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m741591][Actual][CurrentPeriod]"
    - name: Police
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m741592][Actual][CurrentPeriod]"
    - name: Fire
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m741593][Actual][CurrentPeriod]"
    dataResource: scorecard-7612/data/measure-741332-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-741332-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-10T15:10:43.643Z"
      name: ClearPoint Support
    owner:
      name: Richard Grayson
    lastEditedBy:
      name: ClearPoint Support
      at: "2019-06-15T12:11:31.813Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Richard Grayson
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

Costs have remained relatively steady despite ungoing uncertainty.

### Recommendations

Let's continue to keep a close eye on costs across departments.

## Children

- [Overhead Costs](/scorecard-7631/measures/measure-741591.md)
- [Department Overhead Costs](/scorecard-7805/measures/measure-741592.md)
- [Overhead Costs](/scorecard-7807/measures/measure-741593.md)
