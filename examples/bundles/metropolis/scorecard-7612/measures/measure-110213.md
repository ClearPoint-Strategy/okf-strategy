---
type: Measure
title: Average employee wage
resource: clearpoint://scorecard/7612/measure/110213
cps:
  object: measure
  objectId: 110213
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750372
    series:
    - name: Actual
      seriesId: 750372
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750373
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 750373
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750373
        sortOrder: 3
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    dataResource: scorecard-7612/data/measure-110213-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/measure-110213-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T15:07:35.493Z"
      name: ClearPoint Support
    owner:
      name: Jimmy Olsen (Director of Parks and Recreation)
    lastEditedBy:
      name: ClearPoint Support
      at: "2018-11-20T19:37:49.020Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Jimmy Olsen (Director of Parks and Recreation)
- **Reporting frequency:** Annual

## Description

Paying a competitive salary is vital to recruiting and retaining top talent. We need to ensure that our employees feel valued from an economic standpoint.

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

We need to find a way to pay employees more because we want to always exceed our current target and be in a position to exceed our target when we raise it in the future.

### Recommendations

We should find areas in the budget where we can cut expenses and reallocate those funds to employee wages.

## Objectives

- [Recruit & Retain Top Employee Talent](/scorecard-7612/objectives/objective-54238.md)

## Children

- [Average employee wage](/scorecard-7631/measures/measure-111096.md)
- [Yearly Employee Salary](/scorecard-7805/measures/measure-111272.md)
- [Employee compensation per year](/scorecard-7807/measures/measure-111296.md)

## Measure Initiatives

- [Employee training](/scorecard-7612/initiatives/initiative-43638.md)
