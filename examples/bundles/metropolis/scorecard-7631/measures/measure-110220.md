---
type: Measure
title: Expenses
resource: clearpoint://scorecard/7631/measure/110220
cps:
  object: measure
  objectId: 110220
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750416
    series:
    - name: Actual
      seriesId: 750416
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750417
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 750417
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750417
        sortOrder: 3
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Variance
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m110220][Actual][CurrentPeriod]-[m110220][Target][CurrentPeriod]"
    dataResource: scorecard-7631/data/measure-110220-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7631/data/measure-110220-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-02T20:12:41.043Z"
      name: ClearPoint Support
    owner:
      name: Ron Troupe (Director of Public Safety)
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-11-12T20:39:14.963Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Ron Troupe (Director of Public Safety)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target

### Analysis

By the cost of fuel increasing dramatically, we have been hit hard with our expenses.

### Recommendations

Watch this information closely to see if we can continue to cut costs.

## Parents

- [Expenses](/scorecard-7612/measures/measure-110209.md)

## Objectives

- [Financial Wellness](/scorecard-7805/objectives/objective-54685.md)
