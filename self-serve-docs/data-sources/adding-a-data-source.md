---
title: Adding a data source
---

Use this guide when you need to add a new source in Dalgo or prepare source-specific credentials for the team.

## What a source means in Dalgo

A source is the external system where data already lives. Common examples include Zoho, KoboToolbox, Google Sheets, CommCare, Avni, and other operational tools. Adding a source stores the access details for that system so Dalgo can read from it. A separate **connection** decides which tables or streams should sync into the warehouse.

## Add a source in Dalgo

1. Open `Ingest` and select the `Sources` tab.
2. Click `+ New Source`.

<img width="1469" alt="2 2 2) Add source" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/b649b580-8769-435c-b0d7-420092978bda" />

3. Enter a clear name for the source.
4. Select the source type. Dalgo will show the fields required for that source.

<img width="562" alt="2 2 4) Add source credentials" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fd10e1d8-f597-4c09-a1d8-77d8a55d259a" />

5. Enter the requested credentials or access details.
6. Click `Save changes and test`.
7. If the test succeeds, the source is ready to be used in a connection.

> Note: The exact credentials vary by source. Some integrations use an API key or username and password, while others require OAuth or a service account JSON file.

## Google Sheets access using a service account

Use this section only if the Google Sheet is not already publicly viewable or accessible through another approved authentication flow.

If your spreadsheet is viewable by anyone with the link, no additional setup may be needed. If it is restricted, create a service account, enable the Google Sheets API, generate a JSON key, and share the sheet with the service account email.

### Create a service account

1. Open the [Service Accounts Page](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts) in Google Cloud.
2. Select an existing project, or create a new project.
3. Click `+ Create service account`.
4. Enter a name and description, then click `Create and Continue`.
5. Under `Service account permissions`, choose the minimum access required. `Viewer` is usually enough for Google Sheets access.

### Generate a key

1. Go to the [API Console / Credentials](https://console.cloud.google.com/apis/credentials) page.
2. Click the email address of the service account you just created.
3. Open the `Keys` tab, click `+ Add key`, and select `Create new key`.
4. Select `JSON` as the key type and download the key file.
5. Store the key securely. Use this JSON file when Dalgo asks for the Google Sheets source credentials.

### Enable the Google Sheets API

1. Open the [API Console / Library](https://console.cloud.google.com/apis/library) page.
2. Make sure the correct project is selected.
3. Search for `Google Sheets API`.
4. Click `Enable`.

### Share the sheet with the service account

1. Open the Google Sheet you want Dalgo to read.
2. Click `Share`.
3. Add the service account email address as a viewer, unless a different permission level is required for your setup.
4. Save the sharing settings.
