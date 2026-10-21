---
type: Measure
title: Department Overhead Costs
resource: clearpoint://scorecard/7805/measure/741592
tags:
- Overhead Costs - Children Template
cps:
  object: measure
  objectId: 741592
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3500556
    series:
    - name: Actual
      seriesId: 3500556
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3500557
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: lte
        calculation: "*1.2"
        referenceSeries: Target
        referenceSeriesId: 3500557
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3500557
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    dataResource: scorecard-7805/data/measure-741592-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7805/data/measure-741592-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-19T18:36:38.707Z"
      name: ClearPoint Support
    owner:
      name: Rhonda Fields (Assistant City Manager)
    lastEditedBy:
      name: ClearPoint Support
      at: "2019-05-10T13:19:47.150Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** Rhonda Fields (Assistant City Manager)
- **Reporting frequency:** Monthly
- **Tags:** Overhead Costs - Children Template

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target

### Analysis

We've been consistently above target here for several months.

### Recommendations

Let's keep a close eye on this for the rest of the year.

## Parents

- [City-wide Overhead Costs (Aggregate/MM)](/scorecard-7612/measures/measure-741332.md)
