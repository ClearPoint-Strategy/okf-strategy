---
type: Measure
title: Crimes per 1000 citizens
resource: clearpoint://scorecard/7805/measure/111285
cps:
  object: measure
  objectId: 111285
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753801
    series:
    - name: Actual
      seriesId: 753801
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753802
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 753802
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753802
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
    dataResource: scorecard-7805/data/measure-111285-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3959
      status: No Information
    statusResource: scorecard-7805/data/measure-111285-status.json
  provenance:
    owner:
      name: Jerry Johnson
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-02-20T14:57:04.510Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** Jerry Johnson
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** No Information

## Parents

- [Crime rate per 1,000 residents](/scorecard-7612/measures/measure-108445.md)

## Objectives

- [Crime Statistics](/scorecard-7805/objectives/objective-54680.md)

## Initiatives

- [Improve lighting and bus routes on the east side with Public Works](/scorecard-7805/initiatives/initiative-340119.md)
- [Increase police patrols on the west side](/scorecard-7805/initiatives/initiative-340120.md)
- [Create a community policing initiative on the west side](/scorecard-7805/initiatives/initiative-340121.md)

## Measure Initiatives

- [Update Police Department Master Plan and Layout Plan](/scorecard-7805/initiatives/initiative-44449.md)
- [Establish Temporary Police Substation during renovation project](/scorecard-7805/initiatives/initiative-44450.md)
