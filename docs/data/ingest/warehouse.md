---
sidebar_position: 3
---

# Warehouse

**Your warehouse is the single database where data from all your sources is stored after syncing.**

Dalgo supports **BigQuery** and **PostgreSQL** as warehouse destinations. You need to set up your warehouse before adding sources or connections.

## Connecting your warehouse

1. Select **Data** in the left menu, then select **Ingest**.
2. Select the **Your Warehouse** tab.

![Warehouse form](/img/ingest/warehouse_form.png)

3. Select the warehouse type from the **Destination type** dropdown — either **BigQuery** or **Postgres**.
4. Enter a name in the **Name** field.
5. Fill in the connection details:
   - **BigQuery** — requires a project ID and service account JSON credentials
   - **Postgres** — requires a host, port, database name, username, and password
6. Select **Test Connection**. Dalgo will verify it can reach your warehouse.
7. Select **Save** once the test succeeds.

:::info Screenshot coming soon
A screenshot showing a successful warehouse connection test will be added here.
:::

## Editing your warehouse

1. Select the **Your Warehouse** tab.
2. Select **Edit**.
3. Make your changes, test the connection, and select **Save**.

:::note
If you need help obtaining warehouse credentials, contact your internal tech team, your implementation partner, or the Dalgo team at support@dalgo.org.
:::

---

**Next:** [Sources](./sources.md) · [Connections](./connections.md)
