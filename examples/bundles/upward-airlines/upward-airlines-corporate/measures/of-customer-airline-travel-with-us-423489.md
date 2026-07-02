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
      to: /eastern-division/measures/of-new-planes-purchased-542405.md
      object: measure
      objectId: 542405
      name: "# of new planes purchased"
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: /central-division/measures/flight-cancellations-542407.md
      object: measure
      objectId: 542407
      name: Flight Cancellations
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/of-new-planes-purchased-542536.md
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
    historyResource: /upward-airlines-corporate/data/of-customer-airline-travel-with-us-423489-periods.json
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
    dataResource: /upward-airlines-corporate/data/of-customer-airline-travel-with-us-423489.json
---

## Related

- [# of new planes purchased](/eastern-division/measures/of-new-planes-purchased-542405.md)
- [Flight Cancellations](/central-division/measures/flight-cancellations-542407.md)
- [# of new planes purchased](/western-division/measures/of-new-planes-purchased-542536.md)

**Actual** — 13 (Dec-25) · trend [17, 12, 15, 13]

## Status — 2025 (Below Plan)

**Analysis.** We need to do a better job differentiating from our competitors to help our numbers here.

**Recommendations.** Increase the number of airports our airline services.

## Status — 2024 (Below Plan)

## Status — 2024 (Below Plan)

## Status — 2024 (Below Plan)
