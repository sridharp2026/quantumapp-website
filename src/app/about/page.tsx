import type { Metadata } from 'next'
import AboutContent from './AboutContent'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'About Us – Our Story & Mission',
  description:
    'QuantumApps.AI was founded by former government technology leaders to modernize public sector operations. FedRAMP authorized in 2023. Serving 35+ agencies processing 2M+ workflows monthly.',
  keywords: [
    'QuantumApps.AI company',
    'government AI startup',
    'government technology company',
    'FedRAMP AI company',
    'public sector AI mission',
    'government modernization company',
    'GovTech startup Washington DC',
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    url: `${BASE_URL}/about`,
    title: 'About Us – Our Story & Mission | QuantumApps.AI',
    description:
      'Founded by former government technology leaders. FedRAMP authorized. Serving 35+ agencies. Our mission: make government as efficient as the best private-sector organizations.',
    images: [BASE_OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${BASE_URL}/about#webpage`,
  url: `${BASE_URL}/about`,
  name: 'About QuantumApps.AI',
  description:
    'QuantumApps.AI was founded by former government technology leaders to bring AI-powered modernization to public sector agencies.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#organization` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
    ],
  },
  inLanguage: 'en-US',
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <AboutContent />
    </>
  )
}
