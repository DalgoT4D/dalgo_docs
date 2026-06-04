# Creating KPIs

This guide walks through creating Key Performance Indicators that track your organization's most important goals and objectives.

## Before You Start

Ensure you have:
- **[Metrics](../metrics/) created**: KPIs are built on existing metric definitions
- **Clear targets**: Specific, measurable goals you want to track
- **Business context**: Understanding of what constitutes good vs. poor performance
- **Appropriate permissions**: Ability to create KPIs in your organization

## Step-by-Step KPI Creation

### Step 1: Access KPI Creation

**From the KPIs page:**
1. Navigate to **KPIs** in the main navigation
2. Click **CREATE KPI**

**From the Metrics page:**
1. Navigate to **Metrics** 
2. Find the metric you want to track
3. Click the **⋮** menu and select **Create KPI**
4. The metric will be pre-selected

### Step 2: Select Your Metric

1. **Choose the underlying metric**: Select from your existing metric library
2. **Preview the data**: View recent values to understand typical ranges
3. **Verify the calculation**: Ensure this metric measures what you want to track

The metric you select will provide the data foundation for your KPI. You cannot change this after creating the KPI.

### Step 3: Configure Basic Information

**KPI Name**
- Use a descriptive, business-friendly name
- Example: "Monthly Revenue Target" instead of "revenue_sum_monthly"
- Consider including the time frame if relevant

**Description** (Optional)
- Explain what this KPI measures and why it matters
- Include any important context about targets or thresholds
- Note any seasonal patterns or external factors

### Step 4: Set Your Target

**Target Value**
- Enter the specific goal you're aiming to achieve
- Use the same units as your underlying metric
- Make targets specific and measurable

**Direction**
- **Higher is better**: Revenue, beneficiaries served, satisfaction scores
- **Lower is better**: Costs, response times, error rates, complaints

**Examples:**
- Revenue KPI: Target = $50,000, Higher is better
- Cost per Acquisition: Target = $25, Lower is better
- Response Time: Target = 24 hours, Lower is better

### Step 5: Configure Thresholds

Thresholds determine the color-coded status of your KPI:

**Green Threshold**
- Percentage of target that represents "on track" performance
- Typically 90-95% for "higher is better" KPIs
- Typically 105-110% for "lower is better" KPIs

**Amber Threshold**
- Percentage that represents "needs attention" 
- Usually 75-85% for "higher is better" KPIs
- Usually 115-125% for "lower is better" KPIs

**Red Status** (Automatic)
- Performance below the amber threshold
- Indicates "off track" performance requiring immediate attention

#### Threshold Examples

**Revenue KPI (Higher is Better)**
- Target: $50,000
- Green: ≥95% of target (≥$47,500)
- Amber: 80-94% of target ($40,000-$47,499)
- Red: <80% of target (<$40,000)

**Response Time KPI (Lower is Better)**
- Target: 24 hours
- Green: ≤105% of target (≤25.2 hours)
- Amber: 106-120% of target (25.3-28.8 hours)  
- Red: >120% of target (>28.8 hours)

### Step 6: Set Time Configuration

**Time Grain**
Choose how often to calculate the KPI:
- **Daily**: For operational metrics needing frequent monitoring
- **Weekly**: For team performance indicators
- **Monthly**: For business results and financial metrics
- **Quarterly**: For strategic objectives
- **Yearly**: For long-term organizational goals

**Time Dimension Column**
- Select the date column to use for time-based calculations
- Typically the transaction date, created date, or updated date
- Must be a date/timestamp column in your metric's source table

### Step 7: Add Organization Tags

**Metric Type Tag** (Optional)
Categorize by role in your theory of change:
- **Input**: Resources invested (budget, staff, materials)
- **Output**: Direct activities (services delivered, trainings conducted)
- **Outcome**: Medium-term changes (skills gained, behaviors changed)
- **Impact**: Long-term effects (lives improved, communities strengthened)

**Program Tags** (Optional)
Group by organizational structure:
- Department or team names
- Project or initiative names  
- Geographic regions
- Funding sources or grants

Examples:
- Program tags: "Education", "Health", "North Region"
- Type: "Output" for a "Students Trained" KPI

### Step 8: Preview and Save

1. **Review configuration**: Check all settings are correct
2. **Preview calculation**: View how the KPI will look with current data
3. **Verify thresholds**: Ensure status calculations match expectations
4. **Save**: Click **CREATE KPI** to finalize

## KPI Configuration Examples

### Monthly Revenue Target

```
Metric: Total Revenue (SUM of revenue column)
Name: "Monthly Revenue Target"
Target: $75,000
Direction: Higher is better
Green threshold: 95% (≥$71,250)
Amber threshold: 85% ($63,750-$71,249)
Time grain: Monthly
Program tags: ["Operations", "Fundraising"]
Type: Input
```

### Beneficiary Satisfaction Score

```
Metric: Average Satisfaction (AVG of rating column)
Name: "Service Quality Score" 
Target: 4.5 (out of 5)
Direction: Higher is better
Green threshold: 95% (≥4.28)
Amber threshold: 85% (3.83-4.27)
Time grain: Monthly
Program tags: ["Service Delivery"]
Type: Outcome
```

### Project Completion Rate

```
Metric: Completion Percentage (calculated metric)
Name: "On-Time Project Delivery"
Target: 90%
Direction: Higher is better  
Green threshold: 95% (≥85.5%)
Amber threshold: 80% (72%-85.4%)
Time grain: Quarterly
Program tags: ["Operations", "Project Management"]
Type: Output
```

## Testing Your KPI

### Verify Data Calculation
- Check that current values match manual calculations
- Ensure time grain produces expected number of data points
- Confirm date filtering works correctly

### Validate Thresholds
- Test with known good, average, and poor performance periods
- Ensure color coding matches intuitive performance assessment
- Adjust thresholds if status doesn't align with business reality

### Review Time Series
- Check historical trends make sense
- Verify seasonal patterns are captured correctly
- Ensure there are no unexpected gaps or spikes in data

## Common Issues and Solutions

### KPI Shows No Data
- **Check date column**: Ensure time dimension column contains valid dates
- **Verify metric data**: Confirm underlying metric returns values
- **Review time grain**: Make sure there's data at the selected frequency

### Unexpected Status Colors
- **Review thresholds**: Check percentage calculations match intentions
- **Verify direction**: Ensure "higher/lower is better" is set correctly
- **Check target value**: Confirm target is in the same units as metric

### Missing Time Periods
- **Data gaps**: Underlying data may be missing for certain periods
- **Time zone issues**: Check if date calculations account for organizational time zone
- **Metric frequency**: Ensure metric data is available at chosen time grain

## Best Practices

### Target Setting
- **Start conservative**: Better to exceed initial targets than consistently miss them
- **Review quarterly**: Adjust targets based on performance trends and changing conditions
- **Align with strategy**: Ensure KPI targets support organizational goals
- **Consider seasonality**: Account for expected fluctuations in performance

### Threshold Configuration
- **Leave room for normal variation**: Don't make green thresholds too restrictive
- **Test with historical data**: Use past performance to calibrate thresholds
- **Balance sensitivity**: Avoid thresholds that create too many false alarms
- **Document rationale**: Record why specific thresholds were chosen

### Organization
- **Use consistent tagging**: Establish standard program and type categories
- **Limit KPI count**: Focus on vital few rather than tracking everything
- **Review relevance regularly**: Remove or update KPIs that no longer serve your needs

## Next Steps

- [Managing KPIs](managing-kpis.md) — Organize and monitor your KPI dashboard
- [KPI Best Practices](best-practices.md) — Advanced strategies for effective KPI programs
- [Building Dashboards](../dashboards/creating.md) — Display KPIs in executive dashboards