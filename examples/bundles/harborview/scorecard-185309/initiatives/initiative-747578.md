---
type: Initiative
title: Municipal Pier Rehabilitation
resource: clearpoint://scorecard/185309/initiative/747578
tags:
- Community Dashboard
- CIP
cps:
  object: initiative
  objectId: 747578
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2026-01-01"
  endDate: "2026-12-31"
  measure:
    series:
    - name: Actual Budget
      seriesDataTypeId: 4
    - name: Expenditure
      seriesDataTypeId: 4
    - name: "% of Budget Expended"
      seriesDataTypeId: 5
      calculation: ([scorecard-185309/initiatives/initiative-747578][Expenditure][CurrentPeriod]/[scorecard-185309/initiatives/initiative-747578][Actual Budget][CurrentPeriod])*100
      derivation: formula
    dataResource: scorecard-185309/data/initiative-747578-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185309/data/initiative-747578-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:44.583Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, CIP

## Description

The Town of Harborview is rehabilitating the aging municipal pier to address structural deterioration and extend its service life. The project will replace decking, pilings, and lighting while preserving public fishing and recreational access. Funding is anticipated through a mix of general fund reserves and a state resilience grant.

## Details

- **GeoJSON:** {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Municipal Pier Rehabilitation","street":"S Fort Lauderdale Beach Blvd (A1A)","mode":"linestring"},"geometry":{"type":"LineString","coordinates":[[-80.104,26.108],[-80.1038,26.113],[-80.1036,26.118]]}}]}
- **Address:** 200 S Fort Lauderdale Beach Blvd, Fort Lauderdale, FL 33316
- **On Budget:** 1
- **Project Phase:** Planning & Design
- **Project ID:** PT06
- **Capital Improvement Plan:** planning_design

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution

### Analysis

The pier remains at the previously reported 90% working assessment. That is ahead of the roughly 75% of scheduled time elapsed, but the remaining construction and December close-out still require verification; no new spending figure is available.

### Recommendations

Validate the construction record and remaining acceptance work before confirming the year-end finish.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271309.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271310.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271311.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271312.md)
- [Bid](/scorecard-185309/milestones/milestone-1271313.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271314.md)
- [Construction](/scorecard-185309/milestones/milestone-1271315.md)
- [Close out](/scorecard-185309/milestones/milestone-1271316.md)
