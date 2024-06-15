# Welcome to Dalgo

## Leverage Dalgo to manage your Data. So that you can Learn from it.

**Our open-source data platform enables NGOs to harness the power of data by automating data consolidation, transformation, storage and visualization through a unified interface.**

This ensures that you spend no time on repetitive manual data crunching and can direct your efforts towards the use of data to monitor and evaluate your impact. Learning, iterating and communicating your impact internally and externally.

Visit [dalgo.in](https://dalgo.in/) to learn more about the product and pricing, or contact us at support@dalgo.in

Our team is always available to provide you with support via Discord. [Join our server](https://discord.gg/C7BKvYPufp) and chat with us on Dalgo Support.

## Platform Overview

[dashboard.dalgo.in](https://dashboard.dalgo.in/) is the interface for your M&E team, data analysts/engineers, or IT team.
It enables you to set up and monitor your automated data pipelines through the following sections:

1. **Ingest:** Set up your data warehouse>Connect to your sources of data>Connect your sources to your data warehouse.
2. **Transform:** Connect to your DBT repository which contains the SQL code for your data transformation (cleaning/merging/computation).
3. **Orchestrate:** Schedule your data ingestion and/or transformation.
4. **Pipeline Overview:** Monitor the health of your pipeline with a view of all your past runs.
5. **Analysis:** View your data on your Superset dashboards within the platform and ensure that it is being populated as per your expectations.
6. **User Management**: Add relevant team members to your organisation and collaborate.
   > Note : _Superset will only be made available to you if you have subscribed to Dalgo with Superset._

# Managing up your data pipeline

As a user of Version 1 of Dalgo your data pipelines will likely already be set up for you by us or by one of our partners. The steps below are intended to help you make changes to your pipeline as you use it over time.

## 1. Logging in as a first time user

1. You will receive an invitation to the platform from notifications@dalgo.in.

<img width="1308" alt="1) Invite" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/d53e3893-c44b-403a-ab0e-c0f25b69f0b5" />

2. Clicking on the link will take you to the Dalgo platform.
3. Accept the invitation and set up your password.

<img width="735" alt="1 2)Accept invite" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/06696041-9b80-433d-a320-e4c73e3542fb" />

4. You are now logged into the platform.
   > Note : If the pipeline overview page says “No pipelines available. Please create one” then reach out to support@dalgo.in or to the partner who is helping you with setup.

## 2. Ingest

**Through this step Dalgo connects your different data sources to a single warehouse.**

### 2.1. Managing your Warehouse

**Your warehouse is the single location where data from various sources is stored.**

1. Click on Ingest from the left menu pane and then select the ‘Your Warehouse’ tab.
2. Dalgo currently supports BigQuery and PostgreSQL as warehouses for the platform. You should see one of these already set up.
3. If you wish to edit your Warehouse name then click on the green edit button at the bottom of the window.

<img width="1467" alt="2 1 3  Edit Warehouse" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/361a8e1f-7f6e-4a5c-bef8-fe83f2ee6d7f" />

4. If you wish to use a different warehouse from what is currently set up then select ‘delete warehouse’ and confirm. Then select ‘add a new warehouse’.
5. To set up a new warehouse name your warehouse, select the type of warehouse, fill in the relevant credentials, and click ‘save changes and test’.

<img width="898" alt="2 15) Select Warehouse" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/2c98f1e3-96a0-4451-a648-ab25daa7381b" />
___
<img width="606" alt="2 152) Add WH Details" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/8ea11da5-05c1-4f5e-be3a-22fffa820638" />

> Note : Please seek advice from your internal tech team, your tech partner, or the Dalgo team (support@dalgo.in) if you need guidance on this.

### 2.2. Managing your Data Sources

**Your data Sources are the different places where data lies. These could be Google Sheets, KoboToolbox, Avni, or CommCare to name a few. Dalgo can connect to over 300 data sources. _We also develop connectors for new sources to meet your needs_.**

**Set up the service account key**

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

1. Click on the “Sources” tab in the Ingest section
2. To add a source, click on “+ New Source”

<img width="1469" alt="2 2 2) Add source" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/b649b580-8769-435c-b0d7-420092978bda" />

3. Give your source a unique name
4. Select the type of source you want to add, and the required credentials for this source will appear.

<img width="562" alt="2 2 4) Add source credentials" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fd10e1d8-f597-4c09-a1d8-77d8a55d259a" />

5. Fill in the required credentials.
6. Click ‘save changes and test’.
7. If you have entered the correct credentials the source will be added.
   > Note: If you do not have the required credentials for your selected source then contact the relevant person on your team who would have them. Else simply google it and you will find instructions on where and how to find these source credentials.
8. To edit a source, click the 3 dots on the right of the source bar and select edit. Then click 'save changes and test'.
   Note: You cannot change the source type. Instead add a new source of the new type.
9. To delete a source, click the 3 dots on the right of the source bar and select delete, then confirm.

### 2.3 Managing your Connections

**This is the section where you direct the data coming in from your data sources into your warehouse and specify which tables from this source you want to sync and how you wish to sync them.**

1. Click on the ‘connections’ tab in the Ingest section
2. To add a new connection select “+New connection”

<img width="1470" alt="2 3 2) Select connections" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fb81addc-d29e-477f-bb5b-3c05b0c21854" />

3. Give your connection a name and select the source for which you want to build the connection. You will see all the source tables that you added appear in the streams column.

<img width="561" alt="2 3 3) Ad connection" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/48604c29-caf2-499d-b0e2-d26899000fc2" />

4. Select whether you want the data to be [normalised](https://docs.airbyte.com/understanding-airbyte/basic-normalization).
5. Select the relevant streams (tables) from your data source that you wish to connect by toggling the sync button.
6. Then select how you would like this data to be synced and click ‘Connect’.
7. To test your configuration, select the ‘Sync’ button on the right side of the connections bar. The sync will begin to run and logs will populate in the section below.

<img width="1470" alt="N2 3 7) Manual sync- Blur" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/00d705da-6ae1-4dfa-9f6b-39915e3370d8" />

## 3. Transform

**Dalgo runs data transformations (data cleaning, joining, computation) using [dbt (data build tool)](https://docs.getdbt.com/docs/introduction) .**

1. Select Transform on the left menu panel.

<img width="1470" alt="3 1) Select Transform" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/ca2afe55-e8ab-4523-b86c-51271a03663b" />

2. To set up your transformations click "connect and set up repo".
3. Paste your github repo URL (where the code for your data transformations lies)
4. Specify the target schema. (Generally ‘prod’ or ‘dev’, this depends on your dbt developer’s naming convention)

<img width="574" alt="3 4) Set up Transform" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/c15b5823-4e0f-4537-93e1-85e41e9c83cd" />

5. Click save
6. To check your setup, select a function and click execute.

<img width="1021" alt="image" src="https://github.com/DalgoT4D/dalgo_docs/assets/2160416/68d29623-f080-465f-b896-5caf05560612" />

7. The function will be executed and the logs displayed below.

<img width="1021" alt="image" src="https://github.com/DalgoT4D/dalgo_docs/assets/2160416/d33ea3df-5803-4085-b01d-c68d83d0e645" />

8. You can add a custom task

<img width="561" alt="image" src="https://github.com/DalgoT4D/dalgo_docs/assets/2160416/8affb19c-77e0-4da4-a819-fb5d63590182" />

which will appear at the bottom of your list

<img width="1041" alt="image" src="https://github.com/DalgoT4D/dalgo_docs/assets/2160416/efe36719-829c-460d-9644-a54e4c01dcbe" />

## 4. Orchestrate

**Through this step Dalgo enables you to automate your data pipeline by setting up scheduled ingestion and transformation.**

1. Select orchestrate on the left menu panel.
2. Select “+ New Pipeline” -This will take you to the “Create a new Pipeline” screen

<img width="1470" alt="N4 2 SlctOrch" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/e966b8e9-8186-4c84-a316-1ecceae3a9b4" />

3. Give your pipeline a name.
4. Select one or more of the connections you have set up.
5. Toggle ‘Transform data?’ as per your needs.
6. Set the schedule for your pipeline and click Save.

<img width="1470" alt="NN4 7 OrchDtls" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/46854fb0-f203-4c34-97f1-6dcc852837ae" />

7. You can test your pipeline by clicking 'Run'.

<img width="1467" alt="N4 8  orch manual run" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/65adb73d-e227-4aa0-8807-95529fd1992e" />

8. You can view logs of your past runs by selecting ‘last logs’. Click ‘show more’ to see the details.

<img width="613" alt="N4 9  Orch logs" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/72e90987-3754-41f5-a461-9c4926a9c9ff" />

# Monitoring your data pipelines

## Pipeline Overview

**This section is intended to help you monitor the health of your data pipelines and provide you with a way to investigate further.**

1. Once you have set up at least one pipeline in the orchestration section you will see it in the overview section. Each pipeline will be represented separately.

<img width="1465" alt="N5 1 ovrvwsect" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/c56e2733-09a4-42dc-8c8b-d6d187ab55f0" />

2. Each vertical bar represents a pipeline run. A green bar represents success. A yellow bar represents a successful run, but a failure in ancillary functions, for example in a ‘DBT test’. A red line indicates that the pipeline run has failed.
3. To investigate further, hover over the bar, note the start time, and click on check logs.

<img width="1470" alt="N5 3) Overview+logs" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/e09f3d8f-7f3c-47e1-bc5b-04dc4bea3410" />

4. This will take you to the orchestrate section, where you would need to select logs and check for logs corresponding to the start time of the relevant run. (ref. Step 8 in the orchestrate section above)

# Analysis

**Dalgo runs and offers a hosted version of Superset for visualisation. Subscription to superset is optional.**

1. If you have not subscribed to Superset you will see a message to this effect. Kindly contact support@dalgo.in If you wish to add Superset to your subscription.
2. If you have subscribed to Superset you will see a button for Google sign-in, click on it.

<img width="1464" alt="N6 2) DSS sign in" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/afe2d22c-14de-47f8-8acd-8417643b6220" />

3. A pop-up window will appear. Select Sign In with Google.

<img width="1470" alt="NN6 3 gogle sign in" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/69b470be-5cbc-4f98-84f7-94e7f29431b2" />

4. If your Superset admin has granted access to your email ID, you will be successfully logged in. Else contact your Superset admin.
5. Once successfully logged in, close the pop-up window. You will now be able to access Superset via Dalgo to build your charts and monitor if visualisations are being populated as expected.

<img width="1464" alt="N6 5 ss" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/0e767faf-a140-4ab9-983d-4b803f0f5aab" />

## Usage Dashboard

**Dalgo offers a usage analytics dashboard for organizations who have subscribed to Superset Visualization. This dashboard gives you an overview of how well the visualizations have been adopted by the users in your organization. Insights drawn from here can be used to optimize dashboard utilization and decision making throughout your organization**

**Metrics tab**

1. Active Users - This bar graph tells you the total number of active and inactive users in your org. A user is defined as active if they have at least one visit to a dashboard.
2. List of users - This table shows all the users in your org with their total visits to dashboard(s) assigned to them. You can map dashboards in Superset to a particular set of user(s) who are supposed to see them.
3. List of dashboards - This table shows all the dashboards created under your org along with the total number of visits made to them.

Filters present at the top allow you to view your metrics across various dimensions of time (month), role and dashboard.

![usage1](https://github.com/DalgoT4D/dalgo_docs/assets/39583356/1fb325b2-8b1c-4e10-8a16-7913d680789e)

**Trends tab**

1. No of users accessing the dashboard - This number card with trendline chart shows a monthly trend of total number of users accessing the dashboard(s). The number itself shows the number of users accessing the dashboard in the current month and the percentage shows the change in the number compared to the previous month.
2. No of visits per user - This number card with trendline chart depicts the trend of average number of visits per user for the dashboard(s). This number is the average number of visits per user for the current month while the percentage shows the change from the previous month.

Top level filters allow you to look at the trend(s) across various slices of role and dashboard in your organization.

![usage2](https://github.com/DalgoT4D/dalgo_docs/assets/39583356/0110b364-a216-40d9-ba1b-c1a8bc3c8d6c)

## User Management

**User management enables you to collaborate with relevant team members while using Dalgo. It llows you to add different users to the platform and assign them a role that grants the added user relevant 'view' or 'update' permissions**

1. Click on User Management in the left menu pane.
2. In the ‘Users’ tab you will be able to see all your current users of Dalgo and their roles.
3. To invite a user, select invite user, enter their email and the role you want to give them, and select send invitation.

<img width="560" alt="image" src="https://github.com/DalgoT4D/dalgo_docs/assets/2160416/c0a228e8-7f90-4f20-ac6b-20de2976a08e" />

4. Once a user is invited you will see their name in the Pending invitations tab. You can choose to delete the invite or resend it using the three dots to the right.
5. To delete a user or transfer role ownership select the 3 dots to the right of their name and then pick the relevant option, then confirm.

<img width="1468" alt="10)pendinginvite" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/2f4aa20e-13e7-4ddf-bb9f-d9dc07c1dce1" />

6. These are the available roles in Dalgo with their associated permissions:

| Role             | User management | Warehouse | Sources | Connections | Transform | Orchestrate | Superset Usage dashboard |
| ---------------- | --------------- | --------- | ------- | ----------- | --------- | ----------- | ------------------------ |
| Account Manager  | Update          | Update    | Update  | Update      | Update    | Update      | View                     |
| Pipeline Manager | View            | View      | Update  | Update      | Update    | Update      | View                     |
| Analyst          | View            | View      | View    | View        | Update    | View        | View                     |
| Guest            | View            | View      | View    | View        | View      | View        | View                     |

## Writing Schema Changes

When you need to make changes to your data schema, Dalgo provides a streamlined process to ensure your transformations are updated accordingly.

1. **Detecting Changes**: Dalgo automatically detects any changes you make to your data schema. This includes additions, deletions, or modifications of columns in your tables.
2. **Notification System**: Once a schema change is detected, you will receive an email notification, keeping you informed about the changes.
<img width="601" alt="schema-notification" src="https://github.com/DalgoT4D/dalgo_docs/assets/35729337/17712e87-b1cb-4671-80bd-f2f814ab04d6">

3. **Pending Changes Section**: On the ingest page, you’ll find a "Pending Changes" section only if there is a schema change in any of the connections. This section lists all connections with detected schema changes, making it easy to manage them.
<img width="1420" alt="pending-actions" src="https://github.com/DalgoT4D/dalgo_docs/assets/35729337/2aeba855-8a5a-4ac0-91d3-ab2cdcf54977">

4. **Viewing Details**: By clicking the "View" button next to each connection in the "Pending Changes" section, you can see detailed information about the changes, such as which columns have been added or removed.

5. **Approving or Ignoring Changes**: You have the flexibility to either approve or ignore these changes based on your needs. Approving the changes will automatically sync your data with the updated schema. Once approved the pending actions tab will disappear.

<img width="444" alt="catalog" src="https://github.com/DalgoT4D/dalgo_docs/assets/35729337/bdc10b90-03e8-4b90-ba7a-396229769ee2">

6. **Handling Breaking Changes**: If a change involves the removal of a critical field, such as a cursor field, it will be identified as a breaking change. These changes cannot be approved through Dalgo. Instead, you will need to resolve the issue at the source to ensure your connections remain operational.

7. **Seamless Syncing**: Once the schema changes are approved, Dalgo will seamlessly sync the data with the updated schema, ensuring consistency and accuracy across your data transformations.

> Note: It's important to ensure that your schema changes are compatible with your data sources and downstream applications. Consult with your data team or reach out to Dalgo support (support@dalgo.in) for assistance.

By following these steps, you can effectively manage schema changes within your Dalgo data pipeline, ensuring that your data transformations remain accurate and up-to-date.
