import type { Metadata } from 'next'
import ContactContent from './ContactContent'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Contact Us – Talk to Our Government AI Team',
  description:
    "Contact QuantumApps.AI to discuss your agency's AI needs, schedule a demo, or start a pilot. Reach us at hello@quantumapps.ai or book a 30-minute walkthrough.",
  keywords: [
    'contact QuantumApps.AI',
    'government AI demo',
    'schedule AI demo government',
    'government AI consultation',
    'QuantumApps AI contact',
    'government technology sales',
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    url: `${BASE_URL}/contact`,
    title: 'Contact Us | QuantumApps.AI',
    description:
      'Talk to our government AI team. Schedule a 30-minute demo or reach us directly at hello@quantumapps.ai.',
    images: [BASE_OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact#webpage`,
  url: `${BASE_URL}/contact`,
  name: 'Contact QuantumApps.AI',
  description: "Contact QuantumApps.AI to discuss your agency's AI and modernization needs.",
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
    ],
  },
  inLanguage: 'en-US',
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactContent />
    </>
  )
}
