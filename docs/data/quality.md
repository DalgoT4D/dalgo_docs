---
sidebar_position: 7
---

# Data Quality

**Dalgo's data quality feature uses Elementary to monitor your dbt models and surface data issues automatically.**

[Elementary](https://docs.elementary-data.com/) is a dbt observability package that runs alongside your transformations. Once set up, it shows test results, anomalies, and model run history across all your data models.

## Accessing Data Quality

1. Select **Data** in the left menu.
2. Select the **Quality** tab.

What you see depends on your setup:

- **If dbt is not configured** — you'll see a message asking you to set up your Transform workspace first. Go to [Transform](./transform/index.md) to get started.
- **If Elementary is not yet set up** — you'll see a one-time setup prompt. Select **Set up Elementary** to add it to your dbt project.
- **If Elementary is set up** — the full report loads automatically.

## Elementary setup

When you first enable Elementary, Dalgo installs and configures the package in your dbt project.

![Elementary setup](/img/managedata/elementary.png)

## Reading the report

Once Elementary is running, the Data Quality page shows:

- **Test results** — pass/fail status for each dbt test across your models
- **Model runs** — when each model last ran and whether it succeeded
- **Anomalies** — automatically detected irregularities in row counts, freshness, or column values

![Data quality page](/img/managedata/dq.png)

:::note
Results update each time your pipeline runs transformation tasks. If you haven't run a pipeline recently, the report may not show your latest data.
:::

If you need help interpreting a failing check, contact your data team or support@dalgo.org.

---

**Related:** [Transform](./transform/index.md) · [Orchestrate](./orchestrate.md) · [Overview](./overview.md)
