# Task: Validate Business Model

## Task Metadata
```yaml
task:
  id: validate-business-model
  name: Business Model Validation Sprint
  agent: serial-entrepreneur
  duration: 2-4 weeks
  elicit: true
  
outputs:
  - validated_assumptions
  - pricing_model
  - unit_economics
  - go_no_go_decision
  - pivot_recommendations
```

## Business Model Validation Introduction

```markdown
Hi! I'm Alex, your serial entrepreneur advisor. Time to validate whether your business model actually works.

Most startups fail because they build something nobody wants to pay for. Let's make sure that's not you.

**Initial Questions:**
1. What problem are you solving?
2. Who has this problem most acutely?
3. How are they solving it today?
4. What's your proposed solution?
5. How will you make money?

Based on your answers, I'll guide you through a systematic validation process.
```

## Phase 1: Problem Validation (Week 1)

### Step 1.1: Customer Segmentation
```markdown
Let's identify your beachhead market:

**Segmentation Criteria:**
- Demographics: {{age, location, income}}
- Psychographics: {{behaviors, values}}
- Problem Intensity: {{frequency, severity}}
- Ability to Pay: {{budget, authority}}
- Accessibility: {{can you reach them}}

**Your Target Segment:**
Primary: {{description}}
Secondary: {{description}}
Avoid: {{description}}

**Validation Goal:** Talk to 30 people in primary segment this week
```

### Step 1.2: Problem Interview Script
```markdown
**Interview Framework (30 minutes):**

Opening (2 min):
"Thanks for your time. I'm researching how people handle [area]. 
No selling - just learning. Mind if I take notes?"

Context (5 min):
1. "Tell me about your role/situation"
2. "Walk me through your typical [relevant process]"
3. "What tools/solutions do you currently use?"

Problem Discovery (10 min):
1. "What's the hardest part about [process]?"
2. "Tell me about the last time [problem occurred]"
3. "How often does this happen?"
4. "What happens if you don't solve it?"

Current Solutions (8 min):
1. "How do you handle this today?"
2. "What have you tried?"
3. "What works/doesn't work?"
4. "How much time/money does this cost?"

Validation (5 min):
1. "If you could wave a magic wand, what would the ideal solution look like?"
2. "How valuable would that be to you?"
3. "What would you pay for that?"

Wrap-up:
"Anyone else I should talk to about this?"
```

### Step 1.3: Problem Validation Analysis
```markdown
After each interview, score:

**Problem Severity (1-10):**
- Frequency: How often? {{score}}
- Intensity: How painful? {{score}}
- Cost: Time/money lost? {{score}}

**Solution Fit (1-10):**
- Current solutions inadequate? {{score}}
- Willing to change? {{score}}
- Budget exists? {{score}}

**Red Flags:**
□ "That's interesting" (not painful)
□ "Maybe someday" (not urgent)
□ "If it was free" (no budget)
□ Can't remember last occurrence

**Green Flags:**
□ Emotional response to problem
□ Actively seeking solutions
□ Quantifiable cost/pain
□ Referred you to others with same problem

**Decision Point:**
If average severity score <7, PIVOT to new problem
If >7, proceed to solution validation
```

## Phase 2: Solution Validation (Week 2)

### Step 2.1: Solution Design Sprint
```markdown
Based on problem learnings, design minimal solution:

**Solution Canvas:**
┌─────────────────────────────────┐
│ Problem: {{validated_problem}}   │
├─────────────────────────────────┤
│ Solution: {{your_approach}}      │
├─────────────────────────────────┤
│ Key Features:                   │
│ 1. {{must_have}}               │
│ 2. {{must_have}}               │
│ 3. {{nice_to_have}}            │
├─────────────────────────────────┤
│ Differentiator: {{unique_value}}│
└─────────────────────────────────┘

**MVP Definition:**
What's the absolute minimum to test core value?
- Feature 1: {{description}}
- Feature 2: {{description}}
- NOT included: {{list}}

Timeline: {{days}} to build MVP
```

### Step 2.2: Solution Validation Tests
```markdown
Run these experiments in parallel:

**Test 1: Mockup Test**
- Create Figma/Sketch mockups
- Show to 10 target customers
- Measure: Excitement level (1-10)
- Success: Average >8

**Test 2: Landing Page Test**
- Build landing page with value prop
- Drive 100 targeted visitors
- Measure: Email signup rate
- Success: >10% conversion

**Test 3: Concierge MVP**
- Manually deliver solution for 3 customers
- Charge actual money (even if small)
- Measure: Satisfaction & willingness to continue
- Success: All want to continue

**Test 4: Pre-sales Test**
- Offer early access for prepayment
- Target: 10 customers
- Price: {{amount}}
- Success: 3+ commitments
```

### Step 2.3: Pricing Validation
```markdown
**Van Westendorp Price Sensitivity Analysis:**

Ask these 4 questions to 20+ target customers:

1. "At what price would this be too expensive?"
   → Determines price ceiling

2. "At what price would this be getting expensive but you'd still consider it?"
   → Optimal price range upper bound

3. "At what price would this be a bargain?"
   → Optimal price range lower bound

4. "At what price would this be too cheap you'd question quality?"
   → Price floor

**Pricing Model Options:**
Based on your business type:

□ Subscription: ${{X}}/month per {{unit}}
□ Usage-based: ${{X}} per {{metric}}
□ One-time: ${{X}} per {{purchase}}
□ Freemium: Free up to {{limit}}, then ${{X}}
□ Marketplace: {{X}}% transaction fee

**Recommended Model:** {{model}}
**Recommended Price:** ${{amount}}
**Justification:** {{reasoning}}
```

## Phase 3: Business Model Design (Week 3)

### Step 3.1: Unit Economics Modeling
```markdown
Let's build your unit economics:

**Customer Acquisition Cost (CAC):**
- Marketing costs: ${{amount}}/month
- Sales costs: ${{amount}}/month
- Total new customers: {{number}}/month
- CAC = ${{total_cost/customers}}

**Customer Lifetime Value (LTV):**
- Average revenue per user: ${{ARPU}}/month
- Gross margin: {{percentage}}%
- Average customer lifespan: {{months}}
- LTV = ARPU × Margin × Lifespan = ${{amount}}

**Key Ratios:**
- LTV:CAC = {{ratio}} (target >3:1)
- CAC Payback = {{months}} (target <12)
- Gross Margin = {{percentage}}% (target >70%)

**Monthly Unit Economics:**
Revenue per customer: ${{amount}}
Cost to serve: ${{amount}}
Gross profit: ${{amount}}
Contribution margin: {{percentage}}%

**Break-even Analysis:**
Fixed costs: ${{monthly}}
Break-even customers: {{number}}
Months to break-even: {{number}}
```

### Step 3.2: Growth Model Design
```markdown
How will you acquire customers?

**Primary Growth Channel:**
□ Product-led (free trial/freemium)
□ Sales-led (direct sales)
□ Marketing-led (content/ads)
□ Partner-led (channels)
□ Community-led (word of mouth)

**Channel Economics:**
Channel: {{primary_channel}}
CAC: ${{amount}}
Conversion rate: {{percentage}}%
Scalability: {{high/medium/low}}

**Growth Projection:**
Month 1: {{customers}} customers
Month 3: {{customers}} customers  
Month 6: {{customers}} customers
Month 12: {{customers}} customers

**Required Resources:**
- Marketing budget: ${{amount}}/month
- Sales headcount: {{number}}
- Product investment: ${{amount}}
```

### Step 3.3: Business Model Canvas
```markdown
**Complete Business Model:**

┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│ Key         │ Key         │ Value       │ Customer    │ Customer    │
│ Partners    │ Activities  │ Proposition │ Relations   │ Segments    │
│             │             │             │             │             │
│{{partners}} │{{activities}}│{{prop}}     │{{relations}}│{{segments}} │
├─────────────┼─────────────┤             ├─────────────┼─────────────┤
│ Key         │             │             │ Channels    │             │
│ Resources   │             │             │             │             │
│             │             │             │{{channels}} │             │
│{{resources}}│             │             │             │             │
├─────────────┴─────────────┴─────────────┴─────────────┴─────────────┤
│ Cost Structure                    │ Revenue Streams                   │
│ {{fixed_costs}}                  │ {{revenue_model}}                 │
│ {{variable_costs}}               │ {{pricing_strategy}}              │
└───────────────────────────────────┴───────────────────────────────────┘
```

## Phase 4: Go/No-Go Decision (Week 4)

### Step 4.1: Validation Scorecard
```markdown
**Problem Validation:**
□ Problem severity >7/10 ✓/✗
□ 30+ customer interviews ✓/✗
□ Clear target segment ✓/✗
□ Urgent problem ✓/✗
Score: {{X}}/4

**Solution Validation:**
□ MVP excitement >8/10 ✓/✗
□ Landing page >10% conversion ✓/✗
□ Concierge MVP success ✓/✗
□ Pre-sales achieved ✓/✗
Score: {{X}}/4

**Business Model Validation:**
□ LTV:CAC >3:1 ✓/✗
□ Gross margin >50% ✓/✗
□ Scalable channel identified ✓/✗
□ Path to profitability clear ✓/✗
Score: {{X}}/4

**Total Score: {{X}}/12**
```

### Step 4.2: Decision Framework
```markdown
**Go Decision (Score 10-12):**
✅ Strong problem-solution fit
✅ Viable unit economics
✅ Clear growth path
→ Proceed to build MVP

**Pivot Decision (Score 6-9):**
⚠️ Some validation gaps
⚠️ Need model adjustments
→ Address specific issues:
  - {{issue_1}}: {{solution}}
  - {{issue_2}}: {{solution}}

**No-Go Decision (Score <6):**
❌ Fundamental issues
❌ No clear path forward
→ Consider:
  - New customer segment
  - Different problem
  - Alternative solution
```

### Step 4.3: Next Steps Planning
```markdown
**If GO Decision:**
Week 1-2: Build core MVP
- Focus on {{key_features}}
- Ignore {{non_essential}}
- Launch to {{beta_users}}

Week 3-4: Gather feedback
- Daily user interviews
- Track key metrics
- Iterate quickly

Month 2: Expand testing
- Onboard 50+ users
- Test payment flow
- Refine onboarding

**If PIVOT Decision:**
Week 1: Address gaps
- {{specific_action_1}}
- {{specific_action_2}}

Week 2: Re-validate
- Test new assumptions
- Confirm improvements

Week 3-4: Make decision
- Full go/no-go
- Clear direction

**If NO-GO Decision:**
Immediate: Stop building
Week 1: Team discussion
Week 2: Explore pivots
Week 3: New validation cycle
```

## Common Validation Mistakes

### Mistake 1: Confirmation Bias
**Symptom**: Only hearing what you want
**Fix**: Let customers talk 80% of time

### Mistake 2: Solution-First Thinking  
**Symptom**: Pitching instead of learning
**Fix**: No solution talk in first half

### Mistake 3: Wrong Segment
**Symptom**: Mixed feedback signals
**Fix**: Narrow segment definition

### Mistake 4: Hypothetical Questions
**Symptom**: "Would you..." questions
**Fix**: Focus on past behavior

### Mistake 5: Free Feedback
**Symptom**: Everyone loves free
**Fix**: Always discuss price

## Tools and Resources

### Validation Tools
- **Interviews**: Calendly, Zoom, Otter.ai
- **Surveys**: Typeform, Google Forms
- **Landing Pages**: Carrd, Unbounce
- **Mockups**: Figma, Sketch
- **Analytics**: Google Analytics, Hotjar

### Tracking Template
```markdown
**Customer Interview Tracker**
| Date | Name | Segment | Problem Score | Solution Score | Key Insight | Follow-up |
|------|------|---------|---------------|----------------|-------------|-----------|
| {{date}} | {{name}} | {{segment}} | {{X}}/10 | {{X}}/10 | {{insight}} | {{Y/N}} |
```

### Validation Budget
```markdown
Recommended budget: $1,000-2,500
- Customer incentives: $500
- Landing page/tools: $200
- Ads for traffic: $500
- Mockup design: $300
- Miscellaneous: $500
```

## Integration Points

### With Product Manager Pack
`@product-manager: Validation complete. Problem validated: {{problem}}. Please create PRD for MVP features: {{list}}`

### With Market Researcher Pack
`@market-researcher: Need competitive analysis for {{validated solution}}. Key differentiator is {{unique_value}}`

### With PMO Agile Pack  
`@pmo-agile: Ready for MVP sprint. Scope: {{features}}. Timeline: {{weeks}}. Please plan sprints.`

## Success Criteria

```markdown
Validation Sprint Success:
□ Clear go/no-go decision made
□ Based on real customer data
□ Unit economics modeled
□ Growth channel identified
□ Next steps crystal clear
□ Team aligned on direction
□ Learned fast, spent little
```

---

*Remember: The goal isn't to be right, it's to find out if you're wrong as quickly and cheaply as possible.*