import type { Metadata } from 'next'
import ProductContent from './ProductContent'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'AI Platform for Government Operations',
  description:
    'QuantumApps.AI is the intelligence layer for modern government. Deploy autonomous AI agents that connect to legacy systems, automate workflows, and run FedRAMP-authorized inside your infrastructure.',
  keywords: [
    'government AI platform',
    'AI agents for government agencies',
    'FedRAMP authorized AI platform',
    'government legacy system modernization',
    'intelligent process automation government',
    'FISMA compliant AI',
    'government workflow automation software',
  ],
  alternates: { canonical: `${BASE_URL}/product` },
  openGraph: {
    url: `${BASE_URL}/product`,
    title: 'AI Platform for Government Operations | QuantumApps.AI',
    description:
      'Deploy autonomous AI agents inside your government infrastructure. FedRAMP authorized, FISMA compliant, no rip-and-replace required.',
    images: [BASE_OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/product#webpage`,
  url: `${BASE_URL}/product`,
  name: 'AI Platform for Government Operations | QuantumApps.AI',
  description:
    'QuantumApps.AI is the intelligence layer for modern government. Deploy autonomous AI agents that connect to legacy systems and automate workflows.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Product', item: `${BASE_URL}/product` },
    ],
  },
  inLanguage: 'en-US',
}

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'QuantumApps.AI Platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Cloud, On-Premise',
  description:
    'An AI platform for government agencies featuring autonomous agents, legacy system integration, workflow automation, and FedRAMP-authorized security.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'QuantumApps.AI' },
  },
  featureList: [
    'Autonomous AI Agents',
    'Legacy System Modernization',
    'Intelligent Process Automation',
    'FedRAMP Authorization',
    'FISMA Compliance',
    'Real-Time Audit Trails',
  ],
}

export default function ProductPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={softwareAppJsonLd} />
      <ProductContent />
    </>
  )
}
