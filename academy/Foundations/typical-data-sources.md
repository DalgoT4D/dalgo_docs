---
sidebar_position: 3
title: Typical Data Sources
---

# Typical Data Sources

Dalgo supports 300+ source connectors through Airbyte. Every source has its own authentication requirements.

## Commonly Used Data Sources

- Google Sheets
- KoboToolbox
- Avni
- CommCare
- DHIS2
- Salesforce

For a broader list of source connectors, see [Airbyte source connectors](https://docs.airbyte.com/integrations/sources).

## Google Sheets

If your spreadsheet is viewable by anyone with its link, no further action is needed.

If not, follow these steps.

### Create a service account

1. Open the [Service Accounts Page](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts) in your Google Cloud Console.
2. Select an existing project, or create a new project.
3. Click `+ Create service account`.
4. Enter a name and description for the service account, then click `Create and Continue`.
5. Under Service account permissions, select the roles to grant. We recommend the `Viewer` role.

### Generate a key

1. Open the [API Console / Credentials](https://console.cloud.google.com/apis/credentials) page.
2. Click on the email address of the service account you created.
3. In the `Keys` tab, click `+ Add key`, then click `Create new key`.
4. Select `JSON` as the key type, then continue to download the JSON key file.

### Enable the Google Sheets API

1. Open the [API Console / Library](https://console.cloud.google.com/apis/library) page.
2. Make sure you have selected the correct project.
3. Find and select `Google Sheets API`.
4. Click `ENABLE`.

### Share your sheet with the service account

Share the sheet with the service account email, or make the spreadsheet viewable by anyone with the link.

Reference video: [Give your service account access to your spreadsheet](https://youtu.be/GyomEw5a2NQ).
