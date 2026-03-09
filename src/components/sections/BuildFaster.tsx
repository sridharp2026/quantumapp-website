'use client'

import { motion } from 'framer-motion'
import { BUILD_FEATURES } from '@/lib/data'

export default function BuildFaster() {
  return (
    <section
      className="relative overflow-hidden py-24 px-6"
      style={{
        background:
          'linear-gradient(135deg, #FBBF24 0%, #F59E0B 25%, #D97706 55%, #B45309 80%, #92400E 100%)',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/10 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Two-column top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1]">
              We build{' '}
              <span className="underline decoration-white/40 underline-offset-4">modern</span>{' '}
              systems <em className="not-italic font-black">faster</em>,{' '}
              <span className="font-black">smarter</span>, and more{' '}
              <span className="underline decoration-white/40 underline-offset-4">secure</span>{' '}
              with <span className="font-black">Trusted AI Agents</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              An innovative approach to building modern and scalable systems. We build modern
              systems faster, smarter, and more secure.
            </p>
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="bg-white/15 backdrop-blur-sm rounded-3xl p-5 border border-white/20 shadow-2xl shadow-orange-900/20"
            >
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-300/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <div className="flex-1 ml-2 h-4 bg-white/15 rounded-full" />
              </div>
              <div className="space-y-2.5">
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-white/25 rounded" />
                  <div className="h-2 bg-white/35 rounded flex-1 mt-2" />
                </div>
                <div className="h-2 bg-white/20 rounded w-full" />
                <div className="h-2 bg-white/20 rounded w-5/6" />
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-10 bg-white/15 rounded-xl" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUILD_FEATURES.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.14 }}
              className="text-white"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Icon size={18} className="text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 leading-snug">{title}</h4>
              <p className="text-white/65 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
