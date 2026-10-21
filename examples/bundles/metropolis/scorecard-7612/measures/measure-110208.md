---
type: Measure
title: Revenue
resource: clearpoint://scorecard/7612/measure/110208
cps:
  object: measure
  objectId: 110208
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750358
    series:
    - name: Actual
      seriesId: 750358
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750359
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 750359
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750359
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
    - name: Variance
      seriesId: 753051
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: =0
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: =-50
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: =0
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
    - name: Variance
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m110208][Actual][CurrentPeriod]-[m110208][Target][CurrentPeriod]"
    - name: "% of Target"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m110208][Actual][CurrentPeriod]/[m110208][Target][CurrentPeriod]*100"
    dataResource: scorecard-7612/data/measure-110208-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7612/data/measure-110208-status.json
  provenance:
    lastUpdatedBy:
      at: "2022-05-19T20:23:25.173Z"
      name: ClearPoint Support
    owner:
      name: Lance Cummins (Police Chief)
    collaborators:
    - Lance Cummins (Police Chief)
    - Ron Troupe (Director of Public Safety)
    - Catherine Yochum
    lastEditedBy:
      name: ClearPoint Support
      at: "2022-12-22T16:24:53.717Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Lance Cummins (Police Chief)
- **Reporting frequency:** Monthly

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

Our revenue is still exceeding our expenses, however it is not where we want it to be.

### Recommendations

May have to increase tax dollars to generate more revenue.

## Parents

- [Budget Surplus](/scorecard-7612/measures/measure-110207.md)

## Objectives

- [Financial Health & Economic Vitality](/scorecard-7612/objectives/objective-53689.md)

## Initiatives

- [Create new revenue streams](/scorecard-7612/initiatives/initiative-343366.md)

## Children

- [Revenue](/scorecard-7631/measures/measure-110219.md)
- [Income Generated](/scorecard-7805/measures/measure-111267.md)
- [Revenue](/scorecard-7807/measures/measure-111291.md)

## Measure Initiatives

- [Update master plans (Milestone Roll Up)](/scorecard-7612/initiatives/initiative-159340.md)
