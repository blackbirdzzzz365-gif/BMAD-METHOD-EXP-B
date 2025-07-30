# ROAM Risk Management Framework

## Overview
ROAM (Resolved, Owned, Accepted, Mitigated) is SAFe's approach to categorizing and managing risks identified during PI Planning and throughout execution. It provides a simple, visual way to ensure all risks are addressed appropriately.

## ROAM Categories Detailed

### Resolved (R)
```markdown
Definition: Risk has been eliminated and is no longer a concern
Criteria:
- Root cause addressed
- No further action needed
- Can be removed from tracking
- Document resolution for learning

Examples:
- Dependency eliminated through design change
- Resource conflict resolved via reallocation
- Technical uncertainty clarified through spike
- Third-party commitment secured

Actions:
1. Document how resolved
2. Update risk register
3. Share learnings
4. Remove from board
5. Celebrate resolution
```

### Owned (O)
```markdown
Definition: Someone has taken responsibility for the risk
Criteria:
- Clear owner identified (by name)
- Owner accepts responsibility
- Action plan defined
- Regular updates expected
- Escalation path clear

Owner Responsibilities:
- Create mitigation plan
- Track progress
- Communicate status
- Escalate if needed
- Drive to resolution

Example Format:
Risk: Integration API may not be ready
Owner: Sarah Chen (Tech Lead)
Action: Weekly sync with API team
Update: Every Thursday at Scrum of Scrums
```

### Accepted (A)
```markdown
Definition: Risk acknowledged but no action planned
Criteria:
- Impact understood and acceptable
- Probability assessed
- Cost to mitigate exceeds benefit
- Contingency identified if occurs
- Stakeholders informed

When to Accept:
- Low probability, low impact
- Cost of mitigation too high
- Outside our control
- Backup plan exists
- Strategic decision to proceed

Documentation:
- Rationale for acceptance
- Impact if realized
- Contingency plan
- Review triggers
- Stakeholder sign-off
```

### Mitigated (M)
```markdown
Definition: Actions underway to reduce probability or impact
Criteria:
- Mitigation plan active
- Progress measurable
- Resources allocated
- Timeline defined
- Success criteria clear

Mitigation Strategies:
1. Reduce probability
   - Additional testing
   - Incremental delivery
   - Skill development
   - Early integration

2. Reduce impact
   - Backup plans
   - Parallel paths
   - Scope flexibility
   - Time buffers

Tracking:
- Mitigation actions listed
- Progress indicators
- Residual risk assessment
- Completion timeline
```

## Risk Identification Process

### During PI Planning
```markdown
Sources of Risk:
1. Team Planning Sessions
   - Technical uncertainties
   - Skill gaps
   - Capacity concerns
   - External dependencies

2. Dependency Mapping
   - Cross-team dependencies
   - Third-party dependencies
   - Timing conflicts
   - Integration points

3. Architecture Review
   - Technical debt impact
   - Performance concerns
   - Security vulnerabilities
   - Scalability issues

4. Business Context
   - Market changes
   - Regulatory requirements
   - Competition moves
   - Resource constraints

Risk Capture Format:
- Risk: [Clear description]
- Impact: [What happens if realized]
- Probability: [High/Medium/Low]
- Affected: [Teams/Features impacted]
- Raised by: [Name]
```

### During Execution
```markdown
Continuous Risk Discovery:
- Daily standups
- Scrum of Scrums
- Impediment tracking
- Retrospectives
- Customer feedback

Risk Triggers:
- Velocity changes
- Quality issues
- Team changes
- Scope creep
- External changes

Escalation Criteria:
- High impact + High probability
- Multiple teams affected
- Strategic features at risk
- No clear mitigation path
- Resource needs exceed capacity
```

## ROAM Board Management

### Visual Board Setup
```markdown
Physical Board:
┌─────────────┬─────────────┬─────────────┬─────────────┐
│  RESOLVED   │    OWNED    │  ACCEPTED   │  MITIGATED  │
├─────────────┼─────────────┼─────────────┼─────────────┤
│             │ Risk: API   │ Risk: Vendor│ Risk: Perf  │
│             │ Owner: SC   │ Accept: Low │ Plan: Load  │
│             │ Due: Spr 2  │ impact      │ test Spr 3  │
│             │             │             │             │
│             │ Risk: Staff │             │ Risk: Skill │
│             │ Owner: JD   │             │ Plan: Train │
│             │ Due: Spr 1  │             │ by Spr 2    │
└─────────────┴─────────────┴─────────────┴─────────────┘

Digital Board Elements:
- Risk ID and title
- Category (ROAM)
- Owner name
- Due date
- Status indicator
- Last update
- Related features
```

### Risk Card Template
```markdown
┌─────────────────────────┐
│ Risk ID: R-2024-045     │
│ Integration Delay Risk   │
├─────────────────────────┤
│ Impact: High            │
│ Probability: Medium     │
│ Features: F1, F3, F7    │
├─────────────────────────┤
│ ROAM: Owned            │
│ Owner: Marcus T.        │
│ Due: Sprint 3          │
├─────────────────────────┤
│ Mitigation:            │
│ • Daily sync calls     │
│ • Parallel development │
│ • Early integration    │
└─────────────────────────┘
```

## Risk Assessment Techniques

### Probability and Impact Matrix
```markdown
        Impact →
   P    Low    Medium   High   Critical
   r  ┌──────┬────────┬──────┬─────────┐
   o  │      │        │      │         │
   b  │Accept│Consider│ Own  │Mitigate │
   a  │      │        │      │         │
   b  ├──────┼────────┼──────┼─────────┤
   i  │      │        │      │         │
   l  │Accept│  Own   │ Own  │Mitigate │
   i  │      │        │      │         │
   t  ├──────┼────────┼──────┼─────────┤
   y  │      │        │      │         │
   ↓  │ Own  │Mitigate│Mitig.│Escalate │
      │      │        │      │         │
      └──────┴────────┴──────┴─────────┘
       Low    Medium   High   Critical

Scoring Guide:
- Probability: 1-5 scale
- Impact: 1-5 scale
- Risk Score = P × I
- Score >15: Critical attention
- Score 10-15: Active management
- Score 5-9: Monitor
- Score <5: Accept/Watch
```

### Risk Burndown Tracking
```markdown
Track Over PI:
Week 1: 25 risks identified
Week 3: 20 risks (5 resolved)
Week 5: 15 risks (5 more resolved)
Week 7: 12 risks (3 resolved)
Week 9: 8 risks (4 resolved)
PI End: 5 residual risks

Burndown Categories:
- Total risks
- High impact risks
- Owned risks
- Mitigated risks
- Accepted risks
```

## Integration with SAFe Ceremonies

### PI Planning Integration
```markdown
Day 1:
- Risk identification during team breakouts
- Initial ROAM assignment
- Dependencies = risks

Day 2:
- Risk review session
- ROAM board creation
- Owner assignments
- Confidence vote impact
```

### Scrum of Scrums
```markdown
Standard Agenda Addition:
1. Team updates (5 min)
2. Dependencies (5 min)
3. Impediments (5 min)
4. Risks review (10 min)
   - New risks
   - Status updates
   - Ownership changes
   - Help needed
```

### System Demo
```markdown
Risk Validation:
- Demonstrate risk mitigation
- Show resolved risks
- Update stakeholders
- Gather new risks
- Adjust plans
```

### Inspect & Adapt
```markdown
Risk Retrospective:
- Which risks materialized?
- How effective was ROAM?
- What patterns emerged?
- How to improve identification?
- Better mitigation strategies?
```

## Common Risk Patterns and Mitigations

### Technical Risks
```markdown
Pattern: New technology adoption
Typical Mitigations:
- Proof of concept
- Training plan
- Expert consultation
- Incremental adoption
- Fallback options

Pattern: Performance uncertainty
Typical Mitigations:
- Early load testing
- Performance budget
- Architecture review
- Optimization sprints
- Monitoring setup
```

### Dependency Risks
```markdown
Pattern: External team dependency
Typical Mitigations:
- Early engagement
- Regular sync meetings
- Clear interfaces
- Mock services
- Parallel development

Pattern: Third-party dependency
Typical Mitigations:
- Contract clarity
- Multiple vendors
- In-house backup
- Early integration
- SLA enforcement
```

### Resource Risks
```markdown
Pattern: Key person dependency
Typical Mitigations:
- Knowledge sharing
- Pair programming
- Documentation
- Cross-training
- Succession planning

Pattern: Capacity constraints
Typical Mitigations:
- Scope prioritization
- Resource augmentation
- Efficiency improvements
- Deadline flexibility
- External support
```

## Risk Communication

### Stakeholder Updates
```markdown
Executive Summary Format:
- Total risks: X (↓ from Y)
- Critical risks: X
- New this week: X
- Resolved: X
- Key concerns: [List]
- Need help with: [List]

Detailed Report Includes:
- ROAM distribution
- Trend analysis
- Feature impact
- Mitigation progress
- Resource needs
```

### Team Communication
```markdown
Daily Standup:
"New risk identified: [brief description]"
"Risk update: [status change]"
"Need help with: [risk mitigation]"

Team Retrospective:
- Risks that impacted us
- Early warning signs missed
- Successful mitigations
- Process improvements
```

## Tools and Templates

### Risk Register Template
```markdown
| ID | Risk | Impact | Prob | Score | ROAM | Owner | Due | Status | Notes |
|----|------|--------|------|-------|------|-------|-----|--------|-------|
| R01| API delay | High | Med | 12 | O | SC | Spr2 | Active | Daily sync |
| R02| Skill gap | Med | High | 12 | M | JD | Spr1 | 50% | Training started |
```

### ROAM Review Checklist
```markdown
Weekly ROAM Review:
□ All risks have ROAM assignment
□ All owned risks have owners
□ Mitigation plans progressing
□ Accepted risks still valid
□ New risks identified
□ Resolved risks documented
□ Board updated
□ Stakeholders informed
□ Escalations handled
□ Next actions clear
```

## Success Metrics

### ROAM Effectiveness
```markdown
Metrics to Track:
- Risk identification rate
- Resolution velocity
- Mitigation success %
- Risks materialized %
- Impact when materialized
- Cycle time to resolution

Targets:
- 80%+ risks identified in planning
- 50%+ resolved by PI end
- <20% materialize
- 90%+ owned within 1 week
```

### Continuous Improvement
```markdown
Questions for Retrospective:
1. Are we identifying risks early enough?
2. Is our ROAM categorization accurate?
3. Are mitigations effective?
4. Do owners have sufficient authority?
5. Is communication timely?

Improvement Actions:
- Better risk identification training
- ROAM criteria clarification
- Mitigation pattern library
- Escalation path optimization
- Tool/process enhancements
```

---

*ROAM transforms risk management from a bureaucratic exercise into an active, visual, and collaborative process that drives real action.*