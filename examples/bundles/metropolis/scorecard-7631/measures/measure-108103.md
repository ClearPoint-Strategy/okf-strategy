---
type: Measure
title: On time landings and takeoffs
resource: clearpoint://scorecard/7631/measure/108103
cps:
  object: measure
  objectId: 108103
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753694
    series:
    - name: Actual
      seriesId: 753694
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753695
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753695
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753695
        sortOrder: 3
      - status: No Information
        statusId: 3959
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
    dataResource: scorecard-7631/data/measure-108103-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7631/data/measure-108103-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-02T20:07:00.630Z"
      name: ClearPoint Support
    owner:
      name: Rhonda Fields (Assistant City Manager)
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:30:18.397Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Rhonda Fields (Assistant City Manager)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

On time landings and takeoffs is a measure that slightly out of our control due to airport traffic. However, we can still improve by expediting our processes.

### Recommendations

We need to continue to do everything we can to make sure our guests are comfortable when waiting for our planes.

## Parents

- [Airport efficiency rating](/scorecard-7612/measures/measure-110210.md)

## Objectives

- [Airfield operates efficiently](/scorecard-7631/objectives/objective-53625.md)

## Measure Initiatives

- [Update Airport Master Plan](/scorecard-7631/initiatives/initiative-43615.md)
- [Identify and solicit additional public aviation events](/scorecard-7631/initiatives/initiative-43613.md)
