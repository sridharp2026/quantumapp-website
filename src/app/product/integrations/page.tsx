import type { Metadata } from 'next'
import IntegrationsContent from './IntegrationsContent'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Integrations – Connect Any Government System',
  description:
    'QuantumApps.AI connects to IBM mainframes, COBOL systems, AWS GovCloud, Azure Government, Oracle, SQL Server, and 100+ government systems through secure, government-approved connectors.',
  keywords: [
    'government system integrations',
    'IBM mainframe AI integration',
    'COBOL modernization AI',
    'AWS GovCloud integration',
    'Azure Government AI',
    'government legacy integration',
    'NIEM FHIR data standards',
    'government API platform',
  ],
  alternates: { canonical: `${BASE_URL}/product/integrations` },
  openGraph: {
    url: `${BASE_URL}/product/integrations`,
    title: 'Integrations – Connect Any Government System | QuantumApps.AI',
    description:
      'Connect IBM mainframes, COBOL, GovCloud, Oracle, and 100+ government systems through secure, pre-built connectors and a comprehensive API.',
    images: [BASE_OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/product/integrations#webpage`,
  url: `${BASE_URL}/product/integrations`,
  name: 'Integrations | QuantumApps.AI',
  description: 'Connect any government system — legacy mainframes, cloud platforms, databases — to QuantumApps.AI through government-approved connectors.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Product', item: `${BASE_URL}/product` },
      { '@type': 'ListItem', position: 3, name: 'Integrations', item: `${BASE_URL}/product/integrations` },
    ],
  },
  inLanguage: 'en-US',
}

export default function IntegrationsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <IntegrationsContent />
    </>
  )
}
