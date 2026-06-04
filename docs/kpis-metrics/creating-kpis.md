# Creating KPIs

KPIs (Key Performance Indicators) help you track progress toward specific goals. They combine metrics with targets, status tracking, and trend visualization.

## What Makes a Good KPI?

A strong KPI has:
- **A clear target**: What success looks like
- **Measurable progress**: Regular data updates  
- **Business relevance**: Connected to organizational goals
- **Actionable insights**: Drives decisions and actions

## Creating Your First KPI

### Step 1: Choose a Metric

KPIs are built on top of metrics. You can:
- **Select an existing metric** from your library
- **Create a new metric** inline during KPI setup

If you're starting fresh, the KPI wizard will guide you through metric creation first.

### Step 2: Set Target and Thresholds  

#### Target Value
Set your goal number. This could be:
- Enrollment target: 1,500 students
- Revenue goal: ₹500,000  
- Completion rate: 85%

#### Direction
Choose whether higher or lower numbers are better:
- **Higher is better**: enrollment, revenue, completion rates
- **Lower is better**: dropout rates, cost per beneficiary, response time

#### Status Thresholds
Define when your KPI shows as:
- **On Track** (Green): Usually 100% or better of target
- **At Risk** (Amber): Warning zone, typically 80-99% of target  
- **Off Track** (Red): Below the amber threshold

**Example**: For a target of 1,500 students with "higher is better":
- On Track: ≥1,500 (100%+)
- At Risk: 1,200-1,499 (80-99%)
- Off Track: `<1,200` (`<80%`)

### Step 3: Configure Trends

#### Time Frequency
Choose how often to track progress:
- **Monthly**: Most common for program KPIs
- **Quarterly**: Good for high-level organizational goals
- **Weekly**: For operational metrics needing frequent monitoring
- **Yearly**: For long-term impact indicators

#### Trend Duration  
How many periods to show in the trend chart:
- **12 months**: Full year view (default)
- **6 months**: Recent trends
- **24 months**: Long-term patterns

#### Date Field
Select which date column to use for trend grouping (e.g., `enrollment_date`, `transaction_date`).

### Step 4: Add Tags and Context

#### Indicator Type
Categorize your KPI using the standard logframe hierarchy:
- **Input**: Resources invested (budget, staff, training hours)
- **Output**: Activities completed (trainings delivered, materials distributed)  
- **Outcome**: Short-term changes (knowledge gained, behaviors changed)
- **Impact**: Long-term effects (lives improved, communities transformed)

#### Program Tags
Add tags to organize KPIs by:
- Program area: education, health, livelihood
- Geography: state, district, village
- Population: women, youth, elderly

## KPI Management

### The KPI Page

Your KPIs appear as cards showing:
- **Current value** (large, prominent number)
- **Target** and percentage achieved  
- **RAG status badge**
- **Trend sparkline** with target line
- **Period-over-period change** (↑ +8.3% vs last month)
- **Last updated** timestamp

### Filtering and Search
- Search by KPI name
- Filter by program tags  
- Filter by indicator type
- Filter by RAG status (On Track, At Risk, Off Track)

### KPI Detail View

Click any KPI card to see the full detail drawer:

#### Summary Stats
- Current value, target, achievement percentage
- Period-over-period change
- RAG status and thresholds

#### Trend Chart
- Full line chart with target line
- Hover for exact values and dates
- Time window selector (last 6/12/24 periods)

#### Configuration Details
- Based on which metric
- Direction and thresholds  
- Update frequency
- Tags and classification

#### Actions
- Edit KPI settings
- Add annotations
- Delete KPI

## Advanced Features

### Time Window Selection

In the detail view, you can adjust the trend window:
- **Session-only**: Changes don't save to the KPI configuration
- **Flexible viewing**: See recent trends or longer patterns
- **Consistent cards**: KPI page cards always show the configured default

### Bulk Operations

From the KPI page:
- **Search across names and descriptions**
- **Filter by multiple criteria** (AND logic)
- **Clear all filters** to see everything

## Common KPI Examples

### Program Enrollment
- **Metric**: Count unique beneficiaries  
- **Target**: 2,000 people
- **Direction**: Higher is better
- **Type**: Output
- **Frequency**: Monthly

### Cost Efficiency  
- **Metric**: Total program cost / Count beneficiaries
- **Target**: ₹1,000 per person
- **Direction**: Lower is better  
- **Type**: Input
- **Frequency**: Quarterly

### Completion Rate
- **Metric**: (Completed trainings / Total enrollments) × 100
- **Target**: 85%
- **Direction**: Higher is better
- **Type**: Output  
- **Frequency**: Monthly

### Impact Indicator
- **Metric**: Count households with improved income
- **Target**: 500 households  
- **Direction**: Higher is better
- **Type**: Impact
- **Frequency**: Quarterly

## Best Practices

### Setting Targets
- **Base on historical data**: Look at past performance trends
- **Consider capacity**: Set achievable but ambitious goals
- **Account for seasonality**: Some programs have natural cycles
- **Review regularly**: Adjust targets as you learn and grow

### Threshold Configuration
- **80% amber threshold** works well for most "higher is better" KPIs
- **120% amber threshold** for "lower is better" KPIs (20% over target triggers warning)
- **Customize when needed**: Some KPIs need different warning zones

### Frequency Selection
- **Monthly**: Program enrollment, service delivery, financial metrics
- **Quarterly**: Outcome indicators, organizational goals, impact measures
- **Weekly**: Operational metrics, urgent indicators
- **Yearly**: Long-term impact, strategic objectives

### Organization
- **Consistent naming**: Use clear, business-friendly names  
- **Logical grouping**: Tag by program, geography, or outcome area
- **Clear descriptions**: Help teammates understand what each KPI tracks

---

**Next**: [Add KPIs to dashboards →](./kpi-dashboard-widgets) or [Learn about annotations →](./annotations)