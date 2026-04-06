---
sidebar_position: 3
---

# Managing your Connections

**A connection tells Dalgo what data to sync from a saved source into your warehouse.**

If a source answers "where does the data live?", a connection answers "which data should be copied into the warehouse, and how should it sync?".

1. Click the `Connections` tab in the Ingest section.
2. To add a new connection, click `+ New Connection`.

<img width="1470" alt="2 3 2) Select connections" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fb81addc-d29e-477f-bb5b-3c05b0c21854" />

3. Give your connection a name and select the source you want to sync. The available source tables or streams will appear in the streams column.

<img width="561" alt="2 3 3) Ad connection" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/48604c29-caf2-499d-b0e2-d26899000fc2" />

4. Select whether you want the data to be [normalised](https://docs.airbyte.com/understanding-airbyte/basic-normalization).
5. Turn on sync for the relevant streams or tables from that source.
6. Choose how you want the data to sync, then click `Connect`.
7. To test your configuration, click the `Sync` button on the right side of the connection row. The sync will begin to run and logs will populate in the section below.

<img width="1470" alt="N2 3 7) Manual sync- Blur" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/00d705da-6ae1-4dfa-9f6b-39915e3370d8" />

## Schema changes

If columns or fields change in your source data, Dalgo detects those schema changes on the relevant connection and shows them as pending changes.

1. Dalgo automatically detects additions, removals, or changes to columns in your source tables.
2. When a change is detected, a **Pending Changes** section appears in Ingest and lists the affected connections.

<img width="1420" alt="pending-actions" src="https://github.com/DalgoT4D/dalgo_docs/assets/35729337/2aeba855-8a5a-4ac0-91d3-ab2cdcf54977" />

3. Click `View` next to a connection to review what changed.
4. You can approve or ignore those changes. If you approve them, Dalgo updates the connection and the pending changes entry disappears.

<img width="444" alt="catalog" src="https://github.com/DalgoT4D/dalgo_docs/assets/35729337/bdc10b90-03e8-4c90-ba7a-396229769ee2" />

5. If a change removes a critical field, such as a cursor field, Dalgo treats it as a breaking change. These changes cannot be approved in Dalgo and must be fixed at the source.
6. After approved changes are applied, future syncs will use the updated schema.

> Note: Make sure schema changes are compatible with your downstream models and dashboards. If you are unsure, check with your data team or contact `support@dalgo.org`.
