---
type: Measure
title: Ticket price differential
resource: clearpoint://scorecard/77146/measure/423484
cps:
  object: measure
  objectId: 423484
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: best
    statusSeriesId: -1
    series:
    - name: Actual
      seriesId: 2224665
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224666
        sortOrder: 1
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224666
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
    - name: Differential vs. Target
      seriesId: 2224668
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: =0
        sortOrder: 1
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: =0
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
    - name: Target
      seriesDataTypeId: 4
      calculation: "[scorecard-77146/measures/measure-423484][Industry][CurrentPeriod]*.9"
      derivation: formula
    - name: Industry
      seriesDataTypeId: 4
    - name: Differential vs. Target
      seriesDataTypeId: 4
      calculation: "[scorecard-77146/measures/measure-423484][Target][CurrentPeriod]-[scorecard-77146/measures/measure-423484][Actual][CurrentPeriod]"
      derivation: formula
    - name: Differential vs. Industry
      seriesDataTypeId: 4
      calculation: "[scorecard-77146/measures/measure-423484][Industry][CurrentPeriod]-[scorecard-77146/measures/measure-423484][Actual][CurrentPeriod]"
      derivation: formula
    dataResource: scorecard-77146/data/measure-423484-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/measure-423484-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-08T14:45:51.813Z"
      name: Clarice Strong (Operations)
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2020-03-27T15:35:28.310Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Izzy Moreno (Sales)
- **Reporting frequency:** Quarterly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 94 (target 94.5)

## Objectives

- [Very Low Ticket Prices](/scorecard-77146/objectives/objective-207712.md)

## Children

- [Ticket price differential](/scorecard-77147/measures/measure-423499.md)
