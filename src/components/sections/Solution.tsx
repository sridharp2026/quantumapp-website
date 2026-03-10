'use client'

import { motion } from 'framer-motion'
import { SOLUTIONS } from '@/lib/data'
import { SolutionIcon } from '../../../public/assets/svg'

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
    <section className="solution-bg relative pt-16 px-6 overflow-hidden pb-[150px]">
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140,60,240,0.35) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="flex items-center justify-center"
          >
            <SolutionIcon width={200} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
              QuantumApps.AI
            </h2>
            <h2 className="text-2xl md:text-[34px] font-[300] text-white leading-tight">
              Solution
            </h2>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        >
          {SOLUTIONS.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(109,40,217,0.25)' }}
              className="flex items-stretch items-center bg-[linear-gradient(101deg,#FECF08_-0.28%,#F5835F_72.84%,#7F25D1_143.88%)] rounded-[80px_20px] overflow-hidden backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-center w-[115px] min-h-[160px] rounded-[80px_20px] bg-[#7F25D1] shrink-0">
                <Icon size={36} className="text-white" />
              </div>
              <div className="px-4 sm:px-8 py-4 sm:py-6 max-w-md">
                <h3 className="text-[#3D076C] text-lg md:text-[22px] font-medium mb-3">{title}</h3>
                <p className="text-[#000000] text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
