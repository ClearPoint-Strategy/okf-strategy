---
type: Measure
title: Expenses
resource: clearpoint://scorecard/77147/measure/423508
cps:
  object: measure
  objectId: 423508
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224712
    series:
    - name: Actual
      seriesId: 2224712
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224713
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224713
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224713
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
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Variance
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423508][Actual][CurrentPeriod]-[m423508][Target][CurrentPeriod]"
    - name: Actual as % of Target
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m423508][Actual][CurrentPeriod]/[m423508][Target][CurrentPeriod]"
    dataResource: scorecard-77147/data/measure-423508-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Q4-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/measure-423508-status.json
  provenance:
    lastUpdatedBy:
      at: "2022-02-25T22:12:24.163Z"
      name: Clarice Strong (Operations)
    owner:
      name: Kimberly Kupcha
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2022-02-25T22:12:23.810Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Kimberly Kupcha
- **Reporting frequency:** Quarterly

## Details

- **Complete?:** 0

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

### Analysis

By cutting costs in all three regions, we have turned this measure around.

### Recommendations

We must continue on our current course of managing our expenses closely.

## Parents

- [Expenses](/scorecard-77146/measures/measure-423497.md)

## Objectives

- [Profitability](/scorecard-77147/objectives/objective-207724.md)

## Measure Initiatives

- [Expand to serve two new locations](/scorecard-77147/initiatives/initiative-163375.md)
