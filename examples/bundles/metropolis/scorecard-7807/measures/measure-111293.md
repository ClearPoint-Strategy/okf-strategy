---
type: Measure
title: Budget Surplus/Deficit
resource: clearpoint://scorecard/7807/measure/111293
cps:
  object: measure
  objectId: 111293
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3495954
    series:
    - name: Actual
      seriesId: 3495954
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3495955
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 3495955
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3495955
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
    - name: Trend
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m111293][Actual][Last3Average]"
    dataResource: scorecard-7807/data/measure-111293-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7807/data/measure-111293-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-14T22:27:14.807Z"
      name: ClearPoint Support
    owner:
      name: Rhonda Fields (Assistant City Manager)
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-12-14T22:27:14.603Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Rhonda Fields (Assistant City Manager)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

Our budget surplus is struggling due to our declining revenue

### Recommendations

Focus on getting revenue up.

## Parents

- [Budget Surplus](/scorecard-7612/measures/measure-110207.md)

## Objectives

- [Financial Health](/scorecard-7807/objectives/objective-54703.md)

## Measure Initiatives

- [Propose new budget](/scorecard-7807/initiatives/initiative-215317.md)
