import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE, BASE_KEYWORDS } from '@/lib/metadata'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#1a0045',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'QuantumApps.AI – AI Platform for Government Operations',
    template: '%s | QuantumApps.AI',
  },
  description:
    'QuantumApps.AI is the trusted AI platform for government agencies. Deploy intelligent AI agents to modernize legacy systems, automate workflows, and improve citizen services — FedRAMP authorized.',
  keywords: BASE_KEYWORDS,
  authors: [{ name: 'QuantumApps.AI', url: BASE_URL }],
  creator: 'QuantumApps.AI',
  publisher: 'QuantumApps.AI',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QuantumApps.AI',
    title: 'QuantumApps.AI – AI Platform for Government Operations',
    description:
      'Deploy intelligent AI agents to modernize government systems, automate complex workflows, and improve citizen services. FedRAMP authorized.',
    images: [BASE_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@QuantumAppsAI',
    creator: '@QuantumAppsAI',
    title: 'QuantumApps.AI – AI Platform for Government Operations',
    description:
      'Deploy intelligent AI agents to modernize government systems and automate workflows. FedRAMP authorized.',
    images: [BASE_OG_IMAGE.url],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'QuantumApps.AI',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description:
    'QuantumApps.AI is the trusted AI platform for government agencies, delivering intelligent AI agents that modernize legacy systems, automate workflows, and improve citizen services.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@quantumapps.ai',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Washington',
    addressRegion: 'DC',
    addressCountry: 'US',
  },
  sameAs: [
    'https://twitter.com/QuantumAppsAI',
    'https://www.linkedin.com/company/quantumapps-ai',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Government Technology',
    'Legacy System Modernization',
    'Workflow Automation',
    'FedRAMP',
    'FISMA Compliance',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'QuantumApps.AI',
  url: BASE_URL,
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'en-US',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <div
          style={{
            minHeight: '100vh',
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
