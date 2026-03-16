---
sidebar_position: 2
title: Warehouse Selection
---

# Warehouse Selection

Dalgo supports **AWS PostgreSQL (RDS)** and **BigQuery** as data warehouse options. While both work, we strongly recommend setting up AWS PostgreSQL for most organizations.

## AWS PostgreSQL (RDS): Our Default Recommendation

PostgreSQL is the most widely used open-source relational database, and running it on AWS RDS makes setup and maintenance straightforward.

Reasons we recommend AWS PostgreSQL:

1. It is fully compatible with dbt, which is at the core of Dalgo's transformation layer. Your models, tests, and documentation work out of the box.
2. For NGOs and smaller organizations with low to moderate data volumes, PostgreSQL on RDS is highly cost-effective.
3. AWS RDS pricing is simple and predictable:
   - You pay a fixed monthly cost based on the instance size you choose (starting as low as ~$15/month for a small instance).
   - Storage costs scale gradually with usage.
   - There are typically no sudden billing spikes for normal NGO workloads.
4. AWS also has nonprofit support programs and credits, which can reduce or fully cover costs for eligible organizations.

For setup steps, refer to: `AWS RDS Setup`.

## BigQuery Is Supported, But Not Always Recommended

BigQuery is Google's cloud data warehouse and is a powerful tool, but its pricing model can become expensive quickly, especially for smaller organizations.

BigQuery charges on two dimensions:

1. The amount of data you store.
2. The amount of data your queries scan.

This means routine workloads (dashboard refreshes, report generation, and ad-hoc exploration) all add to your compute bill. If teams run frequent queries or iterate often on dbt models, costs can escalate in ways that are hard to predict.

For NGOs operating on tight budgets, this query-based pricing model can introduce unnecessary financial risk.

#### What About Organizations Using Glific?

If your organization uses Glific, your data is already in BigQuery. Dalgo fully supports BigQuery and can connect to your existing Glific BigQuery instance, so there is no need to migrate that data.

You can also set up a PostgreSQL warehouse alongside it for additional data sources.

## What Other Data Warehouses Are Supported?

We are sometimes asked whether other databases can be used with Dalgo. A good reference point is dbt's list of trusted adapters:
[Refer to dbt Trusted Adapters](https://docs.getdbt.com/docs/trusted-adapters)
