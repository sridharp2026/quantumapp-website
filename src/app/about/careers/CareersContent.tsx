'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, DollarSign, Heart, Zap, Users, Globe } from 'lucide-react'
import { openRoles } from '@/lib/data'
import PageHero from '@/components/layout/PageHero'

const perks = [
  { Icon: Heart, title: 'Mission That Matters', description: 'Work on technology that directly improves how government serves citizens.' },
  { Icon: DollarSign, title: 'Competitive Compensation', description: 'Top-of-market salary, equity, and a comprehensive benefits package.' },
  { Icon: Globe, title: 'Remote-First', description: 'Work from anywhere in the US, with optional hubs in DC, SF, and Austin.' },
  { Icon: Zap, title: 'Fast Growth', description: 'Early-stage startup with strong funding, real customers, and real impact.' },
  { Icon: Users, title: 'World-Class Team', description: 'Work alongside former government officials, DARPA researchers, and top engineers.' },
  { Icon: Clock, title: 'Flexible Hours', description: 'We care about outcomes, not hours. Work when and how you do your best work.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }

export default function CareersContent() {
  return (
    <main>
      <PageHero
        eyebrow="We're Hiring"
        title="Shape the Future of Government Tech"
        highlight="Government Tech"
        subtitle="Join a team of mission-driven builders making government operations faster, smarter, and more secure."
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold text-white text-center mb-12">
            Why QuantumApps.AI?
          </motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {perks.map(({ Icon, title, description }) => (
              <motion.div key={title} variants={fadeUp} className="bg-[#2D0878]/40 border border-purple-500/25 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center mb-4 shadow-lg shadow-purple-900/40">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-purple-200/60 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold text-white mb-8">
            Open Positions
          </motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
            {openRoles.map(({ title, department, location, type, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -2, borderColor: 'rgba(124,58,237,0.5)' }}
                className="bg-[#2D0878]/35 border border-purple-500/25 rounded-2xl p-6 backdrop-blur-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-white font-bold text-lg">{title}</h3>
                      <span className="text-xs text-purple-300 bg-purple-900/50 border border-purple-700/30 rounded-full px-2.5 py-0.5">{department}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="flex items-center gap-1 text-purple-200/55 text-xs"><MapPin size={11} />{location}</span>
                      <span className="flex items-center gap-1 text-purple-200/55 text-xs"><Clock size={11} />{type}</span>
                    </div>
                    <p className="text-purple-200/65 text-sm leading-relaxed">{description}</p>
                  </div>
                  <Link href="/contact" className="flex-shrink-0 flex items-center gap-1.5 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors">
                    Apply <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
