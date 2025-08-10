# Sprint Ceremony Guides Template

## Sprint Planning Template

### Meeting Details
```yaml
sprint_planning:
  sprint_number: "Sprint {{number}}"
  date: "{{date}}"
  duration: "{{duration_hours}} hours"
  participants: "{{team_members}}"
  facilitator: "{{scrum_master}}"
```

### Agenda
```markdown
## Sprint {{number}} Planning - {{date}}

### Part 1: What ({{duration_part1}} min)
1. **Sprint Goal Discussion** (15 min)
   - Product Owner presents goal
   - Team clarifies understanding
   - Agreement on sprint focus

2. **Backlog Review** (30 min)
   - Review prioritized stories
   - Clarify acceptance criteria
   - Identify dependencies

3. **Capacity Planning** (15 min)
   - Team availability
   - Planned time off
   - Other commitments
   - Available hours: {{capacity_hours}}

### Part 2: How ({{duration_part2}} min)
1. **Story Breakdown** (45 min)
   - Decompose into tasks
   - Technical discussion
   - Identify risks

2. **Estimation** (30 min)
   - Task hour estimates
   - Story point validation
   - Confidence check

3. **Commitment** (15 min)
   - Review total commitment
   - Adjust if needed
   - Team agreement
```

### Sprint Backlog Template
| Story ID | Story Title | Points | Tasks | Hours | Owner | Status |
|----------|-------------|--------|-------|-------|-------|--------|
| {{id}} | {{title}} | {{pts}} | {{task1}}<br>{{task2}} | {{hrs}} | {{owner}} | Todo |

### Definition of Done Checklist
- [ ] Code complete
- [ ] Unit tests written
- [ ] Code reviewed
- [ ] Integration tested
- [ ] Documentation updated
- [ ] Deployed to staging
- [ ] PO accepted

---

## Daily Standup Template

### Meeting Format
```yaml
daily_standup:
  time: "{{time}} daily"
  duration: "15 minutes max"
  location: "{{location_or_link}}"
  format: "Round-robin"
```

### Standard Questions
```markdown
For each team member:
1. What did I complete yesterday?
2. What will I work on today?
3. Are there any impediments?
```

### Standup Board
```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│     TODO     │  IN PROGRESS │   TESTING    │     DONE     │
├──────────────┼──────────────┼──────────────┼──────────────┤
│  Story 123   │  Story 124   │  Story 122   │  Story 121   │
│  {{owner}}   │  {{owner}}   │  {{owner}}   │  {{owner}}   │
│              │              │              │              │
│  Story 125   │  Story 126   │              │  Story 120   │
│  {{owner}}   │  {{owner}}   │              │  {{owner}}   │
└──────────────┴──────────────┴──────────────┴──────────────┘

Impediments: {{impediment_list}}
```

### Impediment Log
| Date | Impediment | Raised By | Owner | Status | Resolution |
|------|------------|-----------|-------|--------|------------|
| {{date}} | {{description}} | {{name}} | {{owner}} | {{status}} | {{resolution}} |

### Standup Metrics
- Average duration: {{avg_duration}} min
- Participation rate: {{participation}}%
- Impediments raised: {{count}}/week
- Impediments resolved: {{resolved}}/week

---

## Sprint Review Template

### Meeting Details
```yaml
sprint_review:
  sprint_number: "Sprint {{number}}"
  date: "{{date}}"
  duration: "60 minutes"
  attendees: "Team + Stakeholders"
  demo_environment: "{{env_url}}"
```

### Agenda
```markdown
## Sprint {{number}} Review - {{date}}

1. **Welcome & Sprint Goal Recap** (5 min)
   - Original goal: {{sprint_goal}}
   - Achievement status: {{status}}

2. **Metrics Overview** (5 min)
   - Committed: {{committed_points}} points
   - Completed: {{completed_points}} points
   - Velocity: {{velocity}}
   - Quality metrics: {{defects_found}}

3. **Demo Completed Work** (40 min)
   For each story:
   - Story: {{story_title}}
   - Business value: {{value}}
   - Demo: {{demo_script}}
   - Acceptance: ✓/✗

4. **Stakeholder Feedback** (10 min)
   - Questions
   - Feedback
   - Upcoming needs
```

### Demo Checklist
- [ ] Environment prepared
- [ ] Test data loaded
- [ ] Demo script ready
- [ ] Backup plan ready
- [ ] Screen sharing tested
- [ ] Stakeholders invited

### Sprint Accomplishments
```markdown
## Completed User Stories
1. **{{story_id}}: {{story_title}}**
   - Points: {{points}}
   - Value delivered: {{value}}
   - Feedback: {{feedback}}

## Not Completed (Carry Over)
1. **{{story_id}}: {{story_title}}**
   - Points: {{points}}
   - Reason: {{reason}}
   - Plan: {{next_steps}}

## Key Metrics
- Sprint velocity: {{velocity}}
- Completion rate: {{percentage}}%
- Defects found: {{count}}
- Customer feedback score: {{score}}/5
```

---

## Sprint Retrospective Template

### Meeting Details
```yaml
sprint_retrospective:
  sprint_number: "Sprint {{number}}"
  date: "{{date}}"
  duration: "90 minutes"
  participants: "Team only"
  facilitator: "{{facilitator}}"
  format: "{{retro_format}}"
```

### Retrospective Formats

#### Format 1: Start/Stop/Continue
```markdown
### Start (What should we start doing?)
- {{item_1}}
- {{item_2}}
- {{item_3}}

### Stop (What should we stop doing?)
- {{item_1}}
- {{item_2}}

### Continue (What's working well?)
- {{item_1}}
- {{item_2}}
- {{item_3}}
```

#### Format 2: Sailboat
```markdown
### Wind (What propels us forward?)
- {{positive_1}}
- {{positive_2}}

### Anchors (What holds us back?)
- {{negative_1}}
- {{negative_2}}

### Rocks (What risks do we see?)
- {{risk_1}}
- {{risk_2}}

### Island (What's our goal?)
- {{goal}}
```

#### Format 3: 4Ls
```markdown
### Liked (What did you like?)
- {{liked_1}}
- {{liked_2}}

### Learned (What did you learn?)
- {{learned_1}}
- {{learned_2}}

### Lacked (What was missing?)
- {{lacked_1}}
- {{lacked_2}}

### Longed For (What did you wish for?)
- {{longed_1}}
- {{longed_2}}
```

### Action Items Template
| Action | Owner | Due Date | Status | Follow-up |
|--------|-------|----------|--------|-----------|
| {{action_description}} | {{owner}} | {{date}} | {{status}} | {{notes}} |

### Team Health Check
```markdown
Rate each dimension 1-5:
- Delivering Value: {{score}}/5
- Easy to Release: {{score}}/5
- Fun: {{score}}/5
- Learning: {{score}}/5
- Mission: {{score}}/5
- Pawns or Players: {{score}}/5
- Speed: {{score}}/5
- Suitable Process: {{score}}/5
- Support: {{score}}/5
- Team Spirit: {{score}}/5

Overall Health: {{average}}/5
Trend: ↑/→/↓
```

### Retrospective Effectiveness
```markdown
□ Safe environment maintained
□ Everyone participated
□ Real issues discussed
□ Actionable items created
□ Follow-up plan clear
□ Time-boxed effectively
```

---

## Backlog Refinement Template

### Meeting Details
```yaml
backlog_refinement:
  date: "{{date}}"
  duration: "1-2 hours"
  frequency: "Weekly/Bi-weekly"
  participants: "Team + PO"
```

### Refinement Checklist
```markdown
For each story:
□ Business value clear
□ Acceptance criteria defined
□ Dependencies identified
□ Technical approach discussed
□ Estimate provided
□ Questions answered
□ Ready for sprint
```

### Story Template
```markdown
## User Story: {{title}}

**As a** {{user_type}}
**I want** {{functionality}}
**So that** {{business_value}}

### Acceptance Criteria
1. {{criterion_1}}
2. {{criterion_2}}
3. {{criterion_3}}

### Technical Notes
- {{technical_consideration_1}}
- {{technical_consideration_2}}

### Dependencies
- {{dependency_1}}
- {{dependency_2}}

### Estimate: {{story_points}} points
### Priority: {{priority}}
### Sprint Ready: Yes/No
```

---

## Ceremony Schedule Template

### Sprint Calendar
```markdown
## Sprint {{number}} Schedule

Week 1:
- Monday: Sprint Planning (9:00-12:00)
- Daily: Standup (9:15-9:30)
- Wednesday: Backlog Refinement (2:00-3:30)

Week 2:
- Daily: Standup (9:15-9:30)
- Thursday: Sprint Review (3:00-4:00)
- Friday: Retrospective (10:00-11:30)
- Friday: Next Sprint Prep (2:00-3:00)
```

### Ceremony Effectiveness Metrics
| Ceremony | Attendance | On-Time Start | Duration | Value Score |
|----------|------------|---------------|----------|-------------|
| Planning | {{%}} | {{%}} | {{actual}} vs {{planned}} | {{score}}/5 |
| Standup | {{%}} | {{%}} | {{avg_min}} | {{score}}/5 |
| Review | {{%}} | {{%}} | {{actual}} vs {{planned}} | {{score}}/5 |
| Retro | {{%}} | {{%}} | {{actual}} vs {{planned}} | {{score}}/5 |

---

*Customize these templates based on your team's needs and context*