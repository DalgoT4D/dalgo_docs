/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Ingest',
      link: {type: 'doc', id: 'ingest/index'},
      items: [
        'ingest/warehouse',
        'ingest/sources',
        'ingest/connections',
      ],
    },
    'transform',
    'orchestrate',
    {
      type: 'category',
      label: 'Dashboards',
      link: {type: 'doc', id: 'analysis/index'},
      items: [
        'analysis/dalgo-dashboards',
        'analysis/superset',
      ],
    },
    {
      type: 'category',
      label: 'Managing Data',
      items: [
        'managing-data/data-quality',
        'managing-data/pipeline-overview',
        'managing-data/usage-dashboard',
        'managing-data/user-management',
      ],
    },
    'reports',
  ],
};

module.exports = sidebars;
