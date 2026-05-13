---
sidebar_position: 3
---

# DBT Transform

**DBT Transform gives you direct access to dbt commands — run tasks, view logs, and create custom dbt operations.**

This tab is intended for users who work directly with dbt. If you're building models visually, see [UI Transform](./ui-transform.md).

## Accessing DBT Transform

1. Select **Data** in the left menu, then select **Transform**.
2. Select the **DBT Transform** tab.

![DBT Transform tab](/img/transform/transform_landing_DBT_tab.png)

## The DBT Repository card

At the top of both tabs you'll see the **DBT Repository** card showing:

- The connected Git repository URL
- The default schema (e.g. `intermediate`)
- An info icon (for managed repos) indicating the repository is created and managed by Dalgo

![Managed repository tooltip](/img/transform/transform_managed_repo_tooltip.png)

:::note
If you need access to the managed Git repository, reach out on [Discord](https://discord.gg/BvwJNRDHk).
:::

## Running tasks

The task list shows all available dbt tasks:

- **dbt-run** — executes your dbt models
- **dbt-test** — runs your dbt tests
- **dbt-deps** — installs dbt package dependencies
- **dbt-docs-generate** — generates dbt documentation

Select the **Run** (▶) button next to any task to execute it. Logs appear inline below the task.

## Creating custom tasks

1. Select **+ NEW TASK** in the top-right corner of the DBT Actions card.
2. Select a task type from the dropdown.
3. Configure any flags or options.
4. Review the command preview.
5. Select **Create**.

![Create custom task dialog](/img/transform/transform_custom_dbt_task_filled.png)

Custom tasks appear in your task list and can be deleted when no longer needed.

---

**Next:** [Switching repositories](./switching-repositories.md) · [Orchestrate](../orchestrate.md)
