---
type: Measure
title: Revenue
resource: clearpoint://scorecard/77148/measure/423520
cps:
  object: measure
  objectId: 423520
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224740
    series:
    - name: Actual
      seriesId: 2224740
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224741
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224741
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224741
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224741
        sortOrder: 4
  provenance:
    owner:
      name: Ashley Caper
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2017-10-06T20:00:10.697Z
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Ashley Caper
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Not Defined

### Analysis

Tickets are selling at a rapid pace this month, boosting revenue for the Central region.

### Recommendations

We need to continue on our current course.

## Parents

- [Revenue](/scorecard-77146/measures/measure-423496.md)

## Objectives

- [Profitability](/scorecard-77148/objectives/objective-207733.md)

## Measure Initiatives

- [Prepare for summer sale](/scorecard-77148/initiatives/initiative-211898.md)
