---
sidebar_position: 3
---

# Managing your Connections

**This is the section where you direct the data coming in from your data sources into your warehouse and specify which tables from this source you want to sync and how you wish to sync them.**

1. Click on the 'connections' tab in the Ingest section
2. To add a new connection select "+New connection"

<img width="1470" alt="2 3 2) Select connections" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fb81addc-d29e-477f-bb5b-3c05b0c21854" />

3. Give your connection a name and select the source for which you want to build the connection. You will see all the source tables that you added appear in the streams column.

<img width="561" alt="2 3 3) Ad connection" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/48604c29-caf2-499d-b0e2-d26899000fc2" />

4. Select whether you want the data to be [normalised](https://docs.airbyte.com/understanding-airbyte/basic-normalization).
5. Select the relevant streams (tables) from your data source that you wish to connect by toggling the sync button.
6. Then select how you would like this data to be synced and click 'Connect'.
7. To test your configuration, select the 'Sync' button on the right side of the connections bar. The sync will begin to run and logs will populate in the section below.

<img width="1470" alt="N2 3 7) Manual sync- Blur" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/00d705da-6ae1-4dfa-9f6b-39915e3370d8" />
