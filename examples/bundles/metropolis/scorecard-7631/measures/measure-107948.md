---
type: Measure
title: Runway and taxiway pavement condition indicator (PCI) score
resource: clearpoint://scorecard/7631/measure/107948
cps:
  object: measure
  objectId: 107948
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 723446
    series:
    - name: Actual
      seriesId: 723446
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 723447
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 723447
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 723447
        sortOrder: 3
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 5
      aggregateType: SUM
    dataResource: scorecard-7631/data/measure-107948-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7631/data/measure-107948-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T17:53:19.983Z"
      name: ClearPoint Support
    owner:
      name: Steve Lombard
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:29:47.507Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Steve Lombard
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

We have been at or above our target mostly in recent quarters, so we need to turn this score around.

### Recommendations

We need to take more emphasis on making sure the pavement is in better condition. We should increase the frequency of pavement checks and repairs throughout the year.

## Parents

- [Potential hazards prevented through routine checks and maintenance](/scorecard-7612/measures/measure-274713.md)
- [Number of community evacuation trainings](/scorecard-7612/measures/measure-120406.md)

## Objectives

- [Well-maintained airfield](/scorecard-7631/objectives/objective-53627.md)

## Measure Initiatives

- [Establish Temporary Air Traffic Control Tower during runway rehab](/scorecard-7631/initiatives/initiative-43616.md)
