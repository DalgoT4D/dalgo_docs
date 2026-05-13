---
sidebar_position: 1
---

# Setting up your Warehouse

**Your warehouse is the single location where data from all your sources is stored.**

Dalgo supports BigQuery and PostgreSQL as warehouse destinations. You need to set up your warehouse before adding sources or connections.

## Connecting your warehouse

1. Select **Ingest** on the left menu panel.
2. Select the **Your Warehouse** tab.

![Warehouse form](/img/ingest/warehouse_form.png)

3. Select the type of warehouse from the **Destination type** dropdown — either **BigQuery** or **Postgres**.
4. Enter a name for your warehouse in the **Name** field.
5. Fill in the connection details. The fields depend on the destination type:
   - **BigQuery** — requires a project ID and service account JSON credentials
   - **Postgres** — requires a host, port, database name, username, and password
6. Select **Test Connection**. Dalgo will verify it can reach your warehouse.
7. Select **Save** once the test succeeds.

<!-- SCREENSHOT: Warehouse form filled in, showing a successful connection test -->

## Editing your warehouse

To update your warehouse credentials or switch to a different warehouse:

1. Select the **Your Warehouse** tab.
2. Select the **Edit** button.
3. Make your changes, test the connection, and save.

:::note
If you need help obtaining warehouse credentials, contact your internal tech team, your tech partner, or the Dalgo team at support@dalgo.org.
:::
