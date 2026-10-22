---
type: Measure
title: Costs
resource: clearpoint://scorecard/77149/measure/423532
cps:
  object: measure
  objectId: 423532
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224776
    series:
    - name: Actual
      seriesId: 2224776
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224777
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224777
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224777
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
    - name: Target
      seriesDataTypeId: 4
    - name: Variance
      seriesDataTypeId: 4
      calculation: "[scorecard-77149/measures/measure-423532][Actual][CurrentPeriod]-[scorecard-77149/measures/measure-423532][Target][CurrentPeriod]"
      derivation: formula
    - name: Actual as % of Target
      seriesDataTypeId: 6
      calculation: "[scorecard-77149/measures/measure-423532][Actual][CurrentPeriod]/[scorecard-77149/measures/measure-423532][Target][CurrentPeriod]"
      derivation: formula
    dataResource: scorecard-77149/data/measure-423532-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77149/data/measure-423532-status.json
  provenance:
    lastUpdatedBy:
      at: "2024-09-13T20:44:44.887Z"
      name: Clarice Strong (Operations)
    owner:
      name: Clarice Strong (Operations)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:24.850Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Clarice Strong (Operations)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 3650 (target 3300)

### Analysis

By the cost of fuel dropping dramatically, we have been able to cust costs.

### Recommendations

We must continue on our current course of managing our expenses closely.

## Parents

- [Expenses](/scorecard-77146/measures/measure-423497.md)

## Objectives

- [Profitability](/scorecard-77149/objectives/objective-207742.md)
