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
5. Configure your Transform Tasks. You can choose between **Simple** and **Advanced** mode:
   - **Simple**: Check "Run all tasks" to run all default transformation tasks.
   - **Advanced**: Select specific transformation tasks to include in your pipeline. You can also add custom tasks created from the transformation page.

:::info
Git tasks (such as pulling the latest code) are no longer shown in the transform task list. The latest code from the default branch of your git repository will be pulled automatically before running the transformation tasks.
:::

![Transform tasks without git tasks](/img/orchestrate/pipeline_transform_tasks_no_git.png)

6. Set the schedule for your pipeline and click "Create Pipeline".

7. You can edit an existing pipeline by clicking the three-dot menu on a pipeline row and selecting "Edit".

![Edit pipeline](/img/orchestrate/pipeline_edit.png)

8. You can test your pipeline by clicking the run icon on the pipeline row.

9. You can view the logs history of your past runs by clicking the history icon. This shows each task's duration and lets you view detailed logs.

![Pipeline logs history](/img/orchestrate/pipeline_history.png)
