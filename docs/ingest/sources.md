---
sidebar_position: 2
---

# Managing your Data Sources

**Your data Sources are the different places where data lies. These could be Google Sheets, KoboToolbox, Avni, or CommCare to name a few. Dalgo can connect to over 300 data sources. _We also develop connectors for new sources to meet your needs_.**

**If your spreadsheet is viewable by anyone with its link, no further action is needed. If not, give your Service account access to your spreadsheet.**

**Create a service account**

1. Open the [Service Accounts Page](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts) in your Google Cloud console.
2. Select an existing project, or create a new project.
3. At the top of the page, click + Create service account.
4. Enter a name and description for the service account, then click Create and Continue.
5. Under Service account permissions, select the roles to grant to the service account, then click Continue. We recommend the Viewer role.

**Generate a key**

1. Go to the [API Console/Credentials](https://console.cloud.google.com/apis/credentials) page and click on the email address of the service account you just created.
2. In the Keys tab, click + Add key, then click Create new key.
3. Select JSON as the Key type. This will generate and download the JSON key file that you'll use for authentication. Click Continue.

**Enable the Google Sheets API**

1. Go to the [API Console/Library](https://console.cloud.google.com/apis/library) page.
2. Make sure you have selected the correct project from the top.
3. Find and select the Google Sheets API.
4. Click ENABLE.

If your spreadsheet is viewable by anyone with its link, no further action is needed. If not, [give your Service account access to your spreadsheet](https://youtu.be/GyomEw5a2NQ%22).

1. Click on the "Sources" tab in the Ingest section
2. To add a source, click on "+ New Source"

<img width="1469" alt="2 2 2) Add source" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/b649b580-8769-435c-b0d7-420092978bda" />

3. Give your source a unique name
4. Select the type of source you want to add, and the required credentials for this source will appear.

<img width="562" alt="2 2 4) Add source credentials" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fd10e1d8-f597-4c09-a1d8-77d8a55d259a" />

5. Fill in the required credentials.
6. Click 'save changes and test'.
7. If you have entered the correct credentials the source will be added.
   > Note: If you do not have the required credentials for your selected source then contact the relevant person on your team who would have them. Else simply google it and you will find instructions on where and how to find these source credentials.
8. To edit a source, click the 3 dots on the right of the source bar and select edit. Then click 'save changes and test'.
   Note: You cannot change the source type. Instead add a new source of the new type.
9. To delete a source, click the 3 dots on the right of the source bar and select delete, then confirm.
