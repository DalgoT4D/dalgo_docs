---
sidebar_position: 9
---

# Schema Changes

When you need to make changes to your source data schema, Dalgo provides a streamlined process to ensure your sync pipelines are updated accordingly.

1. **Detecting Changes**: Dalgo automatically detects any changes you make to your source data schema. This includes additions, deletions, or modifications of columns in your tables.

2. **Pending Changes Section**: On the ingest page, you'll find a "Pending Changes" section only if there is a schema change in any of the connections. This section lists all connections with detected schema changes, making it easy to manage them.
<img width="1420" alt="pending-actions" src="https://github.com/DalgoT4D/dalgo_docs/assets/35729337/2aeba855-8a5a-4ac0-91d3-ab2cdcf54977" />

3. **Viewing Details**: By clicking the "View" button next to each connection in the "Pending Changes" section, you can see detailed information about the changes, such as which columns have been added or removed.

4. **Approving or Ignoring Changes**: You have the flexibility to either approve or ignore these changes based on your needs. Approving the changes will automatically sync your data with the updated schema. Once approved the pending actions tab will disappear.

<img width="444" alt="catalog" src="https://github.com/DalgoT4D/dalgo_docs/assets/35729337/bdc10b90-03e8-4b90-ba7a-396229769ee2" />

5. **Handling Breaking Changes**: If a change involves the removal of a critical field, such as a cursor field, it will be identified as a breaking change. These changes cannot be approved through Dalgo. Instead, you will need to resolve the issue at the source to ensure your connections remain operational.

6. **Seamless Syncing**: Once the schema changes are approved, Dalgo will seamlessly sync the data with the updated schema, ensuring consistency and accuracy across your data transformations.

> Note: It's important to ensure that your schema changes are compatible with your data sources and downstream applications. Consult with your data team or reach out to Dalgo support (support@dalgo.org) for assistance.

By following these steps, you can effectively manage schema changes within your Dalgo data pipeline, ensuring that your data transformations remain accurate and up-to-date.
