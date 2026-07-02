---
type: Measure
title: Total amount of time at gate
resource: clearpoint://district/cps-air/scorecard/77146/measure/423485
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
      to: clearpoint://district/cps-air/scorecard/77148/measure/423513
      object: measure
      objectId: 423513
      name: Time planes wait at gate
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77149/measure/423523
      object: measure
      objectId: 423523
      name: Rate of departures that leave on time
      scorecard: 🏜️ Western Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77149/measure/423525
      object: measure
      objectId: 423525
      name: Average plane turnaround time
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 256614
      period: May 2026
      periodDate: 2026-05-31
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
    dataResource: /data/total-amount-of-time-at-gate-423485.json
---

**Actual** — 148 (Jan-26) · trend [155, 147, 143, 147, 148, 148]
