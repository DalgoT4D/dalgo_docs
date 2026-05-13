---
sidebar_position: 2
---

# UI Transform

**UI Transform provides a visual canvas for building dbt models without writing SQL.**

Use it to create and connect data models by dragging and dropping operations — no code required.

## Accessing UI Transform

1. Select **Data** in the left menu, then select **Transform**.
2. Select the **UI Transform** tab.

![UI Transform tab](/img/transform/transform_landing_UI_tab.png)

## Using the canvas

- Select **Edit Workflow** to open the full canvas editor.
- In the editor, drag and drop operations to build your models.
- Connect operations by linking their outputs to inputs.

## Publishing your changes

When you are happy with your changes:

1. Select **Publish**.

Dalgo commits and pushes your changes to the connected Git repository. The next pipeline run will use the updated models.

:::info
Publishing writes directly to the default branch of your managed repository. If you need a review process, consider [switching to your own GitHub repository](./switching-repositories.md) so you can use pull requests.
:::

---

**Next:** [DBT Transform](./dbt-transform.md) · [Switching repositories](./switching-repositories.md)
