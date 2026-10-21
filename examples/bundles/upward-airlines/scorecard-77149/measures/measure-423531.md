---
type: Measure
title: Revenue
resource: clearpoint://scorecard/77149/measure/423531
cps:
  object: measure
  objectId: 423531
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224771
    series:
    - name: Actual
      seriesId: 2224771
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224772
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224772
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224772
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224772
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
      calculation: "[m423531][Actual][CurrentPeriod]-[m423531][Target][CurrentPeriod]"
    - name: Actual as % of Target
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m423531][Actual][CurrentPeriod]/[m423531][Target][CurrentPeriod]"
    - name: Test One
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423531][Actual][CurrentPeriod]-[m423531][Variance][CurrentPeriod]"
    dataResource: scorecard-77149/data/measure-423531-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77149/data/measure-423531-status.json
  provenance:
    lastUpdatedBy:
      at: "2024-09-13T20:29:09.780Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:24.377Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 4000 (target 3947.17)

### Analysis

Tickets are selling at a rapid pace this month, boosting revenue for the Western region, which is great.

### Recommendations

We need to continue on our current course.

## Parents

- [Revenue](/scorecard-77146/measures/measure-423496.md)

## Objectives

- [Profitability](/scorecard-77149/objectives/objective-207742.md)
