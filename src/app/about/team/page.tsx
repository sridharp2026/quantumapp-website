import type { Metadata } from 'next'
import TeamContent from './TeamContent'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Our Team – Government Technology Experts',
  description:
    'Meet the QuantumApps.AI team: former U.S. Digital Service leaders, DoD AI researchers, NSA security engineers, and state CIOs building the future of government technology.',
  keywords: [
    'QuantumApps.AI team',
    'government technology experts',
    'USDS government AI team',
    'DoD AI researchers',
    'FedRAMP security experts',
    'GovTech leadership team',
  ],
  alternates: { canonical: `${BASE_URL}/about/team` },
  openGraph: {
    url: `${BASE_URL}/about/team`,
    title: 'Our Team – Government Technology Experts | QuantumApps.AI',
    description:
      'Former USDS leaders, DoD AI researchers, NSA security engineers, and state CIOs — a team that has lived the challenges government agencies face.',
    images: [BASE_OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/about/team#webpage`,
  url: `${BASE_URL}/about/team`,
  name: 'Our Team | QuantumApps.AI',
  description: 'Former government officials, DARPA researchers, and agency CIOs building AI for government.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
      { '@type': 'ListItem', position: 3, name: 'Team', item: `${BASE_URL}/about/team` },
    ],
  },
  inLanguage: 'en-US',
}

export default function TeamPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <TeamContent />
    </>
  )
}
