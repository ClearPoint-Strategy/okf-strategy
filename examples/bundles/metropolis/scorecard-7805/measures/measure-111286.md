---
type: Measure
title: "Traffic Enforcement - # of citations issued"
resource: clearpoint://scorecard/7805/measure/111286
cps:
  object: measure
  objectId: 111286
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753803
    series:
    - name: Actual
      seriesId: 753803
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753804
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753804
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753804
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
    dataResource: scorecard-7805/data/measure-111286-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7805/data/measure-111286-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-21T01:30:11.857Z"
      name: ClearPoint Support
    owner:
      name: Maggie Sawyer
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:46:33.320Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** Maggie Sawyer
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

There has been a steady decline for most of the year, so this problem needs to be addressed to be fixed.

### Recommendations

Hire or reassign more police to traffic duty to increase manpower in order to issue more citations.

## Objectives

- [Crime Statistics](/scorecard-7805/objectives/objective-54680.md)

## Measure Initiatives

- [Update Police Department Master Plan and Layout Plan](/scorecard-7805/initiatives/initiative-44449.md)
- [Establish Temporary Police Substation during renovation project](/scorecard-7805/initiatives/initiative-44450.md)
