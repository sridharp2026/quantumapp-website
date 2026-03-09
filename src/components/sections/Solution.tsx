'use client'

import { motion } from 'framer-motion'
import { Puzzle } from 'lucide-react'
import { SOLUTIONS } from '@/lib/data'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Solution() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'transparent' }}>
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140,60,240,0.35) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center shadow-xl shadow-purple-900/40 flex-shrink-0"
          >
            <Puzzle size={30} className="text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
              QuantumApps.AI
            </h2>
            <h2 className="text-3xl font-[300] text-[34px] text-white leading-tight">
              Solution
            </h2>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {SOLUTIONS.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(109,40,217,0.25)' }}
              className="group bg-gradient-to-br from-[#3B0D9E]/55 to-[#2D0878]/65 border border-purple-500/35 rounded-3xl p-7 cursor-default transition-all duration-300 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center mb-5 shadow-lg shadow-purple-900/40"
              >
                <Icon size={22} className="text-white" />
              </motion.div>
              <h3 className="text-[#F59E0B] font-bold text-lg mb-3">{title}</h3>
              <p className="text-purple-200/70 text-sm leading-relaxed group-hover:text-purple-100/90 transition-colors">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
