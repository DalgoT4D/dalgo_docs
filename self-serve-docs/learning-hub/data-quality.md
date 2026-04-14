---
title: Data quality
description: A brief guide to how Dalgo teams use dbt tests and Elementary to monitor data quality across pipelines.
---

Data quality in Dalgo is usually checked through `dbt` tests attached to models, tables, and important fields. These tests help catch issues such as nulls, duplicates, unexpected values, and other problems that can affect reporting and decision-making.

## Elementary

For organisations with larger dbt estates or a bigger number of tables, Dalgo can also set up `Elementary`. Elementary is a dbt package used to visualise test results and monitor data quality in a more operational way.

[Learn more about Elementary here.](https://hub.getdbt.com/elementary-data/elementary/latest/)

This is especially useful when teams need to:

- monitor many tables or models at once
- review repeated failures across runs
- understand which tests are failing most often
- give delivery teams a clearer view of overall data quality health

Elementary does not replace dbt tests. It helps teams make those tests easier to review, track, and act on.

## When it is useful

Elementary is often a good fit when:

- an organisation has a growing number of dbt models
- multiple pipelines need regular monitoring
- teams want a clearer interface for reviewing test outcomes
- data quality checks need to be communicated beyond the core engineering team

If your organisation needs this kind of setup, the Dalgo team can help assess whether Elementary should be added to your project.
