---
sidebar_position: 3
---

# Troubleshooting

**Common issues and how to fix them.**

## My pipeline failed

1. Go to **Data → Overview** and find the failed pipeline.
2. Select the red bar to see which task failed.
3. Expand the task to read its logs — the error message usually says what went wrong.

Common causes:
- **Source credentials expired** — re-enter credentials in **Data → Ingest → Sources**
- **dbt model error** — open **Data → Transform → DBT Transform** and run the failing task manually to see the full error
- **Warehouse connection dropped** — test the connection in **Data → Ingest → Warehouse**

## My dashboard shows stale data

Check when your last pipeline ran in **Data → Overview**. If the pipeline hasn't run recently, trigger it manually from **Data → Orchestrate**.

If the pipeline is running successfully but charts still look stale, the dashboard may be drawing from a different table than expected. Contact support@dalgo.org.

## I can't connect a source

1. Check that the credentials you entered are correct.
2. Make sure Dalgo's IP addresses are whitelisted in the source system's firewall:
   - `13.202.128.47`
   - `65.2.173.97`
3. Try **Save Changes and Test** again. If the test fails, the error message will say whether it's a credential or network issue.

## I didn't receive my invitation email

1. Check your spam folder for an email from **notifications@dalgo.org**.
2. If it's not there, ask an Account Manager in your organisation to resend the invitation from **Settings → User Management → Pending Invitations**.

## I see "No pipelines available" on the Overview

Your implementation partner or the Dalgo team needs to set up pipelines for your organisation first. Reach out to them or contact support@dalgo.org.

## Something else

→ [Getting help](./getting-help.md) — how to report a bug or ask a question.
