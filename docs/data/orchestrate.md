---
sidebar_position: 5
---

# Orchestrate

**Orchestrate lets you schedule your data pipeline to run automatically — combining sync connections and transformation tasks into a single job.**

A pipeline combines one or more of your data connections with transformation tasks, then runs them automatically on a schedule you choose. You can also run a pipeline manually at any time.

## Viewing your pipelines

1. Select **Data** in the left menu, then select **Orchestrate**.

![Pipeline list](/img/orchestrate/pipeline_list.png)

You will see a list of your existing pipelines. Each row shows:

- **Pipeline** — the name of the pipeline
- **Schedule** — how often the pipeline runs and your local timezone
- **Status** — whether the pipeline is **Active** or **Inactive**
- **Last Run** — when the pipeline last ran and who triggered it
- **Result** — the outcome of the last run (Success, Failed, Running, etc.)
- **Actions** — buttons to view history, run, or access more options

## Creating a pipeline

1. Select **Create Pipeline** in the top-right corner.
2. Enter a **Name** for your pipeline.
3. In the **Connections** field, select one or more connections to sync.
4. Under **Transform Tasks**, check **Run transform tasks** if you want dbt to run after syncing. A task list will appear — you can reorder or remove tasks.

:::info
The following tasks run automatically before your transformation tasks — you don't need to add them manually:
1. **Git pull/clone** — pulls the latest code from your Git repository
2. **dbt clean** — removes compiled dbt artifacts
3. **dbt deps** — installs dbt package dependencies
:::

## Setting a schedule

The **Schedule** section is on the right side of the pipeline form.

1. Under **Frequency**, choose:
   - **Daily** — runs every day at a time you set
   - **Weekly** — runs on specific days at a time you set
   - **Manual** — only runs when you trigger it yourself
2. If you chose **Weekly**, select the **Days of the Week**.
3. If you chose **Daily** or **Weekly**, set the **Time of Day** (shown in your local timezone).
4. Select **Create Pipeline** to save.

## Running a pipeline manually

On the pipeline list, select the **run icon** (↻) on the pipeline row to trigger a run immediately.

:::note
You cannot trigger a new run while a pipeline is already running. The run button will be disabled until the current run finishes.
:::

## Editing a pipeline

1. Select the **⋯ menu** on the pipeline row.
2. Select **Edit**.
3. Update any fields — name, connections, transform tasks, or schedule.
4. Use the **Is Active?** toggle to pause or resume the automatic schedule without deleting the pipeline.
5. Select **Save Changes**.

## Viewing run history

1. Select the **history icon** (clock) on a pipeline row.

A panel opens showing all past runs. Each run shows the date, who triggered it, and the outcome. Select a task row to expand and view its detailed logs.

## Deleting a pipeline

1. Select the **⋯ menu** on the pipeline row.
2. Select **Delete**.

:::warning
Deleting a pipeline is permanent. Its schedule, configuration, and run history will all be removed and cannot be recovered.
:::

---

**Related:** [Ingest → Connections](./ingest/connections.md) · [Transform](./transform/index.md) · [Overview](./overview.md)
