---
sidebar_position: 3
---

# Ingest

**Ingest is where you connect your data sources and warehouse so Dalgo can automatically pull in your data.**

The Ingest page has three tabs:

- **Connections** — link a source to your warehouse to start syncing data (shown by default)
- **Sources** — add the external systems your data comes from (e.g. Kobo Toolbox, Google Sheets)
- **Your Warehouse** — connect the database where your data will be stored (e.g. BigQuery or Postgres)

If you are setting up for the first time, work through them in this order: **Your Warehouse** → **Sources** → **Connections**.

:::note
You may need to whitelist these IP addresses in your organisation's firewall before Dalgo can connect to your data sources:
- `13.202.128.47`
- `65.2.173.97`
:::
