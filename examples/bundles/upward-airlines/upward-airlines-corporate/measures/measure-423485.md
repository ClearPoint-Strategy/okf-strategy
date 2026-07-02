---
type: Measure
title: Total amount of time at gate
resource: clearpoint://scorecard/77146/measure/423485
timestamp: 2023-08-10T16:26:59.320Z
cps:
  object: measure
  objectId: 423485
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /central-division/measures/measure-423513.md
      object: measure
      objectId: 423513
      name: Time planes wait at gate
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/measure-423523.md
      object: measure
      objectId: 423523
      name: Rate of departures that leave on time
      scorecard: 🏜️ Western Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/measure-423525.md
      object: measure
      objectId: 423525
      name: Average plane turnaround time
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18579
      status: Caution
    historyResource: /upward-airlines-corporate/data/measure-423485-periods.json
  provenance:
    owner:
      name: Donald Duff
      userId: 24965
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2023-08-10T16:26:59.320Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: This metric is doing well and is surpassing expectations!
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
    dataResource: /upward-airlines-corporate/data/measure-423485.json
---

## Related

- [Time planes wait at gate](/central-division/measures/measure-423513.md)
- [Rate of departures that leave on time](/western-division/measures/measure-423523.md)
- [Average plane turnaround time](/western-division/measures/measure-423525.md)

**Actual** — 148 (Dec-25) · trend [151, 155, 147, 143, 147, 148]

## Status — Dec-25 (Caution)

**Analysis.** Time at gate is a measure that slightly out of our control due to airport traffic. However, we can still improve by expediting our processes.

**Recommendations.** We need to continue to do everything we can to make sure our guests are comfortable when waiting for our planes.


**Status history.** Nov-25: Caution · Oct-25: Above Target · Sep-25: Caution
