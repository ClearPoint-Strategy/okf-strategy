---
type: Measure
title: Customer Experience Survey
resource: clearpoint://scorecard/77146/measure/423482
cps:
  object: measure
  objectId: 423482
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: best
    statusSeriesId: -1
    series:
    - name: Actual
      seriesId: 2224660
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224661
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224661
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224661
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
    dataResource: scorecard-77146/data/measure-423482-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: "2025"
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/measure-423482-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-02-28T16:23:45.107Z"
      name: Clarice Strong (Operations)
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-10T15:12:15.667Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Izzy Moreno (Sales)
- **Reporting frequency:** Annual

## Status

- **Period:** 2025 (2025-12-31)
- **Status:** Above Target

## Objectives

- [Comparable To Other Travel](/scorecard-77146/objectives/objective-207711.md)

## Initiatives

- [Create new Employee Training](/scorecard-77146/initiatives/initiative-163369.md)

## Action Items

- [Look into competitors' customer experience surveys](/scorecard-77146/action-items/actionItem-182625.md)

## Children

- [# of A-list priority customers](/scorecard-77148/measures/measure-542406.md)

## Measure Initiatives

- [Build a business class program](/scorecard-77146/initiatives/initiative-211892.md)
