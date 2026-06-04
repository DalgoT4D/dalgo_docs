---
sidebar_position: 6
---

# Metrics

**Define reusable data calculations that power your charts and KPIs across the platform.**

Metrics are the building blocks of Dalgo's analysis features. A metric defines how to calculate a value from your warehouse data - such as counting records, summing amounts, or computing averages. Once created, metrics can be reused across multiple charts and KPIs, ensuring consistency in your analysis.

## What are metrics?

A metric is a standardized calculation that can be applied to your data:

- **Simple metrics**: Direct aggregations like COUNT, SUM, AVG, MIN, MAX, or COUNT DISTINCT on a column
- **Calculated metrics**: Custom expressions that combine columns, functions, and operations
- **Reusable**: Create once, use in multiple charts and KPIs
- **Consistent**: Ensures the same calculation is used across all analysis

## Key features

### Simple and calculated modes
**Simple metrics** use standard aggregations:
- Count all records in a table
- Sum values in a numeric column
- Calculate average, minimum, or maximum values
- Count distinct values in a column

**Calculated metrics** use custom expressions:
- Combine multiple columns with mathematical operations
- Use SQL functions and conditional logic
- Create complex business calculations

### Data source integration
Metrics connect to your warehouse data:
- Select schema and table from your warehouse
- Choose specific columns for aggregation
- Preview metric values before saving

### Consumer tracking
See where each metric is used:
- **Charts**: Which charts reference this metric
- **KPIs**: Which KPIs track this metric
- **Dependencies**: Understand impact before making changes

:::info
Metrics require a connected data warehouse with transformed data. Ensure your [warehouse setup](../data/ingest/warehouse.md) and [data transformations](../data/transform/index.md) are complete before creating metrics.
:::

## Metrics vs Charts vs KPIs

| Feature | Metrics | Charts | KPIs |
|---------|---------|--------|------|
| **Purpose** | Define calculations | Visualize data | Track performance |
| **Reusability** | High - used across platform | Low - chart-specific | Medium - metric-specific |
| **Targets** | No | No | Yes |
| **Time tracking** | No | Optional | Yes |
| **RAG status** | No | No | Yes |

## Getting started

1. Ensure your [data warehouse](../data/ingest/warehouse.md) is connected and contains transformed data
2. [Create your first metric](creating-metrics.md) using simple aggregation or calculated expressions
3. [Use metrics in charts](../charts/creating-a-chart.md) for consistent analysis
4. [Create KPIs from metrics](../kpis/creating-kpis.md) to track performance against targets

---

**Next:** [Creating Metrics](creating-metrics.md) · [KPIs](../kpis/index.md)