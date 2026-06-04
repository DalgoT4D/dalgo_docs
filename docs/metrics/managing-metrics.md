---
sidebar_position: 2
---

# Managing Metrics

**Organize, edit, and maintain your metrics library with search, filtering, and consumer tracking to ensure data consistency across the platform.**

The metrics library provides tools to manage your growing collection of metrics, understand their usage, and maintain data quality over time.

## Metrics library overview

The main metrics page displays all your defined metrics in a searchable, filterable table:

:::info Screenshot coming soon
A screenshot of the metrics library interface will be added here.
:::

- **Metric name and description**
- **Data source** (schema and table)
- **Calculation type** (simple aggregation or calculated expression)
- **Consumer count** (how many charts and KPIs use this metric)
- **Created date** and **last modified**

## Finding metrics

### Search functionality
Use the search bar to find metrics by:
- **Metric name**: Search for specific keywords in metric names
- **Description**: Find metrics based on description content
- **Table names**: Locate metrics from specific data sources

### Filtering options
Filter the metrics list by:
- **Schema**: Show metrics from specific database schemas
- **Table**: Display metrics from particular tables
- **Calculation type**: Simple vs calculated metrics
- **Usage**: Metrics with or without consumers

### Sorting
Sort metrics by:
- **Name** (alphabetical)
- **Created date** (newest or oldest first)
- **Consumer count** (most or least used)
- **Last modified** (recently updated first)

## Understanding metric usage

### Consumer tracking
Each metric shows how many charts and KPIs reference it:

1. **Select a metric** from the list to view details.

2. **View the "Used in" section** showing:
   - **Charts**: List of charts using this metric with links to edit
   - **KPIs**: List of KPIs tracking this metric with links to view

:::info Screenshot coming soon
A screenshot showing metric consumer details will be added here.
:::

### Impact assessment
Before modifying metrics, review their usage:
- **High consumer count**: Changes will affect multiple charts and KPIs
- **Zero consumers**: Safe to modify or delete without impact
- **Recent usage**: Check when consumers were last accessed

## Editing metrics

### When to edit metrics
- **Calculation errors**: Fix incorrect aggregations or expressions
- **Description updates**: Improve clarity or add context
- **Performance optimization**: Simplify complex calculations
- **Data source changes**: Update table or column references

### Modification process
1. **Select the edit icon** next to the metric in the library.

2. **Update any field**:
   - Name and description
   - Data source (schema and table)
   - Calculation method or expression
   - Column selections

3. **Preview the updated calculation** to verify results.

4. **Save changes** and note the impact on existing consumers.

:::warning
Editing metrics that are used in charts or KPIs will immediately update all consumer visualizations. Test changes carefully to avoid breaking existing analysis.
:::

### Change impact
When you modify a metric:
- **Charts**: Will recalculate automatically with new values
- **KPIs**: Will update current values and recalculate RAG status
- **Historical data**: Previous calculations are not retroactively changed
- **Annotations**: Existing chart and KPI annotations remain unchanged

## Metric maintenance

### Regular health checks
Perform monthly reviews:
- **Verify data quality**: Are metrics calculating expected values?
- **Check consumer relevance**: Are unused metrics still needed?
- **Update descriptions**: Do descriptions accurately reflect calculations?
- **Performance review**: Are any metrics causing slow dashboard loads?

### Data source monitoring
Watch for changes that affect metrics:
- **Schema changes**: New columns or modified data types
- **Table restructuring**: Renamed tables or moved data
- **Data pipeline updates**: Changes in transformation logic
- **Archive policies**: Tables being removed or historical data cleanup

### Documentation maintenance
Keep metric documentation current:
- **Business rules**: Update calculations when business logic changes
- **Data definitions**: Clarify what columns represent
- **Calculation rationale**: Document why specific formulas are used
- **Quality notes**: Record known limitations or data issues

## Deleting metrics

### Before deletion
1. **Check consumer usage** - ensure no charts or KPIs reference this metric
2. **Document the reason** for removal
3. **Export any necessary data** if needed for historical reference
4. **Notify stakeholders** who may have been using related analysis

### Deletion process
1. **Find the metric** in the library list.

2. **Select the delete icon** (only available for metrics with zero consumers).

3. **Confirm deletion** in the dialog.

:::warning
Deleting metrics is permanent and cannot be undone. Metrics that are in use by charts or KPIs cannot be deleted until all references are removed.
:::

### Removing metric dependencies
To delete a metric that's in use:
1. **Edit or delete consuming charts** to remove metric references
2. **Modify or delete KPIs** that track this metric  
3. **Replace with alternative metrics** in existing analysis if needed
4. **Return to delete** the now-unused metric

## Best practices

### Metric organization
- **Consistent naming**: Use standard prefixes or suffixes for related metrics
- **Clear descriptions**: Include calculation logic and business context
- **Version control**: When changing metrics, consider creating new versions instead of editing
- **Standardization**: Use similar calculation patterns across related metrics

### Performance optimization
- **Aggregate appropriately**: Don't over-aggregate early in the calculation chain
- **Index usage**: Ensure frequently-used columns are indexed
- **Calculation efficiency**: Optimize complex expressions for performance
- **Caching consideration**: Identify metrics that could benefit from pre-calculation

### Quality assurance
- **Regular validation**: Compare calculated values with known benchmarks
- **Peer review**: Have colleagues review complex calculated metrics
- **Testing protocols**: Establish testing procedures for metric changes
- **Error monitoring**: Watch for unexpected nulls or extreme values

### Collaboration
- **Team standards**: Establish metric creation guidelines for your organization
- **Review processes**: Regular team reviews of new metrics before deployment
- **Knowledge sharing**: Document and share effective metric patterns
- **Training**: Ensure team members understand how to create quality metrics

---

**Next:** [Using Metrics in Charts](../charts/creating-a-chart.md) · [Creating KPIs from Metrics](../kpis/creating-kpis.md)