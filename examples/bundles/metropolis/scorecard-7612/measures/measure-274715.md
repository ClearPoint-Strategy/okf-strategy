---
type: Measure
title: Contract bids awarded to local businesses
resource: clearpoint://scorecard/7612/measure/274715
cps:
  object: measure
  objectId: 274715
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 1681005
    series:
    - name: Actual
      seriesId: 1681005
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 1681006
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 1681006
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 1681006
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 5
      aggregateType: SUM
    dataResource: scorecard-7612/data/measure-274715-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7612/data/measure-274715-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T15:13:27.063Z"
      name: ClearPoint Support
    owner:
      name: Steve Lombard
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-03-18T19:08:30.217Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Steve Lombard
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Below Plan

### Analysis

We must do all that we can to make local businesses more attractive for contract bids to allow more money to stay locally.

### Recommendations

We should compare local businesses that lost contract bids to the winning companies to see where those local businesses should improve and then tell them how they can improve for future contract bidding.

## Objectives

- [Strong Local Economy](/scorecard-7612/objectives/objective-126011.md)
