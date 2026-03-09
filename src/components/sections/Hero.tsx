"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { HERO_PARTICLES } from "@/lib/data";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mouseParticles, setMouseParticles] = useState<any[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;
      const id = Date.now();

      setMouseParticles((prev) => [
        ...prev,
        { id, x: mouseX, y: mouseY, size: Math.random() * 4 + 2 },
      ]);

      setTimeout(() => {
        setMouseParticles((prev) => prev.filter((p) => p.id !== id));
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {mouseParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              x: Math.random() * 80 - 40,
              y: Math.random() * 80 - 40,
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background:
                "radial-gradient(circle, rgba(234,41,251,1) 60%, transparent 100%)",
            }}
          />
        ))}
      </div>

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

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-[300] capitalize drop-shadow-[11px_10px_7.6px_rgba(0,0,0,0.35)]"
        >
          Intelligent Operations
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl md:text-[49px] leading-[1.07] tracking-tight mb-8 drop-shadow-[11px_10px_7.6px_rgba(0,0,0,0.25)]"
        >
          For Modern Government
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52 }}
          className="text-base md:text-[18px] tracking-tight mb-8 capitalize drop-shadow-[11px_10px_7.6px_rgba(0,0,0,0.25)]"
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
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            className="px-8 py-4 rounded-full !font-[300] !text-[16px]
            bg-gradient-to-r from-yellow-400 to-orange-400 !text-black
            hover:scale-105 transition transform shadow-lg"
          >
            Get Early Access <ArrowRight size={15} />
          </Button>
          <Button
            className="px-8 py-4 rounded-full !font-[300] !text-[16px]
            bg-white text-gray-800 !text-black
            hover:scale-105 transition transform shadow-lg hover:bg-gradient-to-r from-yellow-400 to-orange-400"
          >
            Early Platform
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
