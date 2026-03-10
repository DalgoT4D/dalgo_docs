// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Dalgo",
    tagline:
        "Dalgo is an open-source data platform for social impact organisations.",
    favicon: "img/favicon_new.svg",

    // Set the production url of your site here
    url: "https://dalgo.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/dalgo_docs/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "DalgoT4D", // Usually your GitHub org/user name.
    projectName: "dalgo_docs", // Usually your repo name.

    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",
    deploymentBranch: "gh-pages",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    customFields: {
        homeRedirectPath: "/docs/Getting%20Started/",
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "academy",
                path: "academy",
                routeBasePath: "academy",
                sidebarPath: require.resolve("./academySidebars.js"),
                editUrl:
                    "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            },
        ],
        function chunkLoadRecoveryPlugin() {
            return {
                name: "chunk-load-recovery-plugin",
                getClientModules() {
                    return [require.resolve("./src/chunkLoadRecovery.js")];
                },
            };
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                logo: {
                    alt: "My Site Logo",
                    src: "/img/dalgo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "Getting Started/index",
                        position: "left",
                        label: "Documentation",
                    },
                    {
                        to: "/academy/",
                        position: "left",
                        label: "Dalgo Academy",
                    },
                    {
                        href: "https://projecttech4dev.org/tag/data-platform/",
                        label: "Blog",
                        position: "right",
                        className: "header-icon-link header-blog-link",
                        "aria-label": "Blog",
                    },
                    {
                        href: "https://dalgo.org/",
                        label: "Website",
                        position: "right",
                        className: "header-icon-link header-website-link",
                        "aria-label": "Website",
                    },
                    {
                        href: "https://discord.gg/xfM6CVK2Nc",
                        label: "Discord",
                        position: "right",
                        className: "header-icon-link header-discord-link",
                        "aria-label": "Discord",
                    },
                    {
                        href: "https://github.com/DalgoT4D",
                        label: "GitHub Repository",
                        position: "right",
                        className: "header-icon-link header-github-link",
                        "aria-label": "GitHub Repository",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Docs",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/xfM6CVK2Nc",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "https://projecttech4dev.org/tag/data-platform/",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/DalgoT4D",
                            },
                            {
                                label: "License",
                                to: "/docs/license",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus. Licensed under CC BY 4.0.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
