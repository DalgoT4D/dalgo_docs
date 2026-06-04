# KPIs

Key Performance Indicators (KPIs) turn your metrics into trackable business objectives with targets, thresholds, and visual status indicators. They provide at-a-glance insights into whether your organization is meeting its goals.

## What are KPIs?

KPIs are goal-oriented metrics that help organizations track performance against specific targets. Unlike basic metrics that simply measure data, KPIs add business context by defining:

- **Targets**: The desired value you're aiming to achieve
- **Direction**: Whether higher or lower values are better
- **Thresholds**: When performance is on track, needs attention, or is off track
- **Time grain**: How often to measure progress (daily, weekly, monthly, etc.)

## How KPIs Work

### Built on Metrics

Every KPI is based on an existing [metric](../metrics/). The metric provides the calculation logic, while the KPI adds the business objectives and tracking parameters.

For example:
- **Metric**: "Total Monthly Revenue" (calculates: SUM(revenue))
- **KPI**: "Revenue Target" (adds: target=$50K, higher is better, green >95%, amber >80%)

### Status Indicators

KPIs automatically calculate status based on your thresholds:

- **🟢 Green (On Track)**: Performance meets or exceeds expectations
- **🟡 Amber (Needs Attention)**: Performance is below target but within acceptable range
- **🔴 Red (Off Track)**: Performance is significantly below expectations

### Visual Tracking

Each KPI displays:
- **Current value**: Latest calculated result from the underlying metric
- **Target value**: The goal you've set
- **Trend chart**: Historical performance over time
- **Period-over-period change**: How performance has changed recently
- **Status indicator**: Color-coded assessment of current performance

## Key Features

### Flexible Configuration

**Direction**: Define whether higher or lower values represent better performance
- "Higher is better": Revenue, user engagement, completion rates
- "Lower is better": Costs, response times, error rates

**Time Grains**: Track progress at different frequencies
- Daily: Operational metrics requiring frequent monitoring
- Weekly: Team performance indicators
- Monthly: Business results and outcomes
- Quarterly: Strategic objectives
- Yearly: Long-term organizational goals

**Thresholds**: Set custom performance bands
- Green threshold: What percentage of target represents "on track"
- Amber threshold: What percentage represents "needs attention"
- Below amber: Automatically marked as "off track"

### Organization and Filtering

**Program Tags**: Group KPIs by department, project, or initiative
- Filter views to focus on specific programs
- Organize dashboards by organizational structure
- Track cross-functional objectives

**Metric Types**: Categorize KPIs by their role in your theory of change
- **Input**: Resources invested (budget, staff time, materials)
- **Output**: Direct results of activities (services delivered, people trained)
- **Outcome**: Medium-term changes (knowledge gained, behavior changes)
- **Impact**: Long-term effects (lives improved, communities strengthened)

### Search and Navigation

- **Search by name**: Quickly find specific KPIs
- **Filter by status**: Focus on KPIs that need attention
- **Filter by type**: View KPIs by input/output/outcome/impact categories
- **Filter by program**: See KPIs for specific initiatives

## Common KPI Examples

### Revenue KPIs
- **Monthly Revenue Target**: Track against monthly income goals
- **Revenue per Beneficiary**: Ensure sustainable service delivery costs
- **Fundraising Efficiency**: Monitor cost of fundraising relative to funds raised

### Service Delivery KPIs
- **Beneficiaries Served**: Track progress toward service targets
- **Program Completion Rate**: Monitor participant engagement and success
- **Service Quality Score**: Maintain standards through user feedback

### Operational KPIs
- **Project Delivery Timeline**: Ensure initiatives stay on schedule
- **Budget Utilization**: Monitor spending against allocated resources
- **Staff Productivity**: Track output per team member

## Getting Started

### Prerequisites
- [Metrics](../metrics/) defined for your key business calculations
- Clear understanding of organizational targets and goals
- Appropriate permissions to create and modify KPIs

### Basic Workflow

1. **Identify objectives**: What business outcomes do you need to track?
2. **Select metrics**: Choose the underlying calculations that measure these outcomes
3. **Set targets**: Define specific, measurable goals
4. **Configure thresholds**: Determine what constitutes good, acceptable, and poor performance
5. **Choose time grain**: Select appropriate measurement frequency
6. **Organize**: Add program tags and categorization
7. **Monitor**: Regularly review KPI performance and adjust targets as needed

## Integration with Other Features

### Dashboards
- Add KPI cards to [dashboards](../dashboards/) for executive overviews
- Create program-specific dashboards filtering by relevant KPI tags
- Combine KPIs with detailed charts for comprehensive reporting

### Reports
- Include KPI status in regular [reports](../reports/) to stakeholders
- Track KPI trends over time in quarterly or annual reviews
- Use KPI data for board presentations and funder updates

### Alerts and Monitoring
- Monitor KPI status changes for early warning of performance issues
- Set up notifications when KPIs move between status levels
- Track when KPIs consistently miss targets

## Best Practices

### Target Setting
- Make targets **specific and measurable**: "Serve 500 beneficiaries" instead of "serve more people"
- Ensure targets are **achievable but stretch goals**: ambitious enough to drive performance
- **Align with organizational strategy**: KPIs should connect to your mission and theory of change
- **Review and adjust regularly**: Update targets based on changing circumstances and historical performance

### Threshold Configuration
- **Green threshold (90-95%)**: Set high enough to represent genuine success
- **Amber threshold (75-85%)**: Allow for normal variation while flagging concerns
- **Consider external factors**: Account for seasonal patterns, external dependencies

### Organization
- **Use consistent program tags**: Establish standard naming conventions
- **Limit KPI count**: Focus on the vital few rather than measuring everything
- **Balance leading and lagging indicators**: Mix operational metrics with outcome measures

## Next Steps

- [Creating KPIs](creating-kpis.md) — Step-by-step guide to setting up KPIs
- [Managing KPIs](managing-kpis.md) — Organize and maintain your KPI dashboard
- [KPI Best Practices](best-practices.md) — Advanced strategies for effective KPI programs