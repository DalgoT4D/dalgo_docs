# KPIs and Metrics

**Track and monitor your organization's key performance indicators with Dalgo's comprehensive KPI and metrics system.**

The KPI and metrics feature allows you to define reusable metrics from your data warehouse and promote them to KPIs with targets, trends, and visual indicators to track organizational performance.

## Overview

Dalgo's KPI system operates on a two-tier architecture:

1. **Metrics** - Reusable calculations that can be used across charts and KPIs
2. **KPIs** - Metrics promoted with targets, directions, and RAG status tracking

This approach ensures consistency across your organization while providing the flexibility to create both simple aggregations and complex business logic.

## Metrics

Metrics are the foundation of the KPI system. They define how to calculate a specific value from your data warehouse.

### Creating Metrics

There are two ways to define metrics:

#### Simple Metrics
- **Column + Aggregation**: Select a column and choose an aggregation type (SUM, AVG, COUNT, MIN, MAX, COUNT DISTINCT)
- Best for straightforward calculations like total sales, average order value, or customer count

#### Expression Metrics
- **Custom SQL**: Write custom SQL expressions for complex calculations
- Supports joins, subqueries, and advanced business logic
- Validated against your warehouse before saving

### Metric Management

- **Validation**: All metric definitions are validated against your data warehouse
- **Preview**: See current metric values before saving
- **Reusability**: Metrics can be used by multiple KPIs and charts
- **Consumer Tracking**: View which KPIs and charts reference each metric
- **Protection**: Metrics cannot be deleted if they're being used by other components

## KPIs

KPIs transform metrics into business performance indicators with targets, trends, and visual status tracking.

### KPI Configuration

#### Basic Settings
- **Name and Description**: Clear identification of what the KPI measures
- **Metric Reference**: Select the underlying metric to track
- **Program Tags**: Categorize KPIs by program or initiative
- **Type Tags**: Classify as input, output, outcome, or impact metrics

#### Target Configuration
- **Target Value**: Set the goal value for the KPI
- **Direction**: Specify whether increases or decreases are positive
- **Time Grain**: Choose daily, weekly, monthly, quarterly, or yearly tracking

#### RAG Status
KPIs automatically calculate Red/Amber/Green status based on:
- **Performance vs Target**: How close you are to achieving your goal
- **Direction Awareness**: Considers whether the KPI should increase or decrease
- **Configurable Thresholds**: Set custom amber and red thresholds

### KPI Analytics

#### Trend Analysis
- **Historical Tracking**: View performance over time
- **Period Comparison**: Compare current period to previous periods
- **Trend Direction**: Visual indicators of improving or declining performance

#### Annotations
- **Rich Notes**: Add contextual information to explain KPI movements
- **Snapshot Values**: Capture KPI values at specific points in time
- **Collaborative Insights**: Team members can add observations and explanations

#### Dashboard Integration
- **Embeddable Components**: Add KPIs to dashboards as visual components
- **Filtering Support**: KPIs respect dashboard-level filters
- **Auto-Generated Charts**: Automatic creation of trend visualizations

## Getting Started

### Prerequisites
- Connected data warehouse
- Appropriate permissions for KPI/metric management

### Step 1: Create Your First Metric
1. Navigate to **Data** → **Metrics**
2. Click **Create Metric**
3. Choose between Simple or Expression type
4. Define your calculation
5. Preview and validate the metric
6. Save with a descriptive name

### Step 2: Promote to KPI
1. Navigate to **Data** → **KPIs**
2. Click **Create KPI**
3. Select your metric
4. Set target value and direction
5. Configure time grain and categorization
6. Save your KPI

### Step 3: Monitor and Analyze
1. View KPI dashboard for overview of all KPIs
2. Click individual KPIs for detailed trend analysis
3. Add annotations to explain significant changes
4. Embed KPIs in organizational dashboards

## Best Practices

### Metric Design
- **Consistent Naming**: Use clear, descriptive names that stakeholders understand
- **Documentation**: Add detailed descriptions explaining what each metric measures
- **Validation**: Always preview metrics before saving to ensure accuracy
- **Reusability**: Design metrics to be reusable across multiple KPIs

### KPI Strategy
- **SMART Targets**: Set Specific, Measurable, Achievable, Relevant, Time-bound targets
- **Regular Review**: Establish cadences for reviewing and updating targets
- **Stakeholder Alignment**: Ensure KPIs align with organizational objectives
- **Balanced Scorecards**: Include a mix of input, output, outcome, and impact metrics

### Performance Management
- **Regular Monitoring**: Check KPI dashboards regularly for status changes
- **Proactive Annotations**: Document context when KPIs show significant movement
- **Trend Analysis**: Look for patterns and correlations across related KPIs
- **Action Planning**: Use KPI insights to drive organizational decisions

## Permissions

The KPI and metrics system includes granular permission controls:

- **View**: See metrics and KPIs
- **Create**: Add new metrics and KPIs  
- **Edit**: Modify existing definitions and configurations
- **Delete**: Remove metrics and KPIs (with protection for referenced items)

## API Integration

Both metrics and KPIs are accessible via REST API for:
- **External Dashboards**: Integrate KPI data into other systems
- **Automated Reporting**: Generate performance reports programmatically
- **Data Export**: Extract KPI data for further analysis
- **Custom Applications**: Build custom KPI tracking applications

## Troubleshooting

### Common Issues

**Metric Validation Fails**
- Check SQL syntax and table/column references
- Ensure warehouse connection is active
- Verify permissions to referenced tables

**KPI Not Updating**
- Confirm underlying data is being refreshed
- Check if metric definition has changed
- Verify warehouse connectivity

**Permission Errors**
- Contact administrator to verify role permissions
- Check organization-level KPI access settings

---

**Related:** [Charts](../charts/index.md) · [Dashboards](../dashboards/index.md) · [Reports](../reports/index.md)