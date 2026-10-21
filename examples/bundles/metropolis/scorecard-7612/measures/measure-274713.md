---
type: Measure
title: Potential hazards prevented through routine checks and maintenance
resource: clearpoint://scorecard/7612/measure/274713
cps:
  object: measure
  objectId: 274713
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 1681001
    series:
    - name: Actual
      seriesId: 1681001
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 1681002
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "-5"
        referenceSeries: Target
        referenceSeriesId: 1681002
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: "-5.1"
        referenceSeries: Target
        referenceSeriesId: 1681002
        sortOrder: 3
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7612/data/measure-274713-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/measure-274713-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T01:54:09.027Z"
      name: ClearPoint Support
    owner:
      name: Joseph Lucco
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-11-03T17:49:44.463Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Joseph Lucco
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** On Target

### Analysis

We are doing well and need to continue to improve in this area.

### Recommendations

Continue to keep this a priority and see if routine checks and maintenance can be increased without being too inconvenient or time-consuming.

## Objectives

- [Well-Maintained Infrastructure](/scorecard-7612/objectives/objective-126010.md)

## Children

- [Runway and taxiway pavement condition indicator (PCI) score](/scorecard-7631/measures/measure-107948.md)
