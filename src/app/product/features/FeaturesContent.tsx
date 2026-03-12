'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Workflow, Shield, BarChart3, FileText, Lock, RefreshCw, Users, Zap, Globe, Bell } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'

const featureGroups = [
  {
    category: 'AI Agent Capabilities',
    color: 'from-purple-600 to-violet-700',
    features: [
      { Icon: Brain, title: 'Domain-Aware Intelligence', description: 'Agents pre-trained on government processes, terminology, and regulatory context out of the box.' },
      { Icon: Zap, title: 'Multi-Step Task Execution', description: 'Chain complex workflows across multiple systems and databases in a single automated run.' },
      { Icon: RefreshCw, title: 'Continuous Learning', description: 'Agents adapt to your agency\'s unique data patterns and improve accuracy over time.' },
      { Icon: Users, title: 'Role-Based Agent Access', description: 'Define exactly which agents can access which systems, data, and workflows per role.' },
    ],
  },
  {
    category: 'Data & Integration',
    color: 'from-blue-600 to-indigo-700',
    features: [
      { Icon: Database, title: 'Legacy Data Migration', description: 'Automated, AI-assisted migration of data from COBOL systems, mainframes, and legacy databases.' },
      { Icon: Globe, title: 'Real-Time Data Sync', description: 'Keep multiple systems in sync with real-time bidirectional data flows and conflict resolution.' },
      { Icon: RefreshCw, title: 'Multi-Source Aggregation', description: 'Combine data from disparate sources into a unified, queryable data layer for your agents.' },
      { Icon: FileText, title: 'Full Audit Trail', description: 'Every data read, write, and transformation is logged with timestamps for complete auditability.' },
    ],
  },
  {
    category: 'Workflow & Compliance',
    color: 'from-emerald-600 to-teal-700',
    features: [
      { Icon: Workflow, title: 'Guided Workflow Designer', description: 'Build and configure government workflows visually with no-code drag-and-drop tools.' },
      { Icon: Shield, title: 'Automated Compliance Checks', description: 'Agents automatically verify compliance with relevant regulations before executing actions.' },
      { Icon: Lock, title: 'Government-Grade Security', description: 'End-to-end encryption, zero-trust architecture, and government-approved cryptography.' },
      { Icon: Bell, title: 'Intelligent Alerting', description: 'Configurable alerts and escalation paths for anomalies, errors, or compliance violations.' },
    ],
  },
  {
    category: 'Analytics & Oversight',
    color: 'from-orange-500 to-amber-600',
    features: [
      { Icon: BarChart3, title: 'Real-Time Dashboards', description: 'Live visibility into agent activity, workflow status, and operational metrics across your agency.' },
      { Icon: FileText, title: 'Automated Report Generation', description: 'Generate compliance, performance, and audit reports on demand or on a scheduled cadence.' },
      { Icon: Users, title: 'Human-in-the-Loop Controls', description: 'Define approval gates where human oversight is required before agents proceed.' },
      { Icon: Globe, title: 'Agency-Wide Visibility', description: 'Centralized operations center for managing agents and workflows across departments.' },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export default function FeaturesContent() {
  return (
    <main>
      <PageHero
        eyebrow="Platform Features"
        title="Everything Government Agencies Need"
        highlight="Government Agencies"
        subtitle="Purpose-built features for modernizing, automating, and securing government operations at scale."
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {featureGroups.map(({ category, color, features }) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${color}`} />
                <h2 className="text-2xl font-light text-white">{category}</h2>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {features.map(({ Icon, title, description }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(124,58,237,0.5)' }}
                    className="flex gap-4 bg-[#2D0878]/40 border border-purple-500/25 rounded-2xl p-6 transition-all backdrop-blur-sm cursor-default"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1.5">{title}</h3>
                      <p className="text-purple-200/65 text-sm leading-relaxed">{description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
