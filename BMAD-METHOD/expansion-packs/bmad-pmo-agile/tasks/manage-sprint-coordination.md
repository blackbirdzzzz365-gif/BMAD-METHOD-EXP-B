# Task: Manage Sprint Coordination

## Task Metadata
```yaml
task:
  id: manage-sprint-coordination
  name: Coordinate Sprint-Level Activities
  agent: release-train-engineer
  elicit: true
  duration: Ongoing throughout sprint
  
outputs:
  - Daily coordination status
  - Impediment resolution
  - Cross-team synchronization
  - Sprint health metrics
  - Communication updates
```

## Sprint Coordination Overview

```markdown
Hello! I'm Marcus, your Release Train Engineer. I'll help you establish and maintain effective sprint coordination across your teams.

Let me understand your current setup to provide the best coordination approach.

**Initial Context Questions:**
1. How many teams need coordination?
2. What's your sprint length (1, 2, or 3 weeks)?
3. Are teams co-located or distributed?
4. What tools are you using for tracking?
5. What are your biggest coordination challenges?
```

## Phase 1: Sprint Coordination Setup

### Ceremony Schedule Design
```markdown
Based on your {{team_count}} teams with {{sprint_length}}-week sprints, here's your recommended coordination schedule:

**Week 1 Schedule:**
Monday:
- 9:00 AM - Sprint Planning (all teams)
- 2:00 PM - Cross-team dependency review

Tuesday-Thursday:
- 9:15 AM - Team standups
- 10:00 AM - Scrum of Scrums

Friday:
- 9:15 AM - Team standups
- 10:00 AM - Scrum of Scrums
- 2:00 PM - Impediment resolution session

**Week 2 Schedule:**
Monday-Wednesday:
- 9:15 AM - Team standups
- 10:00 AM - Scrum of Scrums

Thursday:
- 9:15 AM - Team standups
- 10:00 AM - Scrum of Scrums
- 2:00 PM - Sprint Review prep

Friday:
- 9:00 AM - Sprint Reviews (all teams)
- 2:00 PM - Sprint Retrospectives
- 4:00 PM - RTE retrospective
```

### Communication Channels Setup
```markdown
Let's establish clear communication channels:

**Synchronous Channels:**
1. Scrum of Scrums - For daily coordination
2. Impediment escalation meetings - For blockers
3. Ad-hoc sync calls - For urgent issues

**Asynchronous Channels:**
1. Team chat channel - Quick questions
2. Impediment board - Visible tracking
3. Dependency tracker - Cross-team needs
4. Daily digest email - Status summary

Which channels do you already have? Which need setup?
```

## Phase 2: Daily Coordination Activities

### Scrum of Scrums Facilitation
```markdown
I'll guide you through effective Scrum of Scrums facilitation:

**Participants:** One representative per team (usually Scrum Master)
**Duration:** 15-30 minutes max
**Frequency:** 2-3 times per week minimum

**Standard Agenda:**
1. **Round Robin Updates (10 min)**
   Each team representative shares:
   - What did the team complete?
   - What will the team complete next?
   - Are there any impediments?
   - Any dependencies on other teams?

2. **Dependency Coordination (5-10 min)**
   - Review dependency board
   - Confirm hand-off timings
   - Adjust plans if needed
   - Identify new dependencies

3. **Impediment Review (5-10 min)**
   - Update on previous impediments
   - New impediments requiring help
   - Assign owners for resolution
   - Escalation decisions

**My Facilitation Tips:**
- Keep it standing (if in-person)
- Use a visible board
- Time-box strictly
- Focus on coordination, not status
- Park detailed discussions
```

### Impediment Management
```markdown
Let's establish your impediment resolution process:

**Impediment Tracking Board:**
```
┌────────────┬────────────┬────────────┬────────────┐
│    NEW     │  ASSIGNED  │ IN PROGRESS│  RESOLVED  │
├────────────┼────────────┼────────────┼────────────┤
│ IMP-101    │ IMP-098    │ IMP-095    │ IMP-090    │
│ Team A     │ Owner: JD  │ Owner: MC  │ Resolved   │
│ Blocked by │ ETA: Today │ 50% done   │ Yesterday  │
│ API access │            │            │            │
└────────────┴────────────┴────────────┴────────────┘
```

**Resolution Process:**
1. Team raises impediment
2. Try to resolve at team level (1 day)
3. Escalate to Scrum of Scrums
4. Assign owner with deadline
5. Daily updates until resolved
6. Document resolution for future

**Common Impediments & Solutions:**
- Environment issues → DevOps on standby
- Dependency delays → Daily sync meetings
- Unclear requirements → PO office hours
- Technical debt → Allocated capacity
```

### Cross-Team Dependencies
```markdown
**Dependency Tracking Matrix:**

| From Team | To Team | Deliverable | Needed By | Status | Risk |
|-----------|---------|-------------|-----------|---------|------|
| Team A | Team B | User API | Sprint 3, Day 5 | On Track | Low |
| Team C | Team A | Data Schema | Sprint 3, Day 3 | At Risk | High |
| Team B | Team D | UI Components | Sprint 4, Day 1 | Blocked | High |

**Dependency Management Actions:**
1. **Identify Early** - During sprint planning
2. **Visualize** - On program board
3. **Communicate** - Daily in Scrum of Scrums
4. **Monitor** - Track progress daily
5. **Mitigate** - Have backup plans

**My Questions:**
- Which dependencies are most critical?
- Do we need to adjust sprint plans?
- Should we create integration teams?
```

## Phase 3: Sprint Health Monitoring

### Daily Health Metrics
```markdown
I track these metrics daily to ensure sprint health:

**Team Level Indicators:**
- Burndown trend (on track/at risk/off track)
- Blocker count and age
- Team morale (check-ins)
- Scope changes

**Program Level Indicators:**
- Cross-team dependencies status
- Integration build status
- Impediment resolution rate
- Risk movements (ROAM)

**Visual Sprint Health Dashboard:**
```
Team Status Dashboard - Sprint {{number}}, Day {{day}}
┌─────────┬──────────┬───────────┬──────────┬─────────┐
│  Team   │ Burndown │ Blockers  │ Morale   │ Risk    │
├─────────┼──────────┼───────────┼──────────┼─────────┤
│ Alpha   │    🟢    │  0 🟢     │  😊 🟢   │ Low 🟢  │
│ Beta    │    🟡    │  2 🟡     │  😐 🟡   │ Med 🟡  │
│ Gamma   │    🔴    │  3 🔴     │  😟 🔴   │ High 🔴 │
│ Delta   │    🟢    │  1 🟡     │  😊 🟢   │ Low 🟢  │
└─────────┴──────────┴───────────┴──────────┴─────────┘

Overall Sprint Health: 🟡 NEEDS ATTENTION
```

**When to Intervene:**
- Any team red for 2+ days
- Impediments aging > 3 days
- Dependencies slipping
- Morale dropping
```

### Mid-Sprint Adjustments
```markdown
Sometimes we need to adjust mid-sprint. Here's how:

**Adjustment Triggers:**
- Major impediment unresolvable
- Critical dependency failure
- Significant scope discovery
- External priority change

**Adjustment Process:**
1. **Assess Impact**
   - Which teams affected?
   - What's at risk?
   - What are options?

2. **Collaborative Decision**
   - Involve affected teams
   - Consider trade-offs
   - Get PO agreement

3. **Communicate Change**
   - Update all boards
   - Inform stakeholders
   - Document decision

4. **Monitor Closely**
   - Daily check-ins
   - Extra support
   - Learn for next time

**My Guidance:**
- Avoid mid-sprint changes when possible
- If necessary, minimize disruption
- Always maintain sprint goal
- Document lessons learned
```

## Phase 4: Sprint Communication

### Stakeholder Updates
```markdown
I'll help you maintain effective stakeholder communication:

**Daily Digest Email Template:**
```
Subject: Sprint {{number}} Day {{day}} - Coordination Update

Good morning team,

**Sprint Progress**
- Overall: {{percentage}}% complete ({{on_track/at_risk}})
- Stories completed: {{completed}}/{{total}}
- Integration status: {{status}}

**Key Accomplishments**
- Team A: {{accomplishment}}
- Team B: {{accomplishment}}
- Team C: {{accomplishment}}

**Current Impediments**
1. {{impediment_1}} - Owner: {{name}}, ETA: {{date}}
2. {{impediment_2}} - Owner: {{name}}, ETA: {{date}}

**Upcoming Milestones**
- {{milestone_1}}: {{date}}
- {{milestone_2}}: {{date}}

**Need Your Help**
- {{help_needed_1}}
- {{help_needed_2}}

Questions? Find me on Slack or stop by the team area.

Thanks,
Marcus (RTE)
```

**Stakeholder Communication Matrix:**
| Stakeholder | Frequency | Format | Content Focus |
|-------------|-----------|--------|---------------|
| Product Owners | Daily | Standup | Progress & impediments |
| Management | Weekly | Email | Risks & milestones |
| Customers | Sprint end | Demo | Working software |
| Teams | Continuous | Slack | Coordination needs |
```

### Information Radiators
```markdown
Let's setup visible information radiators:

**Physical Boards (if co-located):**
1. **Program Board** - Dependencies and milestones
2. **Impediment Board** - Current blockers
3. **Sprint Goals** - Each team's focus
4. **Confidence Meter** - Team confidence levels
5. **Celebration Wall** - Wins and kudos

**Digital Dashboards:**
1. **Real-time Burndown** - All teams
2. **Dependency Tracker** - Status updates
3. **Build Monitor** - CI/CD status
4. **Risk Heat Map** - Current risks
5. **Metrics Trends** - Key indicators

**Update Frequency:**
- Boards: Real-time by teams
- Dashboards: Automated refresh
- My review: 3x daily minimum
```

## Phase 5: Sprint Closure Coordination

### Sprint Review Coordination
```markdown
I'll help orchestrate effective sprint reviews:

**Multi-Team Review Options:**

**Option 1: Science Fair Style**
- All teams demo simultaneously
- Stakeholders rotate between teams
- 15-minute rotations
- Good for many teams

**Option 2: Sequential Demos**
- Each team gets 15-20 minutes
- Full audience attention
- Integrated demo at end
- Good for 3-5 teams

**Option 3: Integrated Demo**
- Combined story flow
- Multiple teams contribute
- Shows integration
- Good for related features

**Review Coordination Checklist:**
- [ ] Demo environment ready
- [ ] Integration tested
- [ ] Stakeholders invited
- [ ] Order determined
- [ ] Time slots assigned
- [ ] Backup plans ready
```

### Sprint Retrospective Insights
```markdown
After team retrospectives, I conduct an RTE retrospective:

**RTE Retrospective Focus:**
1. **Coordination Effectiveness**
   - What coordination worked well?
   - Where did we have friction?
   - How can we improve flow?

2. **Impediment Patterns**
   - Recurring impediments?
   - Resolution effectiveness?
   - Escalation improvements?

3. **Dependency Management**
   - Prediction accuracy?
   - Communication quality?
   - Mitigation success?

4. **Team Support**
   - Did teams get needed help?
   - Were interventions timely?
   - What support was missing?

**System Improvements:**
Based on patterns, I recommend system-level improvements:
- Process adjustments
- Tool enhancements
- Communication changes
- Structural modifications
```

## Continuous Improvement

### Coordination Metrics
```markdown
I track these metrics to improve coordination:

**Efficiency Metrics:**
- Impediment resolution time: {{avg_days}} days
- Dependency success rate: {{percentage}}%
- Meeting effectiveness: {{score}}/5
- Communication clarity: {{score}}/5

**Quality Metrics:**
- Integration failures: {{count}}
- Missed dependencies: {{count}}
- Escalation frequency: {{count}}/sprint
- Team satisfaction: {{score}}/5

**Improvement Actions:**
Based on metrics, here are my recommendations:
1. {{improvement_1}}
2. {{improvement_2}}
3. {{improvement_3}}
```

### Best Practices Library
```markdown
**Proven Coordination Practices:**

1. **Visual Management**
   - Use physical/digital boards
   - Update in real-time
   - Make impediments visible
   - Celebrate progress

2. **Communication Rhythm**
   - Consistent meeting times
   - Clear agendas
   - Time-boxed discussions
   - Action-oriented

3. **Proactive Support**
   - Anticipate problems
   - Build relationships
   - Remove barriers early
   - Enable team success

4. **Continuous Learning**
   - Regular retrospectives
   - Experiment with process
   - Share learnings
   - Adapt quickly
```

## Success Patterns

**Pattern 1: Early and Often**
- Coordinate daily, not weekly
- Address issues immediately
- Communicate proactively
- Build trust through consistency

**Pattern 2: Servant Leadership**
- Teams come first
- Remove impediments fast
- Shield from distractions
- Enable not control

**Pattern 3: System Thinking**
- See the whole
- Optimize flow
- Balance local/global
- Think long-term

---

*Effective sprint coordination is about enabling teams to deliver value together. Let's make it happen!*