'use client'

import { motion } from 'framer-motion'
import { Play, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { MOCK_ROWS } from '@/lib/data'

export default function Digitize() {
  return (
    <section className="digitize-bg relative py-24 px-6 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140,60,240,0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl space-y-4 !font-medium text-white ">
            Digitize Government Operations,
            with Intelligent platform
          </h2>
        </motion.div>

        {/* Platform mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.015 }}
          className="relative mb-14 mx-auto max-w-2xl w-full"
        >
          <div className="rounded-[28px] p-[6px] bg-[linear-gradient(90deg,#7F25D1_-34.01%,#F5835F_47.71%,#FECF08_127.88%),linear-gradient(93deg,#FECF08_-19.92%,#F5835F_49.16%,#7F25D1_116.27%),linear-gradient(106deg,#E9B341_1.35%,#610CAD_102.79%)]">
            <div className="bg-[#2D0878] border border-purple-500 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(120,50,220)] backdrop-blur-sm">
              <div className="bg-[#1a0045] px-4 py-3 flex items-center gap-2 border-b border-purple-600">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-3 bg-purple-900/30 rounded-full h-5 flex items-center px-3">
                  <span className="text-gray-500 text-xs">quantumapps.ai/platform</span>
                </div>
              </div>

              <div className="p-6 text-left">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-white font-bold text-base">
                      Criminal Justice Advisory Board
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5">AI-Powered Case Management</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Active Cases', value: '248' },
                    { label: 'Resolved', value: '1,842' },
                    { label: 'Efficiency', value: '94%' },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="bg-purple-900/25 border border-purple-800/20 rounded-2xl p-3 text-center"
                    >
                      <p className="text-white font-bold text-lg">{value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1a0045]/60 rounded-2xl overflow-hidden border border-purple-600/20">
                  <div className="grid grid-cols-4 gap-2 px-4 py-2 text-xs text-gray-500 border-b border-purple-900/20">
                    {['Case ID', 'Type', 'Status', 'Progress'].map((h) => (
                      <span key={h}>{h}</span>
                    ))}
                  </div>
                  {MOCK_ROWS.map(([id, type, status, progress], i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="grid grid-cols-4 gap-2 px-4 py-2.5 text-xs border-b border-purple-900/10 last:border-0 hover:bg-purple-900/10 transition-colors"
                    >
                      <span className="text-purple-400 font-mono">{id}</span>
                      <span className="text-gray-300">{type}</span>
                      <span
                        className={`font-medium ${
                          status === 'Completed'
                            ? 'text-green-400'
                            : status === 'In Progress'
                            ? 'text-[#F59E0B]'
                            : 'text-gray-400'
                        }`}
                      >
                        {status}
                      </span>
                      <span className="text-white font-semibold">{progress}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.93 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(245,158,11,0.5)',
                  '0 0 0 22px rgba(245,158,11,0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-[#F59E0B] hover:bg-[#D97706] rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 transition-colors"
              aria-label="Watch demo"
            >
              <Play size={24} className="text-white fill-white ml-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[#FAFAFA] sm:text-[30px] mb-5">
            Experience <span className="font-bold text-[#FFC247]">QuantumApps.AI</span><br />in real
            government workflows.
          </p>
          <Button variant="orange" className="bg-[linear-gradient(90deg,#7F25D1_-34.01%,#F5835F_47.71%,#FECF08_127.88%)] px-10 py-4">
            Explore Platform <ChevronRight size={18} />
          </Button>
        </motion.div> */}
      </div>
    </section>
  )
}
