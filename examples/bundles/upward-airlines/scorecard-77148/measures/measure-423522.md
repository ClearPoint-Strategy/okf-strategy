---
type: Measure
title: Internal cost per flight
resource: clearpoint://scorecard/77148/measure/423522
cps:
  object: measure
  objectId: 423522
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3488443
    series:
    - name: Actual
      seriesId: 3488443
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3488444
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 3488444
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 3488444
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    dataResource: scorecard-77148/data/measure-423522-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77148/data/measure-423522-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-09-21T18:44:04.677Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2019-04-07T20:58:15.523Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 7350 (target 7500)

### Analysis

By fuel prices dropping, we have dropped our internal cost per flight.

### Recommendations

We need to understand how to keep internal costs low if fuel prices increase.

## Parents

- [Internal cost per flight (Department aggregate/MM)](/scorecard-77146/measures/measure-423490.md)

## Objectives

- [No Frills](/scorecard-77148/objectives/objective-207741.md)
