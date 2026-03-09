import type { Metadata } from 'next'
import CareersContent from './CareersContent'
import { openRoles } from '@/lib/data'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Careers – Join the Government AI Mission',
  description:
    'Join QuantumApps.AI and help modernize government technology. Open roles in AI engineering, federal solutions architecture, government relations, product design, and security engineering. Remote-first.',
  keywords: [
    'QuantumApps.AI careers',
    'government AI jobs',
    'GovTech jobs',
    'AI engineer government',
    'federal solutions architect',
    'FedRAMP security engineer jobs',
    'remote government technology jobs',
  ],
  alternates: { canonical: `${BASE_URL}/about/careers` },
  openGraph: {
    url: `${BASE_URL}/about/careers`,
    title: 'Careers – Join the Government AI Mission | QuantumApps.AI',
    description:
      'Help modernize government technology. Open roles in AI engineering, federal solutions, and security. Remote-first, mission-driven.',
    images: [BASE_OG_IMAGE],
  },
}

const jobPostingsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Open Positions at QuantumApps.AI',
  itemListElement: openRoles.map((role, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'JobPosting',
      title: role.title,
      description: role.description,
      datePosted: '2025-01-01',
      validThrough: '2025-12-31',
      employmentType: 'FULL_TIME',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'QuantumApps.AI',
        sameAs: BASE_URL,
        logo: `${BASE_URL}/logo.png`,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: role.location,
          addressCountry: 'US',
        },
      },
      jobLocationType: role.location.includes('Remote') ? 'TELECOMMUTE' : undefined,
      occupationalCategory: role.department,
    },
  })),
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/about/careers#webpage`,
  url: `${BASE_URL}/about/careers`,
  name: 'Careers | QuantumApps.AI',
  description: 'Open roles at QuantumApps.AI — join the team modernizing government technology with AI.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
      { '@type': 'ListItem', position: 3, name: 'Careers', item: `${BASE_URL}/about/careers` },
    ],
  },
  inLanguage: 'en-US',
}

export default function CareersPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <JsonLd data={jobPostingsJsonLd} />
      <CareersContent />
    </>
  )
}
