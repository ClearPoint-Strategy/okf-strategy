---
type: Measure
title: Interactions with posts on Metropolis social media accounts
resource: clearpoint://scorecard/7612/measure/274716
cps:
  object: measure
  objectId: 274716
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 1681007
    series:
    - name: Actual
      seriesId: 1681007
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 1681008
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 1681008
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 1681008
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
    dataResource: scorecard-7612/data/measure-274716-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-274716-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-05-17T14:49:52.083Z"
      name: ClearPoint Support
    owner:
      name: ClearPoint Support
    lastEditedBy:
      name: ClearPoint Support
      at: "2021-10-06T17:58:13.320Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** ClearPoint Support
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** Caution

### Analysis

This is improving a lot more than expected, and we may be on track to reach our target by 2021 if this improves even a much smaller amount. Going great!

### Recommendations

Continue to make sure social media posts to the community are interesting and engaging.

## Objectives

- [Effective Leverage of Technology](/scorecard-7612/objectives/objective-277062.md)

## Measure Initiatives

- [Establish Temporary Air Traffic Control Tower during runway rehab](/scorecard-7631/initiatives/initiative-43616.md)
