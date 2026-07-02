---
type: Measure
title: Maintenance cost per 100K miles
resource: clearpoint://scorecard/77146/measure/423491
timestamp: 2025-05-05T19:57:15.627Z
cps:
  object: measure
  objectId: 423491
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18580
      status: Below Plan
    historyResource: /upward-airlines-corporate/data/measure-423491-history.json
  provenance:
    owner:
      name: Janice Jones
      userId: 24967
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2025-05-05T19:57:15.627Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: The weather in the eastern region has hurt us here. We're looking to
        mitigate costs.
  measure:
    series:
      - name: Maintenance Cost
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
      - name: Target
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
      - name: "% of Target"
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
    dataResource: /upward-airlines-corporate/data/measure-423491-series.json
---

**Maintenance Cost** — 17220 (Dec-25) · trend [16660, 16200, 15500, 15680, 17550, 17220]

## Status — Dec-25 (Below Plan)

**Analysis.** Our cost has increased dramatically over the last month, due to the problems of our old planes. We need to purchase new planes, in order to drop this cost in the long term.

**Recommendations.** If we continue to be below plan on cost of maintenance, we need to get to the root of the problem.


**Status history.** Nov-25: Below Plan · Oct-25: Caution · Sep-25: Caution
