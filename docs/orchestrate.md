---
sidebar_position: 5
---

# Orchestrate

**Through this step Dalgo enables you to automate your data pipeline by setting up scheduled ingestion and transformation.**

A pipeline combines one or more of your data connections with transformation tasks, then runs them automatically on a schedule you choose. You can also run a pipeline manually at any time.

## Viewing your pipelines

1. Select **Orchestrate** on the left menu panel.

You will see a list of your existing pipelines. Each row shows:

- **Pipeline** — the name of the pipeline
- **Schedule** — how often the pipeline runs (e.g. daily, weekly, or manual) and your local timezone
- **Status** — whether the pipeline is **Active** or **Inactive**
- **Last Run** — when the pipeline last ran and who triggered it
- **Result** — the outcome of the last run (Success, Failed, Running, etc.)
- **Actions** — buttons to view history, run the pipeline, or access more options

## Creating a pipeline

1. Select **Create Pipeline** in the top-right corner. This takes you to the pipeline creation form.

2. In the **Name** field, enter a name for your pipeline.

3. In the **Connections** field, select one or more connections. These are the data sources that the pipeline will sync.

4. Under **Transform Tasks**, check **Run transform tasks** if you want the pipeline to run your dbt transformations after syncing. When checked, a task list will appear — you can reorder or remove tasks as needed.

:::info
The following tasks run automatically (in this order) before your transformation tasks. You do not need to add them manually:
1. **Git pull/clone** — pulls the latest code from the default branch of your Git repository.
2. **dbt clean** — removes compiled dbt artifacts.
3. **dbt deps** — installs dbt package dependencies.
:::

## Setting a schedule

The **Schedule** section is on the right side of the pipeline form.

1. Under **Frequency**, choose how often your pipeline should run:
   - **Daily** — runs every day at a time you set
   - **Weekly** — runs on specific days at a time you set
   - **Manual** — only runs when you trigger it yourself

2. If you chose **Weekly**, select the **Days of the Week** your pipeline should run.

3. If you chose **Daily** or **Weekly**, set the **Time of Day**. The time is shown in your local timezone.

4. Select **Create Pipeline** to save.

## Running a pipeline manually

On the pipeline list, select the **run icon** (↻) on the pipeline row to trigger a run immediately. The result column will update once the run completes.

:::note
You cannot trigger a new run while a pipeline is already running. The run button will be disabled until the current run finishes.
:::

## Editing a pipeline

1. On the pipeline list, select the **⋯ menu** on the pipeline row.
2. Select **Edit**.
3. Update any fields — name, connections, transform tasks, or schedule.
4. Use the **Is Active?** toggle to pause or resume the pipeline's automatic schedule without deleting it.
5. Select **Save Changes** when done.

## Viewing run history and logs

1. Select the **history icon** (clock) on a pipeline row.

A full-screen panel opens showing all past runs for that pipeline. Each run shows:
- The date and time it ran and who triggered it
- Whether it succeeded, failed, or had dbt test failures
- Each task in the run, with its duration

2. Select a task row to expand and view its detailed logs.

## Deleting a pipeline

1. On the pipeline list, select the **⋯ menu** on the pipeline row.
2. Select **Delete**.

:::warning
Deleting a pipeline is permanent. Its schedule, configuration, and run history will all be removed and cannot be recovered.
:::
