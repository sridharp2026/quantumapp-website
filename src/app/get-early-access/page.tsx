import type { Metadata } from 'next'
import EarlyAccessContent from './EarlyAccessContent'
import JsonLd from '@/components/seo/JsonLd'
import { BASE_URL, BASE_OG_IMAGE } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Get Early Access – QuantumApps.AI for Government Agencies',
  description:
    'Join the waitlist for early access to QuantumApps.AI — the AI platform built for government operations. Be among the first agencies to automate workflows, modernize legacy systems, and unlock AI-powered efficiency.',
  keywords: [
    'get early access QuantumApps.AI',
    'government AI early access',
    'AI platform for government agencies waitlist',
    'government AI beta access',
    'federal AI software early access',
    'government workflow automation sign up',
    'QuantumApps AI sign up',
    'public sector AI platform',
    'government digital transformation early access',
    'state and local government AI tool',
  ],
  alternates: { canonical: `${BASE_URL}/get-early-access` },
  openGraph: {
    url: `${BASE_URL}/get-early-access`,
    title: 'Get Early Access to QuantumApps.AI – Built for Government',
    description:
      'Sign up for priority access to the AI platform built for government agencies. Automate workflows, modernize legacy systems, and serve citizens faster.',
    images: [BASE_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Early Access to QuantumApps.AI',
    description:
      'Be among the first government agencies to leverage QuantumApps.AI. Sign up for priority access today.',
    images: [BASE_OG_IMAGE.url],
  },
}

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/get-early-access#webpage`,
  url: `${BASE_URL}/get-early-access`,
  name: 'Get Early Access – QuantumApps.AI',
  description:
    'Sign up for early access to QuantumApps.AI, the AI platform purpose-built for government agencies. Automate workflows, modernize legacy systems, and unlock measurable efficiency gains.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Get Early Access', item: `${BASE_URL}/get-early-access` },
    ],
  },
  inLanguage: 'en-US',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is QuantumApps.AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuantumApps.AI is an AI platform purpose-built for government agencies. It automates repetitive workflows, modernizes legacy systems without replacing them, and enables agencies to serve citizens faster with AI-powered operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can sign up for early access?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Early access is open to federal, state, and local government agencies. Municipal departments, county offices, and federal bureaus are all welcome to apply. Priority is given to agencies with clear modernization or automation needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is QuantumApps.AI FedRAMP authorized?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuantumApps.AI is built with FedRAMP-aligned security standards, designed specifically for government compliance requirements including data sovereignty, audit trails, and role-based access controls.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after I sign up for early access?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "After signing up, a member of our team will reach out within one business day to schedule a personalized 30-minute walkthrough tailored to your agency's workflows and challenges.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does QuantumApps.AI require replacing our existing systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. QuantumApps.AI is designed to integrate with and enhance your existing legacy systems — not replace them. Our platform layers AI capabilities on top of your current infrastructure so agencies can modernize without disruption.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can an agency deploy QuantumApps.AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most agencies can begin their pilot within weeks, not months. Our onboarding team handles the integration and configuration so your staff can focus on outcomes rather than implementation.',
      },
    },
  ],
}

export default function GetEarlyAccessPage() {
  return (
    <>
      <JsonLd data={webPageLd} />
      <JsonLd data={faqLd} />
      <EarlyAccessContent />
    </>
  )
}
