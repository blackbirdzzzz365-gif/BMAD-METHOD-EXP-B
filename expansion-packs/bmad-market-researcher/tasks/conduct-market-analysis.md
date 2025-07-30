# conduct-market-analysis

REQUIRED: Use this task to conduct comprehensive market analysis including TAM/SAM/SOM calculations

## Configuration
```yaml
task:
  name: Conduct Market Analysis
  type: interactive
  priority: high
  elicit: true
```

## Prerequisites
- Clear understanding of the product/service to analyze
- Target market definition
- Geographic scope

## Interactive Flow

### STEP 1: Gather Context
ASK the user these questions (present as numbered list):
1. What product or service are you analyzing?
2. Who is your target customer (B2B or B2C)?
3. What geographic markets are you targeting?
4. What problem does your product/service solve?
5. Do you have any existing market data or estimates?

WAIT for user responses before proceeding.

### STEP 2: Define Market Boundaries
Based on user input, CONFIRM:
- Product/service category definition
- Customer segments to include
- Geographic boundaries
- Value chain position

Present your understanding and ask: "Is this market definition correct? Any adjustments needed?"

### STEP 3: TAM Calculation
EXPLAIN: "I'll calculate your Total Addressable Market (TAM) using multiple methods for validation."

Present options:
1. Top-down approach (using industry reports)
2. Bottom-up approach (customer count × price)
3. Value theory approach (value created × capture rate)

ASK: "Which approach would you prefer, or shall I use all three?"

For each selected approach:
- Research relevant data points
- Show calculations step-by-step
- Document all assumptions
- Present the TAM estimate

### STEP 4: SAM Calculation
EXPLAIN: "Now let's determine your Serviceable Addressable Market (SAM) - the portion of TAM you can realistically reach."

ASK:
1. What are your geographic limitations?
2. Which customer segments will you initially target?
3. Are there regulatory or technical constraints?
4. What channels will you use to reach customers?

Calculate SAM based on constraints and present findings.

### STEP 5: SOM Estimation
EXPLAIN: "Finally, let's estimate your Serviceable Obtainable Market (SOM) - what you can realistically capture."

ASK:
1. What market share do you think is realistic in year 1? Year 3?
2. Who are your main competitors?
3. What's your unique value proposition?
4. What resources do you have for market entry?

Present SOM scenarios:
- Conservative (low market share)
- Realistic (moderate market share)
- Optimistic (high market share)

### STEP 6: Market Dynamics Analysis
Research and present:
- Market growth rate (CAGR)
- Key market drivers
- Major trends affecting the market
- Potential disruptions or risks

ASK: "Would you like me to deep dive into any of these market dynamics?"

### STEP 7: Synthesis and Recommendations
CREATE a summary including:
- Market size summary (TAM/SAM/SOM)
- Key opportunities identified
- Main challenges to consider
- Recommended market entry strategy
- Next steps for validation

ASK: "Would you like me to:
1. Create a detailed market analysis report
2. Explore specific market segments further
3. Analyze competitors in this market
4. Research customer needs in more detail"

## Deliverables
- Market size calculations with methodology
- Growth projections and trends
- Opportunity assessment
- Strategic recommendations

## Success Metrics
- Multiple calculation methods used for validation
- Clear documentation of assumptions
- Actionable insights provided
- User questions answered comprehensively