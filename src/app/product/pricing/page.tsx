import type { Metadata } from 'next'
import PricingContent from './PricingContent'
import { faqs } from '@/lib/data'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Pricing – Government AI Plans',
  description:
    'Flexible government AI pricing: Pilot (3 workflows, sandbox included), Department (unlimited workflows, up to 100 users), and Enterprise (air-gapped, unlimited scale). Available via GSA Schedule.',
  keywords: [
    'government AI pricing',
    'FedRAMP AI software pricing',
    'government technology procurement',
    'GSA schedule AI software',
    'government AI pilot program',
    'air-gapped AI deployment',
    'government SaaS pricing',
  ],
  alternates: { canonical: `${BASE_URL}/product/pricing` },
  openGraph: {
    url: `${BASE_URL}/product/pricing`,
    title: 'Pricing – Government AI Plans | QuantumApps.AI',
    description:
      'Government AI pricing via GSA Schedule. Pilot, Department, and Enterprise plans — including air-gapped and on-premise deployment options.',
    images: [BASE_OG_IMAGE],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/product/pricing#webpage`,
  url: `${BASE_URL}/product/pricing`,
  name: 'Pricing | QuantumApps.AI',
  description: 'Flexible government AI pricing plans available via GSA Schedule.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Product', item: `${BASE_URL}/product` },
      { '@type': 'ListItem', position: 3, name: 'Pricing', item: `${BASE_URL}/product/pricing` },
    ],
  },
  inLanguage: 'en-US',
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <JsonLd data={faqJsonLd} />
      <PricingContent />
    </>
  )
}
