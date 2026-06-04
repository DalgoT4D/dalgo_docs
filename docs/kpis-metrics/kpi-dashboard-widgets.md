# KPI Dashboard Widgets

Add KPIs to your dashboards to create executive-friendly views that show organizational progress at a glance.

## What are KPI Widgets?

KPI widgets are compact dashboard components that display:
- **Current value** prominently
- **Target and achievement percentage**  
- **RAG status badge** (On Track/At Risk/Off Track)
- **Trend sparkline** with target line
- **Period-over-period change**

They're designed for leadership consumption—scannable from across the room.

## Adding KPIs to Dashboards

### 1. Open Dashboard Builder

From any dashboard, click **Edit** to enter the dashboard builder.

### 2. Add Component

Click **+ Add Component** to open the component selector.

### 3. Choose KPI Tab

You'll see two tabs:
- **Charts**: Your regular charts
- **KPIs**: All available KPIs  

Switch to the **KPIs** tab.

### 4. Select Your KPI

Browse your KPIs in preview card format. Each preview shows:
- KPI name and current RAG status
- Current value  
- Mini sparkline

Click any KPI to add it to your dashboard.

### 5. Position and Resize

KPI widgets work like any dashboard component:
- **Drag to reposition**
- **Resize using corner handles**
- **Auto-responsive**: Layout adapts to container size

## KPI Widget Layouts

KPI widgets automatically adapt to their container size:

### Large (350px+ wide)
- Very prominent value display
- Full target line: "Target: 3,000 (95%)"
- Full-height sparkline with 4+ time labels
- Complete period-over-period change

### Medium (250-350px wide)  
- Large value display
- Target with percentage: "Target: 3,000 (95%)"
- Medium-height sparkline with 3 time labels
- Change indicator

### Small (`<250px` wide)
- Large value (still prominent)
- Target without percentage: "Target: 3,000"  
- Compact sparkline with minimal labels
- Change indicator

**The RAG status badge is always visible** regardless of size—it's the most critical information.

## Executive Dashboard Best Practices

### Layout Strategy

#### Top Row: Key Organizational KPIs
Place your most important 3-4 KPIs at the top:
- Overall beneficiary count
- Total program reach  
- Key financial indicator
- Primary outcome metric

#### Second Row: Program-Specific KPIs
Group related KPIs by program area:
- Education enrollment and completion
- Health service delivery  
- Livelihood training outcomes

#### Bottom Sections: Supporting Metrics
Add operational and input indicators:
- Cost efficiency measures
- Resource utilization  
- Quality indicators

### Visual Design

#### Use Consistent Sizing
- **Large widgets** for the most important 2-3 KPIs
- **Medium widgets** for program area summaries
- **Small widgets** for supporting indicators

#### Group Logically  
- Use dashboard sections/headers to separate program areas
- Align related KPIs in rows or columns
- Leave white space between different focus areas

#### Color Coordination
RAG badges provide natural color coding:
- **Green clusters** show areas performing well
- **Amber/Red** immediately highlight areas needing attention

## Advanced Dashboard Features

### Live Updates

KPI widgets always show current data:
- **Auto-refresh**: Values update when underlying data changes
- **Synchronized**: Editing a KPI updates all widgets using it
- **Real-time RAG**: Status badges reflect the latest calculations

### Click-Through Navigation

Clicking any KPI widget opens the full detail drawer:
- Complete trend chart
- Configuration details  
- Annotation timeline
- Edit options

This lets dashboard viewers drill down for more context without leaving the executive view.

### Mixed Dashboards

You can combine KPI widgets with regular charts:
- **KPI widgets**: High-level goal tracking
- **Bar/line charts**: Detailed breakdowns  
- **Text components**: Context and explanations

## Common Dashboard Patterns

### Executive Summary Dashboard
```
[Total Beneficiaries]  [Programs Active]  [Revenue YTD]
[Education KPIs...................................] 
[Health KPIs......................................] 
[Livelihood KPIs..................................]
[Financial Efficiency Chart] [Geographic Breakdown]
```

### Program Dashboard
```
[Main Program KPI - Large]  [Secondary KPI]
[Enrollment Trend Chart]    [Completion Chart] 
[Cost per Beneficiary]      [Quality Metrics]
```

### Quarterly Review Dashboard
```
[Q4 Goals - 4 Large KPI Widgets in Row]
[Trend Analysis - Mixed Charts and KPIs]
[Program Breakdown - Small KPI Grid]
```

## Report Integration

KPI widgets work seamlessly in report snapshots:

### Frozen Data
When you create a report, KPI widgets capture:
- Current value at snapshot time
- RAG status at that moment  
- Trend data for the configured period
- Target and thresholds

### Commenting
Team members can add comments on KPI widgets in reports, just like regular charts.

### Sharing
Shared reports include KPI widgets with frozen data—perfect for board presentations or stakeholder updates.

## Best Practices

### Content Strategy
- **Lead with impact**: Put outcome/impact KPIs at the top
- **Tell a story**: Arrange KPIs to show the logical flow from inputs to impact  
- **Highlight problems**: Use the RAG system to draw attention to areas needing focus

### Technical Tips  
- **Test on different screens**: Executive dashboards are often viewed on large monitors or projectors
- **Consider mobile**: Leadership may check dashboards on phones
- **Optimize loading**: Too many KPIs can slow dashboard load times

### Maintenance
- **Review quarterly**: Ensure KPIs still reflect organizational priorities
- **Update targets**: Adjust goals as programs evolve  
- **Archive outdated KPIs**: Remove KPIs that are no longer relevant

---

**Next**: [Learn about KPI annotations →](./annotations) or [Go back to KPI creation →](./creating-kpis)