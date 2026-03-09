import type { Metadata } from 'next'
import FeaturesContent from './FeaturesContent'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Platform Features – AI Capabilities for Government',
  description:
    'Explore all QuantumApps.AI platform features: domain-aware AI agents, legacy data migration, guided workflow designer, automated compliance checks, real-time dashboards, and full audit trails.',
  keywords: [
    'government AI features',
    'AI agent capabilities government',
    'government workflow automation features',
    'FedRAMP compliance automation',
    'legacy data migration AI',
    'government analytics dashboard',
    'role-based AI agent access',
  ],
  alternates: { canonical: `${BASE_URL}/product/features` },
  openGraph: {
    url: `${BASE_URL}/product/features`,
    title: 'Platform Features – AI Capabilities for Government | QuantumApps.AI',
    description:
      'Domain-aware AI agents, automated compliance, legacy data migration, and real-time oversight — purpose-built for government agencies.',
    images: [BASE_OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/product/features#webpage`,
  url: `${BASE_URL}/product/features`,
  name: 'Platform Features | QuantumApps.AI',
  description: 'All platform features for government AI automation — agents, compliance, data integration, and analytics.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Product', item: `${BASE_URL}/product` },
      { '@type': 'ListItem', position: 3, name: 'Features', item: `${BASE_URL}/product/features` },
    ],
  },
  inLanguage: 'en-US',
}

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <FeaturesContent />
    </>
  )
}
