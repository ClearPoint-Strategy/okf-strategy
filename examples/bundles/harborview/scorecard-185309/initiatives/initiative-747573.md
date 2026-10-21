---
type: Initiative
title: Bayshore Drive Reconstruction
resource: clearpoint://scorecard/185309/initiative/747573
tags:
- Community Dashboard
- CIP
cps:
  object: initiative
  objectId: 747573
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2024-01-08"
  endDate: "2026-10-15"
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
      calculation: ([i747573][Expenditure][CurrentPeriod]/[i747573][Actual Budget][CurrentPeriod])*100
    dataResource: scorecard-185309/data/initiative-747573-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58790
      status: Below Plan
    statusResource: scorecard-185309/data/initiative-747573-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:40.410Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, CIP

## Description

Bayshore Drive is being fully reconstructed to address pavement failure and improve stormwater drainage along the corridor. Unforeseen subsurface utility conflicts have caused cost overruns and construction delays. The project remains a Town priority given its role as a primary connector to the waterfront district.

## Details

- **GeoJSON:** {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Bayshore Drive Reconstruction","street":"Bayshore Dr","mode":"linestring"},"geometry":{"type":"LineString","coordinates":[[-80.1076,26.128],[-80.1074,26.1345],[-80.1071,26.141]]}}]}
- **Address:** 3001 Bayshore Dr, Fort Lauderdale, FL 33304
- **On Budget:** 0
- **Project Phase:** Construction
- **Project ID:** RW03
- **Capital Improvement Plan:** construction

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Below Plan

### Analysis

The working assessment is 70%, up from 55% in Jun-26, but nearly all scheduled time had elapsed by Sep-26. Construction and close-out remain unverified against the October finish.

### Recommendations

Validate the remaining road work and issue a revised completion forecast rather than reporting the original date as secure.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271269.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271270.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271271.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271272.md)
- [Bid](/scorecard-185309/milestones/milestone-1271273.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271274.md)
- [Construction](/scorecard-185309/milestones/milestone-1271275.md)
- [Close out](/scorecard-185309/milestones/milestone-1271276.md)
