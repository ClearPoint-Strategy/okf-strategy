---
type: Measure
title: Average response time of priority one calls
resource: clearpoint://scorecard/7805/measure/111264
cps:
  object: measure
  objectId: 111264
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753739
    series:
    - name: Actual
      seriesId: 753739
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753740
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753740
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753740
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
    dataResource: scorecard-7805/data/measure-111264-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7805/data/measure-111264-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-21T01:17:16.597Z"
      name: ClearPoint Support
    owner:
      name: Mark Cutler
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T17:38:04.063Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** Mark Cutler
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

Response time has been getting worse, so this needs to be better addressed.

### Recommendations

If police operators are overworked, additional ones need to be hired so the response time can be reduced.

## Objectives

- [Crime Statistics](/scorecard-7805/objectives/objective-54680.md)

## Measure Initiatives

- [Update Police Department Master Plan and Layout Plan](/scorecard-7805/initiatives/initiative-44449.md)
- [Establish Temporary Police Substation during renovation project](/scorecard-7805/initiatives/initiative-44450.md)
