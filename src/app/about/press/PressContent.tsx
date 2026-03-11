'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'

const pressItems = [
  { outlet: 'TechCrunch', date: 'January 2025', headline: 'QuantumApps.AI Secures FedRAMP Authorization, Opening Doors to Federal Procurement', excerpt: 'The government AI startup achieves one of the most rigorous cloud security certifications, paving the way for deployment across federal agencies.', color: 'from-green-500 to-emerald-600', initials: 'TC' },
  { outlet: 'GovTech Magazine', date: 'November 2024', headline: 'New AI Platform Promises to Cut Government Modernization Costs by 70%', excerpt: 'QuantumApps.AI\'s unique approach to AI-assisted modernization is delivering results that traditional system integrators couldn\'t achieve.', color: 'from-blue-500 to-indigo-600', initials: 'GT' },
  { outlet: 'FedScoop', date: 'September 2024', headline: 'QuantumApps.AI Selected for USDS Emerging Technology Pilot Program', excerpt: 'The U.S. Digital Service selects QuantumApps.AI to pilot AI agent technology across three federal pilot sites.', color: 'from-purple-500 to-violet-600', initials: 'FS' },
  { outlet: 'StateScoop', date: 'July 2024', headline: 'How AI Agents Are Transforming State Government Operations', excerpt: 'A deep dive into how QuantumApps.AI\'s agents are helping state agencies process cases 60% faster while reducing error rates.', color: 'from-orange-500 to-amber-600', initials: 'SS' },
  { outlet: 'VentureBeat', date: 'April 2024', headline: 'QuantumApps.AI Raises $28M Series A to Expand Government AI Platform', excerpt: 'The funding round was led by In-Q-Tel and will accelerate product development and agency customer growth.', color: 'from-red-500 to-rose-600', initials: 'VB' },
  { outlet: 'Government Technology', date: 'February 2024', headline: 'Criminal Justice Systems Get AI Upgrade with QuantumApps.AI', excerpt: 'Several state criminal justice agencies deploy QuantumApps.AI to modernize case management, reducing processing backlogs by 45%.', color: 'from-cyan-500 to-blue-600', initials: 'GV' },
]

const pressAssets = [
  { title: 'Press Kit & Brand Assets', description: 'Logos, product screenshots, and brand guidelines for media use.' },
  { title: 'Executive Headshots', description: 'High-resolution photos of our leadership team for publication.' },
  { title: 'Product Screenshots', description: 'Platform screenshots approved for editorial use.' },
  { title: 'Fact Sheet', description: 'Key company stats, milestones, and customer impact data.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }

export default function PressContent() {
  return (
    <main>
      <PageHero
        eyebrow="Press & Media"
        title="QuantumApps.AI in the News"
        subtitle="Coverage, announcements, and media resources for journalists covering government AI and technology modernization."
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {pressItems.map(({ outlet, date, headline, excerpt, color, initials }) => (
              <motion.div
                key={headline}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: 'rgba(124,58,237,0.5)' }}
                className="group bg-[#2D0878]/40 border border-purple-500/25 rounded-3xl p-6 backdrop-blur-sm transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-white font-black text-xs">{initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{outlet}</p>
                    <p className="flex items-center gap-1 text-purple-300/50 text-xs"><Calendar size={10} />{date}</p>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-purple-400/40 group-hover:text-purple-300 transition-colors" />
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{headline}</h3>
                <p className="text-purple-200/60 text-sm leading-relaxed">{excerpt}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#3B0D9E]/50 to-[#2D0878]/60 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-white font-bold text-xl mb-3">Media Contact</h3>
              <p className="text-purple-200/60 text-sm mb-5">For press inquiries, interview requests, and editorial questions:</p>
              <div className="space-y-2">
                <p className="text-white font-semibold">Press Team</p>
                <a href="mailto:press@quantumapps.ai" className="text-[#F59E0B] text-sm hover:text-orange-300 transition-colors">press@quantumapps.ai</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#2D0878]/40 border border-purple-500/25 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-white font-bold text-xl mb-5">Press Resources</h3>
              <div className="space-y-3">
                {pressAssets.map(({ title, description }) => (
                  <Button key={title} variant="list-item">
                    <div>
                      <p className="text-white text-sm font-medium">{title}</p>
                      <p className="text-purple-300/50 text-xs">{description}</p>
                    </div>
                    <ExternalLink size={13} className="text-purple-400/40 group-hover:text-purple-300 transition-colors flex-shrink-0 ml-3" />
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
