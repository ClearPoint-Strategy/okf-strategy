---
type: Measure
title: Expenses
resource: clearpoint://scorecard/77148/measure/423521
timestamp: 2017-10-06T20:01:58.767Z
cps:
  object: measure
  objectId: 423521
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
      statusId: 18578
      status: Above Target
    historyResource: /central-division/data/expenses-423521-periods.json
  provenance:
    scorecard:
      id: 77148
      name: 🎯 Central Division
    owner:
      name: Mark Cutler
      userId: 24961
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2017-10-06T20:01:58.767Z
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Target
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Variance
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Actual as % of Target
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
    dataResource: /central-division/data/expenses-423521.json
---

**Actual** — 3331 (Dec-25) · trend [2648, 2880, 2942, 3060, 3274, 3331]

## Status — Dec-25 (Above Target)

**Analysis.** By the cost of fuel dropping dramatically, we have been able to cut costs.

**Recommendations.** We must continue on our current course of managing our expenses closely.
