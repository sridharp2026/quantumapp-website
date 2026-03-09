'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brain, Database, Workflow, ShieldCheck, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'

const capabilities = [
  {
    Icon: Brain,
    title: 'Autonomous AI Agents',
    description:
      'Deploy intelligent agents that understand government context, navigate legacy systems, and execute complex multi-step workflows without human intervention.',
  },
  {
    Icon: Database,
    title: 'Legacy System Modernization',
    description:
      'Migrate and modernize outdated data layers without disrupting existing operations. QuantumApps.AI handles the complexity so your team doesn\'t have to.',
  },
  {
    Icon: Workflow,
    title: 'Intelligent Process Automation',
    description:
      'Automate complex government processes while maintaining full compliance, auditability, and control. Every action is logged and reversible.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Integrate with your existing systems, databases, and data sources through secure, government-approved connectors.',
  },
  {
    number: '02',
    title: 'Configure',
    description: 'Set up AI agents with your domain-specific knowledge, workflows, and compliance requirements through a guided no-code interface.',
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'Launch agents that operate securely within your infrastructure, monitored in real-time with full audit trails.',
  },
]

const compliance = ['FedRAMP Authorized', 'FISMA Compliant', 'NIST 800-53', 'CJIS Security Policy', 'StateRAMP Ready', 'SOC 2 Type II']

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

export default function ProductContent() {
  return (
    <main>
      <PageHero
        eyebrow="The Platform"
        title="The Intelligence Layer for Modern Government"
        highlight="Intelligence Layer"
        subtitle="QuantumApps.AI transforms how government agencies operate by embedding trusted AI agents directly into your systems and workflows — no rip-and-replace required."
      />

      {/* Capabilities */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Core Platform Capabilities</h2>
            <p className="text-purple-200/60 max-w-xl mx-auto text-sm md:text-base">
              Everything your agency needs to modernize, automate, and operate at the speed of mission.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map(({ Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(120,50,220,0.2)' }}
                className="bg-[#2D0878]/40 border border-purple-500/30 rounded-3xl p-7 cursor-default transition-all backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center mb-5 shadow-lg shadow-purple-900/40">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-purple-200/65 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(140,60,240,0.5) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How It Works</h2>
            <p className="text-purple-200/60 max-w-lg mx-auto text-sm">Deploy your first AI agent in days, not years.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            {steps.map(({ number, title, description }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-orange-600 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-orange-600/25">
                  <span className="text-white font-black text-lg">{number}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-purple-200/60 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#3B0D9E]/50 to-[#2D0878]/60 border border-purple-500/30 rounded-3xl p-10 md:p-14 text-center backdrop-blur-sm"
          >
            <ShieldCheck size={48} className="text-[#F59E0B] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Built to Government Standards
            </h2>
            <p className="text-purple-200/65 max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
              Security and compliance aren&apos;t afterthoughts — they&apos;re built into every layer of the platform.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {compliance.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-purple-900/40 border border-purple-600/30 rounded-full px-4 py-2">
                  <CheckCircle2 size={14} className="text-green-400" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/product/features" className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors">
              Explore All Features <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
