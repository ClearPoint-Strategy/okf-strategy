---
type: Measure
title: "% of customer airline travel with us"
resource: clearpoint://scorecard/77146/measure/423489
timestamp: 2025-05-05T19:57:44.380Z
cps:
  object: measure
  objectId: 423489
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: clearpoint://scorecard/77147/measure/542405
      object: measure
      objectId: 542405
      name: "# of new planes purchased"
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77148/measure/542407
      object: measure
      objectId: 542407
      name: Flight Cancellations
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77149/measure/542536
      object: measure
      objectId: 542536
      name: "# of new planes purchased"
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: annual
    periodGroupId: 9724
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18580
      status: Below Plan
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
    owner:
      name: James Crockett
      userId: 24960
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2025-05-05T19:57:44.380Z
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
    dataResource: /data/of-customer-airline-travel-with-us-423489.json
---

**Actual** — 13 (Dec-25) · trend [17, 12, 15, 13]

## Status — Dec-25 (Below Plan)

## Status — Nov-25 (Below Plan)

## Status — Oct-25 (Below Plan)

## Status — Sep-25 (Below Plan)
