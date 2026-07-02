---
type: Measure
title: Average Number of Daily departures per route
resource: clearpoint://scorecard/77146/measure/423483
timestamp: 2020-03-26T18:17:32.263Z
cps:
  object: measure
  objectId: 423483
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /eastern-division/measures/measure-542405.md
      object: measure
      objectId: 542405
      name: "# of new planes purchased"
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/measure-542536.md
      object: measure
      objectId: 542536
      name: "# of new planes purchased"
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18578
      status: Above Target
    historyResource: /upward-airlines-corporate/data/measure-423483-periods.json
  provenance:
    owner:
      name: Trudy Joplin
      userId: 24968
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2020-03-26T18:17:32.263Z
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
      - name: "% of Target"
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
    dataResource: /upward-airlines-corporate/data/measure-423483.json
---

## Related

- [# of new planes purchased](/eastern-division/measures/measure-542405.md)
- [# of new planes purchased](/western-division/measures/measure-542536.md)

**Actual** — 7.5 (Dec-25) · trend [6, 6.2, 6.6, 7, 7.3, 7.5]

## Status — Dec-25 (Above Target)

**Analysis.** We're trending upwards and above target here.

**Recommendations.** Let's meet as a team to ensure the trend continues.


**Status history.** Nov-25: Above Target · Oct-25: Above Target · Sep-25: Caution
