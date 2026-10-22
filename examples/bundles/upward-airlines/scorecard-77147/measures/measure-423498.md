---
type: Measure
title: "% of on time departures"
resource: clearpoint://scorecard/77147/measure/423498
cps:
  object: measure
  objectId: 423498
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224642
    series:
    - name: Actual
      seriesId: 2224642
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224643
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 2224643
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224643
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
    dataResource: scorecard-77147/data/measure-423498-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77147/data/measure-423498-status.json
  provenance:
    lastUpdatedBy:
      at: "2022-02-25T22:12:46.140Z"
      name: Clarice Strong (Operations)
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2022-02-25T22:12:46.027Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Greg Garcia
- **Reporting frequency:** Quarterly

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution
- **Value:** 84 (target 85)

### Analysis

Most of our our departure times have been greatly reduced due to the speed of which our pilots work at.

### Recommendations

Although this is mostly out of our control, we can keep on ensuring that our process is as fast as possible.

## Objectives

- [Reliable Departures](/scorecard-77147/objectives/objective-207725.md)

## Measure Initiatives

- [Create Upskilling for Employees](/scorecard-77147/initiatives/initiative-163373.md)
- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)
