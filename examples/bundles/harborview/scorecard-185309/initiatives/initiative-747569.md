---
type: Initiative
title: Harborview Maritime Museum
resource: clearpoint://scorecard/185309/initiative/747569
tags:
- Community Dashboard
- Test
- CIP
cps:
  object: initiative
  objectId: 747569
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2026-01-12"
  endDate: "2027-04-15"
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
      calculation: ([i747569][Expenditure][CurrentPeriod]/[i747569][Actual Budget][CurrentPeriod])*100
      currency: USD
    dataResource: scorecard-185309/data/initiative-747569-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185309/data/initiative-747569-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:37.473Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, Test, CIP

## Description

The Town of Harborview is developing a new Maritime Museum to celebrate the community's port heritage and attract regional tourism. The facility will include exhibit galleries, a community event space, and waterfront viewing areas. The project is funded through a combination of general fund reserves and a state cultural grant.

## Details

- **GeoJSON:** {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Harborview Maritime Museum","street":"SE 17th St","mode":"linestring"},"geometry":{"type":"LineString","coordinates":[[-80.135,26.1004],[-80.1265,26.1005],[-80.118,26.1007]]}}]}
- **Address:** 1500 SE 17th St, Fort Lauderdale, FL 33316
- **On Budget:** 1
- **Project Phase:** Planning & Design
- **Project ID:** BG10
- **Capital Improvement Plan:** planning_design

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution

### Analysis

The museum was 25% complete in Jun-26; 35% is the Sep-26 working assessment, below the roughly 57% of scheduled time elapsed. Construction is underway, but earlier phase sign-offs still need verification.

### Recommendations

Confirm the pre-construction record and review the construction sequence against the April 2027 finish.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271237.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271238.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271239.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271240.md)
- [Bid](/scorecard-185309/milestones/milestone-1271241.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271242.md)
- [Construction](/scorecard-185309/milestones/milestone-1271243.md)
- [Close out](/scorecard-185309/milestones/milestone-1271244.md)
