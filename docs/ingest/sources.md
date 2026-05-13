---
sidebar_position: 2
---

# Adding your Data Sources

**A source is any system where your data already lives. Common examples include KoboToolbox, Google Sheets, CommCare, Avni, Zoho, and many others.**

When you add a source in Dalgo, you are saving the access credentials for that system. After that, you create a connection to choose which data syncs into your warehouse.

## Viewing your sources

1. Select **Ingest** on the left menu panel.
2. Select the **Sources** tab.

![Sources list](/img/ingest/sources_list.png)

You will see a list of all sources added to your organisation. Use the search bar to find a source by name or type.

## Adding a source

1. Select **+ Add Source**.
2. In the dialog that opens, search for or select the source type (e.g. **KoboToolbox**, **Google Sheets**).
3. Enter a name for this source.
4. Fill in the required credentials or connection details. The fields shown depend on the source type. If you are unsure what credentials are needed, check the provider's documentation or contact the person who manages that system.
5. Select **Test Connection**. Dalgo will confirm it can reach the source.
6. Select **Save** once the test succeeds.

![Add Source dialog](/img/ingest/sources_add.png)

## Editing or deleting a source

1. On the **Sources** tab, select the **⋯ menu** on the source row.
2. Select **Edit** to update credentials and test again, or **Delete** to remove the source.

:::note
You cannot change the source type of an existing source. If you need a different source type, create a new source instead.
:::

:::warning
Deleting a source also removes any connections that depend on it. This cannot be undone.
:::
