---
type: Measure
title: Cost per plane trip
resource: clearpoint://scorecard/77147/measure/423509
cps:
  object: measure
  objectId: 423509
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3488441
    series:
    - name: Actual
      seriesId: 3488441
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3488442
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 3488442
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3488442
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  provenance:
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2019-07-02T18:47:31.880Z
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Monthly

## Description

This information is sourced from a common spreadsheet for all regions.

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

We are struggling with our costs due to continued bad weather on the East Coast.  Winter storms in the first half of the year, and summer thunderstorms and hurricanes in the second half.  We are comparable with the rest of the industry.

### Recommendations

We need to look how some other locations outside of the USA are managing these costs and doing a better job of preparing for climate challenges.The NOAA Fact Sheet below is a good place to start.

## Parents

- [Internal cost per flight (Department aggregate/MM)](/scorecard-77146/measures/measure-423490.md)

## Objectives

- [No Frills](/scorecard-77147/objectives/objective-207731.md)
