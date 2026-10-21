---
type: Measure
title: "% of tickets with direct routes"
resource: clearpoint://scorecard/77146/measure/423487
cps:
  object: measure
  objectId: 423487
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224675
    series:
    - name: Actual
      seriesId: 2224675
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224676
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224676
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224676
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-77146/data/measure-423487-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77146/data/measure-423487-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-08-10T17:25:06.590Z"
      name: Donald Duff
    owner:
      name: Donald Duff
    collaborators:
    - Xavier Prova
    - Lawrence Sito
    - Steve Smith
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-05-05T19:57:15.370Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Donald Duff
- **Reporting frequency:** Monthly

## Details

- **Variance Report:** The cold weather has hurt us. We're looking into encouraging more purchase on direct flights without harming profit.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

We were above our target this summer, but now that vacation season is over, we are well below the target with our business travelers.  We either need to look at new routes or look at adjusting our target throughout the year!

### Recommendations

We need to contract with more airports to provide direct routes. This involves reaching out to airport officials.

## Objectives

- [Direct Routes](/scorecard-77146/objectives/objective-207715.md)

## Initiatives

- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)

## Action Items

- [Research winter weather patterns and develop mitigation strategy](/scorecard-77146/action-items/actionItem-182624.md)

## Children

- [Major cities with direct flights 3+ times per day](/scorecard-77147/measures/measure-423510.md)
- [% of tickets with direct routes](/scorecard-77148/measures/measure-423514.md)

## Measure Initiatives

- [Purchase 5 new planes](/scorecard-77146/initiatives/initiative-211889.md)
