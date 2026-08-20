---
sidebar_position: 3
---

# Sharing a chart

**Control who can view or edit a specific chart — by sharing it directly, or automatically through any dashboard it belongs to.**

Charts receive access from three sources, and the highest level wins:

- **Org floor** — the default access every role gets on all resources (set in [Settings > Access > Roles](../settings/access.md#roles)).
- **Cascade** — when a dashboard is shared, all charts inside it automatically inherit the same permission.
- **Direct share** — access granted to a specific person or group on this chart only.

## Sharing a chart directly

1. Open the chart, or find it in the **Charts** list.
2. Select the **Share** button (↗).
3. Search for a person or group, or paste an email address.
4. Set **Can View** or **Can Edit**, then select **Share**.

![Chart share modal](/img/sharing/sharing_chart_modal.png)

The same invite rules apply as for dashboards — unrecognised emails receive an invitation to join as a Member, and their access activates on acceptance. See [Sharing a dashboard](../dashboards/sharing.md) for details on bulk paste and pending invites.

## Cascade-inherited access

If a user's access on a chart comes from a parent dashboard, the chart's share modal shows their effective level but prevents you from changing it there directly. A message reads: *"Access on this chart is inherited from [Dashboard name] — go there to change it."*

To change cascade-derived access, open the parent dashboard's share modal and adjust the share at that level.

## Permission levels

| Level | What they can do |
|---|---|
| **Can View** | Open and view the chart, apply filters, export data. Cannot edit. |
| **Can Edit** | Edit the chart configuration and re-share with others up to Edit level. Cannot delete — only the chart owner or an Admin can delete a chart. |

## Making a chart private

Toggle **Private** on in the share modal to ignore the org-wide floor for this chart. Only people with an explicit direct share, a cascade share from a parent dashboard, or Admin access can see it.

## Requesting edit access

If you can view a chart but need to edit it, a **Request Edit access** pill appears at the top of the chart view. Select it to send a request to the chart owner.

- The owner approves or declines from the **Requests** section in the share modal.
- Approving upgrades your access to Edit. You are notified when a decision is made.

---

**Next:** [Sharing a dashboard](../dashboards/sharing.md) · [Sharing KPIs](../kpis/sharing.md) · [Access settings](../settings/access.md)
