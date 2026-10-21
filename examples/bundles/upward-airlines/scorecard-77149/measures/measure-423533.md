---
type: Measure
title: Cost per plane trip
resource: clearpoint://scorecard/77149/measure/423533
cps:
  object: measure
  objectId: 423533
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3488445
    series:
    - name: Actual
      seriesId: 3488445
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3488446
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 3488446
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 3488446
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
    dataResource: scorecard-77149/data/measure-423533-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77149/data/measure-423533-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-09-21T18:45:10.390Z"
      name: Clarice Strong (Operations)
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:25.320Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Izzy Moreno (Sales)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution

### Analysis

Even though fuel costs have decreased, our costs are still generally high.

### Recommendations

We need to understand how to keep internal costs low if fuel prices increase.

## Parents

- [Internal cost per flight (Department aggregate/MM)](/scorecard-77146/measures/measure-423490.md)

## Objectives

- [No Frills](/scorecard-77149/objectives/objective-207750.md)
