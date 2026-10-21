---
type: Measure
title: Time planes wait at gate
resource: clearpoint://scorecard/77148/measure/423513
cps:
  object: measure
  objectId: 423513
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224723
    series:
    - name: Actual
      seriesId: 2224723
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224724
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224724
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224724
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
    dataResource: scorecard-77148/data/measure-423513-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77148/data/measure-423513-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-09-21T18:46:02.640Z"
      name: Clarice Strong (Operations)
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-17T22:06:35.037Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Izzy Moreno (Sales)
- **Reporting frequency:** Monthly

## Description

We are measuring the number of minutes it takes from the time a plane arrives at the gate until the time it pushes back for it's next departure. 
 
 We want to see that time be 30 minutes or less.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 34 (target 30)

### Analysis

We need to do a much better job with this measure and objective.

### Recommendations

Let's create a new training or upskilling for employees in order to improve.

## Parents

- [Total amount of time at gate](/scorecard-77146/measures/measure-423485.md)

## Objectives

- [Ground Turnaround](/scorecard-77148/objectives/objective-207736.md)

## Measure Initiatives

- [Create New Training Program for Employees](/scorecard-77148/initiatives/initiative-163377.md)
