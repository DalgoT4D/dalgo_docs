---
sidebar_position: 4
---

# User Management

**User Management lets you add team members to your Dalgo organisation and control what each person can see and do.**

## Viewing users

1. Select **User Management** on the left menu panel (under Settings).

<!-- SCREENSHOT: User Management page showing the Users tab with a table of current users and their roles -->

You will see two tabs:

- **Users** — all current members of your organisation and their roles
- **Pending Invitations** — invitations that have been sent but not yet accepted

## Inviting a new user

1. Select **Invite User** in the top-right corner.
2. Enter the user's **Email** address.
3. Select a **Role** from the dropdown.
4. Select **Send Invitation**.

The user will receive an invitation email. They will appear under **Pending Invitations** until they accept and set up their account.

<!-- SCREENSHOT: Invite User dialog showing email field and role dropdown -->

## Managing pending invitations

On the **Pending Invitations** tab, select the **⋯ menu** on an invitation row to:
- **Resend** the invitation
- **Delete** the invitation

## Changing a user's role or removing a user

1. On the **Users** tab, select the **⋯ menu** on the user's row.
2. Select **Edit Role** to assign a different role, or **Remove** to revoke their access.

:::warning
Removing a user immediately revokes their access to Dalgo. They will not be able to log in until re-invited.
:::

## Available roles

| Role             | User management | Warehouse | Sources | Connections | Transform | Orchestrate | Usage dashboard |
| ---------------- | --------------- | --------- | ------- | ----------- | --------- | ----------- | --------------- |
| Account Manager  | Update          | Update    | Update  | Update      | Update    | Update      | View            |
| Pipeline Manager | View            | View      | Update  | Update      | Update    | Update      | View            |
| Analyst          | View            | View      | View    | View        | Update    | View        | View            |
| Guest            | View            | View      | View    | View        | View      | View        | View            |
