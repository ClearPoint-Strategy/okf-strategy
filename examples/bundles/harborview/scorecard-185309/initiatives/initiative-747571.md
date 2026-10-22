---
type: Initiative
title: Port Access Road Utilities
resource: clearpoint://scorecard/185309/initiative/747571
tags:
- Community Dashboard
- CIP
cps:
  object: initiative
  objectId: 747571
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2025-02-10"
  endDate: "2026-10-31"
  measure:
    series:
    - name: Actual Budget
      seriesDataTypeId: 4
    - name: Expenditure
      seriesDataTypeId: 4
    - name: "% of Budget Expended"
      seriesDataTypeId: 5
      calculation: ([scorecard-185309/initiatives/initiative-747571][Expenditure][CurrentPeriod]/[scorecard-185309/initiatives/initiative-747571][Actual Budget][CurrentPeriod])*100
      derivation: formula
    dataResource: scorecard-185309/data/initiative-747571-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58790
      status: Below Plan
    statusResource: scorecard-185309/data/initiative-747571-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:38.917Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, CIP

## Description

The Town is upgrading water and sewer utilities along the primary port access corridor to support increased freight traffic and planned commercial development. Utility relocation work has caused intermittent lane closures. The project is funded through utility enterprise funds and a state infrastructure grant.

## Details

- **GeoJSON:** {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Port Access Road Utilities","street":"Eller Dr","mode":"linestring"},"geometry":{"type":"LineString","coordinates":[[-80.135,26.0853],[-80.123,26.0855],[-80.1105,26.0857]]}}]}
- **Address:** 1850 Eller Dr, Fort Lauderdale, FL 33316
- **On Budget:** 1
- **Project Phase:** Pre-Construction
- **Project ID:** IF05
- **Capital Improvement Plan:** pre_construction

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Below Plan

### Analysis

The working assessment is 75%, up from 65% in Jun-26, against roughly 95% of scheduled time elapsed. The August construction deadline is unverified, leaving the October project finish at risk.

### Recommendations

Review outstanding utility tests and the revised construction forecast before committing to a close-out date.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271253.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271254.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271255.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271256.md)
- [Bid](/scorecard-185309/milestones/milestone-1271257.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271258.md)
- [Construction](/scorecard-185309/milestones/milestone-1271259.md)
- [Close out](/scorecard-185309/milestones/milestone-1271260.md)
