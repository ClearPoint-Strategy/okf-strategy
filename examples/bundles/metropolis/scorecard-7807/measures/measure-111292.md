---
type: Measure
title: Expenses
resource: clearpoint://scorecard/7807/measure/111292
cps:
  object: measure
  objectId: 111292
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753820
    series:
    - name: Actual
      seriesId: 753820
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 754486
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 754486
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 754486
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
      calculation: "[m111291][Target][CurrentPeriod]*.65"
    - name: Variance
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m111292][Actual][CurrentPeriod]-[m111292][Target][CurrentPeriod]"
    - name: Year to Date
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: case when [m111292][Actual][CurrentPeriod] is null then null else [m111292][Actual][CalendarYTDSum] end
    dataResource: scorecard-7807/data/measure-111292-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7807/data/measure-111292-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-02T20:49:56.540Z"
      name: ClearPoint Support
    owner:
      name: Lance Cummins (Police Chief)
    lastEditedBy:
      name: ClearPoint Support
      at: "2018-05-25T14:42:56.753Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Lance Cummins (Police Chief)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

By cutting costs, we have turned this measure around.

### Recommendations

We must continue on our current course of managing our expenses closely.

## Parents

- [Expenses](/scorecard-7612/measures/measure-110209.md)

## Objectives

- [Financial Health](/scorecard-7807/objectives/objective-54703.md)

## Measure Initiatives

- [Propose new budget](/scorecard-7807/initiatives/initiative-215317.md)
