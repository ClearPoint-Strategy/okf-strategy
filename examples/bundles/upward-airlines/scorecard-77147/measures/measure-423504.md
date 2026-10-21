---
type: Measure
title: Wage Growth
resource: clearpoint://scorecard/77147/measure/423504
cps:
  object: measure
  objectId: 423504
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224656
    series:
    - name: Actual
      seriesId: 2224656
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224657
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224657
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224657
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-77147/data/measure-423504-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: "2025"
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/measure-423504-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-15T15:28:38.433Z"
      name: Clarice Strong (Operations)
    owner:
      name: Lawrence Sito
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2019-02-04T18:37:39.513Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Lawrence Sito
- **Reporting frequency:** Annual

## Description

We want to ensure we are providing our employees with competitive wages and rewarding them appropriately for their hard work.

## Status

- **Period:** 2025 (2025-12-31)
- **Status:** Above Target

### Analysis

We have declined in this area and need to improve.

### Recommendations

We should remove necessary expenses and reallocate those funds to raising wages.

## Parents

- [Average Wage](/scorecard-77146/measures/measure-423493.md)

## Objectives

- [Employee Compensation](/scorecard-77147/objectives/objective-207729.md)
