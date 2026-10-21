---
type: Measure
title: Total amount of time at gate
resource: clearpoint://scorecard/77146/measure/423485
cps:
  object: measure
  objectId: 423485
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224670
    series:
    - name: Actual
      seriesId: 2224670
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224671
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224671
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: =0
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: eq
        calculation: =0
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 5
      aggregateType: SUM
    dataResource: scorecard-77146/data/measure-423485-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77146/data/measure-423485-status.json
  provenance:
    lastUpdatedBy:
      at: "2025-02-04T22:56:27.463Z"
      name: Clarice Strong (Operations)
    owner:
      name: Donald Duff
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2023-08-10T16:26:59.320Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Donald Duff
- **Reporting frequency:** Monthly

## Details

- **Variance Report:** This metric is doing well and is surpassing expectations!

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution
- **Value:** 148 (target 145)

### Analysis

Time at gate is a measure that slightly out of our control due to airport traffic. However, we can still improve by expediting our processes.

### Recommendations

We need to continue to do everything we can to make sure our guests are comfortable when waiting for our planes.

## Objectives

- [Fast Ground Turnaround](/scorecard-77146/objectives/objective-207713.md)

## Initiatives

- [Create new Employee Training](/scorecard-77146/initiatives/initiative-163369.md)
- [Purchase 5 new planes](/scorecard-77146/initiatives/initiative-211889.md)
- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)

## Action Items

- [Look into competitors' customer experience surveys](/scorecard-77146/action-items/actionItem-182625.md)
- [Research winter weather patterns and develop mitigation strategy](/scorecard-77146/action-items/actionItem-182624.md)

## Children

- [Time planes wait at gate](/scorecard-77148/measures/measure-423513.md)
- [Rate of departures that leave on time](/scorecard-77149/measures/measure-423523.md)
- [Average plane turnaround time](/scorecard-77149/measures/measure-423525.md)

## Measure Initiatives

- [Create new Employee Training](/scorecard-77146/initiatives/initiative-163369.md)
