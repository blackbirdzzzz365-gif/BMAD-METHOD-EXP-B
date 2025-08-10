# PI Planning Agenda Template

## Event Details
```yaml
pi_planning:
  pi_number: "PI {{pi_number}}"
  dates: "{{start_date}} - {{end_date}}"
  location: "{{venue_or_virtual_link}}"
  attendees: "{{team_count}} teams, ~{{total_attendees}} people"
  facilitator: "{{rte_name}}"
```

## Pre-Event Communication
```markdown
Subject: PI {{pi_number}} Planning - {{start_date}}

Team,

Our next PI Planning event is scheduled for {{start_date}} - {{end_date}}. Please block your calendars for the full two days.

**Location:** {{venue_or_virtual_link}}
**Pre-reads:** [Link to materials]
**What to bring:** Laptop, team capacity calculations, refined backlog

See you there!
{{rte_name}}
```

## Day 1 Agenda

### Morning Session
| Time | Duration | Activity | Owner | Outputs |
|------|----------|----------|-------|---------|
| 8:00 | 30 min | **Welcome & Opening** | RTE | - Agenda review<br>- Logistics<br>- Rules of engagement |
| 8:30 | 60 min | **Business Context** | {{business_owner}} | - State of business<br>- Strategic themes<br>- Key milestones |
| 9:30 | 60 min | **Product/Solution Vision** | {{product_manager}} | - Top 10 features<br>- Prioritization rationale<br>- Success metrics |
| 10:30 | 15 min | **Break** | - | Coffee & networking |
| 10:45 | 60 min | **Architecture Vision** | {{system_architect}} | - Technical direction<br>- Enablers<br>- NFRs |
| 11:45 | 75 min | **Team Breakouts 1** | Teams | - Initial planning<br>- Capacity assessment |

### Afternoon Session
| Time | Duration | Activity | Owner | Outputs |
|------|----------|----------|-------|---------|
| 1:00 | 60 min | **Lunch** | - | Team discussions continue |
| 2:00 | 120 min | **Team Breakouts 2** | Teams | - Story breakdown<br>- Dependencies identified<br>- Draft plan |
| 4:00 | 60 min | **Draft Plan Review** | All Teams | - 5 min per team<br>- Dependencies visible<br>- Risks identified |
| 5:00 | 30 min | **Management Review** | Leadership | - Scope adjustments<br>- Resource decisions |
| 5:30 | - | **Day 1 Close** | RTE | - Parking lot items<br>- Day 2 preview |

### Day 1 Deliverables Checklist
- [ ] Each team has draft PI objectives
- [ ] Dependencies mapped on program board
- [ ] Initial risks identified
- [ ] Capacity calculations complete
- [ ] Management concerns addressed

## Day 2 Agenda

### Morning Session
| Time | Duration | Activity | Owner | Outputs |
|------|----------|----------|-------|---------|
| 8:00 | 30 min | **Day 2 Opening** | RTE | - Day 1 recap<br>- Focus for today |
| 8:30 | 90 min | **Planning Adjustments** | Teams | - Dependency negotiations<br>- Plan finalization |
| 10:00 | 120 min | **Final Team Planning** | Teams | - Complete PI objectives<br>- Finalize stories<br>- Update boards |

### Afternoon Session
| Time | Duration | Activity | Owner | Outputs |
|------|----------|----------|-------|---------|
| 12:00 | 60 min | **Lunch** | - | Prep for presentations |
| 1:00 | 120 min | **PI Plan Presentations** | All Teams | - PI objectives<br>- Key dependencies<br>- Major risks<br>- Business value |
| 3:00 | 30 min | **Program Risks (ROAM)** | RTE | - Risk review<br>- ROAM assignments<br>- Mitigation plans |
| 3:30 | 30 min | **Confidence Vote** | All | - Fist of five<br>- Address low confidence<br>- Rework if needed |
| 4:00 | 30 min | **Plan Rework** | As needed | - Only if confidence <3 |
| 4:30 | 30 min | **Planning Retrospective** | RTE | - What went well<br>- Improvements<br>- Actions |
| 5:00 | - | **Close & Celebrate** | All | - Thank participants<br>- Next steps |

### Day 2 Deliverables Checklist
- [ ] Final PI objectives with business value
- [ ] Complete program board
- [ ] All dependencies resolved or owned
- [ ] ROAM board complete
- [ ] Confidence vote ≥3
- [ ] Retrospective actions captured

## Program Board Template
```
        Sprint 1    Sprint 2    Sprint 3    Sprint 4    Sprint 5
        ┌─────────┬─────────┬─────────┬─────────┬─────────┐
Team A  │ Feat 1  │ Feat 1  │ Feat 3  │ Feat 5  │ Feat 5  │
        │    ↓    │         │    ↑    │         │         │
        ├─────────┼─────────┼─────────┼─────────┼─────────┤
Team B  │ Feat 2  │ Feat 4  │ Feat 4  │ Feat 6  │ Feat 7  │
        │         │         │    ↓    │    ↑    │         │
        ├─────────┼─────────┼─────────┼─────────┼─────────┤
Team C  │ Feat 8  │ Feat 8  │ Feat 9  │ Feat 10 │ Feat 10 │
        └─────────┴─────────┴─────────┴─────────┴─────────┘
Events:     △         △                      △         △
         Sprint 1   System              Sprint 4    PI End
          Demo      Demo                 Demo
```

## Virtual PI Planning Adjustments
```markdown
### Tool Requirements
- Video conferencing with breakout rooms
- Virtual whiteboard (Miro/Mural)
- Shared program board
- Chat for side conversations
- Recording capability

### Modified Timing
- Add 15 min to each session for tech issues
- More frequent breaks (every 90 min)
- Shorter presentation slots
- Extended Q&A time

### Engagement Tips
- Cameras on policy
- Active polling/voting
- Breakout room rotations
- Virtual social time
- Clear hand-raising protocol
```

## Post-Event Actions
```markdown
### Immediate (Same Day)
- [ ] Send thank you message
- [ ] Export/photo all boards
- [ ] Publish PI objectives
- [ ] Share confidence vote results

### Within 48 Hours
- [ ] Distribute PI plan package
- [ ] Update tracking tools
- [ ] Schedule recurring ceremonies
- [ ] Communicate to stakeholders
- [ ] Address retro actions

### Throughout PI
- [ ] Weekly dependency check
- [ ] Bi-weekly system demos
- [ ] Monthly metrics review
- [ ] Continuous ROAM updates
```

## Success Metrics
| Metric | Target | Actual | Notes |
|--------|--------|--------|-------|
| Attendance | >95% | {{actual}}% | {{notes}} |
| On-time starts | 100% | {{actual}}% | {{notes}} |
| Confidence vote | >3.5 | {{actual}} | {{notes}} |
| Dependencies resolved | >80% | {{actual}}% | {{notes}} |
| Participant satisfaction | >4/5 | {{actual}} | {{notes}} |

## Facilitator Notes
```markdown
### Energy Management
- High energy opening
- Music during breaks
- Stand-up activities
- Celebration moments
- Close with appreciation

### Common Issues
- Dependency deadlocks → Escalate quickly
- Low confidence → Dig into specifics
- Scope creep → Refer to capacity
- Technical blocks → Architecture sync

### Tips
- Keep to timebox religiously
- Make decisions visible
- Encourage cross-team talk
- Document parking lot items
- Maintain positive energy
```

---

*Template Version: 1.0 | Based on SAFe 5.1 | Customizable for context*