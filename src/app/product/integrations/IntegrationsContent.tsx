'use client'

import { motion } from 'framer-motion'
import { Server, Cloud, Database, BarChart3, ArrowRight, Plug } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'

const integrationCategories = [
  {
    Icon: Server,
    title: 'Legacy & Mainframe',
    color: 'from-purple-600 to-violet-700',
    systems: ['IBM z/OS Mainframe', 'COBOL Applications', 'AS/400 (IBM i)', 'Oracle Forms', 'PeopleSoft', 'CICS Transaction Server'],
  },
  {
    Icon: Cloud,
    title: 'Government Cloud',
    color: 'from-blue-600 to-indigo-700',
    systems: ['AWS GovCloud', 'Azure Government', 'Google Cloud for Gov', 'Salesforce Government', 'Microsoft 365 GCC', 'ServiceNow Gov'],
  },
  {
    Icon: Database,
    title: 'Databases & Data Stores',
    color: 'from-emerald-600 to-teal-700',
    systems: ['Oracle Database', 'Microsoft SQL Server', 'PostgreSQL', 'IBM Db2', 'MySQL', 'MongoDB'],
  },
  {
    Icon: BarChart3,
    title: 'Analytics & Reporting',
    color: 'from-orange-500 to-amber-600',
    systems: ['Power BI', 'Tableau', 'Oracle Analytics', 'MicroStrategy', 'Looker', 'Qlik'],
  },
]

const apiFeatures = [
  { title: 'REST & GraphQL APIs', description: 'Modern API interfaces for all platform capabilities, fully documented with OpenAPI specs.' },
  { title: 'Webhooks & Events', description: 'Real-time event streaming to your existing monitoring and observability stack.' },
  { title: 'SDK Support', description: 'Official SDKs for Python, Node.js, Java, and .NET for custom integrations.' },
  { title: 'Government Data Standards', description: 'Native support for NIEM, FHIR, and other government data exchange standards.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

export default function IntegrationsContent() {
  return (
    <main>
      <PageHero
        eyebrow="Integrations"
        title="Connect Your Government Ecosystem"
        highlight="Government Ecosystem"
        subtitle="QuantumApps.AI connects to virtually any government system — legacy or modern — through secure, government-approved connectors."
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {integrationCategories.map(({ Icon, title, color, systems }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(120,50,220,0.15)' }}
                className="bg-[#2D0878]/40 border border-purple-500/30 rounded-3xl p-7 backdrop-blur-sm transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {systems.map((s) => (
                    <span key={s} className="text-xs text-purple-200/75 bg-purple-900/40 border border-purple-700/30 rounded-full px-3 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-1.5 mb-5">
              <Plug size={13} className="text-[#F59E0B]" />
              <span className="text-purple-200 text-xs font-medium">Developer API</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Build Custom Integrations</h2>
            <p className="text-purple-200/60 max-w-lg mx-auto text-sm">
              Our comprehensive API lets you build custom integrations with any system your agency uses.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {apiFeatures.map(({ title, description }) => (
              <motion.div key={title} variants={fadeUp} className="bg-[#2D0878]/35 border border-purple-500/25 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-purple-200/60 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors">
              Request a Custom Integration <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
