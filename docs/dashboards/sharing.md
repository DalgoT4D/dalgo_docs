---
sidebar_position: 4
---

# Sharing a dashboard

**Give specific people or groups access to a dashboard — including every chart and KPI inside it — without exposing the rest of your org's data.**

When you share a dashboard, access automatically cascades to all inner charts and KPIs. You do not need to share each chart separately.

## Opening the share modal

1. Open the dashboard you want to share, or find it in the **Dashboards** list.
2. Select the **Share** button (↗) in the top-right corner.

![Dashboard share modal](/img/sharing/sharing_dashboard_modal.png)

## Adding people or groups

1. In the **Search for people, group or add emails** field, search for an existing user or group, or type a new email address.
2. Set the permission level: **Can View** or **Can Edit**.
3. Select **Share**.

You can paste a comma-separated list of emails to add multiple people at once.

**Unrecognised emails** are flagged as external. That person receives an invitation to join Dalgo as a Member. Their access is applied when they accept — they appear as **pending** until then. Pending invites expire after 30 days.

:::note
A notice in the modal reminds you: *"All inner charts and KPIs will inherit this permission."* You do not need to share charts or KPIs individually — cascade handles it.
:::

## Permission levels

| Level | What they can do |
|---|---|
| **Can View** | Open the dashboard, view all charts and KPIs inside it, apply filters, export. Cannot edit anything. |
| **Can Edit** | View and edit the dashboard layout and any charts or KPIs inside it. Can re-share the dashboard with others up to Edit level. Cannot delete — only the owner or an Admin can delete a dashboard. |

The default permission for a new share is **Can View**.

## Viewing and managing existing shares

The **People with access** section of the share modal lists everyone who currently has access:

- To change a permission level, select the dropdown next to a person or group's name.
- To remove a share, select **✕** next to their name.

:::warning
Removing or downgrading a share on a dashboard also removes or reduces access on all its inner charts and KPIs. A confirmation prompt appears before the change is applied.
:::

## Transferring ownership

The permission dropdown next to any user in the **People with access** list includes **Make Owner**.

- Only the current owner or an Admin can transfer ownership.
- The recipient must currently hold effective Edit access on the dashboard.
- A confirmation dialog appears before the transfer takes effect.
- After the transfer, the previous owner's access reverts to whatever the org floor grants their role, or any direct share they hold.

## Public link

Toggle **Public sharing** on to generate a link anyone can open — no Dalgo account required.

- Public links are view-only.
- Visitors who open a public link see the dashboard and all its inner charts, regardless of those charts' individual access settings.
- Public links are only available when your Admin has enabled **Allow public sharing** in [Settings > Access > Roles](../settings/access.md#allow-public-sharing).

## Making a dashboard private

Toggle **Private** on to ignore the org-wide floor for this specific dashboard.

When Private is on, only people and groups with an explicit share (or Admins) can see the dashboard. Anyone without a direct share or group share loses access immediately.

- Turning Private on immediately disables any active public link on the dashboard.
- Turning Private off does not restore the public link — re-enable it manually if needed.

## Request access

If someone opens a dashboard link they don't have access to, they see a **Request Access** screen. They can request View or Edit and add an optional note. The request is sent to the dashboard owner.

- The owner sees pending requests in the **Requests** section inside the share modal.
- Approving creates a direct share at the chosen level. The requester is notified.
- Declining sends a notification to the requester. Access is not granted.
- Requests expire after 30 days.

---

**Next:** [Viewing dashboards](./viewing.md) · [Sharing charts](../charts/sharing.md) · [Access settings](../settings/access.md)
