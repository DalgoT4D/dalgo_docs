---
sidebar_position: 6
---

# Metrics

**Define reusable metric definitions that power your KPIs and Charts.**

Metrics are standardized data calculations that can be reused across charts, dashboards, and KPIs. Instead of recreating the same calculations repeatedly, you define metrics once and use them everywhere, ensuring consistency across your organization's reporting.

## What are metrics?

Metrics transform raw data into meaningful measurements by combining:
- **Data source**: The table/dataset containing your data
- **Calculation method**: How to aggregate the data (COUNT, SUM, AVERAGE, etc.)
- **Business logic**: Any filters or conditions to apply

Think of metrics as reusable building blocks for your analytics. Once defined, they appear in dropdown menus when creating charts or KPIs.

## Types of metrics

### Simple metrics
Basic aggregations of a single column:
- **COUNT(*)**: Total number of records
- **SUM(amount)**: Total value of a numeric field
- **AVERAGE(score)**: Average of a numeric field
- **MIN/MAX(date)**: Earliest or latest date

### Calculated metrics
Custom SQL expressions for complex business logic:
- **Conversion rates**: `SUM(conversions) / SUM(visits) * 100`
- **Growth rates**: Year-over-year percentage changes
- **Custom formulas**: Organization-specific calculations

:::info Screenshot coming soon
Metrics library showing searchable table with name, mode, data source, and usage columns.
:::

## Managing your metrics library

The Metrics page shows all your organization's metric definitions in a searchable table:

- **Name**: Descriptive metric name
- **Mode**: Simple or Calculated
- **Data Source**: Which table the metric uses
- **Expression**: The calculation being performed
- **Used By**: Charts and KPIs that use this metric
- **Last Updated**: When the metric was last modified

### Finding metrics
Use the search and filter tools to locate specific metrics:
- **Search by name**: Type metric names in the search box
- **Filter by data source**: Show metrics from specific tables
- **Sort columns**: Order by name, data source, or last updated

### Viewing metric usage
The "Used By" column shows where each metric is being used:
- **Charts**: Number of charts using this metric
- **KPIs**: Number of KPIs tracking this metric

Click the usage links to see which specific charts or KPIs depend on each metric.

## Creating metrics

1. **Select Create Metric** from the Metrics library
2. **Choose creation mode**:
   - **Simple**: Basic aggregation of a single column
   - **Calculated**: Custom SQL expression

:::info Screenshot coming soon
Metric creation form with simple and calculated mode options.
:::

### Simple mode setup
1. **Select data source**: Choose your table/dataset
2. **Choose column**: Pick the field to aggregate
3. **Select aggregation**: COUNT, SUM, AVERAGE, MIN, or MAX
4. **Add filters** (optional): Limit which records to include

### Calculated mode setup
1. **Select data source**: Choose your primary table
2. **Write SQL expression**: Create your custom calculation
3. **Test the expression**: Verify it returns the expected results
4. **Add description**: Document what the metric measures

## Inline metric creation

You can also create metrics directly while building charts or KPIs:

1. **Start creating a chart or KPI**
2. **Select "Create new metric"** in the metrics dropdown
3. **Define the metric inline**
4. **Continue with your chart/KPI creation**

The metric is automatically saved to your library and can be reused later.

## Editing and deleting metrics

### Editing metrics
Click any metric name or select **Edit** from the actions menu to modify:
- Metric name and description
- Calculation logic (for calculated metrics)
- Data source (creates a new version)

**Warning**: Editing a metric affects all charts and KPIs that use it. The system will show which items will be impacted before you confirm changes.

### Deleting metrics
Select **Delete** from the actions menu to remove a metric. The system will:
1. **Check usage**: Show all charts and KPIs using this metric
2. **Block deletion**: If the metric is in use, you must remove dependencies first
3. **Confirm deletion**: If unused, confirm you want to permanently delete

:::info Screenshot coming soon
Metric deletion warning dialog showing usage dependencies.
:::

## Best practices

### Naming conventions
- Use clear, business-friendly names: "Monthly Active Donors" not "donor_count_30d"
- Include time context when relevant: "Weekly" vs. "Monthly" enrollment
- Be consistent across your organization

### Documentation
- Add descriptions explaining what each metric measures
- Document any business rules or assumptions
- Include examples of when to use vs. not use the metric

### Governance
- Review metrics quarterly to remove unused ones
- Standardize calculations across teams
- Train staff on which metrics to use for common reporting needs

---

**Next:** [Creating KPIs from Metrics](../kpis/creating.md) · [Data Exploration](explore.md)