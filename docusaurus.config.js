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

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    deploymentBranch: "gh-pages",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/DalgoT4D/dalgo_docs/tree/main/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/DalgoT4D/dalgo_docs/tree/main/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/dalgo.png",
            navbar: {
                logo: {
                    alt: "Dalgo Logo",
                    src: "/img/dalgo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Documentation",
                    },
                    {
                        to: "https://projecttech4dev.org/tag/data-platform/",
                        label: "Blog",
                        position: "left",
                    },
                    {
                        href: "https://github.com/DalgoT4D",
                        label: "GitHub",
                        position: "right",
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
                                href: "https://github.com/DalgoT4D/dalgo_docs/blob/main/LICENSE",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Dalgo. Built with Docusaurus. Licensed under CC BY 4.0.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
