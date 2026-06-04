/**
 * Dalgo docs sidebar — mirrors the product left-nav exactly.
 * Sections 1–3 are docs-only orientation content.
 * Sections 4–11 match the product navigation order.
 * Section 12 is convention (support).
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

    // 5. Metrics — foundational building blocks
    {
      type: 'category',
      label: 'Metrics',
      link: { type: 'doc', id: 'metrics/index' },
      items: [
        'metrics/creating-metrics',
        'metrics/managing-metrics',
      ],
    },

    // 6. KPIs — goal-oriented tracking
    {
      type: 'category',
      label: 'KPIs',
      link: { type: 'doc', id: 'kpis/index' },
      items: [
        'kpis/creating-kpis',
        'kpis/managing-kpis',
        'kpis/best-practices',
      ],
    },

    // 7. Charts — visualization and analysis
    {
      type: 'category',
      label: 'Charts',
      link: { type: 'doc', id: 'charts/index' },
      items: [
        'charts/creating-a-chart',
        'charts/chart-types',
      ],
    },

    // 8. Dashboards
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

    // 9. Reports
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

    // 10. Data — renamed from "Managing Data", mirrors product nav
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

    // 11. Settings
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

    // 12. Support
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
