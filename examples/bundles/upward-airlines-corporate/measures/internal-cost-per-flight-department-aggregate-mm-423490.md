---
type: Measure
title: Internal cost per flight (Department aggregate/MM)
resource: clearpoint://scorecard/77146/measure/423490
tags:
  - theme:financials
timestamp: 2021-08-31T19:27:26.687Z
cps:
  object: measure
  objectId: 423490
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: clearpoint://scorecard/77147/measure/423509
      object: measure
      objectId: 423509
      name: Cost per plane trip
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77148/measure/423522
      object: measure
      objectId: 423522
      name: Internal cost per flight
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77149/measure/423533
      object: measure
      objectId: 423533
      name: Cost per plane trip
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
    historyResource: /data/internal-cost-per-flight-department-aggregate-mm-423490-periods.json
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
    owner:
      name: Clarice Strong
      userId: 24944
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2021-08-31T19:27:26.687Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: This metric is missing it's target for a number of reasons. The inclement
        weather we've faced this winter has driven up costs in the Eastern
        Division. We intend to continue to monitor weather, cut back on flights
        in the eastern region in an effort to save money, and  continue to
        monitor these costs and mitigate where possible.
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
      - name: YTD
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Eastern Division
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Central Division
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Western Division
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
    dataResource: /data/internal-cost-per-flight-department-aggregate-mm-423490.json
---

**Actual** — 24050 (Dec-25) · trend [23800, 23970, 24525, 24450, 23950, 24050]

## Status — Dec-25 (Caution)

**Analysis.** The internal cost per flight has increased dramatically in the past two quarters. As you can see from the child metrics, this is primarily due to the costs in the eastern division, which have been driven up by inclement weather this winter. We are hoping to get these under control in time for the busy summer travel season. My info is updated and looking good

**Recommendations.** We need to continue closely monitoring theses costs and mitigate where possible. Potentially, cutting back on flights in the eastern region until weather improves might save us some money.

- Complete?: 0

## Status — Nov-25 (Caution)

## Status — Oct-25 (Below Plan)

## Status — Sep-25 (Below Plan)
