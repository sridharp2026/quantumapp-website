import type { Metadata } from 'next'
import PressContent from './PressContent'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Press & Media – QuantumApps.AI in the News',
  description:
    'Press coverage of QuantumApps.AI: TechCrunch, GovTech Magazine, FedScoop, VentureBeat, and more. FedRAMP authorization, $28M Series A, USDS pilot program selection.',
  keywords: [
    'QuantumApps.AI press',
    'government AI news',
    'GovTech news',
    'FedRAMP AI news',
    'government AI funding',
    'QuantumApps AI media',
    'government technology press release',
  ],
  alternates: { canonical: `${BASE_URL}/about/press` },
  openGraph: {
    url: `${BASE_URL}/about/press`,
    title: 'Press & Media | QuantumApps.AI',
    description:
      'Coverage from TechCrunch, FedScoop, VentureBeat, and GovTech. FedRAMP authorized. $28M Series A. USDS pilot program.',
    images: [BASE_OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/about/press#webpage`,
  url: `${BASE_URL}/about/press`,
  name: 'Press & Media | QuantumApps.AI',
  description: 'Press coverage and media resources for QuantumApps.AI — government AI platform.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
      { '@type': 'ListItem', position: 3, name: 'Press', item: `${BASE_URL}/about/press` },
    ],
  },
  inLanguage: 'en-US',
}

export default function PressPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PressContent />
    </>
  )
}
