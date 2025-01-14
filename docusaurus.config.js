// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simwood Developer',
  tagline: 'Developer site for Simwood products and services',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://developer.simwood.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'simwood', // Usually your GitHub org/user name.
  projectName: 'developer-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Simwood Developer',
        logo: {
          alt: 'Simwood Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/direct/introduction',
            label: 'Direct',
            position: 'left',
          },
          {
            to: 'docs/wholesale',
            label: 'Wholesale',
            position: 'left',
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
                to: 'docs/direct/introduction',
                label: 'Direct',
                position: 'left',
              },
              {
                to: 'docs/wholesale',
                label: 'Wholesale',
                position: 'left',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/SimwoodeSMS',
              },
              {
                label: 'Community Slack',
                href: 'https://simwoodcommunity.slack.com',
              },
              {
                label: 'Community Slack Signup',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSdARUKFPPmY840UezuYboOD5N_yahGLcxly2TbulyKfjIqR9Q/viewform',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://simwood.com',
              },
              {
                label: 'Blog',
                href: 'https://blog.simwood.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/simwood',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simwood eSMS Limited.`,
      },
      // algolia: {
      //   appId: '03WV4K4Z17',
      //   apiKey: 'c19a7c387457fbdf4cfcb2d5aaa50991',
      //   indexName: 'simwood',
      //   searchParameters: {}, // Optional (if provided by Algolia)
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
