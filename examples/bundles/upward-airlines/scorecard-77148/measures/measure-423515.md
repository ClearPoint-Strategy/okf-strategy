---
type: Measure
title: "% of highly satisified employees"
resource: clearpoint://scorecard/77148/measure/423515
cps:
  object: measure
  objectId: 423515
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224727
    series:
    - name: Actual
      seriesId: 2224727
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224728
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224728
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224728
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
    - name: Target
      seriesDataTypeId: 6
    - name: Unsatisfied Employees
      seriesDataTypeId: 6
      calculation: 100-[scorecard-77148/measures/measure-423515][Actual][CurrentPeriod]
      derivation: formula
    dataResource: scorecard-77148/data/measure-423515-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77148/data/measure-423515-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T22:27:34.027Z"
      name: Clarice Strong (Operations)
    owner:
      name: Mark Cutler
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-06T19:54:59.537Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Mark Cutler
- **Reporting frequency:** Quarterly

## Description

We have a employee survery every quarter.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 83 (target 80)

### Analysis

We have been doing well keeping our employees happy since Q3-2018.

### Recommendations

Continue to keep company culture strong.

## Objectives

- [Employee Satisfaction](/scorecard-77148/objectives/objective-207738.md)

## Measure Initiatives

- [Hire Consultant to Design Employee Survey](/scorecard-77148/initiatives/initiative-163376.md)
