---
type: Measure
title: "% of tickets with direct routes"
resource: clearpoint://scorecard/77148/measure/423514
cps:
  object: measure
  objectId: 423514
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224725
    series:
    - name: Actual
      seriesId: 2224725
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224726
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 2224726
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224726
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  provenance:
    owner:
      name: Lawrence Sito
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2017-10-06T19:54:43.223Z
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Lawrence Sito
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

Since October, our Actual values have been declining at an alarming pace.

### Recommendations

Lower the target next quarter.

## Parents

- [% of tickets with direct routes](/scorecard-77146/measures/measure-423487.md)

## Objectives

- [Direct Routes](/scorecard-77148/objectives/objective-207737.md)
