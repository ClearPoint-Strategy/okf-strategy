---
type: Measure
title: Yearly Employee Salary
resource: clearpoint://scorecard/7805/measure/111272
cps:
  object: measure
  objectId: 111272
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753759
    series:
    - name: Actual
      seriesId: 753759
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753760
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 753760
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753760
        sortOrder: 3
      - status: No Information
        statusId: 3959
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
    dataResource: scorecard-7805/data/measure-111272-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7805/data/measure-111272-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T21:12:50.973Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-30T21:31:59.393Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Caution

### Analysis

Our increase in average employee wage has been a steady amount apart from our increasing target.

### Recommendations

We should cut expenses where possible as long as that doesn't hugely negatively affect employee happiness, and we should reallocate the funds to paying a higher yearly employee salary.

## Parents

- [Average employee wage](/scorecard-7612/measures/measure-110213.md)

## Objectives

- [Hire top-notch employees](/scorecard-7805/objectives/objective-54684.md)
