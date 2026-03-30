// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsSelfServe = {
  selfServeSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Warehouse',
      items: ['warehouse/aws-rds-setup'],
    },
    {
      type: 'category',
      label: 'Superset',
      items: [
        'superset/row-level-security',
        'superset/user-and-role-management',
        'superset/embedding-dashboards',
      ],
    },
    {
      type: 'category',
      label: 'Local Development Setup',
      items: [
        'local-dev-setup/index',
        'local-dev-setup/dalgo-login',
        'local-dev-setup/warehouse-access',
        'local-dev-setup/github-setup',
        'local-dev-setup/python-and-ide',
        'local-dev-setup/ssh-access',
        'local-dev-setup/dbt-setup',
        'local-dev-setup/dbt-profiles',
        'local-dev-setup/vaultwarden',
        'local-dev-setup/ai-coding-assistants',
      ],
    },
  ],
};

module.exports = sidebarsSelfServe;
