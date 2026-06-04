---
sidebar_position: 5
---

# Orchestrate

**Through this step Dalgo enables you to automate your data pipeline by setting up scheduled ingestion and transformation.**

1. Select orchestrate on the left menu panel. You will see a list of your existing pipelines with their schedule, status, last run details, and results.

![Pipeline list](/img/orchestrate/pipeline_list.png)

2. Select "+ Create Pipeline" - This will take you to the "Create Pipeline" screen.

![Create pipeline](/img/orchestrate/pipeline_create.png)

3. Give your pipeline a name.
4. Select one or more of the connections you have set up.
5. Configure your Transform Tasks:
   - Check **"Run transform tasks"** to include transformation tasks in your pipeline.
   - When enabled, default system tasks (like dbt run, dbt test) are pre-populated.
   - You can add custom tasks from the dropdown and reorder them using drag-and-drop.
   - Use **"Reset to default"** to restore the default task list.

:::info
The following tasks are automatically added (in this order) before your transformation tasks and do not need to be configured manually:
1. **Git pull/clone** — pulls the latest code from the default branch of your git repository.
2. **dbt clean** — removes compiled dbt artifacts.
3. **dbt deps** — installs dbt package dependencies.

These tasks are not shown in the pipeline transform task dropdown.
:::

![Transform tasks without git tasks](/img/orchestrate/pipeline_transform_tasks_no_git_clean_deps.png)

6. Set the schedule for your pipeline and click "Create Pipeline".

7. You can edit an existing pipeline by clicking the three-dot menu on a pipeline row and selecting "Edit".

![Edit pipeline](/img/orchestrate/pipeline_edit.png)

8. You can test your pipeline by clicking the run icon on the pipeline row.

9. You can view the logs history of your past runs by clicking the history icon. This shows each task's duration and lets you view detailed logs.

![Pipeline logs history](/img/orchestrate/pipeline_history.png)
