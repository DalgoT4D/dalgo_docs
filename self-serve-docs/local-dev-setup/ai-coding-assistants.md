---
title: AI coding assistants
---

This page explains the most common AI coding tools you may see in Dalgo setup guides, what the different terms mean, how these tools differ, and how to set them up for dbt development. It is written for people who may be new to AI coding tools, command lines, and development environments.

For dbt work, these tools are most useful for understanding an unfamiliar repository, explaining model logic, drafting SQL and YAML, writing documentation, debugging errors, reviewing changes, and helping you move faster inside an existing project. They do **not** replace normal development discipline: you should still review changes carefully, run dbt commands locally, validate data in the warehouse, and confirm business logic before committing anything.

## **1\) Basic terms**

A **coding assistant** is an AI tool that helps you write, explain, refactor, or review code.

A **coding agent** goes a step further. Instead of only answering in chat, it can often inspect your repository, read files, edit files, run terminal commands, and use additional tools as part of the task. Codex is OpenAI’s coding agent, and Claude Code is Anthropic’s agentic coding tool. Cursor and Windsurf package similar agent-style workflows directly into their editors. 

A **CLI** means a command-line interface. You use it from a terminal window by typing commands. A CLI version of a coding agent is usually preferred by developers who are comfortable working in the terminal.

An **IDE** is an integrated development environment, meaning the editor you use to work on code. Cursor and Windsurf are full AI-oriented editors/IDEs. An **IDE extension** is an add-on that brings AI features into an existing editor like VS Code, Cursor, or Windsurf. Windsurf offers plugins for multiple editors, Claude Code has a VS Code integration, and the Codex IDE extension works in VS Code-compatible editors including Cursor and Windsurf. 

An **API** is what you use when you want to programmatically call a model from your own scripts or applications. This is different from just signing into a desktop app or paying for a chat subscription.

An **API key** is the secret credential that authenticates API requests. It should be treated like a password. OpenAI explicitly says API keys are secrets, should not be shared, should not be exposed in client-side apps, and should ideally be unique per team member; OpenAI also supports key permission levels such as All, Restricted, and Read Only. 

## **2\) ChatGPT vs Codex**

**ChatGPT** is a general-purpose assistant that can be useful for explanation, brainstorming, and one-off coding help.

**Codex** is OpenAI’s dedicated coding agent workflow for software development and repo-native work. Check the current OpenAI documentation for the interfaces and capabilities available in your environment. 

In practical terms: ChatGPT is a strong general assistant and a good companion tool, while Codex is the more purpose-built OpenAI option when you want an actual coding agent living in your repo and development workflow. That is why ChatGPT and Codex should not be treated as the same thing.

## **3\) Claude app vs Claude Code**

The normal **Claude** app/web experience is a general assistant, similar in spirit to ChatGPT.

**Claude Code** is Anthropic’s coding tool for working directly with a codebase through terminal or IDE-oriented workflows. Check Anthropic’s official documentation for the currently supported interfaces, permissions model, and plan details. 

## **4\) Cursor and Windsurf vs CLI tools vs extensions**

### **Cursor and Windsurf**

Cursor and Windsurf are the most “all-in-one” options for beginners because they combine editor, agent, chat, and terminal-oriented workflows in one interface. Cursor describes itself as an AI editor and coding agent, and Windsurf describes itself as a next-generation AI IDE built around its Cascade agent. Cursor also has a CLI, and Windsurf also has plugins for other editors if you do not want to switch fully. 

### **CLI tools**

A CLI tool is best when you are comfortable opening a repo in a terminal and want the agent to operate directly from there. Cursor CLI, Codex CLI, and Claude Code all support terminal-first workflows. Codex CLI is designed to read, change, and run code locally in your selected directory; Cursor CLI is similarly described as a way to interact with AI agents directly from the terminal; Claude Code is strongly oriented around terminal workflows as well. 

### **Extensions**

Extensions are best when you already like your current editor and want the AI inside it. Codex’s extension works in VS Code-compatible editors including Cursor and Windsurf; Claude Code integrates with VS Code; Windsurf also has plugin support for other editors and IDEs. 

### **A simple rule of thumb**

For a first-time dbt user in the Dalgo ecosystem:

* Choose **Cursor** or **Windsurf** if you want the smoothest all-in-one beginner experience.

* Choose **Codex** if you already use ChatGPT and want a dedicated OpenAI coding agent.

* Choose **Claude Code** if you prefer Anthropic’s coding workflow or like terminal-driven work.

* Use **ChatGPT** as a companion tool, not as your only development environment.

## **5\) Recommended choice for Dalgo/dbt beginners**

For most first-time users working on dbt in Dalgo, the easiest path is usually:

1. Clone the dbt repository.

2. Open it in **Cursor** or **Windsurf**.

3. Use the built-in terminal to complete Python and dbt setup.

4. Use the AI agent to understand the repository and help with changes.

5. Validate everything with dbt commands and warehouse inspection tools before committing.

That recommendation is mostly about reducing friction. With Cursor or Windsurf, you do not need to separately decide between “chat app vs terminal tool vs editor plugin” on day one. You install one editor, sign in, open the repo, and start working.

## **6\) How to set up each option**

### **Option A: Cursor**

Cursor is an AI-first editor workflow that can be useful for dbt development. Check the official Cursor documentation for the current onboarding flow, supported sign-in options, plan limits, and pricing before standardising on it for your team. 

**Typical setup flow**

1. Install Cursor.

2. Sign in.

3. Optionally import your VS Code settings.

4. Open your local dbt repo.

5. Open the integrated terminal.

6. Set up your Python environment and dbt dependencies.

7. Start with simple prompts like “Explain this dbt project structure” or “Trace the lineage of this model.”

### **Option B: Windsurf**

Windsurf provides an AI-oriented editor workflow and also supports plugin-based use in some other IDEs. Check the official Windsurf documentation for the current onboarding flow, feature availability, usage limits, and pricing. 

**Typical setup flow**

1. Install Windsurf.

2. Import existing settings if you use VS Code or Cursor.

3. Sign in or create an account.

4. Open your local dbt repo.

5. Use Cascade to explain the repository and help draft changes.

6. Use the integrated terminal for Python and dbt setup.

### **Option C: Claude Code**

Claude Code can be used through the terminal or an IDE integration. Follow Anthropic’s official installation and permissions guidance for the current recommended setup path in your environment. 

**Typical setup flow**

1. Decide whether you want the CLI or the VS Code extension.

2. Install Claude Code.

3. Sign in with your Claude account.

4. Open your dbt repo and start Claude Code from the repo root.

5. Ask it to explain the project before asking it to change anything.

6. Review diffs carefully before accepting edits.

### **Option D: Codex**

Codex supports app, CLI, IDE extension, and cloud/web workflows. Follow the current OpenAI product documentation for the available sign-in methods, rate limits, and plan coverage. 

**Typical setup flow**

1. Choose app, CLI, or IDE extension.

2. Sign in with ChatGPT or an OpenAI API key.

3. Open your dbt repository.

4. Let Codex explain the repo, then start with small changes.

5. Use the same local terminal and dbt workflow you would use without AI.

### **Option E: ChatGPT app as a companion**

ChatGPT can be useful for explanation, brainstorming, and one-off edits, but it is still best treated as a companion tool rather than the main repo-native coding agent for sustained dbt development. 

## **7\) API keys, limits, pricing, and billing**

A common beginner mistake is to assume that a chat subscription and API access are the same thing. They are not.

For OpenAI, API usage is billed and managed separately from ChatGPT subscriptions. So having a chat subscription does **not** automatically mean you have prepaid API usage. 

OpenAI’s API uses API keys for authentication, and OpenAI advises that keys should be kept secret, not shared, not exposed in browser/mobile code, and ideally managed with separate keys per team member and appropriate permissions. OpenAI also notes that API usage is subject to rate limits and usage tiers, and higher limits are handled through the limits page and tier progression. 

Anthropic’s API similarly requires an Anthropic Console account and API key, and API access is governed by both spend limits and rate limits. 

For editor products, there is a second layer to understand:

* **Cursor** has its own subscription model and may also support bring-your-own provider keys. 

* **Windsurf** has its own subscription or credits model and may support BYOK for some models. 

* **Codex** can be used with ChatGPT sign-in or with an OpenAI API key, depending on the workflow you choose. 

* **Claude Code** can be accessed through Claude plans or through API-based usage, depending on the path you choose. 

## **8\) Project instructions matter a lot**

One of the biggest quality improvements in AI-assisted coding comes from giving the tool stable project-specific instructions instead of repeating the same context in every prompt.

OpenAI recommends using AGENTS.md for durable Codex guidance. Windsurf also supports AGENTS.md files for directory-scoped instructions. Cursor supports shared Rules for agents, and Claude Code supports project settings and team-shared .claude/settings.json files. 

For Dalgo/dbt work, this means the team should strongly consider adding shared instructions such as:

* SQL style and naming conventions

* expected dbt folder structure

* testing conventions

* documentation expectations

* how to handle seeds, snapshots, and sources

* which commands are safe to run

* what never to change without human review

That reduces hallucinations and makes the agent more consistent across users.

## **9\) Best practices for Dalgo/dbt use**

For dbt development specifically, AI tools are best used for:

* understanding model lineage and dependencies

* explaining what a model is doing

* drafting YAML descriptions and tests

* suggesting dbt model refactors

* debugging compilation or runtime errors

* reviewing SQL for grain, joins, and naming consistency

* generating documentation and summaries for non-technical stakeholders

They should **not** be trusted blindly for business logic, warehouse credentials, client-specific assumptions, or production-safe SQL without review.

A safe practical workflow is:

1. Open the repo.

2. Ask the tool to explain the relevant models first.

3. Ask it to propose a plan before editing.

4. Review the proposed diff.

5. Run your local dbt commands.

6. Check the actual data in the warehouse.

7. Commit only after validation.

## **10\) Security guidance**

For Dalgo work, credentials should not be pasted casually into prompts or stored inside repositories. As a rule, secrets such as warehouse passwords, SSH keys, API keys, and client credentials should stay in the approved secret store and local environment variables, not in Git commits, screenshots, chat threads, WhatsApp, Discord, or ad hoc notes.

That matters even more when using AI tools, because once a secret leaks into the wrong place, it is much harder to control.

## **11\) Suggested onboarding order**

A good order for the docs is:

1. **GitHub / repository setup**

2. **AI assistant tooling page** (this page)

3. **Python \+ dbt environment setup**

4. **Warehouse access / credentials**

5. **First dbt commands**

6. **Using AI to understand and change the project safely**

That order works better because your current dbt setup page assumes the reader already understands what Cursor is, what a terminal is, and why they might choose a different tool.
