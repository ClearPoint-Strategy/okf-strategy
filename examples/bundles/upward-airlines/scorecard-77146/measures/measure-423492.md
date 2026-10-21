---
type: Measure
title: "% utilization"
resource: clearpoint://scorecard/77146/measure/423492
cps:
  object: measure
  objectId: 423492
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Utilization Percentage
    statusSeriesId: 2224686
    series:
    - name: Utilization Percentage
      seriesId: 2224686
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224687
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 2224687
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224687
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Utilization Percentage
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-77146/data/measure-423492-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/measure-423492-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-17T20:34:01.737Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-10T15:10:59.450Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Quarterly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 40 (target 40)

### Analysis

We saw high utilization this month; let's keep it up.

### Recommendations

Meet with the committee to discuss next steps.

## Objectives

- [High Utilization](/scorecard-77146/objectives/objective-207720.md)

## Measure Initiatives

- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)
