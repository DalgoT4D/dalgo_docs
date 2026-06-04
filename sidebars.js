/**
 * Dalgo docs sidebar — mirrors the product left-nav exactly.
 * Sections 1–3 are docs-only orientation content.
 * Sections 4–9 match the product navigation order.
 * Section 10 is convention (support).
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // 1. Welcome
    'welcome',

    // 2. Quickstart — linear first-timer path
    {
      type: 'category',
      label: 'Quickstart',
      link: { type: 'doc', id: 'quickstart/index' },
      items: [
        'quickstart/account-setup',
        'quickstart/impact',
        'quickstart/first-dashboard',
        'quickstart/first-report',
        'quickstart/next-steps',
      ],
    },

    // 3. Concepts — shared vocabulary
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/glossary',
      ],
    },

    // 4. Impact — home screen
    {
      type: 'category',
      label: 'Impact',
      link: { type: 'doc', id: 'impact/index' },
      items: [],
    },

    // 5. KPIs & Metrics — goal tracking and reusable calculations
    {
      type: 'category',
      label: 'KPIs & Metrics',
      link: { type: 'doc', id: 'kpis-metrics/index' },
      items: [
        'kpis-metrics/creating-metrics',
        'kpis-metrics/creating-kpis',
        'kpis-metrics/kpi-dashboard-widgets',
        'kpis-metrics/annotations',
      ],
    },

    // 6. Charts — top-level product surface
    {
      type: 'category',
      label: 'Charts',
      link: { type: 'doc', id: 'charts/index' },
      items: [
        'charts/creating-a-chart',
        'charts/chart-types',
      ],
    },

    // 7. Dashboards
    {
      type: 'category',
      label: 'Dashboards',
      link: { type: 'doc', id: 'dashboards/index' },
      items: [
        'dashboards/viewing',
        'dashboards/creating',
        'dashboards/superset-usage',
        'dashboards/superset',
      ],
    },

    // 8. Reports
    {
      type: 'category',
      label: 'Reports',
      link: { type: 'doc', id: 'reports/index' },
      items: [
        'reports/creating',
        'reports/comments',
        'reports/sharing',
        'reports/exporting',
      ],
    },

    // 9. Data — renamed from "Managing Data", mirrors product nav
    {
      type: 'category',
      label: 'Data',
      link: { type: 'doc', id: 'data/index' },
      items: [
        'data/overview',
        {
          type: 'category',
          label: 'Ingest',
          link: { type: 'doc', id: 'data/ingest/index' },
          items: [
            'data/ingest/connections',
            'data/ingest/sources',
            'data/ingest/warehouse',
          ],
        },
        {
          type: 'category',
          label: 'Transform',
          link: { type: 'doc', id: 'data/transform/index' },
          items: [
            'data/transform/ui-transform',
            'data/transform/dbt-transform',
            'data/transform/switching-repositories',
          ],
        },
        'data/orchestrate',
        'data/explore',
        'data/quality',
      ],
    },

    // 10. Settings
    {
      type: 'category',
      label: 'Settings',
      link: { type: 'doc', id: 'settings/index' },
      items: [
        'settings/user-management',
        'settings/billing',
        'settings/about',
      ],
    },

    // 11. Support
    {
      type: 'category',
      label: 'Support',
      link: { type: 'doc', id: 'support/index' },
      items: [
        'support/getting-help',
        'support/troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
