---
type: Measure
title: "% of tickets with direct routes"
resource: clearpoint://district/cps-air/scorecard/77146/measure/423487
timestamp: 2025-05-05T19:57:15.370Z
cps:
  object: measure
  objectId: 423487
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77147/measure/423510
      object: measure
      objectId: 423510
      name: Major cities with direct flights 3+ times per day
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77148/measure/423514
      object: measure
      objectId: 423514
      name: "% of tickets with direct routes"
      scorecard: 🎯 Central Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 256614
      period: May 2026
      periodDate: 2026-05-31
      statusId: 18580
      status: Below Plan
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
      at: 2025-05-05T19:57:15.370Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: The cold weather has hurt us. We're looking into encouraging more
        purchase on direct flights without harming profit.
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
      - name: Target
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
    dataResource: /data/of-tickets-with-direct-routes-423487.json
---

**Actual** — 54 (Jan-26) · trend [68, 67, 66, 63, 54, 54]

## Status — May 2026 (Below Plan)

## Status — Apr 2026 (Below Plan)
