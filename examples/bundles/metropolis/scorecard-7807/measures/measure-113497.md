---
type: Measure
title: Volunteers vs. Paid Staff
resource: clearpoint://scorecard/7807/measure/113497
cps:
  object: measure
  objectId: 113497
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Paid Staff
    statusSeriesId: 759713
    series:
    - name: Paid Staff
      seriesId: 759713
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Volunteers
        referenceSeriesId: 759714
        sortOrder: 1
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Volunteers
        referenceSeriesId: 759714
        sortOrder: 3
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Paid Staff
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Volunteers
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7807/data/measure-113497-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7807/data/measure-113497-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-21T22:16:08.227Z"
      name: ClearPoint Support
    owner:
      name: Richard Grayson
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T19:48:21.180Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Richard Grayson
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** On Target

### Analysis

The volunteers/paid staff ratio has been pretty consistent.

### Recommendations

We should cut unnecessary expenses and reallocate the money to hiring more paid staff to have more paid staff than volunteers.

## Objectives

- [Recruit & Retain Top Talent](/scorecard-7807/objectives/objective-54702.md)
