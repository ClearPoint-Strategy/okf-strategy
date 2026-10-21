---
type: Measure
title: "# of calls for fire emergency"
resource: clearpoint://scorecard/7807/measure/111299
cps:
  object: measure
  objectId: 111299
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753836
    series:
    - name: Actual
      seriesId: 753836
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753837
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753837
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753837
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
      calculation: "[m111299][Region 1][CurrentPeriod]+[m111299][Region 2][CurrentPeriod]"
    - name: Target
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Region 1
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Region 2
      seriesDataTypeId: 5
      aggregateType: SUM
    dataResource: scorecard-7807/data/measure-111299-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7807/data/measure-111299-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-21T21:18:12.520Z"
      name: ClearPoint Support
    owner:
      name: Maggie Sawyer
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:57:04.467Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Maggie Sawyer
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

There have been too many fire emergency calls over the past year. We need to put more effort into reducing fires in the community.

### Recommendations

We should have a special public service campaign about reducing fires and increase our work in K-12 schools.

## Objectives

- [Fire & Operational Statistics](/scorecard-7807/objectives/objective-54699.md)

## Measure Initiatives

- [Update Fire Department Master Plan and Layout Plan](/scorecard-7807/initiatives/initiative-44459.md)
- [Determine new fire headquarters location](/scorecard-7807/initiatives/initiative-44460.md)
