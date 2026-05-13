---
sidebar_position: 4
---

# Transform

**Transform is where raw data from your warehouse is cleaned, joined, and computed into the tables your dashboards and reports draw from.**

Dalgo runs transformations using [dbt (data build tool)](https://docs.getdbt.com/docs/introduction). When you first visit Transform, Dalgo automatically creates a managed dbt workspace for your organisation — a private Git repository and a scaffolded dbt project.

Once your workspace is ready, you'll see two tabs:

| Tab | Who it's for |
|---|---|
| [UI Transform](./ui-transform.md) | Anyone — build dbt models visually without writing SQL |
| [DBT Transform](./dbt-transform.md) | Data practitioners — run dbt commands directly and manage tasks |

You can also [connect your own GitHub repository](./switching-repositories.md) instead of using the Dalgo-managed one.

## In this section

- [UI Transform](./ui-transform.md) — visual canvas for building models
- [DBT Transform](./dbt-transform.md) — task runner and direct dbt command access
- [Switching repositories](./switching-repositories.md) — bring your own GitHub repo

---

**Related:** [Ingest](../ingest/index.md) · [Orchestrate](../orchestrate.md) · [Data Quality](../quality.md)
