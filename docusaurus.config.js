// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { File } = require("buffer");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// Node 18 exposes File via `buffer`, but some search-plugin dependencies expect
// it on the global object during config/plugin initialization.
if (typeof globalThis.File === "undefined") {
    globalThis.File = File;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Dalgo",
    tagline:
        "Dalgo is an open-source data platform for social impact organisations.",
    favicon: "img/favicon_new.svg",

    // Set the production url of your site here
    url: "https://docs.dalgo.org",
    // Served at the root of the custom domain
    baseUrl: "/",

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
                    routeBasePath: "/",
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

    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "self-serve",
                path: "self-serve-docs",
                routeBasePath: "self-serve-documentation",
                sidebarPath: require.resolve("./sidebarsSelfServe.js"),
                editUrl: "https://github.com/DalgoT4D/dalgo_docs/tree/main/",
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "release-notes",
                path: "release-notes-docs",
                routeBasePath: "release-notes",
                sidebarPath: require.resolve("./sidebarsReleaseNotes.js"),
                editUrl: "https://github.com/DalgoT4D/dalgo_docs/tree/main/",
            },
        ],
    ],

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                indexBlog: false,
                docsDir: ["docs", "self-serve-docs", "release-notes-docs"],
                docsRouteBasePath: ["/docs", "/self-serve-documentation", "/release-notes"],
                docsPluginIdForPreferredVersion: "default",
            },
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
                    src: "img/dalgo_logo.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Documentation",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "selfServeSidebar",
                        docsPluginId: "self-serve",
                        position: "left",
                        label: "Resources",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "releaseNotesSidebar",
                        docsPluginId: "release-notes",
                        position: "left",
                        label: "Release Notes",
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
                                to: "/intro",
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
