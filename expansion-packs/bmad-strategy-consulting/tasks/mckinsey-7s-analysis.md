# mckinsey-7s-analysis

REQUIRED: Use this task to conduct McKinsey 7S organizational analysis

## Configuration
```yaml
task:
  name: McKinsey 7S Framework Analysis
  type: organizational-diagnostic
  priority: high
  elicit: true
```

## Prerequisites
- Understanding of organization structure
- Access to leadership perspectives
- Cultural and operational insights

## Framework Overview

The McKinsey 7S Framework examines seven interdependent factors that determine organizational effectiveness:
- **Hard S's**: Strategy, Structure, Systems
- **Soft S's**: Shared Values, Skills, Style, Staff

All elements must be aligned for organizational success.

## Interactive Flow

### STEP 1: Purpose and Context
ASK the user:
1. What organizational challenge are we addressing?
2. Is this for current state, future state, or gap analysis?
3. What level of the organization? (Enterprise, Division, Function)
4. What recent changes have occurred?
5. What outcomes do you seek from this analysis?

WAIT for comprehensive responses.

### STEP 2: Strategy Assessment

EXPLORE the Strategy element:

**Definition**: Plan to achieve competitive advantage

ASK progressively:
1. "How clearly is strategy articulated across the organization?"
2. "What is the core strategic intent?"
3. "How does the strategy differentiate from competitors?"
4. "What are the strategic priorities?"
5. "How well is strategy understood at different levels?"

ASSESS Strategy:
```
Strategy Element Assessment:
- Clarity: [1-5 scale] - [Evidence]
- Differentiation: [1-5 scale] - [Evidence]
- Communication: [1-5 scale] - [Evidence]
- Execution Focus: [1-5 scale] - [Evidence]
Overall Strategy Score: [X/5]
```

### STEP 3: Structure Analysis

EXAMINE the Structure element:

**Definition**: How the organization is organized

MAP current structure:
- Organizational design (functional, divisional, matrix)
- Reporting relationships
- Decision rights
- Span of control
- Centralization vs decentralization

ASK: "What structural friction points exist?"

ASSESS Structure:
```
Structure Effectiveness:
- Clarity of Roles: [1-5]
- Decision Speed: [1-5]
- Collaboration: [1-5]
- Customer Focus: [1-5]
Key Issues: [List friction points]
```

### STEP 4: Systems Evaluation

ANALYZE the Systems element:

**Definition**: Processes and procedures that drive daily activities

INVENTORY key systems:
- Planning systems
- Performance management
- Information systems
- Control systems
- Innovation processes

For each system, EVALUATE:
- Effectiveness (1-5)
- Integration level
- Digital maturity
- User satisfaction

CREATE Systems Matrix:
```
System Category | Current State | Effectiveness | Key Gaps
----------------|---------------|---------------|----------
Planning | [Description] | [1-5] | [Gaps]
Performance Mgmt | [Description] | [1-5] | [Gaps]
Information | [Description] | [1-5] | [Gaps]
```

### STEP 5: Shared Values Assessment

EXPLORE the Shared Values (Culture):

**Definition**: Core values and cultural norms

INVESTIGATE:
1. Stated values vs lived values
2. Cultural behaviors rewarded
3. Unwritten rules
4. Sacred cows
5. Cultural enablers/barriers

USE culture diagnostic:
```
Cultural Dimension | Current State | Desired State | Gap
-------------------|---------------|---------------|-----
Customer Focus | [Low/Med/High] | [Target] | [Gap]
Innovation | [Low/Med/High] | [Target] | [Gap]
Collaboration | [Low/Med/High] | [Target] | [Gap]
Performance | [Low/Med/High] | [Target] | [Gap]
Agility | [Low/Med/High] | [Target] | [Gap]
```

ASK: "What cultural behaviors help or hinder strategy execution?"

### STEP 6: Skills Analysis

ASSESS the Skills element:

**Definition**: Distinctive capabilities and competencies

EVALUATE:
1. Core organizational capabilities
2. Skill gaps vs strategy needs
3. Learning and development
4. Knowledge management
5. Innovation capacity

BUILD Capability Heat Map:
```
Capability | Strategic Importance | Current Strength | Gap | Action
-----------|---------------------|------------------|-----|--------
Digital | Critical | Weak | -3 | Urgent
Customer Experience | High | Moderate | -2 | Develop
Innovation | High | Weak | -3 | Build
Operations | Moderate | Strong | 0 | Maintain
```

### STEP 7: Style Evaluation

EXAMINE the Style element:

**Definition**: Leadership style and management approach

ASSESS leadership dimensions:
- Decision-making style (directive vs collaborative)
- Communication patterns
- Risk tolerance
- Change leadership
- Performance management approach

GATHER perspectives:
"How would you characterize the leadership style?"

Style Assessment:
```
Leadership Dimension | Current | Effective for Strategy? | Change Needed?
--------------------|---------|------------------------|---------------
Decision Making | [Style] | Yes/No | [Recommendation]
Communication | [Style] | Yes/No | [Recommendation]
Change Leadership | [Style] | Yes/No | [Recommendation]
```

### STEP 8: Staff Analysis

EVALUATE the Staff element:

**Definition**: Human resource management and talent

ANALYZE:
- Talent pipeline strength
- Critical role coverage
- Employee engagement levels
- Retention of key talent
- Diversity and inclusion

Staff Health Check:
```
Dimension | Status | Risk Level | Action Required
----------|--------|------------|----------------
Leadership Pipeline | [Health] | [H/M/L] | [Action]
Critical Skills | [Health] | [H/M/L] | [Action]
Engagement | [Score] | [H/M/L] | [Action]
Retention | [Rate] | [H/M/L] | [Action]
```

### STEP 9: Alignment Analysis

CREATE alignment matrix:

```
        | Strategy | Structure | Systems | Shared Values | Skills | Style | Staff |
--------|----------|-----------|---------|---------------|--------|-------|-------|
Strategy|    ✓     |     ?     |    ?    |       ?       |   ?    |   ?   |   ?   |
Structure|   3/5    |     ✓     |    ?    |       ?       |   ?    |   ?   |   ?   |
Systems |   2/5    |    3/5    |    ✓    |       ?       |   ?    |   ?   |   ?   |
Values  |   4/5    |    2/5    |   2/5   |       ✓       |   ?    |   ?   |   ?   |
Skills  |   3/5    |    3/5    |   3/5   |      3/5      |   ✓    |   ?   |   ?   |
Style   |   2/5    |    2/5    |   3/5   |      4/5      |  3/5   |   ✓   |   ?   |
Staff   |   3/5    |    4/5    |   3/5   |      3/5      |  4/5   |  3/5  |   ✓   |
```

Legend: 5/5 = Perfectly aligned, 1/5 = Severely misaligned

### STEP 10: Gap Analysis and Recommendations

SYNTHESIZE findings:

**Critical Misalignments:**
1. [Element A] ← → [Element B]: [Impact]
2. [Element C] ← → [Element D]: [Impact]

**Root Causes:**
- [Underlying issue 1]
- [Underlying issue 2]

**Prioritized Interventions:**

**Quick Wins (0-3 months):**
1. [Specific action] → Improves [elements]
2. [Specific action] → Improves [elements]

**Medium Term (3-12 months):**
1. [Transformation initiative] → Aligns [elements]
2. [Transformation initiative] → Aligns [elements]

**Long Term (12+ months):**
1. [Strategic change] → Transforms [elements]

**Implementation Sequence:**
```
Phase 1: Foundation
- Fix [critical misalignment]
- Strengthen [weak element]

Phase 2: Build
- Develop [capability]
- Align [elements]

Phase 3: Excel
- Optimize [system]
- Embed [culture]
```

## Deliverables
- 7S assessment scores
- Alignment heat map
- Gap analysis
- Intervention roadmap
- Quick win initiatives
- Transformation priorities

## Success Criteria
- All 7 elements thoroughly assessed
- Misalignments clearly identified
- Root causes understood
- Actionable recommendations
- Stakeholder buy-in achieved

## Next Steps
OFFER:
1. Deep dive on critical misalignments
2. Design specific interventions
3. Create implementation roadmap
4. Facilitate leadership alignment session