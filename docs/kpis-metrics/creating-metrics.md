# Creating Metrics

Metrics are reusable calculations that you can use across charts, dashboards, and KPIs. This guide shows you how to create and manage them.

## What is a Metric?

A metric is a named calculation that aggregates data from your warehouse tables. Instead of defining `COUNT(beneficiary_id)` multiple times across different charts, you create a "Total Beneficiaries" metric once and reuse it everywhere.

## Creating Your First Metric

### 1. Navigate to Metrics

Go to **Metrics** in the left navigation to see your metrics library.

### 2. Click Create Metric

Click the **+ Create Metric** button to open the creation dialog.

### 3. Choose Your Creation Mode

You have two options for defining metrics:

#### Simple Mode
Best for straightforward aggregations. You pick:
- **Data Source**: Which table to pull from
- **Calculation Type**: Sum, Count, Average, etc.
- **Field**: Which column to calculate (optional for Count)

**Example**: Count of unique beneficiaries
- Data Source: `programs.beneficiaries`
- Calculation Type: Count unique
- Field: `beneficiary_id`

#### SQL Mode  
For complex calculations that need custom logic:

```sql
SUM(revenue) / COUNT(DISTINCT beneficiary_id)
```

This mode lets you write any SQL expression that returns a single number.

### 4. Fill in Details

- **Name**: Give your metric a clear, descriptive name
- **Description**: Explain what this metric represents and when to use it
- **Tags**: Add searchable tags to organize your metrics

### 5. Preview and Validate

As you build your metric, you'll see a live preview of the calculated value. This helps ensure your metric works correctly before saving.

### 6. Save

Click **Save Metric** to add it to your library.

## Managing Metrics

### Viewing Metric Details

Click on any metric row to see:
- Full definition and current value
- Which charts and KPIs use this metric  
- Edit and delete options

### Editing Metrics

When you edit a metric, you'll see a warning if other charts or KPIs use it:

> "Changes will affect 3 charts and 2 KPIs"

The changes apply immediately to all consumers when you save.

### Deleting Metrics

You can only delete metrics that aren't used anywhere. If charts or KPIs reference the metric, you'll need to remove those references first.

## Using Metrics in Charts

When creating charts, you'll see two options in the metrics picker:

### Saved Metrics Tab
Browse your metric library filtered to compatible metrics for your current data source. Click any metric to use it in your chart.

### Ad-hoc Tab
Create metrics on the fly (the old way). You can save ad-hoc metrics to your library using the **"Save as Metric"** button.

## Metric Types

### Simple Aggregations
- **Count**: How many rows (e.g., number of trainings)
- **Total**: Sum values (e.g., total revenue)  
- **Average**: Mean of values (e.g., average age)
- **Lowest/Highest**: Minimum or maximum values
- **Count unique**: Count distinct values (e.g., unique beneficiaries)

### SQL Expressions
Write custom SQL for complex calculations:

```sql
-- Completion rate
SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) * 100.0 / COUNT(*)

-- Revenue per beneficiary 
SUM(revenue) / NULLIF(COUNT(DISTINCT beneficiary_id), 0)

-- Month-over-month growth
(COUNT(*) - LAG(COUNT(*), 1) OVER (ORDER BY month)) / LAG(COUNT(*), 1) OVER (ORDER BY month) * 100
```

## Best Practices

### Naming
- Use clear, business-friendly names: "Active Beneficiaries" not "count_beneficiary_active"
- Include the time scope if relevant: "Monthly Revenue" 
- Be consistent with your naming patterns

### Descriptions
- Explain what the metric measures
- Note any filters or business rules
- Include when/how to use this metric

### Organization
- Tag metrics by program area: education, health, finance
- Tag by metric type: count, revenue, percentage
- Use consistent tagging across your organization

### Validation
- Always check the preview value makes sense
- Test metrics with a small date range first
- Verify calculations match your expectations

## Common Patterns

### Counting People
```
Count unique beneficiary_id where status = 'active'
```

### Financial Metrics  
```
SUM(amount) where transaction_type = 'revenue'
```

### Rates and Percentages
```sql
SUM(CASE WHEN completed = true THEN 1 ELSE 0 END) * 100.0 / COUNT(*)
```

### Time-Based Calculations
```sql
COUNT(*) -- for this month
COUNT(*) - LAG(COUNT(*)) OVER (ORDER BY month) -- change from last month
```

---

**Next**: [Create your first KPI from a metric →](./creating-kpis)