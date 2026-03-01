import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Home" description="Frankmax CMS Documentation">
      <main style={{ padding: '4rem 2rem', maxWidth: '960px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frankmax CMS Documentation</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '2rem' }}>
          Comprehensive documentation for the Frankmax Global CMS — a governance-first content management
          system powering 250+ country-specific websites with sovereign theming, campaign management,
          and block-based page building.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <Card
            title="User Guide"
            description="For content editors. Learn how to create pages, manage campaigns, publish content, and use the page builder."
            link="/docs/user-guide/getting-started"
          />
          <Card
            title="Technical Reference"
            description="For developers. Architecture, collections, blocks, hooks, libraries, frontend routing, and API reference."
            link="/docs/technical/architecture/overview"
          />
          <Card
            title="Operations"
            description="Deployment, configuration, database management, migrations, and search indexing."
            link="/docs/operations/deployment/prerequisites"
          />
        </div>
      </main>
    </Layout>
  );
}

function Card({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid var(--ifm-toc-border-color)',
        borderRadius: '8px',
        padding: '1.5rem',
        height: '100%',
        transition: 'box-shadow 0.2s',
      }}>
        <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)' }}>{description}</p>
      </div>
    </Link>
  );
}
