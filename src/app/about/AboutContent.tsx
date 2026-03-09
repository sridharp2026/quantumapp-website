'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Lightbulb, Target } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'

const values = [
  { Icon: Shield, title: 'Trust First', description: 'Every decision we make starts with "how does this build trust with government and citizens?" Security and transparency are non-negotiable.' },
  { Icon: Target, title: 'Mission-Driven', description: 'We measure success by agency outcomes, not software metrics. If your mission moves forward, we succeed.' },
  { Icon: Users, title: 'Government Expertise', description: 'Our team has decades of combined experience inside government — we understand the constraints, culture, and complexity firsthand.' },
  { Icon: Lightbulb, title: 'Pragmatic Innovation', description: 'We innovate within the real constraints of government: budgets, procurement, compliance, and legacy infrastructure.' },
]

const milestones = [
  { year: '2021', event: 'Founded by former government technology leaders with a shared mission to modernize public sector operations.' },
  { year: '2022', event: 'Launched first AI agent pilot with a state Department of Justice. Reduced case processing time by 60%.' },
  { year: '2023', event: 'Achieved FedRAMP Authorization. Expanded to 12 state and federal agency customers.' },
  { year: '2024', event: 'Selected for the USDS AI Pilot Program. Raised Series A to accelerate platform development.' },
  { year: '2025', event: 'Platform deployed across 35+ government agencies. Processing over 2M government workflows monthly.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

export default function AboutContent() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="Building Tomorrow's Government, Today"
        highlight="Tomorrow's Government"
        subtitle="We started QuantumApps.AI because we spent years inside government watching good people fail with bad tools. We decided to fix that."
      />

      {/* Mission */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#3B0D9E]/50 to-[#2D0878]/60 border border-purple-500/30 rounded-3xl p-10 md:p-14 backdrop-blur-sm">
            <p className="text-purple-200/50 text-xs font-semibold tracking-widest uppercase mb-4">Our Mission</p>
            <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
              &ldquo;Make government operations as efficient, intelligent, and responsive as the best private-sector organizations — without compromising security, compliance, or the public trust.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold text-white text-center mb-14">
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-purple-500/30 to-transparent" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-10">
              {milestones.map(({ year, event }) => (
                <motion.div key={year} variants={fadeUp} className="flex gap-8">
                  <div className="flex-shrink-0 w-8 text-right">
                    <span className="text-[#F59E0B] font-black text-sm">{year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div className="w-4 h-4 rounded-full bg-[#F59E0B] border-2 border-[#1a0045] shadow-lg shadow-orange-500/30 relative z-10" />
                  </div>
                  <p className="text-purple-200/75 text-sm leading-relaxed pb-4">{event}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">What We Believe</h2>
            <p className="text-purple-200/55 text-sm">The values that guide every product decision we make.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ Icon, title, description }) => (
              <motion.div key={title} variants={fadeUp} whileHover={{ y: -4 }} className="bg-[#2D0878]/40 border border-purple-500/25 rounded-2xl p-7 backdrop-blur-sm transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center mb-4 shadow-lg shadow-purple-900/40">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-[#F59E0B] font-bold text-lg mb-2">{title}</h3>
                <p className="text-purple-200/65 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
