---
type: Measure
title: Budget Surplus
resource: clearpoint://scorecard/7805/measure/111269
cps:
  object: measure
  objectId: 111269
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3495952
    series:
    - name: Actual
      seriesId: 3495952
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3495953
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 3495953
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3495953
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7805/data/measure-111269-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7805/data/measure-111269-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-14T22:27:38.153Z"
      name: ClearPoint Support
    owner:
      name: Ron Troupe (Director of Public Safety)
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-12-14T22:27:38Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** Ron Troupe (Director of Public Safety)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

Although our expenses are lower, revenue is still not high.

### Recommendations

To create budget surplus, we need to gain more revenue.

## Parents

- [Budget Surplus](/scorecard-7612/measures/measure-110207.md)

## Objectives

- [Financial Wellness](/scorecard-7805/objectives/objective-54685.md)
