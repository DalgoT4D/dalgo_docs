# Metrics

Metrics are the foundational building blocks of your data analysis in Dalgo. They define reusable calculations on your data that can be used across charts, dashboards, and KPIs.

## What are Metrics?

Metrics represent quantifiable measures derived from your data — things like total revenue, number of beneficiaries served, average project duration, or customer satisfaction scores. Instead of writing the same calculations repeatedly across different visualizations, you define a metric once and reuse it everywhere.

## Key Concepts

### Simple vs Calculated Metrics

**Simple Metrics** use basic aggregations on a single column:
- COUNT(*) — Count all rows
- SUM(amount) — Sum all values in the amount column  
- AVG(duration) — Average of duration values
- MIN/MAX(score) — Minimum or maximum values

**Calculated Metrics** use custom SQL expressions for complex calculations:
- `SUM(revenue) / COUNT(DISTINCT customer_id)` — Revenue per customer
- `(SUM(CASE WHEN status = 'complete' THEN 1 ELSE 0 END) * 100.0) / COUNT(*)` — Completion rate percentage

### Metric Properties

- **Name**: Descriptive name for the metric (e.g., "Total Revenue", "Active Beneficiaries")
- **Description**: Optional explanation of what the metric measures
- **Data Source**: The schema and table where the data lives
- **Mode**: Simple (using aggregation functions) or Calculated (using SQL expressions)
- **Expression**: The actual calculation being performed

## Getting Started

1. **Navigate to Metrics**: Access the Metrics library from the main navigation
2. **Create your first metric**: Click "Create Metric" to define a new calculation
3. **Use in visualizations**: Reference your metrics in charts, dashboards, and KPIs
4. **Monitor usage**: See where each metric is being used across your organization

## Usage

Metrics serve as the data foundation for:

- **[Charts](../charts/)**: Create visualizations using predefined metrics
- **[KPIs](../kpis/)**: Set targets and track performance against specific metrics  
- **[Dashboards](../dashboards/)**: Build comprehensive views combining multiple metrics
- **Reports**: Generate consistent measurements across different time periods

## Best Practices

### Naming Conventions
- Use clear, descriptive names: "Monthly Active Users" instead of "MAU"
- Include units where relevant: "Revenue (USD)" or "Duration (Days)"
- Be consistent with organizational terminology

### Organization
- Group related metrics by domain (e.g., all revenue metrics, all user engagement metrics)
- Use descriptions to explain business context and calculation logic
- Document any assumptions or data limitations

### Data Quality
- Test metric calculations with known data before deploying
- Monitor for unexpected changes in metric values
- Set up data quality checks for underlying source tables

## Next Steps

- [Creating Metrics](creating-metrics.md) — Step-by-step guide to defining new metrics
- [Managing Metrics](managing-metrics.md) — Edit, organize, and maintain your metric library  
- [KPIs](../kpis/) — Build trackable goals using your metrics