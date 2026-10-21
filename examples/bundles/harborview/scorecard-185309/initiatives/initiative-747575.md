---
type: Initiative
title: Tidewater Lift Station Upgrade
resource: clearpoint://scorecard/185309/initiative/747575
tags:
- Community Dashboard
- CIP
cps:
  object: initiative
  objectId: 747575
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2026-03-02"
  endDate: "2027-01-15"
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
      calculation: ([i747575][Expenditure][CurrentPeriod]/[i747575][Actual Budget][CurrentPeriod])*100
    dataResource: scorecard-185309/data/initiative-747575-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185309/data/initiative-747575-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:42.027Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, CIP

## Description

The Town is upgrading the aging Tidewater lift station to increase capacity and reliability for the surrounding service area. The upgrade will reduce the risk of sanitary sewer overflows during peak flow events. The project is funded through the wastewater utility capital improvement budget.

## Details

- **GeoJSON:** {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Tidewater Lift Station Upgrade","street":"SW 4th Ave","mode":"linestring"},"geometry":{"type":"LineString","coordinates":[[-80.1468,26.098],[-80.1467,26.103],[-80.1466,26.108]]}}]}
- **Address:** 1200 SW 4th Ave, Fort Lauderdale, FL 33315
- **On Budget:** 1
- **Project Phase:** Bid
- **Project ID:** SW02
- **Capital Improvement Plan:** bid

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution

### Analysis

The Tidewater lift station upgrade is assessed at 55%, up from 31% in Jun-26, versus roughly 66% of scheduled time elapsed. Construction is active, but the pre-construction record remains open past its planned date.

### Recommendations

Public Works & Utilities should verify the outstanding readiness record and the construction forecast together before the January finish is reaffirmed.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271285.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271286.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271287.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271288.md)
- [Bid](/scorecard-185309/milestones/milestone-1271289.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271290.md)
- [Construction](/scorecard-185309/milestones/milestone-1271291.md)
- [Close out](/scorecard-185309/milestones/milestone-1271292.md)
