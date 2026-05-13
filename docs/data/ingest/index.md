---
sidebar_position: 3
---

# Ingest

**Ingest is where you connect your data warehouse and sources so Dalgo can automatically pull your data into one place.**

The Ingest section has three tabs. If you're setting up for the first time, work through them in this order: **Connections** → **Sources** → **Warehouse** (or start with Warehouse if it isn't set up yet).

| Tab | What it covers |
|---|---|
| [Connections](./connections.md) | Link a source to your warehouse to start syncing data (shown by default) |
| [Sources](./sources.md) | Add the external systems your data comes from |
| [Warehouse](./warehouse.md) | Connect the database where your data will be stored |

:::note
You may need to whitelist these IP addresses in your organisation's firewall before Dalgo can connect to your data sources:
- `13.202.128.47`
- `65.2.173.97`
:::

---

**Related:** [Transform](../transform/index.md) · [Orchestrate](../orchestrate.md)
