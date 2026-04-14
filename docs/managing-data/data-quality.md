---
sidebar_position: 1
---

# Data Quality

To understand and review the quality of the data flowing through your Dalgo pipelines, Dalgo has custom quality testing processes in place.

Usually these are run by setting up dbt tests for different tables and indicators created for your data pipeline.

For organisations with larger dbt projects or many tables, Dalgo can also set up `Elementary`. Elementary is a dbt package that helps visualise test results and monitor data quality in one place, which makes it easier to spot failures, patterns, and follow-up actions across a wider set of models.

## Elementary setup

This view shows the Elementary package configured for a project so dbt test results can be surfaced in a more operational way.

![Elementary setup](/img/managedata/elementary.png)

## Data quality page

Once data quality monitoring is fully set up, the page gives teams a clearer view of what is passing, what is failing, and where they may need to investigate further.

![Data quality page](/img/managedata/dq.png)

The exact checks available in your Dalgo environment may vary by organisation and by pipeline. If you need help interpreting a failing check, contact your data team or `support@dalgo.org`.
