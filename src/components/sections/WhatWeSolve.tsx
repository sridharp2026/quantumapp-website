"use client";

import { motion } from "framer-motion";
import { CHALLENGES } from "@/lib/data";
import { Challenge } from '@/assets/svg';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhatWeSolve() {
  return (
    <section className="what-we-solve relative py-24 px-6 overflow-hidden">
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,60,240,0.35) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-7xl font-[300] text-white mb-5">
                What We Solve
              </h2>
              <p className="text-white text-base md:text-lg max-w-xl leading-relaxed">
                Government Systems and Processes face critical challenges.{" "}
                <span className="text-white font-medium">QuantumApps.AI</span>{" "}
                provides the solution.
              </p>
            </div>
            <div className="hidden sm:block shrink-0">
              <Challenge />
            </div>
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-[34px] font-[300] text-white mb-8 text-center"
        >
          The Challenge
        </motion.h3>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        >
          {CHALLENGES.map(({ Icon, description }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="flex items-center bg-[#431396]/70 rounded-[80px_20px] overflow-hidden backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-center w-[115px] min-h-[160px] rounded-[80px_20px] bg-[#7F25D1] shrink-0">
                <Icon size={36} className="text-white" />
              </div>
              <p className="text-[#D8D8D8] leading-relaxed px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base max-w-md">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <div className="text-right max-w-md">
            <motion.span className="text-[#F8C557] text-2xl md:text-[36px] font-[300] block mb-2">
              Result
            </motion.span>
            <p className="text-sm md:text-[22px] leading-relaxed">
              Agencies stuck between outdated tools and overwhelming technical
              debt.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
