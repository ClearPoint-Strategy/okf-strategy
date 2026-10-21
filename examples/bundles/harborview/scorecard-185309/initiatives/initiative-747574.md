---
type: Initiative
title: Compass Point Road Widening
resource: clearpoint://scorecard/185309/initiative/747574
tags:
- Community Dashboard
- CIP
cps:
  object: initiative
  objectId: 747574
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2026-05-04"
  endDate: "2028-04-30"
  measure:
    series:
    - name: Actual Budget
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Expenditure
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: "% of Budget Expended"
      seriesDataTypeId: 5
      aggregateType: SUM
      calculation: ([i747574][Expenditure][CurrentPeriod]/[i747574][Actual Budget][CurrentPeriod])*100
    dataResource: scorecard-185309/data/initiative-747574-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185309/data/initiative-747574-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:41.250Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, CIP

## Description

This project will widen Compass Point Road from two to four lanes to accommodate growing traffic volumes from nearby residential development. Planning includes traffic modeling, environmental review, and preliminary design. The project is funded through a combination of impact fees and a transportation bond.

## Details

- **GeoJSON:** {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Compass Point Road Widening","street":"N Federal Hwy (US-1)","mode":"linestring"},"geometry":{"type":"LineString","coordinates":[[-80.1216,26.174],[-80.1215,26.182],[-80.1213,26.19]]}}]}
- **Address:** 4201 N Federal Hwy, Fort Lauderdale, FL 33308
- **On Budget:** 1
- **Project Phase:** Planning & Design
- **Project ID:** RW11
- **Capital Improvement Plan:** planning_design

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution

### Analysis

Progress is assessed at 17%, up from 10% in Jun-26, against roughly 21% of scheduled time elapsed. Early design has passed its planned date without a recorded acceptance.

### Recommendations

Resolve the early-design review and confirm its effect on final design before changing the overall project finish.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271277.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271278.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271279.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271280.md)
- [Bid](/scorecard-185309/milestones/milestone-1271281.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271282.md)
- [Construction](/scorecard-185309/milestones/milestone-1271283.md)
- [Close out](/scorecard-185309/milestones/milestone-1271284.md)
