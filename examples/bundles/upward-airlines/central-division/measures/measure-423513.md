---
type: Measure
title: Time planes wait at gate
description: We are measuring the number of minutes it takes from the time a
  plane arrives at the gate until the time it pushes back for it's next
  departure. We want to see that time be 30 minutes or less.
resource: clearpoint://scorecard/77148/measure/423513
timestamp: 2017-10-17T22:06:35.037Z
cps:
  object: measure
  objectId: 423513
  scorecardId: 77148
  scorecard: 🎯 Central Division
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77148
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18580
      status: Below Plan
    historyResource: /central-division/data/measure-423513-periods.json
  provenance:
    owner:
      name: Izzy Moreno
      userId: 24971
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2017-10-17T22:06:35.037Z
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
    dataResource: /central-division/data/measure-423513.json
---

We are measuring the number of minutes it takes from the time a plane arrives at the gate until the time it pushes back for it's next departure. We want to see that time be 30 minutes or less.

**Actual** — 34 (Dec-25) · trend [34, 30, 35, 37, 35, 34]

## Status — Dec-25 (Below Plan)

**Analysis.** We need to do a much better job with this measure and objective.

**Recommendations.** Let's create a new training or upskilling for employees in order to improve.


**Status history.** Nov-25: Below Plan · Oct-25: Below Plan · Sep-25: Below Plan
