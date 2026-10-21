---
type: Measure
title: Budget Surplus
resource: clearpoint://scorecard/7612/measure/110207
cps:
  object: measure
  objectId: 110207
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
    rules:
    - group: Update Finance
      level: Updater
    - group: Update Finance (Copy)
      level: Updater
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750356
    series:
    - name: Actual
      seriesId: 750356
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750357
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 750357
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750357
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: eq
        calculation: =0
        sortOrder: 5
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: AVERAGE
      calculation: ([m110208][Actual][CurrentPeriod]-[m110209][Actual][CurrentPeriod])/[m110209][Actual][CurrentPeriod]*100
    - name: Target
      seriesDataTypeId: 6
      aggregateType: AVERAGE
      calculation: ([m110208][Target][CurrentPeriod]-[m110209][Target][CurrentPeriod])/[m110209][Target][CurrentPeriod]*100
    dataResource: scorecard-7612/data/measure-110207-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-110207-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-12-14T20:41:47.720Z"
      name: ClearPoint Support
    owner:
      name: Jimmy Olsen (Director of Parks and Recreation)
    lastEditedBy:
      name: ClearPoint Support
      at: "2022-02-15T16:07:04.130Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Jimmy Olsen (Director of Parks and Recreation)
- **Reporting frequency:** Monthly

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

The summer of this year was particularly difficult due to the impacts of the ongoing pandemic. August was our worst month yet, but we are seeing a recovery as the 2020 year comes to a close.

### Recommendations

With our current ability to tightly manage our expenses and continued consistent revenue growth, we should consider increasing our target for the surplus. Over the past 7 months we have proven that we can consistently achieve double digit budget surplus.

## Objectives

- [Financial Health & Economic Vitality](/scorecard-7612/objectives/objective-53689.md)

## Children

- [Revenue](/scorecard-7612/measures/measure-110208.md)
- [Expenses](/scorecard-7612/measures/measure-110209.md)
- [Profitability](/scorecard-7631/measures/measure-111091.md)
- [Budget Surplus](/scorecard-7805/measures/measure-111269.md)
- [Budget Surplus/Deficit](/scorecard-7807/measures/measure-111293.md)

## Measure Initiatives

- [Update master plans (Milestone Roll Up)](/scorecard-7612/initiatives/initiative-159340.md)
