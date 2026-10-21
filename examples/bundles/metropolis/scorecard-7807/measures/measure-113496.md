---
type: Measure
title: Percent of fires contained within 2 hours
resource: clearpoint://scorecard/7807/measure/113496
cps:
  object: measure
  objectId: 113496
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 759711
    series:
    - name: Actual
      seriesId: 759711
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 759712
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 759712
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 759712
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
    dataResource: scorecard-7807/data/measure-113496-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7807/data/measure-113496-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-09-30T14:11:38.723Z"
      name: ClearPoint Support
    owner:
      name: Ron Troupe (Director of Public Safety)
    lastEditedBy:
      name: ClearPoint Support
      at: "2021-09-30T14:11:01.793Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Ron Troupe (Director of Public Safety)
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** On Target

### Analysis

We have done a great job containing fires. We train our firefighters well, possess excellent equipment and access to water lines, and have been lucky that fires have largely been easy to control.

### Recommendations

We should keep up with our training to make sure firefighters are prepared for different types of fires.

## Objectives

- [Fire & Operational Statistics](/scorecard-7807/objectives/objective-54699.md)

## Measure Initiatives

- [Update Fire Department Master Plan and Layout Plan](/scorecard-7807/initiatives/initiative-44459.md)
- [Determine new fire headquarters location](/scorecard-7807/initiatives/initiative-44460.md)
