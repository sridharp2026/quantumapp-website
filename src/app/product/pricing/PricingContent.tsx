'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { faqs } from '@/lib/data'

const plans = [
  {
    name: 'Pilot',
    tagline: 'For agencies starting their AI journey',
    badge: null,
    cta: 'Start a Pilot',
    features: [
      'Up to 3 AI Agent workflows',
      '2 system integrations',
      'Up to 10 agency users',
      'Standard compliance reporting',
      'Email & chat support',
      'Sandbox environment included',
    ],
  },
  {
    name: 'Department',
    tagline: 'For full departmental deployment',
    badge: 'Most Popular',
    cta: 'Talk to Sales',
    features: [
      'Unlimited workflows',
      'Up to 10 AI agents',
      'Up to 100 agency users',
      'Priority support + SLA',
      'Advanced compliance dashboard',
      'Custom agent training',
      'SSO & LDAP integration',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For agency-wide transformation',
    badge: 'Full Scale',
    cta: 'Contact Us',
    features: [
      'Unlimited agents & workflows',
      'Unlimited users & departments',
      'Dedicated Customer Success Manager',
      'On-premise & air-gapped deployment',
      'Custom SLA & uptime guarantees',
      'White-glove onboarding',
      'Priority feature development',
      'Executive briefings & roadmap input',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }

export default function PricingContent() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Flexible Plans for Every Agency"
        subtitle="Government pricing designed around mission needs — not seat counts. All plans include government-grade security and compliance."
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {plans.map(({ name, tagline, badge, cta, features }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className={`relative flex flex-col rounded-3xl p-8 border backdrop-blur-sm transition-all ${
                  badge === 'Most Popular'
                    ? 'bg-gradient-to-br from-[#4B1CB0] to-[#3B0D9E] border-purple-400/50 shadow-2xl shadow-purple-900/40'
                    : 'bg-[#2D0878]/40 border-purple-500/30'
                }`}
              >
                {badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F59E0B] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-orange-600/30">
                      {badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white font-light text-2xl mb-1">{name}</h3>
                  <p className="text-purple-200/60 text-sm">{tagline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-100/80 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-full text-sm transition-colors ${
                    badge === 'Most Popular'
                      ? 'bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-lg shadow-orange-600/30'
                      : 'border-2 border-purple-500/50 text-purple-200 hover:bg-purple-700/30'
                  }`}
                >
                  {cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-purple-200/60 text-sm">Common questions from procurement and IT teams.</p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map(({ q, a }) => (
              <motion.div key={q} variants={fadeUp} className="bg-[#2D0878]/35 border border-purple-500/25 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-white font-bold text-sm mb-2">{q}</h4>
                <p className="text-purple-200/60 text-sm leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
