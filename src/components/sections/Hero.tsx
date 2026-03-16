"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import MouseParticles from "@/components/ui/MouseParticles";
import { HERO_PARTICLES } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      <MouseParticles />

      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {HERO_PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s + 1,
            height: p.s + 1,
            background:
              "radial-gradient(circle,rgba(234, 41, 251, 1) 60%, transparent 100%)",
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16 mb-5">
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium capitalize drop-shadow-[11px_10px_7.6px_rgba(0,0,0,0.35)]"
        >
          Intelligent Operations
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl md:text-[49px] leading-[1.07]  my-8 drop-shadow-[11px_10px_7.6px_rgba(0,0,0,0.25)]"
        >
          For Modern Government
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52 }}
          className="text-base md:text-[18px] mb-8 capitalize drop-shadow-[11px_10px_7.6px_rgba(0,0,0,0.25)]"
        >
          QuantumApps.AI is a trusted AI platform with intelligent agents built
          for Government Systems and Processes. Delivering domain expertise,
          Context-rich execution, and scalable experiences that transforms
          government tasks with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.68 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Link href="/get-early-access">
            <Button
              className="px-8 py-4 rounded-full !font-medium !text-[16px]
              bg-gradient-to-r from-yellow-400 to-orange-400 !text-black
              hover:scale-105 transition transform shadow-lg"
            >
              Get Early Access <ArrowRight size={15} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
