---
type: Measure
title: Ticket price differential
resource: clearpoint://scorecard/77147/measure/423499
cps:
  object: measure
  objectId: 423499
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224644
    series:
    - name: Actual
      seriesId: 2224644
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224645
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 2224645
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224645
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
    - name: Industry
      seriesDataTypeId: 4
      aggregateType: SUM
    dataResource: scorecard-77147/data/measure-423499-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Q4-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/measure-423499-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T20:13:33.580Z"
      name: Clarice Strong (Operations)
    owner:
      name: Janice Jones
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-10T17:31:16.603Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Janice Jones
- **Reporting frequency:** Quarterly

## Description

We want to measure our ticket prices compared to the industry average and our target prices.

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

### Analysis

We are doing better in terms of our target, but we still have to do better to be below the industry differential.

### Recommendations

We need to shift our prices lower to account for the industry shift.

## Parents

- [Ticket price differential](/scorecard-77146/measures/measure-423484.md)
