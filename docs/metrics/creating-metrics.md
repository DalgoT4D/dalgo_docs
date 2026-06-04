---
sidebar_position: 1
---

# Creating Metrics

**Define reusable data calculations using simple aggregations or custom expressions that can be used across charts and KPIs.**

Creating metrics allows you to standardize how data is calculated across your organization, ensuring consistency in analysis and reporting.

## Before you start

- **Data warehouse required**: Ensure your [warehouse is connected](../data/ingest/warehouse.md) and contains data
- **Transformed data**: Metrics work best with [clean, transformed data](../data/transform/index.md)
- **Table knowledge**: Know which tables and columns contain the data you want to measure

## Creating a new metric

1. **Select "Metrics"** in the left navigation.

:::info Screenshot coming soon
A screenshot of the metrics library page will be added here.
:::

2. **Select "+ Create Metric"**.

3. **Choose your data source**:
   - **Schema**: Select the database schema containing your data
   - **Table**: Choose the specific table to calculate from

4. **Name your metric** with a clear, descriptive name (e.g., "Beneficiaries Served", "Average Training Score").

5. **Add a description** (optional but recommended) explaining what this metric measures.

## Simple metrics

For standard aggregations on a single column:

### Count metrics
**Count all records** in a table:
- Select **"Count"** as the aggregation
- No column selection needed
- Useful for: Total records, transactions, events

**Count distinct values** in a column:
- Select **"Count Distinct"** as the aggregation  
- Choose the column to count unique values
- Useful for: Unique beneficiaries, distinct programs, different locations

### Numeric aggregations
For columns containing numbers:
- **Sum**: Total all values (e.g., total donations, total hours)
- **Average**: Mean value (e.g., average age, average score)
- **Minimum**: Lowest value (e.g., earliest date, minimum temperature)
- **Maximum**: Highest value (e.g., latest date, maximum capacity)

:::info
Preview your metric calculation before saving to ensure it produces the expected result.
:::

6. **Select "Preview"** to see the current calculated value.

7. **Select "Save Metric"** to create the metric.

## Calculated metrics

For complex calculations involving multiple columns or custom logic:

### Custom expressions
1. **Select "Calculated" mode** instead of choosing a simple aggregation.

2. **Write your expression** using SQL syntax:
   ```sql
   SUM(amount * 1.0) / COUNT(DISTINCT beneficiary_id)
   ```

### Expression examples

**Percentage calculations**:
```sql
(SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) * 100.0) / COUNT(*)
```

**Conditional aggregations**:
```sql
SUM(CASE WHEN program_type = 'education' THEN budget_amount ELSE 0 END)
```

**Date-based calculations**:
```sql
AVG(DATEDIFF(end_date, start_date))
```

**Text processing**:
```sql
COUNT(DISTINCT CONCAT(first_name, '-', last_name))
```

3. **Use the preview** to test your expression and debug any syntax issues.

4. **Add detailed description** explaining the calculation logic for future reference.

## Metric design best practices

### Naming conventions
- **Clear and descriptive**: "Training Completion Rate" not "Rate1"
- **Include units**: "Budget (USD)" or "Duration (days)" when relevant
- **Consistent format**: Use similar naming patterns across metrics
- **Avoid abbreviations**: Write "Average" not "Avg" for clarity

### Calculation consistency
- **Use same data sources** for related metrics when possible
- **Handle nulls explicitly** in calculated metrics
- **Consider time zones** for date-based calculations
- **Document assumptions** about data quality and completeness

### Performance considerations
- **Filter data appropriately** to avoid unnecessary calculations
- **Use indexes** on frequently-aggregated columns
- **Consider caching** for expensive calculations
- **Test with full data volume** before deploying

## Testing your metrics

### Data validation
1. **Compare with manual calculations** when possible
2. **Check edge cases** like empty tables or null values
3. **Verify across time periods** for consistency
4. **Cross-reference with existing reports** if available

### Preview testing
- **Current period**: Does the value make sense for recent data?
- **Historical periods**: Check if calculations work with older data
- **Data quality**: Are there unexpected nulls or zeros?

### Business validation
- **Stakeholder review**: Do subject matter experts agree with the calculation?
- **Context checking**: Does the metric align with known program realities?
- **Trend analysis**: Do changes over time match expected patterns?

## Common metric patterns

### Program effectiveness
- **Completion rates**: Participants completed / participants enrolled
- **Average outcomes**: Sum of outcome scores / number of participants  
- **Cost per beneficiary**: Total program cost / unique beneficiaries served

### Operational efficiency
- **Resource utilization**: Hours used / hours available
- **Geographic coverage**: Distinct locations served / total target locations
- **Staff productivity**: Outputs delivered / full-time equivalent staff

### Financial metrics  
- **Cost ratios**: Administrative costs / total program costs
- **Revenue per unit**: Total revenue / units delivered
- **Budget variance**: Actual spending / budgeted amounts

---

**Next:** [Managing Metrics](managing-metrics.md) · [Using Metrics in Charts](../charts/creating-a-chart.md)