---
type: Measure
title: On-Time Departure %
description: Share of flights departing within 15 minutes of schedule, network-wide.
resource: clearpoint://district/42/scorecard/7/measure/2210
tags: [perspective:customer, theme:on-time]
timestamp: 2026-06-05T14:22:00Z
cps:
  object: measure
  objectId: 2210
  scorecardId: 7
  scorecard: Upward Airlines
  parent: /customer/improve-on-time-performance.md
  measureId: 2210
  alias: Metric
  edges:
    - { fieldId: objectives, to: /customer/improve-on-time-performance.md, object: objective, objectId: 1043, name: "Improve On-Time Performance", access: Browser }
  access:
    minCapability: Browser
    markings: [scorecard:7]
  time:
    cadence: monthly
    periodGroupId: 3
    currentPeriod: { periodId: 9905, period: "May 2026", periodDate: "2026-05-31" }
  provenance:
    scorecard: { id: 7, name: Upward Airlines }
    owner: { name: Miguel Torres, userId: 52 }
    ownerType: user
    lastUpdatedBy: { name: Miguel Torres, userId: 52, at: 2026-06-05T14:22:00Z }
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 6
        numberFormat: { precision: 1, decimal: ".", symbol: "%", thousand: "," }
      - name: Target
        seriesDataTypeId: 6
        numberFormat: { precision: 1, decimal: ".", symbol: "%", thousand: "," }
    evaluation:
      - { compare: ">=", statusId: 3, statusName: "On Track", measureSeries: Actual }
      - { compare: ">=", statusId: 2, statusName: "Caution", measureSeries: Actual }
      - { compare: "<", statusId: 1, statusName: "Off Track", measureSeries: Actual }
    dataResource: /data/on-time-departure-pct.json
---

On-Time Departure % — **85.6%** (May 2026) · target **85.0%** · ▲1.6 pts MoM · **On Track** ·
higher-is-better · trend [78.2, 80.1, 79.5, 82.3, 84.0, 85.6].

## Schema

Series: Actual (percentage), Target (percentage). Higher is better; status is On Track at or above target.
Full monthly history in the sidecar.

## Citations

[1] Full series — [data/on-time-departure-pct.json](/data/on-time-departure-pct.json)
