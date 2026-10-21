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
  provenance:
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2020-03-27T15:35:28.310Z
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Izzy Moreno (Sales)
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

## Objectives

- [Very Low Ticket Prices](/scorecard-77146/objectives/objective-207712.md)

## Children

- [Ticket price differential](/scorecard-77147/measures/measure-423499.md)
