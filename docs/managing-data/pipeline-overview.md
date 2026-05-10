---
sidebar_position: 2
---

# Pipeline Overview

**The Pipeline Overview shows a visual history of your data pipeline runs so you can quickly see what ran, when, and whether it succeeded.**

This is a read-only status view. To manage or schedule pipelines, go to **Orchestrate**.

## Viewing the Pipeline Overview

1. Select **Pipeline Overview** under **Managing Data** on the left menu panel.

<!-- SCREENSHOT: Pipeline Overview page showing pipeline cards each with a bar chart of recent runs -->

You will see a card for each pipeline. Each card shows:

- The **pipeline name**
- A **bar chart** of recent runs — green bars are successful, red bars are failed, yellow bars indicate the pipeline ran but a dbt test failed
- The **last run time** and who triggered it

## Viewing run logs

1. Select any bar in the chart to expand the run's logs directly below the pipeline card.
2. You will see each task that ran, its duration, and whether it succeeded or failed.

<!-- SCREENSHOT: Expanded logs panel below a pipeline card, showing task list with durations -->

## Scale to runtime

Each pipeline card has a **Scale to runtime** toggle. When turned on, bar heights are proportional to how long each run took — useful for spotting runs that were unusually slow. When turned off, all bars are the same height and only colour indicates success or failure.
