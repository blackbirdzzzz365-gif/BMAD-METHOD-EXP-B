# ROAM Board Template

## ROAM Risk Management Board

### Board Header
```yaml
roam_board:
  pi_number: "PI {{pi_number}}"
  last_updated: "{{date}}"
  total_risks: {{count}}
  next_review: "{{review_date}}"
  facilitator: "{{rte_name}}"
```

## Visual ROAM Board

```markdown
┌─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┐
│     RESOLVED (R)    │      OWNED (O)      │     ACCEPTED (A)    │    MITIGATED (M)    │
│   Risks Eliminated  │  Assigned to Owner  │   Risk Accepted     │  Actions Underway   │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│                     │                     │                     │                     │
│  {{resolved_risks}} │   {{owned_risks}}   │  {{accepted_risks}} │ {{mitigated_risks}} │
│                     │                     │                     │                     │
└─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┘
```

## Risk Register

### Active Risks
| ID | Risk Description | Impact | Prob | Score | ROAM | Owner | Due | Status | Last Update |
|----|------------------|--------|------|-------|------|-------|-----|--------|-------------|
| R-{{id}} | {{description}} | {{H/M/L}} | {{H/M/L}} | {{score}} | {{R/O/A/M}} | {{name}} | {{date}} | {{status}} | {{date}} |

### Risk Scoring Matrix
```markdown
         Impact →
    P    Low(1)  Med(3)  High(5)  Crit(9)
    r  ┌────────┬────────┬────────┬────────┐
    o  │        │        │        │        │
    b  │  1-2   │  3-6   │  5-10  │  9-18  │
Low(1) │ Accept │ Accept │  Own   │Mitigate│
    a  ├────────┼────────┼────────┼────────┤
    b  │        │        │        │        │
Med(3) │  3-6   │  9-18  │ 15-30  │ 27-54  │
    i  │ Accept │  Own   │Mitigate│Escalate│
    l  ├────────┼────────┼────────┼────────┤
    i  │        │        │        │        │
High(5)│  5-10  │ 15-30  │ 25-50  │ 45-90  │
    t  │  Own   │Mitigate│Escalate│ CRISIS │
    y  └────────┴────────┴────────┴────────┘
```

## Risk Cards Template

### Owned Risk Card
```markdown
┌─────────────────────────────────────┐
│ Risk ID: R-{{year}}-{{number}}     │
│ Title: {{risk_title}}               │
├─────────────────────────────────────┤
│ Description:                        │
│ {{detailed_description}}            │
├─────────────────────────────────────┤
│ Impact: {{impact_level}}            │
│ Probability: {{probability_level}}  │
│ Score: {{risk_score}}               │
├─────────────────────────────────────┤
│ ROAM Status: OWNED                  │
│ Owner: {{owner_name}}               │
│ Due Date: {{resolution_date}}       │
├─────────────────────────────────────┤
│ Action Plan:                        │
│ 1. {{action_1}}                     │
│ 2. {{action_2}}                     │
│ 3. {{action_3}}                     │
├─────────────────────────────────────┤
│ Dependencies:                       │
│ - {{dependency_1}}                  │
│ - {{dependency_2}}                  │
├─────────────────────────────────────┤
│ Updates:                            │
│ {{date}}: {{update_1}}              │
│ {{date}}: {{update_2}}              │
└─────────────────────────────────────┘
```

### Mitigated Risk Card
```markdown
┌─────────────────────────────────────┐
│ Risk ID: R-{{year}}-{{number}}     │
│ Title: {{risk_title}}               │
├─────────────────────────────────────┤
│ Mitigation Strategy:                │
│ {{mitigation_approach}}             │
├─────────────────────────────────────┤
│ Mitigation Actions:                 │
│ □ {{action_1}} ({{progress}}%)     │
│ □ {{action_2}} ({{progress}}%)     │
│ □ {{action_3}} ({{progress}}%)     │
├─────────────────────────────────────┤
│ Residual Risk: {{level}}            │
│ Target Date: {{completion_date}}    │
│ Resources: {{resources_needed}}     │
└─────────────────────────────────────┘
```

## ROAM Review Meeting Template

### Meeting Agenda
```markdown
## ROAM Review - {{date}}

### 1. Metrics Review (5 min)
- Total risks: {{total}}
- New this week: {{new_count}}
- Resolved: {{resolved_count}}
- Critical risks: {{critical_count}}

### 2. Resolved Risks (5 min)
Review and archive:
- {{risk_1}}: How resolved?
- {{risk_2}}: Lessons learned?

### 3. Owned Risks Review (15 min)
For each owned risk:
- Progress update
- Blockers
- Help needed
- Timeline on track?

### 4. Accepted Risks Check (5 min)
- Still valid to accept?
- Conditions changed?
- Need to reassess?

### 5. Mitigated Risks Progress (10 min)
- Mitigation effectiveness
- Progress on actions
- Residual risk assessment

### 6. New Risks (10 min)
- Identify new risks
- Initial ROAM assignment
- Owner identification

### 7. Actions & Next Steps (5 min)
- Priority actions
- Next review date
- Communication needs
```

## Risk Communication Templates

### Executive Summary
```markdown
## Risk Status Summary - PI {{pi_number}}

### Overall Risk Profile
- **Total Risks:** {{total}} (↑{{increase}}/↓{{decrease}} from last week)
- **Critical Risks:** {{critical_count}}
- **Risk Score Trend:** {{trend_direction}}

### ROAM Distribution
- Resolved: {{resolved}}% ({{count}})
- Owned: {{owned}}% ({{count}})
- Accepted: {{accepted}}% ({{count}})
- Mitigated: {{mitigated}}% ({{count}})

### Top 3 Risks
1. **{{risk_1_title}}**
   - Impact: {{impact}}
   - Status: {{status}}
   - Owner: {{owner}}

2. **{{risk_2_title}}**
   - Impact: {{impact}}
   - Status: {{status}}
   - Owner: {{owner}}

3. **{{risk_3_title}}**
   - Impact: {{impact}}
   - Status: {{status}}
   - Owner: {{owner}}

### Key Actions This Week
- {{action_1}}
- {{action_2}}
- {{action_3}}

### Escalations Needed
- {{escalation_1}}
- {{escalation_2}}
```

### Team Communication
```markdown
Subject: Weekly ROAM Update - Sprint {{sprint_number}}

Team,

Quick update on our risk status:

**Good News:**
- Resolved {{count}} risks this week
- {{specific_resolution}}

**Focus Areas:**
- {{risk_1}}: Need help with {{specific_help}}
- {{risk_2}}: On track for {{date}}

**New Risks:**
- {{new_risk}}: Assigned to {{owner}}

Please update your risk status before Thursday's ROAM review.

Thanks,
{{rte_name}}
```

## Risk Tracking Metrics

### Risk Burndown Chart
```markdown
Week 1: ████████████████████ 20 risks
Week 2: ████████████████ 16 risks
Week 3: ██████████████ 14 risks
Week 4: ███████████ 11 risks
Week 5: █████████ 9 risks
Week 6: ██████ 6 risks
Week 7: ████ 4 risks
Week 8: ██ 2 risks
```

### Risk Categories Distribution
```markdown
Technical Risks:    ████████ 40%
Dependency Risks:   ██████ 30%
Resource Risks:     ████ 20%
External Risks:     ██ 10%
```

### ROAM Trend Analysis
| Week | Resolved | Owned | Accepted | Mitigated | Total |
|------|----------|-------|----------|-----------|-------|
| W1 | {{count}} | {{count}} | {{count}} | {{count}} | {{total}} |
| W2 | {{count}} | {{count}} | {{count}} | {{count}} | {{total}} |
| W3 | {{count}} | {{count}} | {{count}} | {{count}} | {{total}} |

## Risk Response Strategies

### Quick Reference Guide
```markdown
## When to use each ROAM category:

### RESOLVE
✓ Risk no longer exists
✓ Root cause eliminated
✓ Verified and tested
Example: "Dependency on Team B resolved - API delivered"

### OWN
✓ Clear accountability needed
✓ Active management required
✓ Specific actions planned
Example: "Performance risk - John owns load testing by Sprint 3"

### ACCEPT
✓ Low probability/impact
✓ Cost to mitigate > benefit
✓ Outside our control
✓ Have contingency plan
Example: "3rd party service may have 1hr downtime - backup plan ready"

### MITIGATE
✓ Reducing probability
✓ Reducing impact
✓ Multiple actions needed
✓ Tracking progress
Example: "Skill gap risk - Training started, contractor hired"
```

## Digital ROAM Board Integration

### Tool Export Format
```json
{
  "pi_number": "{{pi_number}}",
  "last_updated": "{{timestamp}}",
  "risks": [
    {
      "id": "R-{{year}}-{{number}}",
      "title": "{{title}}",
      "description": "{{description}}",
      "impact": "{{H/M/L}}",
      "probability": "{{H/M/L}}",
      "score": {{numeric_score}},
      "roam_status": "{{R/O/A/M}}",
      "owner": "{{owner_name}}",
      "due_date": "{{date}}",
      "status": "{{status}}",
      "actions": ["{{action_1}}", "{{action_2}}"],
      "updates": [
        {
          "date": "{{date}}",
          "update": "{{update_text}}"
        }
      ]
    }
  ]
}
```

---

*Keep the ROAM board visible and update it continuously for effective risk management*