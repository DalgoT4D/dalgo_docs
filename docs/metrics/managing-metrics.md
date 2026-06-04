# Managing Metrics

Once you've created metrics, you'll need to organize, maintain, and track their usage across your organization.

## Metrics Library Overview

The Metrics Library provides a comprehensive view of all organizational metrics with:

- **Search and filtering** by name
- **Sortable columns** for name, data source, and last updated
- **Usage tracking** showing where each metric is used
- **Quick actions** for editing and deleting

## Viewing Metrics

### List View

The main metrics page displays all metrics in a table format:

| Column | Description |
|--------|-------------|
| **Name** | Metric name and description |
| **Mode** | Simple (aggregation) or Calculated (SQL expression) |
| **Data Source** | Schema and table the metric calculates from |
| **Expression** | The calculation being performed |
| **Used By** | Charts and KPIs using this metric |
| **Last Updated** | When the metric was last modified |

### Searching and Filtering

**Search by Name**
- Use the search box to find metrics by name
- Search is case-insensitive and matches partial names
- Results update as you type

**Filter by Name**  
- Click the filter icon next to the Name column
- Set more specific name-based filters
- Clear filters by clicking "Clear"

**Sorting**
- Click column headers to sort by Name, Data Source, or Last Updated
- Click again to reverse sort order
- Sort indicators show current column and direction

## Editing Metrics

### Quick Edit
1. Click the metric name in the list to open the edit form
2. Modify any field except the fundamental calculation structure
3. Click **Save Changes** to update

### Full Edit
1. Click the **⋮** menu next to a metric
2. Select **Edit Metric**
3. Make changes to any aspect of the metric
4. Preview changes before saving
5. Click **Update Metric**

### What You Can Edit
- **Name**: Update to reflect changing business terminology
- **Description**: Add context or clarify calculation logic
- **Data Source**: Change to a different table (resets calculation)
- **Calculation**: Modify aggregation method or SQL expression

## Tracking Metric Usage

### Usage Overview

The "Used By" column shows where each metric is actively being used:

- **Charts**: Number of visualizations using this metric
- **KPIs**: Number of key performance indicators tracking this metric

### Detailed Usage Information

Click on the usage numbers to see:
- Specific chart names and types
- KPI names and their current status
- Direct links to view each consumer

### Usage Patterns

Monitor metrics usage to:
- Identify widely-used metrics that need extra care during changes
- Find unused metrics that might be candidates for cleanup
- Understand which calculations are most valuable to your organization

## Deleting Metrics

### Before Deleting

The system will check if a metric is being used:
- **Safe to delete**: No charts or KPIs reference this metric
- **Cannot delete**: Active dependencies exist

### Deletion Process

1. Click the **⋮** menu next to the metric
2. Select **Delete**
3. Review the dependency check:
   - If no dependencies: Confirm deletion
   - If dependencies exist: Remove dependencies first

### Handling Dependencies

If a metric is in use, you'll see:
- List of charts using the metric
- List of KPIs tracking the metric
- Direct links to modify or remove each dependency

You must remove all dependencies before deleting the metric.

## Creating KPIs from Metrics

### Quick KPI Creation

From the metrics list:
1. Click the **⋮** menu next to any metric
2. Select **Create KPI**
3. The metric will be pre-selected in the KPI creation form
4. Set targets, thresholds, and tracking parameters
5. Save the new KPI

This workflow allows you to quickly convert important metrics into trackable business objectives.

## Organization Best Practices

### Naming Standards

Establish consistent naming conventions:
- **Domain prefixes**: "Revenue: Monthly Total", "Users: Active Count"
- **Time context**: Include time grain when relevant
- **Units**: "Cost per Acquisition (USD)", "Duration (Hours)"

### Documentation Standards

Maintain good documentation:
- **Business context**: Why this metric matters
- **Calculation logic**: How it's computed
- **Data limitations**: Known issues or constraints
- **Owner contact**: Who to ask about this metric

### Lifecycle Management

Regular maintenance tasks:

**Monthly Review**
- Check for unused metrics (candidates for archival)
- Verify high-usage metrics are still accurate
- Update descriptions as business understanding evolves

**Quarterly Assessment** 
- Review naming consistency across new metrics
- Consolidate duplicate or near-duplicate calculations
- Assess if any calculated metrics should become derived tables for performance

**Annual Cleanup**
- Archive metrics for discontinued business processes
- Review and update all metric descriptions
- Document any changes in data sources or calculation logic

## Troubleshooting

### Metric Not Appearing in Lists

- Check search/filter settings are not too restrictive
- Verify you have permissions to view the metric
- Refresh the page to ensure latest data

### "Used By" Information Missing

- Data may still be loading for recently created metrics
- Try refreshing the page or check back in a few minutes
- Contact support if usage data remains unavailable

### Cannot Edit Metric

- Verify you have edit permissions for metrics
- Check if the metric is part of a managed definition set
- Ensure the metric isn't currently being calculated

### Slow Loading

- Large numbers of metrics may take time to load usage information
- Consider adding more specific search filters
- Contact your administrator about database performance

## Next Steps

- [Creating KPIs](../kpis/creating-kpis.md) — Turn your metrics into trackable goals
- [Building Charts](../charts/creating-a-chart.md) — Visualize metric data
- [Data Quality](../data/quality.md) — Ensure metric reliability