import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Frankmax CMS Documentation',
  tagline: 'Comprehensive documentation for the Frankmax Global CMS',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://andrew-leo-2024.github.io',
  baseUrl: '/frankmax-docs/',

  organizationName: 'andrew-leo-2024',
  projectName: 'frankmax-docs',

  onBrokenLinks: 'throw',

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
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Frankmax CMS',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userGuideSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'technicalSidebar',
          position: 'left',
          label: 'Technical Reference',
        },
        {
          type: 'docSidebar',
          sidebarId: 'operationsSidebar',
          position: 'left',
          label: 'Operations',
        },
        {
          href: 'https://www.frankmax.digital',
          label: 'Frankmax Digital',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'User Guide', to: '/docs/user-guide/getting-started' },
            { label: 'Technical Reference', to: '/docs/technical/architecture/overview' },
            { label: 'Operations', to: '/docs/operations/deployment/prerequisites' },
          ],
        },
        {
          title: 'Frankmax Digital',
          items: [
            { label: 'Website', href: 'https://www.frankmax.digital' },
            { label: 'FDS001 — Digital Marketing Maven', href: 'https://www.frankmax.digital' },
            { label: 'FDS005 — AI Labs', href: 'https://www.frankmax.digital' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Glossary', to: '/docs/glossary' },
            { label: 'GitHub', href: 'https://github.com/andrew-leo-2024/frankmax-docs' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Frankmax Digital Corporation. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
