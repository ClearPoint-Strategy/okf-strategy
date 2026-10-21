---
type: Measure
title: Costs
resource: clearpoint://scorecard/7805/measure/111268
cps:
  object: measure
  objectId: 111268
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753749
    series:
    - name: Actual
      seriesId: 753749
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753750
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 753750
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753750
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
      calculation: "[m111268][Actual][CurrentPeriod]-[m111268][Target][CurrentPeriod]"
    - name: Actual as % of Target
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m111268][Actual][CurrentPeriod]/[m111268][Target][CurrentPeriod]*100"
    dataResource: scorecard-7805/data/measure-111268-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7805/data/measure-111268-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-02T20:31:14.940Z"
      name: ClearPoint Support
    owner:
      name: Maggie Sawyer
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-30T14:57:57.510Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** Maggie Sawyer
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

Our police department has used its given funds very well, and acquired no new expenses.

### Recommendations

Continue to be very thoughtful in purchasing.

## Parents

- [Expenses](/scorecard-7612/measures/measure-110209.md)

## Objectives

- [Financial Wellness](/scorecard-7805/objectives/objective-54685.md)
