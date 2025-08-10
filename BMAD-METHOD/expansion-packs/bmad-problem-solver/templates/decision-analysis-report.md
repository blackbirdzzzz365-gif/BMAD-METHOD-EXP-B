# Decision Analysis Report

## Template Metadata
```yaml
id: decision-analysis-report
name: Decision Analysis Report
pack: bmad-problem-solver
version: 1.1.0
description: Multi-criteria decision analysis with stakeholder impact assessment
workflow_mode: structured
category: decision-making
```

---

# {{decision_title}} - Decision Analysis Report

**Generated:** {{current_date}}  
**Decision Team:** Critical Analyst, Systems Thinker, Creative Solver  
**Analysis Method:** Multi-Criteria Decision Analysis (MCDA)  
**Confidence Level:** {{confidence_level}}

---

## Executive Summary

### 🎯 Decision Context
{{decision_context}}

### 🏆 Primary Recommendation

**Recommended Option:** {{recommended_option}}  
**Overall Score:** {{overall_score}}/10  
**Confidence Level:** {{confidence_percentage}}%

**Key Rationale:**
{{#key_rationale_points}}
- {{rationale_point}}
{{/key_rationale_points}}

### 📊 At-a-Glance Comparison

```
┌─────────────────┬─────────┬─────────┬─────────┬─────────┐
│ Criteria        │ Weight  │ Option A│ Option B│ Option C│
├─────────────────┼─────────┼─────────┼─────────┼─────────┤
{{#summary_matrix}}
│ {{criteria_name}} │ {{weight}} │ {{option_a_score}} │ {{option_b_score}} │ {{option_c_score}} │
{{/summary_matrix}}
├─────────────────┼─────────┼─────────┼─────────┼─────────┤
│ TOTAL SCORE     │         │ {{total_a}} │ {{total_b}} │ {{total_c}} │
└─────────────────┴─────────┴─────────┴─────────┴─────────┘
```

### ⚡ Immediate Next Steps
{{#immediate_actions}}
1. {{action_description}} ({{timeframe}})
{{/immediate_actions}}

---

## Decision Framework

### 🎯 Decision Statement
**Original Question:** {{original_decision_question}}

**Refined Decision Statement:**
> {{refined_decision_statement}}

### ⏱️ Decision Timeline
**Decision Deadline:** {{decision_deadline}}  
**Implementation Start:** {{implementation_start_date}}  
**Expected Results:** {{expected_results_timeline}}

### 👥 Decision Stakeholders

**Decision Makers:**
{{#decision_makers}}
- {{name}} ({{role}}) - {{decision_authority}}
{{/decision_makers}}

**Key Influencers:**
{{#key_influencers}}
- {{name}} ({{role}}) - {{influence_area}}
{{/key_influencers}}

**Impacted Groups:**
{{#impacted_groups}}
- {{group_name}}: {{impact_description}}
{{/impacted_groups}}

### 🚧 Constraints & Limitations
{{#constraints}}
- **{{constraint_type}}**: {{constraint_description}}
{{/constraints}}

---

## Criteria Analysis

### ⚖️ Evaluation Criteria

Our analysis team identified and weighted the following decision criteria:

{{#criteria_detailed}}
#### {{criteria_number}}. {{criteria_name}} (Weight: {{criteria_weight}}%)

**Description:** {{criteria_description}}

**Why Important:** {{criteria_importance}}

**Measurement Method:** {{measurement_method}}

**Scale Definition:**
- 9-10: {{scale_9_10}}
- 7-8: {{scale_7_8}}
- 5-6: {{scale_5_6}}
- 3-4: {{scale_3_4}}
- 1-2: {{scale_1_2}}

{{/criteria_detailed}}

### 🎯 Criteria Weighting Rationale

```mermaid
pie title Criteria Importance Distribution
    {{#criteria_weights}}
    "{{criteria_name}}" : {{weight_percentage}}
    {{/criteria_weights}}
```

**Weighting Justification:**
{{criteria_weighting_justification}}

---

## Option Analysis

### 🔍 Options Considered

{{#options_analyzed}}
#### Option {{option_number}}: {{option_name}}

**Description:** {{option_description}}

**Key Features:**
{{#option_features}}
- {{feature_description}}
{{/option_features}}

**Resource Requirements:**
- Budget: {{budget_requirement}}
- Timeline: {{timeline_requirement}}
- Personnel: {{personnel_requirement}}
- Technology: {{technology_requirement}}

**Unique Advantages:**
{{#unique_advantages}}
- {{advantage_description}}
{{/unique_advantages}}

**Potential Drawbacks:**
{{#potential_drawbacks}}
- {{drawback_description}}
{{/potential_drawbacks}}

{{/options_analyzed}}

### 📊 Detailed Scoring Matrix

```
DETAILED SCORING BREAKDOWN:

┌─────────────────────────────┬──────────────────────────────┐
│         CRITERIA            │        OPTION SCORES         │
├─────────────────────────────┼──────────────────────────────┤
{{#detailed_scoring}}
│ {{criteria_name}} ({{weight}}%)     │ A:{{score_a}} B:{{score_b}} C:{{score_c}}   │
│ {{scoring_rationale}}       │ {{score_justification}}      │
├─────────────────────────────┼──────────────────────────────┤
{{/detailed_scoring}}
│ WEIGHTED TOTALS             │ A:{{total_a}} B:{{total_b}} C:{{total_c}} │
└─────────────────────────────┴──────────────────────────────┘
```

### 🎯 Scoring Confidence Assessment

{{#scoring_confidence}}
**{{criteria_name}}:**
- Confidence Level: {{confidence_level}}
- Data Quality: {{data_quality}}
- Assumptions Made: {{assumptions_made}}
{{/scoring_confidence}}

---

## Sensitivity Analysis

### 🔬 Robustness Testing

Our Critical Analyst (Dr. Angela Foster) tested the robustness of our analysis:

#### Weight Sensitivity
```
📊 WHAT-IF SCENARIOS:

{{#sensitivity_scenarios}}
Scenario: {{scenario_name}}
├─ Change: {{weight_change}}
├─ Result: {{result_change}}
└─ Winner: {{scenario_winner}}
{{/sensitivity_scenarios}}

🎯 ROBUST CHOICE ANALYSIS:
{{#robustness_results}}
• {{option_name}}: Wins in {{winning_scenarios}}/{{total_scenarios}} scenarios
{{/robustness_results}}
```

#### Score Sensitivity
```
⚠️ CLOSE CALL ANALYSIS:

{{#close_calls}}
Criteria: {{criteria_name}}
├─ Score Difference: {{score_difference}} points
├─ Impact if +1 to lower option: {{impact_plus_one}}
└─ Confidence in scoring: {{scoring_confidence}}
{{/close_calls}}
```

### 🎭 Scenario Modeling

{{#scenario_modeling}}
**{{scenario_name}}:**
- Probability: {{scenario_probability}}
- Best Option: {{best_option_scenario}}
- Risk Level: {{risk_level_scenario}}
- Mitigation: {{mitigation_strategy}}
{{/scenario_modeling}}

---

## Stakeholder Impact Analysis

### 👥 Stakeholder Impact Matrix

```
📊 STAKEHOLDER REACTION ANALYSIS:

┌─────────────────┬─────────┬─────────┬─────────┐
│ Stakeholder     │ Option A│ Option B│ Option C│
├─────────────────┼─────────┼─────────┼─────────┤
{{#stakeholder_matrix}}
│ {{stakeholder_name}} │ {{impact_a}} │ {{impact_b}} │ {{impact_c}} │
{{/stakeholder_matrix}}
└─────────────────┴─────────┴─────────┴─────────┘

Impact Scale: +3 (Strong Support) to -3 (Strong Opposition)
```

### 🤝 Stakeholder Engagement Strategy

{{#stakeholder_engagement}}
#### {{stakeholder_group}}

**Current Stance:** {{current_stance}}  
**Influence Level:** {{influence_level}}  
**Concern Areas:** {{concern_areas}}

**Engagement Approach:**
{{#engagement_tactics}}
- {{tactic_description}}
{{/engagement_tactics}}

**Success Metrics:**
- {{success_metric}}

{{/stakeholder_engagement}}

---

## Risk Assessment

### ⚠️ Decision Risk Analysis

{{#decision_risks}}
#### {{risk_level}} Risk: {{risk_name}}

**Option Most Affected:** {{most_affected_option}}  
**Risk Description:** {{risk_description}}  
**Probability:** {{risk_probability}}  
**Impact if Occurs:** {{risk_impact}}

**Mitigation Strategies:**
{{#mitigation_strategies}}
- {{strategy_description}}
{{/mitigation_strategies}}

**Contingency Plans:**
{{#contingency_plans}}
- Trigger: {{contingency_trigger}}
- Action: {{contingency_action}}
{{/contingency_plans}}

{{/decision_risks}}

### 🛡️ Risk Mitigation Matrix

```
┌─────────────────┬─────────────────┬─────────────────┐
│ Risk Category   │ Prevention      │ Response Plan   │
├─────────────────┼─────────────────┼─────────────────┤
{{#risk_mitigation_matrix}}
│ {{risk_category}} │ {{prevention_strategy}} │ {{response_plan}} │
{{/risk_mitigation_matrix}}
└─────────────────┴─────────────────┴─────────────────┘
```

### 📊 Risk vs. Reward Visualization

```mermaid
quadrantChart
    title Decision Risk vs. Reward
    x-axis Low Risk --> High Risk
    y-axis Low Reward --> High Reward
    
    quadrant-1 High Reward, High Risk
    quadrant-2 High Reward, Low Risk
    quadrant-3 Low Reward, Low Risk
    quadrant-4 Low Reward, High Risk
    
    {{#risk_reward_options}}
    {{option_name}}: [{{risk_score}}, {{reward_score}}]
    {{/risk_reward_options}}
```

---

## Recommendation & Justification

### 🏆 Primary Recommendation: {{primary_recommendation}}

#### Why This Option?

**Quantitative Reasons:**
{{#quantitative_reasons}}
- {{reason_description}} (Score: {{supporting_score}})
{{/quantitative_reasons}}

**Qualitative Reasons:**
{{#qualitative_reasons}}
- {{reason_description}}
{{/qualitative_reasons}}

**Strategic Alignment:**
{{strategic_alignment_explanation}}

#### Implementation Readiness
```
📋 READINESS ASSESSMENT:

┌─────────────────────┬─────────┬──────────────────┐
│ Implementation Area │ Status  │ Actions Needed   │
├─────────────────────┼─────────┼──────────────────┤
{{#readiness_assessment}}
│ {{implementation_area}} │ {{readiness_status}} │ {{actions_needed}} │
{{/readiness_assessment}}
└─────────────────────┴─────────┴──────────────────┘
```

### 🥈 Alternative Recommendation: {{alternative_recommendation}}

**Consider This Option If:**
{{#alternative_conditions}}
- {{condition_description}}
{{/alternative_conditions}}

**Switching Triggers:**
{{#switching_triggers}}
- {{trigger_description}}
{{/switching_triggers}}

---

## Implementation Plan

### 📅 Implementation Timeline

```
IMPLEMENTATION ROADMAP:

Phase 1: Foundation ({{phase_1_duration}})
{{#phase_1_activities}}
• {{activity_description}} ({{activity_timeline}})
{{/phase_1_activities}}

Phase 2: Execution ({{phase_2_duration}})
{{#phase_2_activities}}
• {{activity_description}} ({{activity_timeline}})
{{/phase_2_activities}}

Phase 3: Optimization ({{phase_3_duration}})
{{#phase_3_activities}}
• {{activity_description}} ({{activity_timeline}})
{{/phase_3_activities}}
```

### 🎯 Success Metrics & KPIs

{{#success_metrics}}
**{{metric_category}}:**
{{#metrics_in_category}}
- {{metric_name}}: {{current_baseline}} → {{target_value}} ({{target_timeframe}})
{{/metrics_in_category}}
{{/success_metrics}}

### 📊 Monitoring & Review Plan

**Review Schedule:**
{{#review_schedule}}
- {{review_frequency}}: {{review_focus}}
{{/review_schedule}}

**Decision Gates:**
{{#decision_gates}}
- {{gate_timing}}: {{gate_criteria}} → {{gate_decision}}
{{/decision_gates}}

### 🚨 Course Correction Triggers

{{#correction_triggers}}
**Trigger:** {{trigger_condition}}  
**Action:** {{correction_action}}  
**Responsible:** {{responsible_party}}
{{/correction_triggers}}

---

## Decision Validation

### ✅ Quality Checklist

**Process Quality:**
- [ ] All stakeholders consulted: {{stakeholder_consultation_status}}
- [ ] Criteria comprehensive: {{criteria_completeness}}
- [ ] Options thoroughly evaluated: {{evaluation_thoroughness}}
- [ ] Biases identified and addressed: {{bias_mitigation}}
- [ ] Assumptions documented and tested: {{assumption_validation}}

**Analysis Quality:**
- [ ] Evidence-based scoring: {{evidence_quality}}
- [ ] Sensitivity testing completed: {{sensitivity_completeness}}
- [ ] Risk assessment comprehensive: {{risk_assessment_quality}}
- [ ] Implementation feasibility verified: {{feasibility_verification}}

### 🧠 Cognitive Bias Check

**Biases Identified and Mitigated:**
{{#biases_identified}}
- **{{bias_name}}**: {{bias_description}} → {{mitigation_approach}}
{{/biases_identified}}

### 👥 Expert Validation

**Analysis Team Sign-off:**
- ✅ Dr. Angela Foster (Critical Analysis): {{critical_validation}}
- ✅ Dr. Sarah Chen (Systems Impact): {{systems_validation}}
- ✅ Jordan Park (Alternative Solutions): {{creative_validation}}

**External Validation:**
{{#external_validation}}
- {{validator_name}} ({{validator_expertise}}): {{validation_result}}
{{/external_validation}}

---

## Appendices

### 📊 A. Detailed Calculations

```
WEIGHTED SCORING CALCULATIONS:

{{#calculation_details}}
{{option_name}}:
{{#criteria_calculations}}
• {{criteria_name}}: {{raw_score}} × {{weight}} = {{weighted_score}}
{{/criteria_calculations}}
Total: {{option_total}}
{{/calculation_details}}
```

### 📚 B. Framework References

{{#frameworks_used}}
- **{{framework_name}}**: {{framework_application}}
{{/frameworks_used}}

### 📝 C. Stakeholder Feedback Summary

{{#stakeholder_feedback}}
**{{stakeholder_name}}:**
- Key Concerns: {{key_concerns}}
- Suggestions: {{suggestions}}
- Support Level: {{support_level}}
{{/stakeholder_feedback}}

### 🔍 D. Alternative Analysis Methods

{{#alternative_methods}}
**{{method_name}}:**
- Results: {{method_results}}
- Alignment with MCDA: {{alignment_assessment}}
{{/alternative_methods}}

---

## Decision Record

**Final Decision:** {{final_decision}}  
**Decision Date:** {{decision_date}}  
**Decision Authority:** {{decision_authority}}  
**Decision Rationale:** {{final_decision_rationale}}

**Implementation Authority:** {{implementation_authority}}  
**Start Date:** {{implementation_start}}  
**First Review:** {{first_review_date}}

**Decision Confidence:** {{final_confidence}}%

---

*This decision analysis follows structured multi-criteria methodology with expert validation. For questions or appeal process, contact the decision team.*

**Report Version:** {{report_version}}  
**Last Updated:** {{last_updated}}  
**Next Review:** {{next_review_date}}