import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import WhatWeSolve from '@/components/sections/WhatWeSolve'
import Solution from '@/components/sections/Solution'
import BuildFaster from '@/components/sections/BuildFaster'
import Digitize from '@/components/sections/Digitize'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'QuantumApps.AI – Intelligent Operations for Modern Government',
  description:
    'A trusted AI platform with intelligent agents built for government systems. Deliver domain expertise, context-rich execution, and scalable citizen services — without replacing your existing infrastructure.',
  keywords: [
    'government AI platform',
    'AI agents government',
    'FedRAMP AI',
    'government automation',
    'legacy modernization AI',
    'citizen services AI',
    'public sector technology',
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    url: BASE_URL,
    title: 'QuantumApps.AI – Intelligent Operations for Modern Government',
    description:
      'A trusted AI platform with intelligent agents built for government systems. Scalable, FedRAMP authorized, no rip-and-replace.',
    images: [BASE_OG_IMAGE],
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: 'QuantumApps.AI – Intelligent Operations for Modern Government',
  description:
    'AI platform for government agencies. Deploy intelligent agents to modernize systems and automate workflows.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'en-US',
}

export default function Home() {
  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <main>
        <Hero />
        <WhatWeSolve />
        <Solution />
        <BuildFaster />
        <Digitize />
      </main>
    </>
  )
}
