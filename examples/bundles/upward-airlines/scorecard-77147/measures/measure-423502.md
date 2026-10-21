---
type: Measure
title: Percent of employees that are happy
resource: clearpoint://scorecard/77147/measure/423502
cps:
  object: measure
  objectId: 423502
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224651
    series:
    - name: Actual
      seriesId: 2224651
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224652
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224652
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224652
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  provenance:
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2021-01-25T20:17:29.270Z
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Greg Garcia
- **Reporting frequency:** Quarterly

## Description

We have a employee survery every quarter.

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

### Analysis

We have been doing well keeping our employees happy since Q3-2019.

### Recommendations

Continue to keep company culture strong.

## Objectives

- [Employee Satisfaction](/scorecard-77147/objectives/objective-207728.md)

## Measure Initiatives

- [Create New Employee Satisfaction Survey](/scorecard-77147/initiatives/initiative-163372.md)
