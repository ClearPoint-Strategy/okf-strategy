---
type: Measure
title: "% of population served within 15 miles"
resource: clearpoint://scorecard/77148/measure/423519
cps:
  object: measure
  objectId: 423519
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224738
    series:
    - name: Actual
      seriesId: 2224738
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224739
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224739
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224739
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-77148/data/measure-423519-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Q4-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77148/data/measure-423519-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T22:52:09.460Z"
      name: Clarice Strong (Operations)
    owner:
      name: Mark Cutler
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-17T22:30:29.310Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Mark Cutler
- **Reporting frequency:** Quarterly

## Description

We will use this measure to help inform our expansion plans.

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

### Analysis

As the population grows more people fly with us, so we feel really great about our progress.

### Recommendations

Continue to sell reasonably priced tickets and offer a great in-flight experience.

## Parents

- [% of population served within 25 miles](/scorecard-77146/measures/measure-423486.md)

## Objectives

- [Good locations](/scorecard-77148/objectives/objective-207740.md)
