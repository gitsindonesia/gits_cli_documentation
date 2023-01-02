// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gits CLI',
  tagline: 'Gits Flutter Staterkit Command Line Interface',
  url: 'https://gitsindonesia.github.io/',
  baseUrl: '/gits_cli_documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gitsindonesia', // Usually your GitHub org/user name.
  projectName: 'gits_cli_documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        additionalLanguages: ['dart'],
      },
      navbar: {
        title: 'Gits Flutter Starterkit CLI',
        logo: {
          alt: 'Gits Flutter Starterkit CLI',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'Documentation',
          },
          {            
            to: '/contributors',
            position: 'right',
            label: 'Contributors',
          },
          {
            href: 'https://git.gits.id/RnD/flutter-cli',
            label: 'Repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Gits Official Website',
                href: 'https://gits.id/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/gitsindonesia/',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'Gits Flutter CLI',
                href: 'https://git.gits.id/RnD/flutter-cli',
              },
              {
                label: 'Gits Flutter CLI Documentation',
                href: 'https://github.com/gitsindonesia/gits_cli_documentation',
              },
              {
                label: 'Gits Flutter Starterkit',
                href: 'https://git.gits.id/RnD/fluttergits',
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
    plugins: [require.resolve('docusaurus-lunr-search')],
};

module.exports = config;
