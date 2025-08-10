# rice-prioritization

REQUIRED: Use this task to prioritize features/initiatives using the RICE framework

## Configuration
```yaml
task:
  name: RICE Prioritization Framework
  type: framework-based
  priority: high
  elicit: true
```

## Prerequisites
- List of features/initiatives to prioritize
- Basic understanding of user base
- Rough effort estimates available

## RICE Framework Components

**RICE Score = (Reach × Impact × Confidence) / Effort**

- **Reach**: How many users affected per time period
- **Impact**: How much it impacts those users (0.25-3)
- **Confidence**: How confident in estimates (0-100%)
- **Effort**: Person-months required

## Interactive Flow

### STEP 1: Setup and Context
GATHER information:
1. What are we prioritizing? (features, initiatives, bugs, etc.)
2. What time period for Reach? (per month, quarter, year)
3. Who are the stakeholders for this prioritization?
4. Any constraints or must-haves to consider?
5. What's our team capacity?

WAIT for responses.

### STEP 2: Initiative Inventory
CREATE comprehensive list:

ASK: "List all features/initiatives you're considering for prioritization."

ORGANIZE into table:
```
ID | Initiative Name | Brief Description | Requester
---|----------------|-------------------|----------
1  | [Name]         | [Description]     | [Who]
2  | [Name]         | [Description]     | [Who]
```

CONFIRM: "Is this the complete list? Any additions?"

### STEP 3: Reach Estimation
For each initiative, CALCULATE Reach:

GUIDE with questions:
- "How many users will this impact?"
- "Is this all users or a segment?"
- "What's the frequency of impact?"

**Reach Calculation Examples:**
- All users (100K) × once per month = 100K
- Power users (10K) × daily (30x) = 300K
- New users (5K/month) × onboarding = 5K

DOCUMENT assumptions:
```
Initiative: [Name]
Reach: [Number] users/[time period]
Assumption: [How calculated]
```

### STEP 4: Impact Scoring
EXPLAIN Impact scale:
- **3** = Massive impact (game-changer)
- **2** = High impact (very positive)
- **1** = Medium impact (positive)
- **0.5** = Low impact (minimal)
- **0.25** = Minimal impact (barely noticeable)

For each initiative, ASK:
1. "How much will this improve the user experience?"
2. "Does this solve a major pain point?"
3. "Will this drive key metrics significantly?"

PROVIDE examples:
- "Reducing load time from 5s to 1s" → Impact: 2
- "Adding dark mode" → Impact: 0.5
- "Fixing critical workflow bug" → Impact: 3

### STEP 5: Confidence Assessment
EVALUATE confidence (0-100%):

Consider factors:
- **100%**: Proven with data, done before
- **80%**: Strong evidence, minor unknowns
- **50%**: Reasonable assumptions, some risk
- **20%**: Many unknowns, experimental

For each initiative, DISCUSS:
- "What evidence supports these estimates?"
- "What are the key uncertainties?"
- "Have we done similar things before?"

Lower confidence for:
- New technology/approach
- Uncertain user behavior
- External dependencies
- Regulatory concerns

### STEP 6: Effort Estimation
ESTIMATE in person-months:

BREAK DOWN by:
- Design effort
- Development effort
- QA/testing effort
- Launch/migration effort

ASK for each:
1. "How many engineers needed?"
2. "How long will development take?"
3. "Any special skills required?"
4. "Dependencies on other teams?"

**Effort Scale:**
- Small: 0.5-1 person-months
- Medium: 2-4 person-months
- Large: 5-10 person-months
- XL: 10+ person-months

### STEP 7: RICE Score Calculation
CALCULATE for all initiatives:

| Initiative | Reach | Impact | Confidence | Effort | RICE Score |
|-----------|-------|---------|------------|--------|------------|
| [Name 1]  | 100K  | 2       | 80%        | 3      | 53.3K      |
| [Name 2]  | 50K   | 1       | 100%       | 1      | 50K        |
| [Name 3]  | 200K  | 0.5     | 50%        | 4      | 12.5K      |

**Formula**: (Reach × Impact × Confidence%) / Effort

SORT by RICE score descending.

### STEP 8: Sensitivity Analysis
TEST assumptions:

"Let's validate our top priorities. What if:"
- Reach was 50% lower?
- Impact was one level less?
- Effort doubled?

IDENTIFY which initiatives are:
- **Robust**: High priority regardless
- **Sensitive**: Priority depends on assumptions
- **Borderline**: Close to cutoff line

### STEP 9: Strategic Adjustments
CONSIDER factors beyond RICE:

**Strategic Alignment:**
- Does this support OKRs?
- Technical debt addressed?
- Competitive necessity?
- Platform investment?

**Dependencies:**
- Must do X before Y?
- Shared components?
- Team availability?

ADJUST priority order if needed:
```
Original Rank | Adjusted Rank | Reason
-------------|---------------|--------
#3           | #1            | Blocks #2 and #4
#5           | #3            | Strategic initiative
```

### STEP 10: Roadmap Creation
BUILD execution plan:

**Quarter/Sprint Allocation:**
```
Q1: [Initiative 1, 2] - Total effort: 4 PM
Q2: [Initiative 3, 4] - Total effort: 5 PM
Q3: [Initiative 5, 6] - Total effort: 4 PM
```

**Team Assignment:**
- Team A: [Initiatives 1, 3, 5]
- Team B: [Initiatives 2, 4, 6]

**Success Metrics:**
Define how we'll measure success for each.

## Deliverables
- Prioritized initiative list with RICE scores
- Detailed scoring rationale
- Sensitivity analysis results
- Adjusted roadmap with strategic considerations
- Resource allocation plan

## Success Criteria
- Data-driven prioritization
- Transparent scoring process
- Stakeholder alignment
- Executable roadmap
- Regular re-evaluation planned

## Next Steps
OFFER to:
1. Create detailed PRDs for top initiatives
2. Build sprint plans for execution
3. Set up tracking dashboards
4. Communicate priorities to stakeholders