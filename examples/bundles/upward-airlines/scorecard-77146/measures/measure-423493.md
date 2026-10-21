---
type: Measure
title: Average Wage
resource: clearpoint://scorecard/77146/measure/423493
cps:
  object: measure
  objectId: 423493
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Avg. Wage / Hr
    statusSeriesId: 2224688
    series:
    - name: Avg. Wage / Hr
      seriesId: 2224688
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224689
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.90"
        referenceSeries: Target
        referenceSeriesId: 2224689
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224689
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  provenance:
    owner:
      name: Steve Smith
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2020-03-26T18:17:11.467Z
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Steve Smith
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

## Objectives

- [High Compensation](/scorecard-77146/objectives/objective-207721.md)

## Initiatives

- [Redesign Employee Satisfaction Survey](/scorecard-77146/initiatives/initiative-163370.md)

## Children

- [Wage Growth](/scorecard-77147/measures/measure-423504.md)
- [% increase in employee wages](/scorecard-77148/measures/measure-423517.md)

## Measure Initiatives

- [Redesign Employee Satisfaction Survey](/scorecard-77146/initiatives/initiative-163370.md)
