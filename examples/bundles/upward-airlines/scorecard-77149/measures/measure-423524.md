---
type: Measure
title: Ticket price differential
resource: clearpoint://scorecard/77149/measure/423524
cps:
  object: measure
  objectId: 423524
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224754
    series:
    - name: Actual
      seriesId: 2224754
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224755
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lt
        calculation: "*.90"
        referenceSeries: Target
        referenceSeriesId: 2224755
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224755
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
    dataResource: scorecard-77149/data/measure-423524-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77149/data/measure-423524-status.json
  provenance:
    lastUpdatedBy:
      at: "2024-09-15T17:18:44.627Z"
      name: Clarice Strong (Operations)
    owner:
      name: Trudy Joplin (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:21.197Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Trudy Joplin (Sales)
- **Reporting frequency:** Quarterly

## Description

We want to measure our ticket prices compared to the industry average and our target prices.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 12 (target 10)

## Objectives

- [Competitive Ticket Prices](/scorecard-77149/objectives/objective-207744.md)
