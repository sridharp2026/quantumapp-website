'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
}

export default function PageHero({ eyebrow, title, highlight, subtitle }: PageHeroProps) {
  const parts = highlight ? title.split(highlight) : null

  return (
    <section className="relative pt-36 pb-20 px-6 text-center overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(140,60,240,0.28) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-purple-200 text-xs font-medium tracking-wide">{eyebrow}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-[1.1]  mb-6"
        >
          {parts ? (
            <>
              {parts[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-yellow-300">
                {highlight}
              </span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-purple-200/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
