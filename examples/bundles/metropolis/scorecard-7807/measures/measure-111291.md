---
type: Measure
title: Revenue
resource: clearpoint://scorecard/7807/measure/111291
cps:
  object: measure
  objectId: 111291
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753816
    series:
    - name: Actual
      seriesId: 753816
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753817
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.99"
        referenceSeries: Target
        referenceSeriesId: 753817
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753817
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
      calculation: "[m111291][Actual][CurrentPeriod]-[m111291][Target][CurrentPeriod]"
    - name: "% of Target"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: ([m111291][Actual][CurrentPeriod]/[m111291][Target][CurrentPeriod])*100
    - name: Absolute Value
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: abs([m111291][Variance][CurrentPeriod])
    dataResource: scorecard-7807/data/measure-111291-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7807/data/measure-111291-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-02T20:43:18.270Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:54:02.447Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** John Smith
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

With the spike in fires over the year, revenue has decreased.

### Recommendations

Focus on increasing revenue to keep all of the fire houses open and in use.

## Parents

- [Revenue](/scorecard-7612/measures/measure-110208.md)

## Objectives

- [Financial Health](/scorecard-7807/objectives/objective-54703.md)

## Measure Initiatives

- [Propose new budget](/scorecard-7807/initiatives/initiative-215317.md)
