---
type: Measure
title: "% of tickets with direct routes"
resource: clearpoint://scorecard/77146/measure/423487
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
      to: /eastern-division/measures/measure-423510.md
      object: measure
      objectId: 423510
      name: Major cities with direct flights 3+ times per day
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: /central-division/measures/measure-423514.md
      object: measure
      objectId: 423514
      name: "% of tickets with direct routes"
      scorecard: 🎯 Central Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18580
      status: Below Plan
    historyResource: /upward-airlines-corporate/data/measure-423487-periods.json
  provenance:
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
      - name: Target
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
    dataResource: /upward-airlines-corporate/data/measure-423487.json
---

## Related

- [Major cities with direct flights 3+ times per day](/eastern-division/measures/measure-423510.md)
- [% of tickets with direct routes](/central-division/measures/measure-423514.md)

**Actual** — 54 (Dec-25) · trend [72, 68, 67, 66, 63, 54]

## Status — Dec-25 (Below Plan)

**Analysis.** We were above our target this summer, but now that vacation season is over, we are well below the target with our business travelers. We either need to look at new routes or look at adjusting our target throughout the year!

**Recommendations.** We need to contract with more airports to provide direct routes. This involves reaching out to airport officials.


**Status history.** Nov-25: Caution · Oct-25: Caution · Sep-25: Above Target
