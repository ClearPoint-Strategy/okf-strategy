---
type: Measure
title: Average plane turnaround time
resource: clearpoint://scorecard/77149/measure/423525
cps:
  object: measure
  objectId: 423525
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224757
    series:
    - name: Actual
      seriesId: 2224757
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224758
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224758
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224758
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
    dataResource: scorecard-77149/data/measure-423525-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77149/data/measure-423525-status.json
  provenance:
    lastUpdatedBy:
      at: "2024-09-16T18:46:45.480Z"
      name: Clarice Strong (Operations)
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:21.670Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Greg Garcia
- **Reporting frequency:** Monthly

## Description

We are measuring the number of minutes it takes from the time a plane arrives at the gate until the time it pushes back for it's next departure. 

 

 We want to see that time be 30 minutes or less.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution
- **Value:** 35 (target 33)

### Analysis

We need to do a much better job with this measure and objective.

### Recommendations

Let's create a new training or upskilling for employees in order to improve.

## Parents

- [Total amount of time at gate](/scorecard-77146/measures/measure-423485.md)

## Objectives

- [Ground Turnaround](/scorecard-77149/objectives/objective-207745.md)

## Initiatives

- [Build Employee Upskilling](/scorecard-77149/initiatives/initiative-163380.md)

## Measure Initiatives

- [Build Employee Upskilling](/scorecard-77149/initiatives/initiative-163380.md)
