---
sidebar_position: 1
---

# Creating KPIs

**Set up Key Performance Indicators to track your organization's most important metrics with targets and RAG status monitoring.**

Creating a KPI involves selecting an existing metric, setting targets and thresholds, and configuring time tracking parameters.

## Before you start

- **Metrics required**: You need at least one [metric defined](../metrics/creating-metrics.md) before creating KPIs
- **Data requirements**: Ensure your metric has sufficient historical data for meaningful tracking
- **Target planning**: Consider what realistic targets look like for your organization

## Creating a new KPI

1. Select **KPIs** in the left navigation.

:::info Screenshot coming soon
A screenshot of the KPIs list page will be added here.
:::

2. Select **+ Create KPI**.

3. **Choose your metric** from the dropdown. This determines what data your KPI will track.

4. **Name your KPI** (optional). If you don't provide a name, it will use the metric name.

5. **Set the target value** - the goal you want to achieve for this metric.

6. **Choose direction**:
   - **Higher is better**: For metrics where increases indicate success (e.g., beneficiaries served)
   - **Lower is better**: For metrics where decreases indicate success (e.g., dropout rates)

## Configuring thresholds

RAG status thresholds determine when your KPI shows as Green, Amber, or Red:

7. **Green threshold percentage** (default: 80%): Performance at or above this percentage of target shows Green

8. **Amber threshold percentage** (default: 60%): Performance between this and green threshold shows Amber. Below this shows Red.

**Example**: If your target is 100 beneficiaries and thresholds are 80% (green) and 60% (amber):
- **Green**: 80+ beneficiaries served
- **Amber**: 60-79 beneficiaries served  
- **Red**: Less than 60 beneficiaries served

## Time configuration

9. **Time grain**: Choose how often to track progress:
   - **Daily**: Track day-by-day changes
   - **Weekly**: Monitor weekly progress
   - **Monthly**: Standard monthly reporting
   - **Quarterly**: Quarterly business reviews
   - **Yearly**: Annual performance tracking

10. **Time dimension column**: Select which date column from your data to use for time-based grouping.

## Organization and categorization

11. **Metric type** (optional):
    - **Input**: Resources invested (e.g., funding received, staff hired)
    - **Output**: Direct products (e.g., training sessions conducted, materials distributed)
    - **Outcome**: Short-term results (e.g., knowledge gained, skills improved)
    - **Impact**: Long-term changes (e.g., lives improved, communities strengthened)

12. **Program tags** (optional): Add tags to group KPIs by program areas or themes.

13. Select **Create KPI** to save.

:::info
Your new KPI will appear on the KPIs page and begin calculating its current value and RAG status based on your latest data.
:::

## KPI configuration tips

### Setting realistic targets
- Review historical performance before setting targets
- Consider seasonal variations in your data
- Start with achievable targets and adjust over time

### Choosing time grains
- **Daily**: Best for operational metrics you can influence quickly
- **Weekly**: Good for project milestones and regular reporting
- **Monthly**: Standard for most organizational metrics
- **Quarterly/Yearly**: Appropriate for strategic, long-term indicators

### Threshold guidelines
- **80%/60% split**: Standard for most KPIs
- **90%/70% split**: For critical metrics requiring high performance
- **70%/50% split**: For aspirational targets where partial achievement is still valuable

---

**Next:** [Monitoring KPIs](monitoring-kpis.md) · [Annotations](annotations.md)