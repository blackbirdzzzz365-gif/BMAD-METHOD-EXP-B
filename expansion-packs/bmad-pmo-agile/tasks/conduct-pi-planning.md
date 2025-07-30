# Task: Conduct PI Planning

## Task Metadata
```yaml
task:
  id: conduct-pi-planning
  name: Facilitate Program Increment Planning
  agent: release-train-engineer
  elicit: true
  duration: 2 days + prep
  participants: All teams, stakeholders
  
outputs:
  - PI objectives by team
  - Program board with dependencies
  - ROAM risk board
  - PI confidence vote
  - Resource allocation
```

## Pre-Planning Phase (2 weeks before)

### Information Gathering
```markdown
I need to gather some key information before we plan the PI Planning event:

1. **Event Logistics**
   - How many teams will participate? 
   - Will this be in-person, remote, or hybrid?
   - What's our target PI duration (8, 10, or 12 weeks)?
   - Do we have dates selected?

2. **Preparation Status**
   - Is the product vision updated?
   - Do we have 10+ features ready in the backlog?
   - Has capacity planning been done by teams?
   - Are all key stakeholders available?

3. **Team Readiness**
   - Are all teams trained in SAFe?
   - Do teams have their backlogs refined?
   - Are team rosters stable?
   - Any significant changes since last PI?
```

### Pre-Planning Checklist
```markdown
Based on your inputs, here's your customized pre-planning checklist:

**3 Weeks Before:**
□ Book venue/virtual platform
□ Send calendar invites to all participants
□ Confirm executive participation
□ Start feature refinement sessions

**2 Weeks Before:**
□ Business context presentation ready
□ Architecture vision prepared
□ Teams conduct capacity planning
□ Draft agenda published

**1 Week Before:**
□ Feature backlog prioritized and sized
□ Logistics email sent to all
□ Pre-reads distributed
□ Tech check for remote participants
□ Supplies ordered (if in-person)

**2 Days Before:**
□ Final headcount confirmed
□ Room setup planned
□ Boards/tools prepared
□ Management review scheduled
□ Confidence vote process ready
```

## Day 1 Execution

### Opening Session (8:00-10:30 AM)
```markdown
Let me guide you through the opening:

**8:00-8:30: Welcome & Kickoff**
"Good morning everyone! Welcome to PI Planning for PI [X]. Today and tomorrow, we'll align on our next [8-12] weeks of work."

Key messages to deliver:
- Purpose of PI Planning
- Expected outcomes
- Agenda overview
- Logistics (breaks, lunch, etc.)
- Rules of engagement

**8:30-9:30: Business Context**
Business Owner presents:
- State of the business
- Strategic themes for this PI
- Customer feedback highlights
- Market conditions
- Key business milestones

Questions to facilitate:
- "What questions do teams have about priorities?"
- "What concerns need addressing?"

**9:30-10:30: Product/Solution Vision**
Product Management presents:
- Top 10 features overview
- Prioritization rationale
- Success metrics
- MVP definitions
- NFRs (Non-functional requirements)
```

### Team Breakout Sessions
```markdown
**10:45 AM - 5:00 PM: Team Planning**

I'll help facilitate the team planning process:

**For each team, ensure they:**
1. Review and understand features
2. Calculate team capacity
   - Account for holidays/PTO
   - Include innovation & planning iteration
   - Consider maintenance allocation

3. Break features into stories
4. Estimate story points
5. Plan iteration goals
6. Identify risks and dependencies
7. Create draft PI objectives

**My facilitation support:**
- Float between teams
- Help resolve questions
- Capture cross-team dependencies
- Note risks for ROAM board
- Keep energy high
- Ensure breaks are taken

**Common issues I'll help with:**
- Feature clarification needs
- Dependency negotiations
- Capacity conflicts
- Risk identification
- Technical uncertainties
```

### Day 1 Closing
```markdown
**4:00-5:30 PM: Draft Plan Review**

"Let's do a quick round-robin of draft plans. Each team gets 5 minutes."

For each team presentation:
- PI objectives (draft)
- Major dependencies called out
- Significant risks identified
- Help needed from other teams

**Management Review & Problem Solving:**
- Are we overcommitted?
- Any critical dependencies unresolved?
- Resource conflicts to address?
- Scope adjustments needed?

"Great work today! Please think about your plans overnight. We'll finalize tomorrow."
```

## Day 2 Execution

### Morning Refinement
```markdown
**8:00-10:00 AM: Planning Adjustments**

"Good morning! Let's address any overnight thoughts and finalize our plans."

Activities:
1. Resolve overnight questions
2. Finalize dependency negotiations
3. Complete ROAM board
4. Finalize PI objectives
5. Prepare team presentations

I'll help by:
- Facilitating dependency discussions
- Capturing agreements on program board
- Ensuring ROAM assignments
- Checking confidence levels
- Time-boxing discussions
```

### Program Board Creation
```markdown
**10:00 AM-12:00 PM: Visualize the Plan**

Let's build our program board together:

```
        Sprint 1   Sprint 2   Sprint 3   Sprint 4   Sprint 5
Team A  [------Feature 1------][--F3--][----Feature 5----]
         ↓                      ↑
Team B  [--F2--][----Feature 4----][--F6--][---Feature 7---]
                                    ↓        ↑
Team C  [----Feature 8----][--F9--][---Feature 10---]

Milestones:  ▼           ▼                    ▼
           Demo 1      Demo 2              PI End
```

Dependencies shown with arrows
Red strings for critical dependencies
Milestones marked clearly
```

### Final Plan Review
```markdown
**1:00-3:00 PM: PI Plan Presentations**

Each team presents (5-7 minutes):
1. PI Objectives with business value
2. Key features and stories
3. Dependencies (giving and receiving)
4. Risks and mitigation plans
5. Confidence level

I'll capture:
- Final objectives
- Unresolved issues
- Help needed
- Celebration moments
```

### ROAM Board Review
```markdown
**3:00-3:30 PM: Risk Review**

"Let's review all identified risks and ensure proper ROAM assignment:"

| Risk | Impact | Owner | ROAM | Mitigation |
|------|--------|-------|------|------------|
| API uncertainty | High | Tech Lead | Owned | Daily sync with provider |
| Team capacity | Med | Scrum Master | Mitigated | Contractor approved |
| Compliance requirement | High | Product Owner | Accepted | Will adjust if needed |

Ensure:
- Every risk has ROAM category
- Owned risks have names
- Mitigation plans are clear
- Accepted risks are understood
```

### Confidence Vote
```markdown
**3:30-4:00 PM: Fist of Five**

"Everyone, on the count of three, show your confidence in our PI plan."

5 fingers = Full confidence, let's go!
4 fingers = Good confidence, minor concerns
3 fingers = Moderate confidence, some issues
2 fingers = Low confidence, major concerns
1 finger = No confidence, can't support

If average < 3:
- Identify specific concerns
- Quick problem-solving session
- Adjust plan as needed
- Re-vote

"Great! We have [X] average confidence. Let's move forward!"
```

### Planning Retrospective
```markdown
**4:00-4:30 PM: Improve Our Process**

Quick retrospective on the planning event:

What went well?
- [Capture positives]

What could improve?
- [Capture improvements]

Actions for next time:
- [Specific actions with owners]

"Thank you all for two days of great planning! Let's execute!"
```

## Post-Planning Actions

### Immediate Actions (Same day)
```markdown
□ Photo of physical boards
□ Digital program board updated
□ PI objectives published
□ ROAM board shared
□ Thank you message sent
□ Calendar invites for PI events
```

### Within 2 Days
```markdown
□ Detailed PI plan communication
□ Dependency tracker activated
□ Risk tracking initiated
□ Team sync meetings scheduled
□ Metrics dashboards updated
□ Stakeholder briefing completed
```

### Throughout the PI
```markdown
Weekly:
- Update dependency status
- Review ROAM board
- Track objective progress
- Address impediments

Bi-weekly:
- System demo preparation
- Stakeholder communication
- Metrics review
- Risk reassessment
```

## Templates Generated

Based on this planning session, I'll generate:
1. PI Planning Agenda (customized)
2. PI Objectives template
3. ROAM board
4. Confidence tracking
5. Program board format

Would you like me to create any of these specific templates now?

## Success Metrics

Track these to improve future PI Planning:
- Confidence vote average: Target >3.5
- Objectives met: Target >80%
- Dependencies resolved: Target >90%
- Risks mitigated: Target >70%
- Participant satisfaction: Target >4/5

---

*Remember: PI Planning is about alignment and commitment, not perfect plans. Foster collaboration and trust!*