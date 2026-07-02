---
type: Measure
title: Average plane turnaround time
description: We are measuring the number of minutes it takes from the time a
  plane arrives at the gate until the time it pushes back for it's next
  departure. We want to see that time be 30 minutes or less.
resource: clearpoint://scorecard/77149/measure/423525
timestamp: 2024-06-05T21:49:21.670Z
cps:
  object: measure
  objectId: 423525
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77149
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18579
      status: Caution
    historyResource: /western-division/data/measure-423525-history.json
  provenance:
    owner:
      name: Greg Garcia
      userId: 24966
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2024-06-05T21:49:21.670Z
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 5
        numberFormat:
          precision: 2
      - name: Target
        seriesDataTypeId: 5
        numberFormat:
          precision: 2
    dataResource: /western-division/data/measure-423525-series.json
---

We are measuring the number of minutes it takes from the time a plane arrives at the gate until the time it pushes back for it's next departure. We want to see that time be 30 minutes or less.

**Actual** — 35 (Dec-25) · trend [33, 34, 35, 38, 36, 35]

## Status — Dec-25 (Caution)

**Analysis.** We need to do a much better job with this measure and objective.

**Recommendations.** Let's create a new training or upskilling for employees in order to improve.


**Status history.** Nov-25: Below Plan · Oct-25: Below Plan · Sep-25: Caution
