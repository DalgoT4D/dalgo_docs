# Creating Metrics

This guide walks through creating both simple and calculated metrics in Dalgo.

## Before You Start

Ensure you have:
- Data ingested into your warehouse via [data connections](../data/ingest/connections.md)
- Appropriate permissions to create metrics in your organization
- Understanding of your data schema and table structure

## Creating a Simple Metric

Simple metrics use standard aggregation functions (COUNT, SUM, AVG, MIN, MAX) on a single column.

### Step 1: Access the Metrics Library

1. Navigate to **Metrics** from the main navigation
2. Click **Create Metric** button

### Step 2: Choose Metric Mode

1. Select **Simple** mode for basic aggregations
2. This mode provides a guided interface for common calculations

### Step 3: Configure Data Source

1. **Schema**: Select the schema containing your data
2. **Table**: Choose the specific table to calculate from
3. **Column**: Pick the column to aggregate (optional for COUNT)

### Step 4: Choose Aggregation

Select the appropriate aggregation function:

| Function | Use Case | Example |
|----------|----------|---------|
| **COUNT** | Total number of records | Number of beneficiaries |
| **SUM** | Total of numerical values | Total revenue, Total donations |
| **AVG** | Average of numerical values | Average project duration |
| **MIN** | Smallest value | Earliest start date |
| **MAX** | Largest value | Highest satisfaction score |
| **COUNT DISTINCT** | Unique values | Number of unique donors |

### Step 5: Preview and Test

1. Click **Preview** to see a sample calculation result
2. Verify the value matches your expectations
3. Test with known data to validate accuracy

### Step 6: Add Details

1. **Name**: Enter a descriptive name (e.g., "Total Beneficiaries Served")
2. **Description** (optional): Explain the metric's purpose and any important notes

### Step 7: Save

Click **Create Metric** to save your definition.

## Creating a Calculated Metric

Calculated metrics use custom SQL expressions for complex calculations.

### Step 1: Choose Calculated Mode

1. Click **Create Metric**
2. Select **Calculated** mode
3. This opens a SQL expression editor

### Step 2: Configure Data Source

1. **Schema**: Select your target schema
2. **Table**: Choose the base table for calculations

### Step 3: Write SQL Expression

Enter your custom SQL expression. Common patterns:

#### Percentage Calculations
```sql
(SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) * 100.0) / COUNT(*)
```

#### Conditional Aggregations
```sql
SUM(CASE 
    WHEN category = 'education' THEN amount 
    ELSE 0 
END)
```

#### Mathematical Operations
```sql
SUM(revenue) - SUM(costs)
```

#### Time-based Calculations
```sql
AVG(EXTRACT(DAYS FROM (end_date - start_date)))
```

### Step 4: Preview and Validate

1. Click **Preview** to test your expression
2. Check for SQL syntax errors
3. Verify the calculated result makes sense

### Step 5: Document the Metric

1. **Name**: Use a clear, descriptive name
2. **Description**: Explain what the calculation represents and any business logic

### Step 6: Save

Click **Create Metric** to finalize.

## Common Metric Examples

### Simple Metrics

**Total Donations**
- Mode: Simple  
- Aggregation: SUM
- Column: `donation_amount`

**Number of Projects**
- Mode: Simple
- Aggregation: COUNT
- Column: * (all rows)

**Average Project Duration**
- Mode: Simple
- Aggregation: AVG  
- Column: `duration_days`

### Calculated Metrics

**Completion Rate**
```sql
(COUNT(CASE WHEN status = 'completed' THEN 1 END) * 100.0) / COUNT(*)
```

**Revenue per Beneficiary**
```sql
SUM(total_revenue) / COUNT(DISTINCT beneficiary_id)
```

**Monthly Growth Rate**
```sql
((SUM(current_month_value) - SUM(previous_month_value)) * 100.0) / SUM(previous_month_value)
```

## Testing Your Metrics

### Validate with Known Data
- Create metrics using data where you know the expected result
- Compare calculated values with manual calculations
- Test edge cases (empty data, null values, zeros)

### Preview Different Time Periods
- Check metric values across different date ranges
- Ensure calculations work correctly with varying data volumes
- Verify handling of seasonal patterns or irregular data

## Best Practices

### Naming
- Use business-friendly names that stakeholders will understand
- Include units in the name when relevant: "Revenue (USD)", "Duration (Days)"
- Avoid technical abbreviations unless universally understood

### Documentation
- Always add descriptions explaining the business meaning
- Document any assumptions or limitations
- Note data sources and refresh frequency

### Performance
- Simple metrics generally perform better than complex calculated ones
- For frequently-used complex calculations, consider creating derived tables
- Test metric performance with realistic data volumes

## Troubleshooting

### Preview Shows No Data
- Verify the selected table contains data
- Check that your schema/table permissions are correct
- Ensure column names are spelled correctly

### SQL Expression Errors
- Validate SQL syntax in a database client first
- Check that referenced columns exist in the selected table
- Ensure data types are compatible with your calculations

### Unexpected Results
- Review the underlying data for null values or unexpected formats
- Test your calculation logic with a smaller dataset
- Consider data quality issues in the source system

## Next Steps

- [Managing Metrics](managing-metrics.md) — Edit and organize your metric library
- [Creating KPIs](../kpis/creating-kpis.md) — Build trackable goals using your metrics
- [Building Charts](../charts/creating-a-chart.md) — Visualize your metrics