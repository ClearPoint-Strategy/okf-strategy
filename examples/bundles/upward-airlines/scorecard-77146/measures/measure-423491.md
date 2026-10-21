---
type: Measure
title: Maintenance cost per 100K miles
resource: clearpoint://scorecard/77146/measure/423491
cps:
  object: measure
  objectId: 423491
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Maintenance Cost
    statusSeriesId: 2224683
    series:
    - name: Maintenance Cost
      seriesId: 2224683
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224684
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224684
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224684
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Maintenance Cost
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: "% of Target"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m423491][Maintenance Cost][CurrentPeriod]/[m423491][Target][CurrentPeriod]*100"
    dataResource: scorecard-77146/data/measure-423491-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77146/data/measure-423491-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-09-21T18:52:55.403Z"
      name: Clarice Strong (Operations)
    owner:
      name: Janice Jones
    collaborators:
    - Ashley Caper
    - Ted Jackson
    - Joseph Lucco
    - Mark Cutler
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-05-05T19:57:15.627Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Janice Jones
- **Reporting frequency:** Monthly

## Details

- **Variance Report:** The weather in the eastern region has hurt us here. We're looking to mitigate costs.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 17220 (target 15000)

### Analysis

Our cost has increased dramatically over the last month, due to the problems of our old planes. We need to purchase new planes, in order to drop this cost in the long term.

### Recommendations

If we continue to be below plan on cost of maintenance, we need to get to the root of the problem.

## Objectives

- [Standard Fleet](/scorecard-77146/objectives/objective-207719.md)
