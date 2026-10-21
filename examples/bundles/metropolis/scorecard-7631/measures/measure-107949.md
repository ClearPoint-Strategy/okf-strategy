---
type: Measure
title: Percent of customers rating the airport a 4 or 5
resource: clearpoint://scorecard/7631/measure/107949
cps:
  object: measure
  objectId: 107949
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 723448
    series:
    - name: Actual
      seriesId: 723448
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 723449
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 723449
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 723449
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
    dataResource: scorecard-7631/data/measure-107949-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7631/data/measure-107949-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T18:07:37.423Z"
      name: ClearPoint Support
    owner:
      name: Mark Cutler
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T17:37:06.250Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Mark Cutler
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Caution

### Analysis

We have been dropping since 2017 so we need to make changes to make our customers happy.

### Recommendations

If not known already, we should examine the specific areas customers rate below a 4 and improve those. If we know that information, then we should focus on improving the areas with the lowest scores.

## Objectives

- [Satisfied Customers](/scorecard-7631/objectives/objective-53628.md)

## Measure Initiatives

- [Identify and solicit additional public aviation events](/scorecard-7631/initiatives/initiative-43613.md)
- [Establish Temporary Air Traffic Control Tower during runway rehab](/scorecard-7631/initiatives/initiative-43616.md)
