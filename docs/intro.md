---
sidebar_position: 1
---

# Welcome to Dalgo

## Leverage Dalgo to manage your Data. So that you can Learn from it.

**Our open-source data platform enables NGOs to harness the power of data by automating data consolidation, transformation, storage and visualization on a unified interface.**

This ensures that you spend no time on repetitive manual data crunching and can direct your efforts towards the use of data to monitor and evaluate your impact. Learning, iterating and communicating your impact internally and externally.

Visit [dalgo.in](dalgo.in) to learn more about the product and pricing, or contact us at support@dalgo.in

Our team is always available to provide you with support via Discord. [Join our server](https://discord.gg/C7BKvYPufp) and chat with us on Dalgo Support.

## Platform Overview
dashboard.dalgo.in is a platform for your M&E team, data analysts/engineers, or IT team. 
It enables you to setup and monitor your automated data pipelines through the following sections:

1. **Ingest:** Setup your data warehouse>Connect to your sources of data>Connect your sources to your data warehouse
2. **Transform:** Connect to your DBT repository which contains the SQL code for your data transformation (cleaning/merging/computation).
3. **Orchestrate:** Schedule your data ingestion and/or transformation
4. **Pipeline Overview:** Monitor the health of your pipeline with a view of all your past runs.
5. **Analysis:** View your data on your Superset dashboards within the platform and ensure that it is being populated as per your expectations.
Note : *This section will only be made available to you if you have subscribed to Dalgo with Superset.*
6. **User Management**: Add relevant team members to your organisation and collaborate.

# Managing up your data pipeline
As a user of Version 1 of Dalgo your data pipelines will likely already setup for you by us or one of our partners. The steps below are intended to help you make changes to your pipeline as you use it over time.

## 1. Logging in as a first time user
1. Once you have subscribed to Dalgo you will receive an invitation to the platform from notifications@dalgo.in .

<img width="1308" alt="1) Invite" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/d53e3893-c44b-403a-ab0e-c0f25b69f0b5">

2. Click on the link, it will take you to the Dalgo platform.
3.  Accept the invitation and setup your password

<img width="735" alt="1 2)Accept invite" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/06696041-9b80-433d-a320-e4c73e3542fb">

4. You are now logged into the platform. 
Note : If the pipeline overview page says “No pipelines available. Please create one” then reach out to support@dalgo.in or the partner that is helping you with setup.

## 2. Ingest

**Dalgo runs data ingestion (pulling data from sources into your warehouse) using [airbyte](https://docs.airbyte.com/cloud/core-concepts) .**

### 2.1. Managing your Warehouse

**Your warehouse is the single location where data from various sources will be pulled in and stored, before and after transformation.**
1. Click on Ingest from the left menu pane and then select the ‘Your Warehouse’ tab.
2. Dalgo currently supports BigQuery and PostgreSQL as warehouses for the platform. You should see one of these already setup
3. If you wish to edit your Warehouse name then click on the green edit button at the bottom of the window.

<img width="1467" alt="2 1 3  Edit Warehouse" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/361a8e1f-7f6e-4a5c-bef8-fe83f2ee6d7f">

4. If you wish to use a different warehouse from what is currently setup then select delete warehouse and confirm. Then select ‘add a new warehouse’. 
5. To setup a new warehouse name your warehouse, select the type of warehouse, fill in the relevant credentials, then click ‘save changes and test’.

<img width="898" alt="2 15) Select Warehouse" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/2c98f1e3-96a0-4451-a648-ab25daa7381b">
___
<img width="606" alt="2 152) Add WH Details" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/8ea11da5-05c1-4f5e-be3a-22fffa820638">
___

Note : Please seek advice from your internal tech team, your tech partner, or the Dalgo team (support@dalgo.in) if you need guidance on this.

### 2.2. Managing your Data Sources

**Your data Sources are the different places where data lies. This could be Google Sheets, KoboToolbox, Avni, or CommCare to name a few. Dalgo can connect to over 300 data sources. We also develop connectors for new sources to meet your needs.**

1. Click on the “Sources” tab in the Ingest section
2. To add a source, click on “+ New Source”

<img width="1469" alt="2 2 2) Add source" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/b649b580-8769-435c-b0d7-420092978bda">

3. Give your source a name 
4. Select the type of source you want to add and the required credentials for this source will appear.

<img width="562" alt="2 2 4) Add source credentials" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fd10e1d8-f597-4c09-a1d8-77d8a55d259a">

5. Fill in the required credentials 
Click ‘Save changes and test’. 
6. If you have entered the correct credentials the source will be added. 
Note: If you do not have the required credentials for your selected source contact the relevant person on your team who would have them. Else simply google it and you will find instructions on where and how to find these source credentials.
7. To edit a source, click the 3 dots on the right of the source bar and select edit.Then click save changes and test.
Note: You cannot change source type. Instead add a new source of the new type.
8. To edit a source, click the 3 dots on the right of the source bar and select delete, then confirm.

### 2.3 Managing your Connections

**This is the section where you direct the data coming in from the data sources you have setup to your warehouse and specify which tables from this source you want to sync, and how you wish to sync it.**

1. Click on the ‘connections’ tab in the Ingest section
2. To add a new connection select “+New connection”

<img width="1470" alt="2 3 2) Select connections" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fb81addc-d29e-477f-bb5b-3c05b0c21854">

3. Give your connection a name and select which source you want to build the connection for. You will see all the source tables that you added appear in the streams column

<img width="561" alt="2 3 3) Ad connection" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/48604c29-caf2-499d-b0e2-d26899000fc2">

4. Select whether you want the data to be normalised or raw
5. Select the relevant streams (tables) from your data source that you wish to connect by toggling the sync button.
6. Then select how you would like this data to be synced and click ‘Connect’.
7. To manually sync the data, select the ‘Sync’ button on the right side of the connections bar. The sync will begin to run and logs will populate in the section below.

<img width="1470" alt="2 3 7) Manual sync- Blur" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fa8573cd-9861-4942-ad08-89188b0774a2">

## 3. Transform

**Dalgo runs data transformations(data cleaning, joining, computation) using [DBT(Data build Tool)](https://docs.getdbt.com/docs/introduction) .**

1. Select Transform on the left menu panel

<img width="1470" alt="3 1) Select Transform" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/ca2afe55-e8ab-4523-b86c-51271a03663b">

2. To setup your transformations click connect and setup repo.
3. Paste your github repo URL (where the code for your data transformations lies)
4. Specify the target schema. (Generally ‘prod’ or ‘staging’) 

<img width="574" alt="3 4) Setup Transform" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/c15b5823-4e0f-4537-93e1-85e41e9c83cd">

5. Click save
6. You may manually run a function to check if your transformation is working as expected and then select execute.

<img width="1470" alt="3 6) Select Function (blur)" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/5b5258e3-ba95-4b65-8671-ad70ab500a21">

7. The function will be executed and logs will be generated below.

<img width="1469" alt="3 7) Logs generated (blur)" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/51f499b7-2598-4e15-9853-c65d2f5b93d9">

## 4. Orchestrate

**Dalgo uses [Prefect](https://docs.prefect.io/latest/) for orchestration. This enables you to automate your data pipeline by setting up scheduled ingestion and transformation.**

1. Select orchestrate on the left menu panel.
2. Select “+ New Pipeline” -This will take you to the “Create a new Pipeline” screen

<img width="1470" alt="4 2  Select Orchestrate" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/6f50f503-47a1-4b16-adc2-3383552e2648">

3. Give your pipeline a name.
4. Select one or more of the connections you have setup
5. Toggle ‘Transform data?’ as per your needs.
Set the schedule for your pipeline.
6. Click save

<img width="1470" alt="4 7  Orch details" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/d8275b9d-9966-4a06-a0cd-424cdc9aaf69">

7. You can choose to run a pipeline manually (i.e. at a day and time other than what has been scheduled) by selecting ‘Run’ 

<img width="1467" alt="4 8  orch manual run" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/aea29aeb-8d46-4c52-ae67-13657748603e">

8. You can view logs of your past runs by selecting ‘logs’. Click ‘show more’ to see the details.

<img width="613" alt="4 9  Orch logs" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/b83adacc-17a4-42b7-82d4-111115e8461f">

# Monitoring your data pipelines

## 5. Pipeline Overview

**This section is intended to help you monitor the health of your data pipelines and provide you with a way to investigate further.**

1. Once you have setup at least one pipeline in the orchestration section you will see it in the overview section. Each pipeline will be represented separately.

<img width="1470" alt="5 1) overview section" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/ac77e6de-f687-49ed-b19a-7b4e1bf7b040">

2. Each vertical bar represents a pipeline run. A green bar represents success. A yellow bar represents a successful run, but a failure in ancillary functions, for example ‘DBT test’. A red line indicates that the pipeline run has failed.
3. To investigate further, hover over the bar, note the start time, and click on check logs.

<img width="1470" alt="5 3) Overview+logs" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/8b14716b-3cbd-417a-ae64-b3e5187c7c3f">

4. This will take you to the orchestrate section, where you would need to select logs and check for logs corresponding to the start time of the relevant run. (ref. Step 8 under orchestrate)

## 6. Analysis

**Dalgo runs and offers a hosted version of superset for visualisation. Subscription to superset is optional.**

1. If you have not subscribed to superset you will see a message to this effect. Kindly contact support@dalgo.in if you wish to subscribe.
2. If you have subscribed to superset you will see a button for Google sign-in, click on it.

<img width="1464" alt="6 2) DSS sign in" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/1f434c4f-ccfa-4f8f-b508-12a6e9666408">

3. A pop-up window will emerge. Select sign in with google.

<img width="1470" alt="6 3 gogle sign in" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/1d636c42-81fe-4b8a-9c6e-298f63f5111b">

4. If your superset admin has granted your email ID access you will be successfully logged in. Else contact your superset admin.
5. Once successfully logged in, close the pop-up window. You will now be able to access superset via Dalgo to build your charts and monitor if visualisations are being populated as expected.

<img width="1470" alt="6 5 temp ss" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/a7368ae4-0448-40eb-96f5-02b6d4ff8ea2">

# User Management

**User management enables you to collaborate with relevant team members while using Dalgo**

1. Click on user management in the left menu pane.
2. In the ‘Users’ tab you will be able to see all your current users of Dalgo and their roles. Dalgo currently has two roles; Account manager and pipeline manager.
- An account manager is likely to be the person who has setup your account. They can invite or delete any user and have the power to transfer their role to a pipeline manager.
- Pipeline managers are the team members who monitor the health of the pipeline and manage changes to it. They can also invite and delete users of the same role.

<img width="1470" alt="8) user management" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/779dcc30-4ca7-4f1a-98ae-bea27fd4c61b">

3. To invite a user, select invite user, enter their email, and select send invitation.

<img width="597" alt="9)user invite" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/09a79781-b6ab-414c-a334-92669ce27b49">

4. Once a user is invited you will see their name in the Pending invitations tab. You can choose to delete the invite or resend it using the three dots to the right.
5. To delete a user or transfer role ownership select the 3 dots to the right of their name and then pick the relevant option, then confirm.

<img width="1468" alt="10)pendinginvite" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/4a7ebdf2-6b50-4ca9-bdac-cd7e34eaf102">

















