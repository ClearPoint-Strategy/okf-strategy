---
type: Measure
title: "# customer complaints per 1,000 tickets"
resource: clearpoint://scorecard/77146/measure/423488
timestamp: 2017-11-21T15:01:56.833Z
cps:
  object: measure
  objectId: 423488
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /central-division/measures/measure-542407.md
      object: measure
      objectId: 542407
      name: Flight Cancellations
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/measure-542408.md
      object: measure
      objectId: 542408
      name: Customer Support Calls
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
    historyResource: /upward-airlines-corporate/data/measure-423488-periods.json
  provenance:
    owner:
      name: Clarice Strong
      userId: 24944
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2017-11-21T15:01:56.833Z
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
    dataResource: /upward-airlines-corporate/data/measure-423488.json
---

## Related

- [Flight Cancellations](/central-division/measures/measure-542407.md)
- [Customer Support Calls](/western-division/measures/measure-542408.md)

**Actual** — 8 (Dec-25) · trend [6, 9, 9, 8]

## Status — 2025 (Below Plan)

**Analysis.** In 2025, Upward Airlines' customer complaints per 1,000 tickets were "Below Plan" with a value of 8, failing to meet the target of 10. This marks a slight improvement from 2023 and 2024, where the status was "Caution" with a value of 9. The consistent failure to meet targets suggests persistent issues in customer service or operational areas.

**Recommendations.** Enhance Customer Service Training: Implement targeted training programs for staff to address common customer complaints and improve service quality, aiming to consistently meet or exceed the target. Analyze Complaint Patterns: Conduct a detailed analysis of complaint data to identify recurring issues and implement strategic improvements in operations or service delivery.


**Status history.** 2024: Caution · 2024: Caution · 2024: Caution
