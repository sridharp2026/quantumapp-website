'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'

const team = [
  { name: 'Sarah Chen', title: 'Co-Founder & CEO', bio: 'Former Deputy CTO of the U.S. Digital Service. 15 years modernizing federal systems at DoD, HHS, and USDS.', initials: 'SC', color: 'from-purple-500 to-violet-600' },
  { name: 'Marcus Williams', title: 'Co-Founder & CTO', bio: 'Ex-DoD AI Program Lead. Architected AI systems for DoD agencies. PhD in Computer Science from Carnegie Mellon.', initials: 'MW', color: 'from-blue-500 to-indigo-600' },
  { name: 'Priya Sharma', title: 'Chief Product Officer', bio: '12 years in GovTech product. Previously VP Product at Palantir Government. Expert in government data workflows.', initials: 'PS', color: 'from-pink-500 to-rose-600' },
  { name: 'James Torres', title: 'Head of Engineering', bio: 'Former principal engineer at MITRE Corporation. Specialist in legacy system integration and government cloud architecture.', initials: 'JT', color: 'from-emerald-500 to-teal-600' },
  { name: 'Rachel Kim', title: 'Chief Security Officer', bio: 'Former NSA cybersecurity engineer. FedRAMP authorization expert. Led security programs across 20+ government agencies.', initials: 'RK', color: 'from-orange-500 to-amber-600' },
  { name: 'David Okafor', title: 'Head of Customer Success', bio: 'Former State CIO for Georgia. Deep expertise in state and local government technology transformation.', initials: 'DO', color: 'from-cyan-500 to-blue-600' },
  { name: 'Lisa Park', title: 'Head of Government Relations', bio: 'Former Congressional staffer and OMB policy analyst. Expert in government procurement and federal technology policy.', initials: 'LP', color: 'from-violet-500 to-purple-600' },
  { name: 'Omar Hassan', title: 'Head of AI Research', bio: 'PhD in NLP from MIT. Former researcher at DARPA AI programs. Specializes in domain-aware language models for government use.', initials: 'OH', color: 'from-red-500 to-orange-600' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export default function TeamContent() {
  return (
    <main>
      <PageHero
        eyebrow="Our Team"
        title="Government Technology Experts"
        highlight="Government Technology"
        subtitle="Former government officials, DARPA researchers, and agency CIOs who've lived the challenges you face."
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, title, bio, initials, color }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(120,50,220,0.2)' }}
                className="bg-[#2D0878]/40 border border-purple-500/25 rounded-3xl p-6 text-center transition-all backdrop-blur-sm cursor-default"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                  <span className="text-white font-black text-2xl">{initials}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-0.5">{name}</h3>
                <p className="text-[#F59E0B] text-xs font-semibold mb-3">{title}</p>
                <p className="text-purple-200/60 text-xs leading-relaxed mb-4">{bio}</p>
                <button className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-700/30 flex items-center justify-center mx-auto text-purple-400 hover:text-white hover:bg-purple-700/50 transition-colors">
                  <Linkedin size={13} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
