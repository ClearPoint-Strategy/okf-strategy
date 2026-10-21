---
type: Measure
title: Net Profit
resource: clearpoint://scorecard/77149/measure/423529
cps:
  object: measure
  objectId: 423529
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224767
    series:
    - name: Actual
      seriesId: 2224767
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224768
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224768
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224768
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423531][Actual][CurrentPeriod] - [m423532][Actual][CurrentPeriod]"
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Actual %
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m423529][Actual][CurrentPeriod] / [m423531][Actual][CurrentPeriod] *100"
    dataResource: scorecard-77149/data/measure-423529-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77149/data/measure-423529-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-26T14:26:02.313Z"
      name: Clarice Strong (Operations)
    owner:
      name: Steve Smith
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-09-13T20:25:08.237Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Steve Smith
- **Reporting frequency:** Monthly

## Description

This is our earnings metric, telling us how well we are doing.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

Our net profit has been stagnant and under target.

### Recommendations

We should lower unnecessary expenses because those are within our control.

## Parents

- [Net Profit](/scorecard-77146/measures/measure-423481.md)

## Objectives

- [Profitability](/scorecard-77149/objectives/objective-207742.md)
