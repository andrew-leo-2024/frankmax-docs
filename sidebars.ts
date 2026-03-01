import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  userGuideSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['user-guide/getting-started'],
    },
    'user-guide/creating-pages',
    {
      type: 'category',
      label: 'Page Builder',
      items: [
        'user-guide/page-builder/overview',
        'user-guide/page-builder/layout-blocks',
        'user-guide/page-builder/content-blocks',
        'user-guide/page-builder/media-blocks',
        'user-guide/page-builder/feed-blocks',
        'user-guide/page-builder/block-reference',
      ],
    },
    {
      type: 'category',
      label: 'Content Targeting',
      items: [
        'user-guide/content-targeting/jurisdictions',
        'user-guide/content-targeting/languages',
        'user-guide/content-targeting/scheduling',
      ],
    },
    {
      type: 'category',
      label: 'Campaigns',
      items: [
        'user-guide/campaigns/creating-campaigns',
        'user-guide/campaigns/managing-campaigns',
        'user-guide/campaigns/campaigns-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'user-guide/workflows/content-lifecycle',
        'user-guide/workflows/publishing',
        'user-guide/workflows/governance',
      ],
    },
    {
      type: 'category',
      label: 'Multi-Site Management',
      items: [
        'user-guide/multi-site/sites-dashboard',
        'user-guide/multi-site/site-detail',
        'user-guide/multi-site/content-orchestrator',
      ],
    },
    'user-guide/services',
    'user-guide/news-articles',
    'user-guide/products',
    'user-guide/media-library',
    'user-guide/live-preview',
    'user-guide/analytics',
    'user-guide/search',
    'glossary',
  ],

  technicalSidebar: [
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'technical/architecture/overview',
        'technical/architecture/project-structure',
        'technical/architecture/data-model',
        'technical/architecture/sovereign-theming',
      ],
    },
    {
      type: 'category',
      label: 'Collections',
      items: [
        'technical/collections/overview',
        'technical/collections/users',
        'technical/collections/media',
        'technical/collections/pages',
        'technical/collections/services',
        'technical/collections/campaigns',
        'technical/collections/jurisdictions',
        'technical/collections/news-articles',
        'technical/collections/products',
        'technical/collections/doctrine',
        'technical/collections/audit-log',
        'technical/collections/publish-tokens',
        'technical/collections/content-blocks',
        'technical/collections/service-classifications',
        'technical/collections/service-requirements',
        'technical/collections/software-directory',
        'technical/collections/software-features',
        'technical/collections/opportunity-briefs',
      ],
    },
    {
      type: 'category',
      label: 'Blocks',
      items: [
        'technical/blocks/overview',
        'technical/blocks/creating-blocks',
        'technical/blocks/block-api',
      ],
    },
    {
      type: 'category',
      label: 'Reusable Fields',
      items: [
        'technical/fields/target-jurisdictions',
        'technical/fields/target-languages',
        'technical/fields/scheduling',
      ],
    },
    {
      type: 'category',
      label: 'Hooks',
      items: [
        'technical/hooks/governance-hooks',
      ],
    },
    {
      type: 'category',
      label: 'Libraries',
      items: [
        'technical/libraries/content-filters',
        'technical/libraries/resolve-jurisdiction',
        'technical/libraries/sovereign-theme',
        'technical/libraries/search',
        'technical/libraries/payload-client',
      ],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: [
        'technical/frontend/routing',
        'technical/frontend/render-blocks',
        'technical/frontend/live-preview',
        'technical/frontend/components',
        'technical/frontend/layout',
      ],
    },
    {
      type: 'category',
      label: 'Admin Views',
      items: [
        'technical/admin-views/overview',
        'technical/admin-views/sites-dashboard',
        'technical/admin-views/site-detail',
        'technical/admin-views/campaigns-dashboard',
        'technical/admin-views/content-orchestrator',
        'technical/admin-views/analytics-overview',
        'technical/admin-views/nav-links',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'technical/api/rest-api',
        'technical/api/content-filtering',
        'technical/api/webhooks',
      ],
    },
  ],

  operationsSidebar: [
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'operations/deployment/prerequisites',
        'operations/deployment/local-development',
        'operations/deployment/production',
        'operations/deployment/database',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'operations/configuration/environment-variables',
        'operations/configuration/payload-config',
        'operations/configuration/site-settings',
      ],
    },
    {
      type: 'category',
      label: 'Maintenance',
      items: [
        'operations/maintenance/migrations',
        'operations/maintenance/seeding',
        'operations/maintenance/search-indexing',
      ],
    },
  ],
};

export default sidebars;
