---
type: Initiative
title: Seagrove District Infrastructure
resource: clearpoint://scorecard/185309/initiative/747572
tags:
- Community Dashboard
- CIP
cps:
  object: initiative
  objectId: 747572
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2026-04-06"
  endDate: "2027-07-31"
  measure:
    series:
    - name: Actual Budget
      seriesDataTypeId: 4
    - name: Expenditure
      seriesDataTypeId: 4
    - name: "% of Budget Expended"
      seriesDataTypeId: 5
      calculation: ([scorecard-185309/initiatives/initiative-747572][Expenditure][CurrentPeriod]/[scorecard-185309/initiatives/initiative-747572][Actual Budget][CurrentPeriod])*100
      derivation: formula
    dataResource: scorecard-185309/data/initiative-747572-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185309/data/initiative-747572-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:39.650Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, CIP

## Description

This project constructs public infrastructure to support the future Seagrove mixed-use district, including roadway, drainage, and utility extensions. The district is expected to bring new retail, dining, and residential development to Harborview. The Town anticipates increased property and sales tax revenue upon completion.

## Details

- **GeoJSON:** {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Seagrove District Infrastructure","street":"Seabreeze Blvd (A1A)","mode":"linestring"},"geometry":{"type":"LineString","coordinates":[[-80.106,26.1],[-80.1042,26.106],[-80.1038,26.1125]]}}]}
- **Address:** 600 Seabreeze Blvd, Fort Lauderdale, FL 33316
- **On Budget:** 1
- **Project Phase:** ROW Acquisition
- **Project ID:** IF09
- **Capital Improvement Plan:** row_acquisition

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution

### Analysis

The working assessment is 25%, compared with 15% in Jun-26 and roughly 37% of scheduled time elapsed. Right-of-way work is the next decision point before bidding.

### Recommendations

Confirm right-of-way readiness and the funding assumptions for the bid package; do not treat proposed outside funding as an award.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271261.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271262.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271263.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271264.md)
- [Bid](/scorecard-185309/milestones/milestone-1271265.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271266.md)
- [Construction](/scorecard-185309/milestones/milestone-1271267.md)
- [Close out](/scorecard-185309/milestones/milestone-1271268.md)
