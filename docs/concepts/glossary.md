---
sidebar_position: 1
---

# Glossary

**Key terms used throughout Dalgo and these docs, defined in plain language.**

---

**Warehouse**
The central database where all your data is stored after it has been ingested. Dalgo supports BigQuery and PostgreSQL. Think of it as the single source of truth your charts and dashboards draw from.

**Source**
Any external system where your data lives before it comes into Dalgo. Common examples: KoboToolbox, Google Sheets, CommCare, Avni, Salesforce, Zoho. You add a source once by saving its credentials.

**Connection**
A link between a source and your warehouse. A connection tells Dalgo which data streams (tables) to sync, how often to sync them, and how to handle updates. One source can have multiple connections.

**Sync**
The act of copying data from a source into your warehouse via a connection. Syncs run automatically on a schedule or can be triggered manually.

**Pipeline**
A scheduled job that runs one or more connections (to sync data) and optionally runs transformation tasks afterwards. Pipelines are configured in Orchestrate.

**Transform / dbt**
After raw data lands in your warehouse, it usually needs cleaning, joining, and computing before it's useful. Dalgo uses [dbt (data build tool)](https://docs.getdbt.com/docs/introduction) to run SQL-based transformations. You don't need to know SQL to use the UI Transform canvas, but dbt is what runs underneath.

**Model**
A single transformation step in dbt — typically one SQL file that produces one table. Dalgo's UI Transform canvas lets you create models visually.

**Metric**
A reusable calculation that defines how to compute a specific value from your warehouse data. Metrics can be simple aggregations (like SUM or COUNT) or complex SQL expressions. Once defined, a metric can be used across multiple KPIs and charts for consistency.

**KPI (Key Performance Indicator)**
A metric promoted with targets, direction, and status tracking. KPIs include target values, track whether increases or decreases are positive, and automatically calculate Red/Amber/Green status based on performance against goals.

**Chart**
A single visualisation — a bar chart, pie chart, line chart, number, map, or table — built from one dataset (warehouse table). Charts are the building blocks of dashboards.

**Dashboard**
A collection of charts arranged on a canvas. Dashboards always show live data — they update automatically each time your pipeline runs.

**Report**
A frozen snapshot of a dashboard at a specific date range. Unlike dashboards, reports don't update. They're used for quarterly reviews, donor updates, and team discussions.

**Pipeline Overview**
The monitoring screen inside the **Data** section that shows a visual history of every pipeline run — when it ran, how long it took, and whether it succeeded.

**Elementary**
An open-source dbt observability package that Dalgo uses for data quality monitoring. Once set up, it surfaces test results, anomalies, and model run history.

**Superset**
An open-source BI tool that Dalgo optionally hosts for organisations on the Dalgo + Superset plan. It offers more advanced dashboarding than Dalgo's native dashboards.
