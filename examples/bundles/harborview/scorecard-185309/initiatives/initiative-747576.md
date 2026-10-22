---
type: Initiative
title: Harbor Creek Drainage Improvements
resource: clearpoint://scorecard/185309/initiative/747576
tags:
- Community Dashboard
- CIP
cps:
  object: initiative
  objectId: 747576
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2026-06-01"
  endDate: "2027-10-31"
  measure:
    series:
    - name: Actual Budget
      seriesDataTypeId: 4
    - name: Expenditure
      seriesDataTypeId: 4
    - name: "% of Budget Expended"
      seriesDataTypeId: 5
      calculation: ([scorecard-185309/initiatives/initiative-747576][Expenditure][CurrentPeriod]/[scorecard-185309/initiatives/initiative-747576][Actual Budget][CurrentPeriod])*100
      derivation: formula
    dataResource: scorecard-185309/data/initiative-747576-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185309/data/initiative-747576-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:42.760Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, CIP

## Description

This project improves stormwater drainage capacity along Harbor Creek to reduce localized flooding during heavy rain events. Work includes channel widening and culvert replacement. Nearby residents may experience periodic access restrictions during construction staging.

## Details

- **GeoJSON:** {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Harbor Creek Drainage Improvements","street":"NE 26th St","mode":"linestring"},"geometry":{"type":"LineString","coordinates":[[-80.13,26.1652],[-80.1215,26.1654],[-80.113,26.1655]]}}]}
- **Address:** 1501 NE 26th St, Fort Lauderdale, FL 33305
- **On Budget:** 1
- **Project Phase:** Pre-Construction
- **Project ID:** SW07
- **Capital Improvement Plan:** pre_construction

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution

### Analysis

Progress is assessed at 38%, up from 35% in Jun-26. Final design is in its planned window, while acceptance of the earlier design stage remains unverified. Coastal resilience funding opportunities are context, not committed project funding.

### Recommendations

Confirm design-stage acceptance and retain a funding-contingent delivery scenario for the next review.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271293.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271294.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271295.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271296.md)
- [Bid](/scorecard-185309/milestones/milestone-1271297.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271298.md)
- [Construction](/scorecard-185309/milestones/milestone-1271299.md)
- [Close out](/scorecard-185309/milestones/milestone-1271300.md)
