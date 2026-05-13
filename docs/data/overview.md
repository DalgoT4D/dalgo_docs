---
sidebar_position: 2
---

# Overview

**The Overview shows a visual history of your data pipeline runs so you can quickly see what ran, when, and whether it succeeded.**

This is a read-only monitoring view. To manage or schedule pipelines, go to [Orchestrate](./orchestrate.md).

## Viewing the Overview

1. Select **Data** in the left menu, then select the **Overview** tab.

![Pipeline Overview](/img/managedata/pipeline_overview.png)

You will see a card for each pipeline. Each card shows:

- The **pipeline name**
- A **bar chart** of recent runs — green bars are successful, red bars are failed, yellow bars indicate the pipeline ran but a dbt test failed
- The **last run time** and who triggered it

## Viewing run logs

1. Select any bar in the chart to expand the run's logs directly below the pipeline card.
2. You will see each task that ran, its duration, and whether it succeeded or failed.

![Pipeline logs](/img/managedata/pipeline_overview_logs.png)

## Scale to runtime

Each pipeline card has a **Scale to runtime** toggle. When enabled, bar heights are proportional to how long each run took — useful for spotting runs that were unusually slow. When disabled, all bars are the same height and only colour indicates success or failure.

---

**Next:** [Orchestrate](./orchestrate.md) · [Data Quality](./quality.md)
