---
sidebar_position: 4
---

# Switching repositories

**By default, Dalgo manages the Git repository for your dbt project. You can switch to your own GitHub repository at any time.**

:::note
This page is primarily for implementation partners and technical teams setting up Dalgo for an organisation.
:::

## Connecting your own GitHub repository

1. Select **EDIT** on the DBT Repository card.
2. Enter your **GitHub repo URL** (e.g. `https://github.com/your-org/your-dbt-repo`).
3. Enter a **Personal access token** with the following permissions:
   - `repo` (full control of private repositories)
   - `workflow` (update GitHub Action workflows)
4. Set the **Dbt default Schema** for your dbt project.
5. Select **SAVE & UPDATE**.

![Edit repository dialog](/img/transform/transform_edit_repo.png)

## What happens when you switch

- **If your external repo is empty**: Dalgo copies your existing models from the managed repository into your external repository — no work is lost.
- **If your external repo already has a dbt project**: Dalgo uses the existing project from your external repository.

:::warning
Any models created in the managed workspace will **not** be carried over when switching to a non-empty external repository.
:::

After switching, you manage the repository yourself (commits, branches, pull requests, etc.).

## Switching between external repositories

You can also switch from one external repository to another using the same Edit flow. The new repository is always cloned fresh.

:::warning
Models from the previous repository are **not** migrated to the new one. Model migration is only supported when switching from a Dalgo-managed repository to an empty external repository.
:::

---

**Related:** [DBT Transform](./dbt-transform.md) · [Transform overview](./index.md)
