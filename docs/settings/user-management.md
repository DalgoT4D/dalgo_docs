---
sidebar_position: 2
---

# User Management

**User Management lets you add team members to your Dalgo organisation and control what each person can see and do.**

## Viewing users

1. Select **Settings** in the left menu, then select **User Management**.

![User Management](/img/managedata/user_management.png)

You will see two tabs:

- **Users** — all current members of your organisation and their roles
- **Pending Invitations** — invitations that have been sent but not yet accepted

## Inviting a new user

1. Select **Invite User** in the top-right corner.
2. Enter the user's **Email** address.
3. Select a **Role** from the dropdown.
4. Select **Send Invitation**.

The user will receive an invitation email. They appear under **Pending Invitations** until they accept and set up their account.

![Invite User dialog](/img/managedata/user_management_invite.png)

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

| Role | User management | Warehouse | Sources | Connections | Transform | Orchestrate | Usage dashboard |
|---|---|---|---|---|---|---|---|
| Account Manager | Update | Update | Update | Update | Update | Update | View |
| Pipeline Manager | View | View | Update | Update | Update | Update | View |
| Analyst | View | View | View | View | Update | View | View |
| Guest | View | View | View | View | View | View | View |

---

**Related:** [Settings](./index.md) · [Support](../support/index.md)
