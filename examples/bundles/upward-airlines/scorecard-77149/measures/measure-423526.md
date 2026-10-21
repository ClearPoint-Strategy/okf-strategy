---
type: Measure
title: "% of tickets with direct routes"
resource: clearpoint://scorecard/77149/measure/423526
cps:
  object: measure
  objectId: 423526
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224759
    series:
    - name: Actual
      seriesId: 2224759
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224760
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224760
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224760
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
    dataResource: scorecard-77149/data/measure-423526-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77149/data/measure-423526-status.json
  provenance:
    lastUpdatedBy:
      at: "2024-09-16T18:48:11.430Z"
      name: Clarice Strong (Operations)
    owner:
      name: Trudy Joplin (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:22.120Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Trudy Joplin (Sales)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

Since raising the target, we have hit our objective each month.

### Recommendations

Let's increase the target for next quarter.

## Objectives

- [Direct Routes](/scorecard-77149/objectives/objective-207746.md)
