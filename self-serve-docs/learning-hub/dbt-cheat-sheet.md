---
title: dbt cheat sheet
sidebar_label: dbt cheat sheet
description: What dbt is, how Dalgo teams use it, the commands you will run most often, and the core concepts you will use every day.
---

`dbt` (data build tool) is an open-source tool that transforms data inside your data warehouse using SQL. Raw data lands in the warehouse from APIs, apps, forms, and other systems. dbt cleans, reshapes, and organizes that data into tables that analysts and dashboards can actually use.

## What dbt does

- Transforms data that is already in the warehouse.
- Lets you write each transformation as a SQL `SELECT` statement.
- Builds tables or views in the right order based on dependencies.
- Runs tests and generates documentation for your models.

## What dbt does not do

- It does not move data into the warehouse.
- It does not replace your warehouse, ingestion pipelines, or SSH setup.

> For deeper learning, visit the [official dbt documentation](https://docs.getdbt.com).

## Before you start

Follow the [Local development setup](../local-dev-setup/), especially [GitHub setup](../local-dev-setup/github-setup), [Python and IDE setup](../local-dev-setup/python-and-ide), [SSH access](../local-dev-setup/ssh-access), and [dbt profiles](../local-dev-setup/dbt-profiles). The steps below focus on dbt itself.

## Setup checklist

### 1. Pull the latest code from GitHub

Before doing anything, make sure you have the latest version of the dbt project and are on the correct branch.

If you are new to Git, GitHub Desktop is usually easier than the command line. Open the repository, click `Fetch origin`, and confirm that you are on the branch you are supposed to work on. If you are not sure which branch to use, check with your team lead.

### 2. Create and activate a virtual environment

A virtual environment is an isolated Python environment on your machine. We use one so that project packages such as dbt and its plugins do not conflict with anything else installed on your laptop.

```bash
# Create the virtual environment once
python3 -m venv venv

# Activate it each time you open a new terminal
source venv/bin/activate
```

On Windows:

```powershell
venv\Scripts\activate
```

You will know it is active when you see `(venv)` at the start of your terminal prompt.

### 3. Install the Python requirements

Once your virtual environment is active, install the project's Python packages:

```bash
pip install -r requirements.txt
```

This installs the Python libraries needed for the dbt project on your machine.

### 4. Run `dbt clean` and `dbt deps`

Run these when you set up the project for the first time, and again whenever dbt packages change.

```bash
dbt clean
dbt deps
```

`dbt clean` deletes generated local folders such as `target/` and `dbt_packages/` so you can start fresh.

`dbt deps` installs the packages listed in `packages.yml`. In Dalgo dbt projects, these often include:

- `Elementary` for data observability and monitoring.
- `Calogica/dbt-dates` for reusable date helper macros.

### 5. Connect to the warehouse through SSH

Our data warehouse is not publicly accessible, so you usually need an SSH tunnel before dbt can connect to it.

Example pattern:

```bash
ssh -i ~/.ssh/id_rsa -L 5432:<warehouse-host>:5432 <tunnel-user>@<jump-server-host>
```

Leave that terminal running while you work. Once the tunnel is open, dbt can connect to the warehouse through `localhost`. The exact values belong in your local `~/.dbt/profiles.yml` file and should be provided by your team lead or Dalgo PoC.

## Running dbt

You rarely want to run every model in a project. Most of the time you should run only the models you changed, or the layer you are working in.

### Run everything

```bash
dbt run
```

This builds every model in the project. Avoid it unless you specifically need a full rebuild, because it is slower and puts unnecessary load on the warehouse.

### Run specific models

```bash
dbt run -s my_model_name
```

Run more than one model:

```bash
dbt run -s model_one model_two model_three
```

Run a whole folder:

```bash
dbt run -s staging
dbt run -s marts
```

### Run a model with its dependencies

Run the model and everything upstream of it:

```bash
dbt run -s +my_model_name
```

Run the model and everything downstream of it:

```bash
dbt run -s my_model_name+
```

Run both upstream and downstream:

```bash
dbt run -s +my_model_name+
```

### Run models by tag

Tags let you group related models and run them together.

In a SQL model:

```sql
{{ config(
    tags=["commcare", "gender"]
) }}

select ...
```

In a YAML file:

```yaml
models:
  - name: my_model_name
    config:
      tags:
        - commcare
        - gender
```

Run tagged models:

```bash
dbt run -s tag:commcare
dbt run -s tag:gender
```

Combine tags and folder selection:

```bash
dbt run -s tag:commcare,staging
```

### Run tests with your models

After running models, always test them.

```bash
dbt test -s my_model_name
```

Or run and test together:

```bash
dbt build -s my_model_name
```

`dbt build` is usually the safer habit because it runs the model and its tests as one step.

## A typical workflow

1. Activate your virtual environment.
2. Make sure your SSH tunnel is running.
3. Run only the models you changed.
4. Include upstream models if you changed something foundational.
5. Test the affected models, or use `dbt build`.

Example:

```bash
source venv/bin/activate
pip install -r requirements.txt
dbt run -s my_model_name
dbt test -s my_model_name
dbt build -s +my_model_name
```

## Core dbt concepts you will use daily

### Models

A model is a `.sql` file containing a `SELECT` statement. dbt runs that query and materializes the result as a table or view in the warehouse.

Dalgo dbt projects usually follow a three-layer structure:

- `models/staging/`: clean raw source data, rename columns, cast types, and remove obviously bad rows.
- `models/intermediate/`: add joins, aggregations, and business logic.
- `models/marts/`: final production-ready tables used by dashboards, reports, and analysts.

Rule of thumb: a model should reference models from the same layer or a layer below it. `marts` reference `intermediate`; `intermediate` references `staging`; `staging` references raw `sources`.

### Sources

Sources tell dbt about the raw tables that already exist in your warehouse. They are defined in YAML files and let dbt reference those raw tables cleanly and run source freshness checks.

Common files include:

- `sources.yml` for raw source tables.
- `staging.yml` for staging model documentation and tests.

### Macros

Macros are reusable SQL snippets written with Jinja. Instead of copying the same logic across many models, you write it once and call it wherever needed.

Some Dalgo dbt projects include custom macros for flattening nested CommCare JSON, such as:

- `extract_case_table_from_gender_commcare_json`
- `extract_case_table_from_wash_commcare_json`

Macros live in the `macros/` folder.

### Tests

dbt lets you define data quality tests in YAML files. These run after models are built and flag rows that fail your rules.

Common tests include:

- `not_null`
- `unique`
- `accepted_values`

Run them with:

```bash
dbt test
```

If a test fails, dbt tells you which model and column failed, and how many rows were affected.

### Configuration files

`dbt_project.yml` is the main project configuration file. It defines the project name, model folders, and default materialization settings.

`profiles.yml` stores your database connection details and usually lives at `~/.dbt/profiles.yml`. It is local to your machine and should not be committed to the repository.

## Folder structure overview

```text
dbt/
├── models/
│   ├── staging/        # Clean raw data, one-to-one with source tables
│   ├── intermediate/   # Business logic, joins, aggregations
│   └── marts/          # Final production tables for dashboards and reporting
├── macros/             # Reusable SQL functions
├── tests/              # Custom data quality tests
├── dbt_project.yml     # Project-level config
└── packages.yml        # Package dependencies
```

## Common commands cheat sheet

```bash
pip install -r requirements.txt # Install project Python dependencies
dbt clean                       # Delete generated files and start fresh
dbt deps                        # Install packages from packages.yml
dbt run                         # Build all models
dbt run -s staging              # Build only staging models
dbt run -s my_model_name        # Build one model
dbt test                        # Run all data quality tests
dbt build -s my_model_name      # Run a model and its tests together
dbt docs generate               # Generate the dbt documentation site
dbt docs serve                  # Open the dbt docs site locally
```
