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
      to: /central-division/measures/time-planes-wait-at-gate-423513.md
      object: measure
      objectId: 423513
      name: Time planes wait at gate
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/rate-of-departures-that-leave-on-time-423523.md
      object: measure
      objectId: 423523
      name: Rate of departures that leave on time
      scorecard: 🏜️ Western Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/average-plane-turnaround-time-423525.md
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
    historyResource: /upward-airlines-corporate/data/total-amount-of-time-at-gate-423485-periods.json
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
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
          decimal: .
          thousand: ","
      - name: Target
        seriesDataTypeId: 5
        numberFormat:
          precision: 2
          decimal: .
          thousand: ","
    dataResource: /upward-airlines-corporate/data/total-amount-of-time-at-gate-423485.json
---

## Related

- [Time planes wait at gate](/central-division/measures/time-planes-wait-at-gate-423513.md)
- [Rate of departures that leave on time](/western-division/measures/rate-of-departures-that-leave-on-time-423523.md)
- [Average plane turnaround time](/western-division/measures/average-plane-turnaround-time-423525.md)

**Actual** — 148 (Dec-25) · trend [151, 155, 147, 143, 147, 148]

## Status — Dec-25 (Caution)

**Analysis.** Time at gate is a measure that slightly out of our control due to airport traffic. However, we can still improve by expediting our processes.

**Recommendations.** We need to continue to do everything we can to make sure our guests are comfortable when waiting for our planes.

## Status — Nov-25 (Caution)

## Status — Oct-25 (Above Target)

## Status — Sep-25 (Caution)
