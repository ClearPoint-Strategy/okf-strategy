---
type: Measure
title: Expenses
resource: clearpoint://scorecard/7612/measure/110209
cps:
  object: measure
  objectId: 110209
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750360
    series:
    - name: Actual
      seriesId: 750360
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750361
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: lte
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 750361
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750361
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
    - name: Variance
      seriesId: 753066
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: =0
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: lte
        calculation: =100
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: =100
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
      calculation: "[m110208][Target][CurrentPeriod]*.95"
    - name: Variance
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m110209][Actual][CurrentPeriod]-[m110209][Target][CurrentPeriod]"
    - name: "% of Target"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m110209][Actual][CurrentPeriod]/[m110209][Target][CurrentPeriod]*100"
    dataResource: scorecard-7612/data/measure-110209-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/measure-110209-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-19T18:31:29.530Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-12-30T21:50:06.297Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** John Smith
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target

### Analysis

We have really managed our budget well thanks to a great financial office team.

### Recommendations

Watch this information closely to see if we can continue to cut costs.

## Parents

- [Budget Surplus](/scorecard-7612/measures/measure-110207.md)

## Objectives

- [Financial Health & Economic Vitality](/scorecard-7612/objectives/objective-53689.md)

## Initiatives

- [Website Upgrade (Data & Charts)](/scorecard-7612/initiatives/initiative-43640.md)
- [Update Airport Master Plan](/scorecard-7631/initiatives/initiative-43615.md)

## Children

- [Expenses](/scorecard-7631/measures/measure-110220.md)
- [Costs](/scorecard-7805/measures/measure-111268.md)
- [Expenses](/scorecard-7807/measures/measure-111292.md)

## Measure Initiatives

- [Update master plans (Milestone Roll Up)](/scorecard-7612/initiatives/initiative-159340.md)
