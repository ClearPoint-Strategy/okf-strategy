---
type: Initiative
title: Find new food service provider
description: Our biggest customer complaint is the quality of our food. Our
  current food service provider provides all food out of a single location, and
  we need someone who can make fresh food out of each of our hubs.
resource: clearpoint://scorecard/77146/initiative/163371
timestamp: 2025-07-15T11:49:32.743Z
cps:
  object: initiative
  objectId: 163371
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Initiative
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /measures/internal-cost-per-flight-department-aggregate-mm-423490.md
      object: measure
      objectId: 423490
      name: Internal cost per flight (Department aggregate/MM)
      scorecard: Upward Airlines Corporate
      access: Administrator
    - fieldId: initiatives
      to: clearpoint://scorecard/77147/initiative/163375
      object: initiative
      objectId: 163375
      name: Expand to serve two new locations
      scorecard: 🌐 Eastern Division
      access: Administrator
  time:
    cadence: quarterly
    periodGroupId: 9723
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18578
      status: Above Target
    historyResource: /data/find-new-food-service-provider-163371-periods.json
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
    owner:
      name: Greg Garcia
      userId: 24966
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2025-07-15T11:49:32.743Z
  customFields:
    - fieldId: custom49307
      name: Budget
      fieldType: text
      value: $13,500
    - fieldId: custom107496
      name: Level of Effort
      fieldType: picklist
      value: 3. High
    - fieldId: custom107497
      name: Level of Impact
      fieldType: picklist
      value: 2. Medium
    - fieldId: custom107498
      name: Priority
      fieldType: picklist
      value: 3. High
    - fieldId: custom136389
      name: Project Request Status
      fieldType: picklist
      value: " Denied"
    - fieldId: custom136390
      name: Requester
      fieldType: user
      value: "24961.0000"
    - fieldId: custom166733
      name: Budget
      fieldType: currency
      value: "13500.0000"
    - fieldId: custom197620
      name: Initiative Review
      fieldType: kanban
      value: rejected
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
    dataResource: /data/find-new-food-service-provider-163371.json
---

Our biggest customer complaint is the quality of our food. Our current food service provider provides all food out of a single location, and we need someone who can make fresh food out of each of our hubs.

## Related

- [Internal cost per flight (Department aggregate/MM)](/measures/internal-cost-per-flight-department-aggregate-mm-423490.md)

## Status — Q4-25 (Above Target)

**Analysis.** To find new food providers in our service hubs, we must first release on RFP. The RFP is drafted and ready to be sent out.

**Recommendations.** Those who submit an RFP must be measured against high quality standards and expectations.
