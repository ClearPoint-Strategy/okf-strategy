---
type: Measure
title: Average plane turnaround time
resource: clearpoint://scorecard/77147/measure/423500
cps:
  object: measure
  objectId: 423500
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224647
    series:
    - name: Actual
      seriesId: 2224647
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224648
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224648
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224648
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 5
      aggregateType: SUM
    dataResource: scorecard-77147/data/measure-423500-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Q4-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77147/data/measure-423500-status.json
  provenance:
    lastUpdatedBy:
      at: "2022-02-25T22:13:24.620Z"
      name: Clarice Strong (Operations)
    owner:
      name: Clarice Strong (Operations)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2022-02-25T22:13:24.527Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Clarice Strong (Operations)
- **Reporting frequency:** Quarterly

## Description

We are measuring the number of minutes it takes from the time a plane arrives at the gate until the time it pushes back for it&#39;s next departure. 

 

 We want to see that time be 30 minutes or less.

## Details

- **Complete?:** 0

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

We need to do a much better job with this measure and objective.

### Recommendations

Let's create a new training or upskilling for employees in order to improve.

## Objectives

- [Ground Turnaround](/scorecard-77147/objectives/objective-207726.md)

## Measure Initiatives

- [Create Upskilling for Employees](/scorecard-77147/initiatives/initiative-163373.md)
- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)
