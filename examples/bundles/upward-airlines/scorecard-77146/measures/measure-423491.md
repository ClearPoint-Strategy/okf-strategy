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
  provenance:
    owner:
      name: Janice Jones
    collaborators:
    - Ashley Caper
    - Ted Jackson
    - Joseph Lucco
    - Mark Cutler
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2025-05-05T19:57:15.627Z
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

### Analysis

Our cost has increased dramatically over the last month, due to the problems of our old planes. We need to purchase new planes, in order to drop this cost in the long term.

### Recommendations

If we continue to be below plan on cost of maintenance, we need to get to the root of the problem.

## Objectives

- [Standard Fleet](/scorecard-77146/objectives/objective-207719.md)
