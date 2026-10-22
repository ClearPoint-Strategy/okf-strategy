---
type: Measure
title: "% of tickets with direct routes"
resource: clearpoint://scorecard/77147/measure/423501
cps:
  object: measure
  objectId: 423501
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224649
    series:
    - name: Actual
      seriesId: 2224649
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224650
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224650
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224650
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
    - name: Target
      seriesDataTypeId: 6
    dataResource: scorecard-77147/data/measure-423501-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/measure-423501-status.json
  provenance:
    lastUpdatedBy:
      at: "2022-02-25T22:13:49.307Z"
      name: Clarice Strong (Operations)
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2022-02-25T22:13:49.230Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Izzy Moreno (Sales)
- **Reporting frequency:** Quarterly

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 61 (target 60)

### Analysis

Since raising the target, we have hit our objective each month.

### Recommendations

Let's increase the target next quarter.

## Objectives

- [Direct Routes](/scorecard-77147/objectives/objective-207727.md)
