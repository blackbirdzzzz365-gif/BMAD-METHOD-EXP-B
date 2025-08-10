# Task: Track Program Risks

## Task Metadata
```yaml
task:
  id: track-program-risks
  name: Manage Program Risks Using ROAM
  agent: release-train-engineer
  elicit: true
  duration: Ongoing with weekly reviews
  
outputs:
  - ROAM board maintenance
  - Risk mitigation tracking
  - Stakeholder risk reports
  - Risk burndown metrics
  - Escalation decisions
```

## Risk Management Introduction

```markdown
Hi! I'm Marcus, your RTE. I'll help you establish and maintain effective risk management using the ROAM framework.

Risk management is critical for program success. Let's start by understanding your current risk landscape.

**Initial Assessment Questions:**
1. Do you currently track risks? If yes, how?
2. What types of risks concern you most? (Technical, Resource, Schedule, External)
3. Who are the key stakeholders for risk communication?
4. What's your risk tolerance level? (Low, Medium, High)
5. Any recent issues that should have been caught as risks?
```

## Phase 1: Risk Identification

### Risk Discovery Sessions
```markdown
Let's identify risks across different categories:

**Technical Risks**
Common examples:
- New technology adoption
- Integration complexity
- Performance uncertainties
- Architecture decisions
- Technical debt impact

Questions to explore:
- What technical unknowns exist?
- Where are we using new technologies?
- What integrations worry you?
- Any performance concerns?
- Where might technical debt slow us?

**Dependency Risks**
Common examples:
- External team dependencies
- Third-party deliverables
- Shared resource conflicts
- API availability
- Data dependencies

Questions to explore:
- Which teams do we depend on?
- What external services are critical?
- Any single points of failure?
- What are our backup plans?

**Resource Risks**
Common examples:
- Key person dependencies
- Skill gaps
- Capacity constraints
- Budget limitations
- Tool availability

Questions to explore:
- Who can't we lose?
- What skills are scarce?
- Where are we stretched thin?
- Any budget concerns?
- Tool or infrastructure limits?

**Schedule Risks**
Common examples:
- Aggressive timelines
- Holiday impacts
- Learning curve time
- Regulatory deadlines
- Market windows

Questions to explore:
- Where are timelines tight?
- Any fixed deadlines?
- Learning time factored in?
- External date dependencies?
```

### Risk Capture Template
```markdown
For each identified risk, let's capture:

**Risk ID:** R-{{year}}-{{sequential_number}}
**Title:** {{brief_risk_title}}
**Description:** {{detailed_description}}
**Category:** Technical/Dependency/Resource/Schedule/Other
**Probability:** High (>70%) / Medium (30-70%) / Low (<30%)
**Impact:** Critical / High / Medium / Low
**Risk Score:** {{probability_score}} × {{impact_score}} = {{total}}
**Affected Teams:** {{team_list}}
**Affected Features:** {{feature_list}}
**Raised By:** {{name}}
**Date Identified:** {{date}}

**Initial ROAM Assignment:** [To be determined]
```

## Phase 2: ROAM Categorization

### ROAM Decision Framework
```markdown
Let me guide you through ROAM categorization for each risk:

**RESOLVED - When to use:**
✓ Risk no longer exists
✓ Root cause eliminated
✓ Verified through testing
✓ No further action needed

Example: "Dependency on Team B's API" → Resolved when API delivered and tested

**OWNED - When to use:**
✓ Someone taking active responsibility
✓ Clear action plan exists
✓ Regular progress expected
✓ Specific deadline set

Example: "Performance uncertainty" → Owned by Tech Lead with load testing plan

**ACCEPTED - When to use:**
✓ Low probability or impact
✓ Cost to mitigate exceeds benefit
✓ Outside our control
✓ Have contingency if occurs

Example: "Vendor may have 2hr monthly maintenance" → Accepted with backup plan

**MITIGATED - When to use:**
✓ Actions reducing probability
✓ Actions reducing impact
✓ Multiple steps required
✓ Progress measurable

Example: "Team skill gap" → Mitigated through training + contractor backup

**My Recommendation Process:**
1. Assess if risk still exists (Resolved?)
2. Evaluate control level (Owned/Accepted?)
3. Determine action value (Mitigate?)
4. Assign based on best fit
```

### ROAM Board Setup
```markdown
Let's create your ROAM board:

**Physical Board Layout:**
```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│   RESOLVED (R)  │    OWNED (O)    │   ACCEPTED (A)  │  MITIGATED (M)  │
│ Eliminated Risks│ Assigned Owner  │ Low Impact/Prob │ Actions in Work │
├─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│                 │ R-2024-045 🔴   │ R-2024-032 🟡   │ R-2024-038 🟡   │
│ R-2024-023 ✓   │ API Delay Risk  │ Vendor Downtime │ Skill Gap Risk  │
│ Resolved 3/15   │ Owner: Sarah    │ Accept: Low imp │ 60% Complete    │
│                 │ Due: Sprint 3   │ Backup ready    │ Training ongoing│
│                 │                 │                 │                 │
│ R-2024-028 ✓   │ R-2024-051 🟡   │ R-2024-041 🟢   │ R-2024-044 🔴   │
│ Resolved 3/18   │ Resource Risk   │ Weather delays  │ Tech Debt       │
│                 │ Owner: Mike     │ Accept: Can't   │ 30% Complete    │
│                 │ Due: Sprint 2   │ control         │ Refactor started│
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘

Legend: 🔴 High | 🟡 Medium | 🟢 Low | ✓ Resolved
```

**Digital Tracking Fields:**
- Risk ID & Title
- Current ROAM status
- Owner name (for O and M)
- Due date (for O and M)
- Progress % (for M)
- Last updated
- Risk score/level
```

## Phase 3: Risk Monitoring

### Weekly ROAM Review Process
```markdown
I'll facilitate weekly ROAM reviews. Here's our agenda:

**ROAM Review Meeting (45 minutes)**

**1. Metrics Review (5 min)**
Let's start with the numbers:
- Total risks: {{count}} (↑{{up}}/↓{{down}} from last week)
- New risks: {{count}}
- Resolved: {{count}}
- Critical risks: {{count}}
- Average age: {{days}} days

**2. Resolved Risks (5 min)**
Celebrate what we've eliminated:
- Which risks were resolved?
- How were they resolved?
- Lessons learned?
- Can we prevent similar risks?

**3. Owned Risks Review (15 min)**
For each owned risk:
- Progress update from owner
- On track for due date?
- Any blockers?
- Need help or escalation?

Template questions:
"Sarah, update on the API delay risk?"
"Are we still targeting Sprint 3 completion?"
"What help do you need?"

**4. Mitigated Risks Progress (10 min)**
For each risk being mitigated:
- Mitigation actions progress
- Is mitigation working?
- Residual risk assessment
- Next steps

Progress tracking:
- Training completion: {{%}}
- Backup procedures: {{status}}
- Tool implementation: {{status}}

**5. Accepted Risks Validation (5 min)**
Quick check on accepted risks:
- Still valid to accept?
- Conditions changed?
- Contingencies ready?
- Need to re-categorize?

**6. New Risks (10 min)**
Identify and categorize new risks:
- What new risks emerged?
- Initial assessment
- ROAM assignment
- Owner identification
```

### Risk Escalation Criteria
```markdown
Some risks need immediate escalation. Here's when:

**Escalate Immediately When:**
1. **Severity Increase**
   - Risk score jumps to Critical
   - Multiple teams blocked
   - Revenue impact identified
   - Customer commitment at risk

2. **Mitigation Failure**
   - Owned risk missing deadlines
   - Mitigation not reducing risk
   - Owner needs more authority
   - Resources insufficient

3. **New Critical Risk**
   - Probability >70% AND Impact = Critical
   - No clear mitigation path
   - External dependency
   - Strategic impact

**Escalation Process:**
1. Document situation clearly
2. Identify decision needed
3. Propose options
4. Schedule emergency review
5. Communicate decision widely

**Escalation Template:**
```
URGENT: Risk Escalation Required

Risk: {{risk_id}} - {{title}}
Severity: {{level}}
Impact: {{description}}

Situation:
{{current_situation}}

Decision Needed:
{{specific_decision}}

Options:
1. {{option_1}} - Pros/Cons
2. {{option_2}} - Pros/Cons
3. {{option_3}} - Pros/Cons

Recommendation:
{{your_recommendation}}

Required By: {{deadline}}
```
```

## Phase 4: Risk Communication

### Stakeholder Risk Reporting
```markdown
Different stakeholders need different risk views:

**Executive Risk Summary**
```
Risk Status Summary - PI {{pi_number}}, Sprint {{sprint}}

Overall Risk Level: {{High/Medium/Low}}

Top 3 Risks:
1. {{risk_1}} - {{status}} - {{impact}}
2. {{risk_2}} - {{status}} - {{impact}}
3. {{risk_3}} - {{status}} - {{impact}}

Risk Trends:
- Total Risks: {{count}} ({{trend}})
- Critical Risks: {{count}} ({{trend}})
- Average Resolution Time: {{days}} days

ROAM Distribution:
[====][====][==][======]
  R:30%  O:30% A:10% M:30%

Actions Needed From You:
- {{action_1}}
- {{action_2}}
```

**Team Risk Communication**
```
Team Risk Update - Sprint {{sprint}}, Day {{day}}

Your Team's Risks:
1. {{risk_1}} - Status: {{ROAM}} - Action: {{action}}
2. {{risk_2}} - Status: {{ROAM}} - Action: {{action}}

Program Risks Affecting You:
- {{risk_affecting_1}}
- {{risk_affecting_2}}

Please Update:
- Progress on owned risks
- Any new risks identified
- Help needed
```

**Risk Burndown Chart**
```
Risks Over Time
│
25├─█
20├─█─█
15├─█─█─█         Target
10├─█─█─█─█─────────────
 5├─█─█─█─█─█─█
 0└─┴─┴─┴─┴─┴─┴─
   W1 W2 W3 W4 W5 W6

Resolved: ▓ | Active: █
```
```

### Risk Patterns Dashboard
```markdown
I track patterns to prevent future risks:

**Common Risk Patterns**
1. **Dependency Delays (35% of risks)**
   - Root cause: Poor communication
   - Mitigation: Daily sync meetings
   - Success rate: 80%

2. **Technical Uncertainties (25% of risks)**
   - Root cause: Insufficient spikes
   - Mitigation: Early prototypes
   - Success rate: 75%

3. **Resource Constraints (20% of risks)**
   - Root cause: Optimistic planning
   - Mitigation: Buffer capacity
   - Success rate: 70%

4. **Integration Issues (20% of risks)**
   - Root cause: Late integration
   - Mitigation: Continuous integration
   - Success rate: 85%

**Pattern-Based Improvements:**
Based on these patterns, I recommend:
1. {{improvement_1}}
2. {{improvement_2}}
3. {{improvement_3}}
```

## Phase 5: Risk Mitigation Tracking

### Mitigation Plan Template
```markdown
For risks marked as Mitigated, we need clear plans:

**Risk Mitigation Plan**
Risk ID: {{id}}
Risk: {{description}}

**Mitigation Strategy:**
Approach: {{reduce_probability_or_impact}}

**Action Plan:**
| Action | Owner | Due Date | Status | Complete |
|--------|-------|----------|---------|----------|
| {{action_1}} | {{owner}} | {{date}} | {{status}} | {{%}} |
| {{action_2}} | {{owner}} | {{date}} | {{status}} | {{%}} |
| {{action_3}} | {{owner}} | {{date}} | {{status}} | {{%}} |

**Success Criteria:**
- {{criterion_1}}
- {{criterion_2}}

**Progress Tracking:**
Week 1: 20% complete
Week 2: 45% complete
Week 3: 70% complete
Week 4: 100% target

**Residual Risk:**
After mitigation: {{probability}} probability, {{impact}} impact
```

### Mitigation Effectiveness
```markdown
Let's measure if our mitigations work:

**Effectiveness Metrics:**
1. **Risk Score Reduction**
   - Before: {{score}}
   - Current: {{score}}
   - Target: {{score}}
   - Trend: {{improving/stable/worsening}}

2. **Timeline Adherence**
   - On-time completion: {{%}}
   - Average delay: {{days}}
   - Acceleration needed: {{yes/no}}

3. **Resource Investment**
   - Planned effort: {{hours}}
   - Actual effort: {{hours}}
   - ROI: {{value_protected/cost}}

**When Mitigation Isn't Working:**
Signs to watch for:
- Risk score not decreasing
- New related risks emerging
- Timeline slipping
- Resources overwhelmed

Actions to take:
1. Re-assess approach
2. Consider accepting risk
3. Escalate for help
4. Try alternative mitigation
```

## Phase 6: Continuous Improvement

### Risk Retrospective
```markdown
Each PI, let's improve our risk management:

**Risk Management Retrospective Questions:**

1. **Identification**
   - Did we catch risks early enough?
   - What risks surprised us?
   - Were categories comprehensive?

2. **ROAM Process**
   - Were assignments appropriate?
   - Did owners have authority?
   - Was acceptance criteria clear?

3. **Mitigation**
   - Which mitigations worked best?
   - Where did we over-invest?
   - What patterns emerged?

4. **Communication**
   - Were stakeholders informed?
   - Was escalation timely?
   - Did teams understand risks?

**Improvement Actions:**
Based on retrospective:
1. {{action_1}}
2. {{action_2}}
3. {{action_3}}
```

### Risk Management Maturity
```markdown
Let's assess your risk management maturity:

**Level 1: Reactive (Firefighting)**
- Risks identified when they occur
- No formal tracking
- Crisis management mode

**Level 2: Active (Basic ROAM)**
- Regular risk identification
- ROAM board maintained
- Weekly reviews
- Basic mitigation

**Level 3: Proactive (Predictive)**
- Pattern recognition
- Early identification
- Effective mitigation
- Stakeholder engagement

**Level 4: Optimized (Prevention)**
- Risk prevention focus
- Automated tracking
- Predictive analytics
- Cultural embedding

**Your Current Level:** {{assessment}}
**Next Steps to Improve:**
1. {{improvement_1}}
2. {{improvement_2}}
```

## Tools and Techniques

### Risk Scoring Matrix
```markdown
Quick reference for consistent scoring:

Impact Scoring:
- Critical (9): Program failure, >$1M impact
- High (5): Major delays, $100K-$1M impact  
- Medium (3): Team impact, $10K-$100K
- Low (1): Minor issues, <$10K

Probability Scoring:
- High (5): >70% likely
- Medium (3): 30-70% likely
- Low (1): <30% likely

Risk Score = Impact × Probability
- >25: Critical (Red)
- 10-25: High (Orange)
- 5-9: Medium (Yellow)
- <5: Low (Green)
```

### Quick Risk Assessment
```markdown
For rapid risk assessment during meetings:

**2-Minute Risk Check:**
1. What could go wrong? (Risk)
2. How likely? (High/Med/Low)
3. How bad? (Critical/High/Med/Low)
4. What's our move? (ROAM)
5. Who owns it? (Name)

**Risk Radar Questions:**
- Technical: "Any unknowns?"
- Dependencies: "Who do we need?"
- Resources: "What could we lose?"
- Schedule: "What could delay us?"
- External: "What's outside our control?"
```

---

*Effective risk management keeps programs on track. Let's stay ahead of risks together!*