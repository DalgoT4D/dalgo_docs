---
sidebar_position: 4
---

# Warehouse

**Your warehouse is the single database where data from all your sources is stored after syncing.**

Dalgo supports **BigQuery** and **PostgreSQL**. Every organisation has one warehouse, and it has to exist before you can sync any data — so this is usually the first thing you set up.

The warehouse lives in **Settings** because it's organisation-wide infrastructure rather than part of any one sync. The [Ingest](../data/ingest/index.md) page shows which warehouse is in use next to its heading, and that link brings you here.

## Viewing your warehouse

Select **Settings** in the left menu, then select **Warehouse**.

![Settings — Warehouse](/img/settings/settings_warehouse.png)

You'll see the warehouse name and its connection details — host, port, database, and the Airbyte workspace Dalgo uses to sync into it.

:::note
Whitelist these IP addresses in your firewall if your warehouse is not open to the internet. Select an address to copy it.
- `13.202.128.47`
- `65.2.173.97`
:::

## Setting up your warehouse

If no warehouse has been set up yet, the page shows **Set Up Warehouse** instead of the details table. (Starting from the [Ingest](../data/ingest/index.md) page, the same form opens automatically as the first step of adding a source.)

1. Select **Set Up Warehouse**.
2. Enter a **Name** — anything that identifies it for your team.
3. Choose the **destination type** — **Postgres** or **BigQuery**.
4. Fill in the connection details:
   - **Postgres** — **Host**, **Port**, **DB Name**, **Default Schema**, username, and password
   - **BigQuery** — project ID, dataset location, and service account JSON credentials
5. Select **SAVE CHANGES AND TEST**. Dalgo checks it can reach the warehouse before saving.

## Editing your warehouse

1. Select **EDIT**.

![Warehouse edit form](/img/settings/settings_warehouse_form.png)

2. Update the details, then select **SAVE CHANGES AND TEST**.

## Deleting your warehouse

Select **DELETE WAREHOUSE**, then confirm.

:::warning
Deleting the warehouse also deletes all your connections, pipelines, and the dbt repository set up against it. This cannot be undone.
:::

:::note
If you need help getting warehouse credentials, contact your internal tech team, your implementation partner, or the Dalgo team at support@dalgo.org.
:::

---

**Next:** [Ingest](../data/ingest/index.md) · [Transform](../data/transform/index.md) · [Access](./access.md)
