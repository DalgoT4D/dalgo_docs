---
sidebar_position: 1
---

# Creating KPIs

**Set up KPIs to track progress toward your organization's goals.**

Creating a KPI involves selecting a metric, setting targets, and configuring status thresholds. You can create KPIs from existing metrics in your library or build new metrics inline during KPI creation.

## Creating a KPI

1. **Select CREATE KPI** from the KPI dashboard
2. **Choose your data source**:
   - **Use existing metric**: Select from your metrics library
   - **Create new metric**: Define a metric inline during KPI creation

:::info Screenshot coming soon
KPI creation form showing metric selection and basic configuration options.
:::

## Configuring KPI settings

### Basic information
- **Name**: Give your KPI a clear, descriptive name
- **Description** (optional): Add context about what this KPI measures
- **Program tags**: Categorize the KPI by program, project, or initiative

### Metric configuration
If creating a new metric inline:
- **Simple mode**: Select a column and aggregation (COUNT, SUM, AVERAGE, etc.)
- **Calculated mode**: Write custom SQL expressions for complex calculations

### Target and direction
- **Target value**: Set the goal you want to achieve
- **Direction**: Choose whether higher values (↑) or lower values (↓) are better
- **Time grain**: Select the reporting period (daily, weekly, monthly, quarterly)

:::info Screenshot coming soon
KPI target and direction configuration with RAG threshold settings.
:::

### Status thresholds
Configure the RAG (Red/Amber/Green) status ranges:
- **Green threshold**: Values that indicate you're on track
- **Amber threshold**: Values that need attention
- **Red threshold**: Values that indicate you're off track

The system automatically calculates status based on your target, direction, and threshold percentages.

## Creating KPIs from the Metrics library

You can also create KPIs directly from the **Metrics** page:

1. **Navigate to Data > Metrics**
2. **Select the three-dot menu** next to any metric
3. **Choose Create KPI**
4. **Configure targets and thresholds** (the metric is pre-selected)

This workflow is useful when you've already defined your metrics and want to add KPI tracking to existing measurements.

## Best practices

### Naming conventions
- Use clear, specific names: "Monthly Donors" instead of "Metric 1"
- Include the time period if relevant: "Weekly Program Completion Rate"
- Be consistent across your organization

### Setting realistic targets
- Base targets on historical data when possible
- Consider seasonal variations and trends
- Review and update targets quarterly

### Status thresholds
- Green: Within 5-10% of target (adjust based on your context)
- Amber: 10-25% away from target
- Red: More than 25% away from target

---

**Next:** [KPI Annotations](annotations.md) · [KPI Dashboard](index.md)