// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GITS Flutter",
  tagline: "Keep it S.I.M.P.L.E. with Flutter Guidelines in GITS Indonesia",
  url: "https://gitsindonesia.github.io/",
  baseUrl: "/gits_cli_documentation/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gitsindonesia", // Usually your GitHub org/user name.
  projectName: "gits_cli_documentation", // Usually your repo name.
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
      prism: {
        additionalLanguages: ["dart"],
      },
      navbar: {
        title: "GITS Flutter",
        logo: {
          alt: "GITS",
          src: "img/logo.png",
        },
        items: [
          {
            to: "/docs/guidelines/introduction",
            activeBasePath: "docs/guidelines",
            position: "right",
            label: "Guidelines",
          },
          {
            to: "/docs/gits_cli/started",
            activeBasePath: "docs/gits_cli",
            position: "right",
            label: "CLI",
          },
          {
            to: "/docs/starter_kit/introduction",
            activeBasePath: "docs/starter_kit",
            position: "right",
            label: "Starter Kit",
          },
          {
            to: "/docs/gits_library/introduction",
            activeBasePath: "docs/gits_library",
            position: "right",
            label: "Library",
          },
          {
            to: "/team",
            position: "right",
            label: "Team",
          },
          {
            href: "https://gitsindonesia.github.io/flutter-ui-component/",
            position: "right",
            label: "UI Components",
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
                label: "Guidelines",
                to: "/docs/guidelines/introduction",
              },
              {
                label: "Gits CLI",
                to: "/docs/gits_cli/started",
              },
              {
                label: "Gits Flutter Starter Kit",
                to: "/docs/starter_kit/introduction",
              },
              {
                label: "Gits Library",
                to: "/docs/gits_library/introduction",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "Gits Official Website",
                href: "https://gits.id/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/gitsindonesia/",
              },
            ],
          },
          {
            title: "Repositories",
            items: [
              {
                label: "Gits Flutter CLI",
                href: "https://git.gits.id/RnD/flutter-cli",
              },
              {
                label: "Gits Flutter Library",
                href: "https://github.com/gitsindonesia/flutter-library",
              },
              {
                label: "Gits Flutter Starter Kit",
                href: "https://git.gits.id/RnD/fluttergits",
              },
              {
                label: "Gits Flutter Documentation",
                href: "https://github.com/gitsindonesia/gits_cli_documentation",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PT. Gits Indonesia, Documentation built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
  plugins: [require.resolve("docusaurus-lunr-search")],
};

module.exports = config;
