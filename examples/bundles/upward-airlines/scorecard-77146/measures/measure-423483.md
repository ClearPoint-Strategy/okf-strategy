---
type: Measure
title: Average Number of Daily departures per route
resource: clearpoint://scorecard/77146/measure/423483
cps:
  object: measure
  objectId: 423483
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224662
    series:
    - name: Actual
      seriesId: 2224662
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224663
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224663
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224663
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  provenance:
    owner:
      name: Trudy Joplin (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2020-03-26T18:17:32.263Z
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Trudy Joplin (Sales)
- **Reporting frequency:** Monthly

## Details

- **Variance Report:** This metric is doing well and is surpassing expectations!

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

We're trending upwards and above target here.

### Recommendations

Let's meet as a team to ensure the trend continues.

## Objectives

- [Frequent Reliable Departures (Automatic Eval)](/scorecard-77146/objectives/objective-207710.md)

## Initiatives

- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)

## Children

- [# of new planes purchased](/scorecard-77147/measures/measure-542405.md)
- [# of new planes purchased](/scorecard-77149/measures/measure-542536.md)
