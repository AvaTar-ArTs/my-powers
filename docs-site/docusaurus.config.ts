import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SupremePower Docs',
  tagline: 'Universal skills and agent orchestration framework',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://avatar-arts.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AvaTar-ArTs',
  projectName: 'my-powers',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/AvaTar-ArTs/my-powers/tree/main/docs-site/',
        },
        blog: {
          routeBasePath: '/updates',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/AvaTar-ArTs/my-powers/tree/main/docs-site/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SupremePower',
      logo: {
        alt: 'SupremePower Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/updates', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/AvaTar-ArTs/my-powers',
          label: 'GitHub',
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
              label: 'Get Started',
              to: '/docs/intro',
            },
            {
              label: 'Hooks and Flows',
              to: '/docs/hooks-and-flows',
            },
          ],
        },
        {
          title: 'Platforms',
          items: [
            {
              label: 'Gemini CLI',
              to: '/docs/platforms',
            },
            {
              label: 'Codex',
              to: '/docs/platforms',
            },
            {
              label: 'OpenCode',
              to: '/docs/platforms',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Releases',
              to: '/docs/changelog-and-releases',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AvaTar-ArTs/my-powers',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SupremePower contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
