---
type: Measure
title: "% of population served within 20 miles"
resource: clearpoint://scorecard/77149/measure/423530
cps:
  object: measure
  objectId: 423530
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224769
    series:
    - name: Actual
      seriesId: 2224769
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224770
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224770
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224770
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
      at: 2024-06-05T21:49:23.923Z
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Quarterly

## Description

We will use this measure to help inform our expansion plans.

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

## Objectives

- [Good locations](/scorecard-77149/objectives/objective-207749.md)
