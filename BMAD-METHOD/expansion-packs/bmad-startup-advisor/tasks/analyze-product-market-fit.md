# Task: Analyze Product-Market Fit

## Task Metadata
```yaml
task:
  id: analyze-product-market-fit
  name: Product-Market Fit Analysis
  agent: serial-entrepreneur
  duration: 2-3 weeks
  elicit: true
  
outputs:
  - pmf_score
  - retention_analysis
  - growth_indicators
  - improvement_areas
  - scaling_readiness
```

## Product-Market Fit Introduction

```markdown
Hi! I'm Alex. Let's figure out if you've achieved the holy grail: product-market fit.

PMF isn't a feeling - it's measurable. When you have it, everything gets easier. When you don't, everything is a struggle.

**Quick Check:**
1. Are customers actively using your product?
2. Would they be disappointed if it disappeared?
3. Are they telling others about it?
4. Is growth accelerating or grinding?
5. Are you pushing or being pulled?

Let's analyze your real data and find the truth.
```

## Phase 1: Quantitative Analysis (Week 1)

### Step 1.1: Core Metrics Assessment
```markdown
**The PMF Metrics Framework:**

1. **Retention Curves**
   Plot cohort retention over time:
   
   Day 1: {{percentage}}%
   Day 7: {{percentage}}%
   Day 30: {{percentage}}%
   Day 90: {{percentage}}%
   Day 180: {{percentage}}%
   
   Benchmark by type:
   - Consumer Social: D30 >25%
   - Consumer Subscription: D30 >40%
   - B2B SaaS: M6 >80%
   - Marketplace: M6 >30%
   
   Your Performance: {{Above/Below}} benchmark

2. **Growth Accounting**
   New + Resurrected - Churned = Net Growth
   
   This Month:
   - New Users: {{number}}
   - Resurrected: {{number}}
   - Churned: {{number}}
   - Net Growth: {{number}}
   
   Quick Ratio = (New + Resurrected) / Churned
   Your Quick Ratio: {{number}} (Target >4)

3. **Engagement Depth**
   - DAU/MAU Ratio: {{percentage}}% (Target >20%)
   - Core Action Frequency: {{X}} per {{period}}
   - Feature Adoption: {{percentage}}% use core feature
   - Session Duration: {{minutes}} (trend: ↑/↓)

4. **Organic Growth**
   - % from word-of-mouth: {{percentage}}%
   - Viral coefficient: {{number}}
   - Referral rate: {{percentage}}%
   - Organic/Paid ratio: {{ratio}}

**PMF Score Calculation:**
Retention Score (40%) + Growth Score (30%) + 
Engagement Score (20%) + Organic Score (10%) = 
**Total PMF Score: {{X}}/100**
```

### Step 1.2: Cohort Analysis Deep Dive
```markdown
**Cohort Retention Analysis:**

Create cohort table:
```
Cohort    Month 0  Month 1  Month 2  Month 3  Month 4  Month 5
Jan 2024   100%     {{%}}    {{%}}    {{%}}    {{%}}    {{%}}
Feb 2024   100%     {{%}}    {{%}}    {{%}}    {{%}}    
Mar 2024   100%     {{%}}    {{%}}    
Apr 2024   100%     {{%}}    
May 2024   100%     
```

**Patterns to Look For:**

✅ Good Signs:
- Retention flattening (finding natural level)
- Later cohorts performing better
- Improving activation rates
- Consistent baseline retention

❌ Bad Signs:
- Continuous decline (no floor)
- Later cohorts performing worse
- Low activation (<40%)
- High variance between cohorts

**Your Pattern:** {{description}}
**Interpretation:** {{analysis}}
```

### Step 1.3: Revenue/Usage Concentration
```markdown
**Customer Concentration Analysis:**

Revenue Distribution:
- Top 10% customers = {{percentage}}% of revenue
- Top 20% customers = {{percentage}}% of revenue
- Bottom 50% customers = {{percentage}}% of revenue

Ideal: 80/20 rule (not 95/5)

Usage Distribution:
- Power users (daily): {{percentage}}%
- Regular users (weekly): {{percentage}}%
- Occasional (monthly): {{percentage}}%
- Dormant: {{percentage}}%

**Segment Performance:**

Best Performing Segment:
- Description: {{segment}}
- Retention: {{percentage}}%
- LTV: ${{amount}}
- % of base: {{percentage}}%

Worst Performing Segment:
- Description: {{segment}}
- Retention: {{percentage}}%
- LTV: ${{amount}}
- % of base: {{percentage}}%

Action: Double down on {{best}} segment
```

## Phase 2: Qualitative Analysis (Week 1-2)

### Step 2.1: Sean Ellis Test
```markdown
**The 40% Test:**

Survey Question:
"How would you feel if you could no longer use [Product]?"
1. Very disappointed
2. Somewhat disappointed  
3. Not disappointed
4. N/A - don't use anymore

Send to users who:
- Used product in last 2 weeks
- Experienced core value
- Used at least twice

Results:
- Very disappointed: {{percentage}}%
- Somewhat disappointed: {{percentage}}%
- Not disappointed: {{percentage}}%
- No longer use: {{percentage}}%

**PMF Benchmark: >40% "Very disappointed"**
Your Status: {{PASS/FAIL}}

Follow-up Questions:
1. "What would you use instead?"
   Most common: {{alternative}}
   
2. "What is the primary benefit?"
   Top answer: {{benefit}}
   
3. "Who would most benefit?"
   Profile: {{description}}
```

### Step 2.2: NPS Analysis
```markdown
**Net Promoter Score Deep Dive:**

Overall NPS: {{score}} (Promoters - Detractors)

Breakdown:
- Promoters (9-10): {{percentage}}%
- Passives (7-8): {{percentage}}%
- Detractors (0-6): {{percentage}}%

By Segment:
- {{Segment 1}}: NPS {{score}}
- {{Segment 2}}: NPS {{score}}
- {{Segment 3}}: NPS {{score}}

Benchmarks:
- B2B SaaS: >30 good, >70 excellent
- Consumer: >0 good, >50 excellent
- Enterprise: >40 good, >70 excellent

**Promoter Analysis:**
Common themes in comments:
1. {{theme_1}}: {{frequency}}%
2. {{theme_2}}: {{frequency}}%
3. {{theme_3}}: {{frequency}}%

**Detractor Analysis:**
Main complaints:
1. {{issue_1}}: {{frequency}}%
2. {{issue_2}}: {{frequency}}%
3. {{issue_3}}: {{frequency}}%
```

### Step 2.3: Customer Interview Insights
```markdown
**PMF Interview Questions:**

For Power Users:
1. "Walk me through the last time you used [product]"
2. "What job does it do for you?"
3. "What would break if you couldn't use it?"
4. "Have you recommended it? To whom?"

For Churned Users:
1. "Why did you stop using [product]?"
2. "What are you using instead?"
3. "What would bring you back?"
4. "Who is it perfect for?"

**Key Insights:**

Why They Love It:
- {{insight_1}}
- {{insight_2}}
- {{insight_3}}

Why They Leave:
- {{reason_1}}
- {{reason_2}}
- {{reason_3}}

The "Aha" Moment:
Users get value when: {{description}}
Time to aha: {{duration}}
% who reach it: {{percentage}}%
```

## Phase 3: PMF Indicators Analysis (Week 2)

### Step 3.1: Leading Indicators
```markdown
**Early PMF Signals:**

1. **Usage Intensity**
   - Sessions per week: {{number}} (↑/↓)
   - Actions per session: {{number}} (↑/↓)
   - Time to habit: {{days}}
   
2. **Organic Traction**
   - Direct traffic %: {{percentage}}% (↑/↓)
   - Branded search volume: {{trend}}
   - Social mentions: {{number}}/week
   - User-generated content: {{amount}}

3. **Customer Pull**
   - Feature requests: {{number}}/week
   - Support tickets: {{number}}/week
   - Community activity: {{level}}
   - Expansion revenue: {{percentage}}%

4. **Competitive Position**
   - Win rate vs competitors: {{percentage}}%
   - Switching from: {{competitors}}
   - Switching to: {{competitors}}
   - Unique value claim: {{description}}

**Leading Indicator Score: {{X}}/10**
```

### Step 3.2: Lagging Indicators
```markdown
**Confirming PMF Signals:**

1. **Business Metrics**
   - Revenue growth: {{percentage}}% MoM
   - Burn multiple: {{number}} (Revenue/Burn)
   - Sales efficiency: {{ratio}}
   - Payback period: {{months}}

2. **Scale Indicators**
   - Hiring pace: {{number}}/month
   - Geographic expansion: {{status}}
   - New verticals: {{count}}
   - Platform requests: {{number}}

3. **Market Response**
   - Media coverage: {{frequency}}
   - Competitor copying: {{examples}}
   - Industry recognition: {{awards}}
   - Investment interest: {{level}}

**Lagging Indicator Score: {{X}}/10**
```

### Step 3.3: Segment-Specific PMF
```markdown
**PMF by Customer Segment:**

Analyze each segment separately:

Segment A: {{description}}
- Retention: {{percentage}}%
- NPS: {{score}}
- Growth rate: {{percentage}}%
- PMF Status: {{Yes/No/Maybe}}

Segment B: {{description}}
- Retention: {{percentage}}%
- NPS: {{score}}
- Growth rate: {{percentage}}%
- PMF Status: {{Yes/No/Maybe}}

Segment C: {{description}}
- Retention: {{percentage}}%
- NPS: {{score}}
- Growth rate: {{percentage}}%
- PMF Status: {{Yes/No/Maybe}}

**Strategic Recommendation:**
Focus on Segment {{X}} because:
- Highest retention
- Best unit economics
- Clearest value prop
- Largest market
```

## Phase 4: Action Planning (Week 3)

### Step 4.1: PMF Gap Analysis
```markdown
**Where You Stand:**

Strong PMF (>70 score):
✅ Scale aggressively
✅ Raise growth capital
✅ Expand team
✅ Enter new markets

Moderate PMF (40-70 score):
⚠️ Optimize core experience
⚠️ Focus on best segment
⚠️ Improve activation
⚠️ Reduce churn

Weak PMF (<40 score):
❌ Stop scaling
❌ Cut burn rate
❌ Return to discovery
❌ Consider pivot

**Your Situation: {{assessment}}**

Top 3 Gaps to Address:
1. {{gap_1}}: Impact on PMF: {{High/Med/Low}}
2. {{gap_2}}: Impact on PMF: {{High/Med/Low}}
3. {{gap_3}}: Impact on PMF: {{High/Med/Low}}
```

### Step 4.2: PMF Improvement Plan
```markdown
**30-60-90 Day Plan:**

Next 30 Days:
□ Fix: {{critical_issue}}
  - Action: {{specific_action}}
  - Owner: {{person}}
  - Success metric: {{metric}}

□ Test: {{hypothesis}}
  - Method: {{approach}}
  - Sample: {{size}}
  - Decision criteria: {{criteria}}

Next 60 Days:
□ Optimize: {{area}}
  - Current: {{metric}}
  - Target: {{metric}}
  - How: {{method}}

□ Expand: {{opportunity}}
  - Segment: {{description}}
  - Approach: {{strategy}}
  - Investment: {{resources}}

Next 90 Days:
□ Scale: {{what}}
  - Trigger: {{criteria}}
  - Resources: {{needs}}
  - Timeline: {{schedule}}

□ Measure: {{impact}}
  - Baseline: {{current}}
  - Target: {{goal}}
  - Review date: {{date}}
```

### Step 4.3: Scaling Readiness
```markdown
**PMF Scaling Checklist:**

Product Ready:
□ Core experience polished
□ Onboarding optimized (<5 min)
□ Key features stable
□ Mobile/platforms covered
□ Localization ready

Market Ready:
□ ICP clearly defined
□ Messaging resonates
□ Pricing validated
□ Competition understood
□ TAM confirmed large

Operations Ready:
□ Unit economics positive
□ Support systems scalable
□ Data infrastructure solid
□ Security/compliance done
□ Team roles defined

Go-to-Market Ready:
□ Acquisition channels proven
□ Sales process repeatable
□ Marketing materials ready
□ Partnership pipeline
□ Content strategy clear

**Scaling Readiness: {{X}}/20 checkmarks**

Recommendation: {{Go/Wait/Pivot}}
```

## PMF Monitoring Dashboard

### Weekly Metrics Review
```markdown
**PMF Health Check:**

Week of {{date}}:
- Retention: {{percentage}}% (Target: {{percentage}}%)
- Growth rate: {{percentage}}% (Target: {{percentage}}%)
- NPS: {{score}} (Target: {{score}})
- Organic %: {{percentage}}% (Target: {{percentage}}%)

Trends:
- Improving: {{metrics}}
- Stable: {{metrics}}
- Declining: {{metrics}}

Actions:
1. {{action_1}}
2. {{action_2}}
```

### Monthly PMF Report
```markdown
**Executive Summary:**

PMF Score: {{score}}/100 ({{change}} from last month)

Highlights:
- {{achievement_1}}
- {{achievement_2}}

Concerns:
- {{issue_1}}
- {{issue_2}}

Recommendations:
1. {{recommendation_1}}
2. {{recommendation_2}}

Next Month Focus:
{{priority_area}}
```

## Common PMF Misconceptions

### Misconception 1: "We'll Add Features"
**Reality**: PMF is about core value, not feature count
**Fix**: Focus on making core experience 10x better

### Misconception 2: "Marketing Will Solve It"
**Reality**: Can't market your way to PMF
**Fix**: Fix retention before scaling acquisition

### Misconception 3: "Some Users Love It"
**Reality**: Niche love ≠ market fit
**Fix**: Validate scalable segment exists

### Misconception 4: "Revenue = PMF"
**Reality**: Can have revenue without PMF
**Fix**: Check retention and organic growth

### Misconception 5: "It's Binary"
**Reality**: PMF exists on spectrum
**Fix**: Continuously improve core metrics

## Tools and Resources

### PMF Analysis Tools
- **Analytics**: Mixpanel, Amplitude
- **Surveys**: Delighted, SurveyMonkey
- **Session Recording**: FullStory, Hotjar
- **Cohort Analysis**: Baremetrics, ChartMogul
- **NPS**: Promoter.io, Wootric

### Templates
- Sean Ellis survey template
- Cohort analysis spreadsheet
- PMF scorecard
- Interview guide
- Board update template

## Integration Points

### To VC Advisor
`@vc-advisor: PMF analysis complete. Score: {{score}}/100. Ready to scale: {{Yes/No}}. Key metrics attached.`

### To Product Manager
`@product-manager: PMF gaps identified: {{list}}. Need roadmap adjustments to address retention issues in {{segment}}.`

### To Market Researcher
`@market-researcher: Segment {{X}} shows strongest PMF. Need TAM analysis and competitive landscape for this segment.`

## Success Criteria

```markdown
PMF Analysis Complete:
□ All core metrics analyzed
□ Qualitative feedback gathered  
□ Segment analysis done
□ PMF score calculated
□ Gaps clearly identified
□ Action plan created
□ Monitoring system setup
□ Team aligned on status
```

---

*Product-market fit is not a destination, it's a continuous journey of making users increasingly happy.*