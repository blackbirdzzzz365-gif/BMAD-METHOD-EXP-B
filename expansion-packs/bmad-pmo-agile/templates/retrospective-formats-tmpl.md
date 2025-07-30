# Retrospective Formats Template Collection

## Format Selection Guide
```yaml
retrospective_selector:
  team_mood: "{{positive/neutral/negative}}"
  team_maturity: "{{forming/storming/norming/performing}}"
  time_available: "{{30/60/90/120}} minutes"
  specific_focus: "{{general/problem-solving/team-building/process}}"
  recommended_format: "{{format_name}}"
```

## 1. Classic Formats

### Start, Stop, Continue
```markdown
## Sprint {{number}} Retrospective - Start/Stop/Continue

### ⬆️ START (What should we start doing?)
- [ ] {{idea_1}}
- [ ] {{idea_2}}
- [ ] {{idea_3}}

### 🛑 STOP (What should we stop doing?)
- [ ] {{practice_1}}
- [ ] {{practice_2}}

### ➡️ CONTINUE (What should we keep doing?)
- [ ] {{good_practice_1}}
- [ ] {{good_practice_2}}
- [ ] {{good_practice_3}}

### Action Items
| Action | Owner | Due Date |
|--------|-------|----------|
| {{action}} | {{name}} | {{date}} |
```

### Mad, Sad, Glad
```markdown
## Sprint {{number}} Retrospective - Mad/Sad/Glad

### 😠 MAD (What made you angry?)
- {{frustration_1}}
- {{frustration_2}}

### 😢 SAD (What disappointed you?)
- {{disappointment_1}}
- {{disappointment_2}}

### 😊 GLAD (What made you happy?)
- {{success_1}}
- {{success_2}}
- {{success_3}}

### Themes Identified
1. **{{theme_1}}** - {{action_needed}}
2. **{{theme_2}}** - {{action_needed}}
```

### 4 Ls (Liked, Learned, Lacked, Longed For)
```markdown
## Sprint {{number}} Retrospective - 4Ls

### 👍 LIKED
What did you like about this sprint?
- {{liked_1}}
- {{liked_2}}

### 🧠 LEARNED
What did you learn?
- {{learning_1}}
- {{learning_2}}

### 😕 LACKED
What was missing?
- {{lacking_1}}
- {{lacking_2}}

### 🌟 LONGED FOR
What did you wish for?
- {{wish_1}}
- {{wish_2}}

### Priority Actions
1. Address: {{biggest_lack}}
2. Implement: {{top_wish}}
3. Share: {{key_learning}}
```

## 2. Creative Formats

### Sailboat Retrospective
```markdown
## Sprint {{number}} Retrospective - Sailboat

```
         Wind 💨                    ⛵ Our Team Sailboat
    (What propels us?)                    |
    - {{wind_1}}                         /|\
    - {{wind_2}}                        / | \
                                      /____|____\
Island 🏝️                           ~~~~~~~~~~~~~
(Our Goal)                          ⚓ Anchors ⚓
- {{goal}}                      (What holds us back?)
                                - {{anchor_1}}
        🪨 Rocks 🪨              - {{anchor_2}}
    (Risks ahead)
    - {{risk_1}}
    - {{risk_2}}
```

### Actions
- Cut anchor: {{action_1}}
- Avoid rock: {{action_2}}
- Catch wind: {{action_3}}
```

### Starfish Retrospective
```markdown
## Sprint {{number}} Retrospective - Starfish

```
           Keep Doing
               *
             * * *
           *   |   *
    Less  *    |    *  More
         *     |     *
        *      |      *
       *       |       *
      *        |        *
     Stop      |      Start
```

### ⭐ KEEP DOING (Center)
- {{keep_1}}
- {{keep_2}}

### ➕ MORE OF
- {{more_1}}
- {{more_2}}

### ➖ LESS OF
- {{less_1}}
- {{less_2}}

### 🆕 START DOING
- {{start_1}}
- {{start_2}}

### 🛑 STOP DOING
- {{stop_1}}
- {{stop_2}}
```

### Superhero Retrospective
```markdown
## Sprint {{number}} Retrospective - Superhero Theme

### 🦸 SUPERPOWERS (Our strengths)
- {{strength_1}}: Used when {{example}}
- {{strength_2}}: Helped us {{achievement}}

### 🦹 KRYPTONITE (Our weaknesses)
- {{weakness_1}}: Affected us when {{situation}}
- {{weakness_2}}: Need to address by {{solution}}

### 🎯 MISSION (Our focus)
- Sprint mission was: {{mission}}
- Achievement level: {{percentage}}%

### 🦸‍♀️ SIDEKICKS NEEDED
- Need help with: {{help_1}}
- Could use support on: {{help_2}}

### 🚀 NEXT ADVENTURE
- {{next_goal_1}}
- {{next_goal_2}}
```

## 3. Problem-Solving Formats

### 5 Whys Retrospective
```markdown
## Sprint {{number}} Retrospective - 5 Whys Analysis

### 🎯 Problem: {{main_problem}}

### Root Cause Analysis
1. **Why did {{problem}} happen?**
   → {{cause_1}}

2. **Why did {{cause_1}} occur?**
   → {{cause_2}}

3. **Why did {{cause_2}} happen?**
   → {{cause_3}}

4. **Why did {{cause_3}} occur?**
   → {{cause_4}}

5. **Why did {{cause_4}} happen?**
   → {{root_cause}}

### 🔧 Root Cause: {{root_cause}}

### Action Plan
- Immediate: {{immediate_action}}
- Short-term: {{short_term_fix}}
- Long-term: {{systemic_change}}
```

### Force Field Analysis
```markdown
## Sprint {{number}} Retrospective - Force Field Analysis

### Goal: {{improvement_goal}}

### Driving Forces ➡️         ⬅️ Restraining Forces
(Helping us achieve goal)     (Preventing achievement)

{{driver_1}} ████████         ████████ {{restraint_1}}
{{driver_2}} ██████           ██████████ {{restraint_2}}
{{driver_3}} ████████████     ████ {{restraint_3}}
{{driver_4}} ██████           ██████ {{restraint_4}}

### Actions to Shift Balance
1. **Strengthen:** {{driver_to_boost}}
2. **Weaken:** {{restraint_to_reduce}}
3. **Add:** {{new_driver}}
```

## 4. Team Building Formats

### Appreciation Retrospective
```markdown
## Sprint {{number}} Retrospective - Appreciation

### 🙏 APPRECIATIONS
*Each team member appreciates another*

**{{person_1}} → {{person_2}}**
"I appreciate how you {{specific_action}}"

**{{person_2}} → {{person_3}}**
"Thank you for {{specific_help}}"

**{{person_3}} → {{person_4}}**
"I'm grateful that you {{specific_contribution}}"

[Continue for all team members]

### 🌟 TEAM ACHIEVEMENTS
Together we:
- {{achievement_1}}
- {{achievement_2}}
- {{achievement_3}}

### 💪 STRENGTHS RECOGNIZED
- {{strength_1}} shown by {{examples}}
- {{strength_2}} demonstrated in {{situation}}
```

### Team Radar Retrospective
```markdown
## Sprint {{number}} Retrospective - Team Radar

Rate each dimension 1-5:

```
        Clarity
           5
      4    |    4
   3  ●----+----●  3  Fun
Speed  ●----+----●
   2  ●----+----●  2  Learning
      1    |    1
           1
        Quality

Legend: 1=Poor, 5=Excellent
Previous Sprint: ○  Current Sprint: ●
```

### Dimensions
1. **Clarity** ({{score}}/5): {{comment}}
2. **Quality** ({{score}}/5): {{comment}}
3. **Learning** ({{score}}/5): {{comment}}
4. **Fun** ({{score}}/5): {{comment}}
5. **Speed** ({{score}}/5): {{comment}}

### Improvement Focus
Lowest score: {{dimension}} - Action: {{improvement_action}}
```

## 5. Distributed Team Formats

### Emoji Check-in Retrospective
```markdown
## Sprint {{number}} Retrospective - Emoji Check-in

### How are you feeling about this sprint?
{{name_1}}: 😊 "{{comment}}"
{{name_2}}: 😐 "{{comment}}"
{{name_3}}: 😎 "{{comment}}"
{{name_4}}: 😰 "{{comment}}"

### Sprint in Emojis
- Best moment: 🎉 {{moment}}
- Biggest challenge: 😤 {{challenge}}
- Team mood: {{emoji}} {{description}}
- Next sprint hope: 🎯 {{hope}}

### Actions from Feelings
- Address: {{negative_feeling}} with {{action}}
- Amplify: {{positive_feeling}} by {{action}}
```

### Timeline Retrospective
```markdown
## Sprint {{number}} Retrospective - Timeline

### Sprint Timeline
```
Start                                                End
|----+----+----+----+----+----+----+----+----+----|
     ↑    ↑         ↑              ↑         ↑
     😊   😰        🎉             😤        😊
   Story  Blocked  Demo        Bug found  Completed
  kickoff  by API  success    in prod     sprint
```

### Events Analysis
**High Points 📈**
- {{event_1}}: What made it good? {{reason}}
- {{event_2}}: How to repeat? {{method}}

**Low Points 📉**
- {{event_1}}: What caused it? {{cause}}
- {{event_2}}: How to prevent? {{prevention}}

### Patterns Noticed
- {{pattern_1}}
- {{pattern_2}}
```

## 6. Quick Formats (30 minutes)

### Plus/Delta
```markdown
## Sprint {{number}} - Plus/Delta (Quick Retro)

### ➕ PLUS (What went well)
- {{plus_1}}
- {{plus_2}}
- {{plus_3}}

### Δ DELTA (What to change)
- {{delta_1}} → Action: {{action_1}}
- {{delta_2}} → Action: {{action_2}}

**One Action to Take:** {{primary_action}}
**Owner:** {{owner}}
**Review Date:** {{date}}
```

### One-Word Retrospective
```markdown
## Sprint {{number}} - One Word

### Each person shares one word about the sprint:
- {{name_1}}: "{{word_1}}" because {{reason}}
- {{name_2}}: "{{word_2}}" because {{reason}}
- {{name_3}}: "{{word_3}}" because {{reason}}
- {{name_4}}: "{{word_4}}" because {{reason}}

### Common Themes
- {{theme_1}} (mentioned by {{count}} people)
- {{theme_2}} (mentioned by {{count}} people)

### Quick Action
Based on themes: {{action}}
```

## Retrospective Facilitation Guide

### Preparation Checklist
- [ ] Book room/video call
- [ ] Send calendar invite
- [ ] Choose format based on team needs
- [ ] Prepare materials/boards
- [ ] Review previous actions
- [ ] Set up anonymous input tool (if needed)

### Facilitation Timeline (90 minutes)
| Time | Activity | Purpose |
|------|----------|---------|
| 0-10 min | Check-in | Set mood, everyone speaks |
| 10-15 min | Review previous actions | Accountability |
| 15-65 min | Main retrospective format | Generate insights |
| 65-80 min | Identify actions | Concrete improvements |
| 80-90 min | Close | Commitment, appreciation |

### Ground Rules Template
```markdown
## Retrospective Ground Rules
1. Vegas Rule: What's said here, stays here
2. Everyone participates
3. No phones/laptops (unless remote)
4. Focus on improvement, not blame
5. Be specific with examples
6. One conversation at a time
7. Time boxes respected
```

### Action Item Tracking
```markdown
## Sprint {{number}} Retrospective Actions

| ID | Action | Owner | Due | Status | Notes |
|----|--------|-------|-----|--------|-------|
| {{sprint}}-01 | {{action}} | {{owner}} | {{date}} | {{status}} | {{notes}} |
| {{sprint}}-02 | {{action}} | {{owner}} | {{date}} | {{status}} | {{notes}} |

### Previous Actions Review
- ✅ Completed: {{count}}
- 🔄 In Progress: {{count}}
- ❌ Not Started: {{count}}
- 🚫 Cancelled: {{count}}

Success Rate: {{percentage}}%
```

### Remote Retrospective Tools Setup
```markdown
## Virtual Retro Setup

### Tools Needed
- Video conferencing: {{tool}}
- Virtual board: {{miro/mural/jamboard}}
- Timer: {{tool}}
- Anonymous input: {{tool}}

### Board Setup
1. Create sections for retro format
2. Add voting dots/stamps
3. Set up parking lot
4. Create action items section
5. Test with co-facilitator

### Engagement Techniques
- Use breakout rooms for small groups
- Anonymous sticky notes for sensitive topics
- Emoji reactions for energy check
- Music during brainstorming
- Gallery walk via screen share
```

---

*Choose the format that best fits your team's current needs and energy level*