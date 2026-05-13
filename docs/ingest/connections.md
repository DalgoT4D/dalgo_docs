---
sidebar_position: 3
---

# Managing your Connections

**A connection tells Dalgo what data to sync from a saved source into your warehouse.**

If a source answers "where does the data live?", a connection answers "which data should be copied into the warehouse, and how should it sync?".

## Viewing your connections

1. Select **Ingest** on the left menu panel.

The **Connections** tab is shown by default. You will see a list of all connections in your organisation.

![Connections list](/img/ingest/connections_list.png)

## Creating a connection

1. Select **+ Add Connection**.
2. Give your connection a name and select the source you want to sync. The available tables or data streams from that source will appear.
3. Select which streams (tables) you want to sync.
4. Choose the sync mode for each stream.
5. Select **Connect** to save. The first sync will start automatically.

To test your connection, select the **Sync** button on the connection row. Sync logs will appear below.

<!-- SCREENSHOT: Connection row showing sync button, history icon, and status indicator -->

## Managing a connection

From each connection row you can:

- **Sync now** — trigger an immediate sync using the sync icon
- **View history** — see past sync runs and their status using the history icon
- **Edit** — change stream selection or settings using the **⋯ menu**
- **Delete** — remove the connection using the **⋯ menu**

:::warning
Deleting a connection is permanent and removes all its sync history. This cannot be undone.
:::

## Schema changes

If columns or fields change in your source data, Dalgo detects those changes automatically.

1. When a change is detected, a **Pending Changes** section appears in the Connections tab listing the affected connections.
2. Select **View** next to a connection to review what changed.
3. You can **approve** or **ignore** the changes. Approving updates the connection so future syncs use the new schema.

:::note
If a critical field (such as a cursor field) is removed, Dalgo treats it as a breaking change that cannot be approved in Dalgo. The issue must be fixed at the source first.
:::

> If you are unsure how schema changes affect your downstream models or dashboards, contact support@dalgo.org.
