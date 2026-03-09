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

    const newParticle = {
      id,
      x: mouseX,
      y: mouseY,
      size: Math.random() * 4 + 2,
    };

    setMouseParticles((prev) => [...prev, newParticle]);

    // remove particle after animation
    setTimeout(() => {
      setMouseParticles((prev) => prev.filter((p) => p.id !== id));
    }, 2000);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);
  // const canvasRef = useRef<HTMLCanvasElement>(null)

  // useEffect(() => {
  //   const canvas = canvasRef.current
  //   if (!canvas) return
  //   const ctx = canvas.getContext('2d')!
  //   let frame = 0
  //   let raf: number

  //   const resize = () => {
  //     canvas.width = canvas.offsetWidth
  //     canvas.height = canvas.offsetHeight
  //   }
  //   resize()
  //   window.addEventListener('resize', resize)

  //   const draw = () => {
  //     const W = canvas.width
  //     const H = canvas.height
  //     ctx.clearRect(0, 0, W, H)

  //     // 1. Background radial gradient
  //     const bgGrad = ctx.createRadialGradient(W * 0.62, H * 0.42, 0, W * 0.62, H * 0.42, W * 0.85)
  //     bgGrad.addColorStop(0,   'rgba(100, 20, 200, 0.95)')
  //     bgGrad.addColorStop(0.3, 'rgba(60,  10, 150, 0.85)')
  //     bgGrad.addColorStop(0.7, 'rgba(30,   0,  80, 0.6)')
  //     bgGrad.addColorStop(1,   'rgba(20,   0,  50, 0)')
  //     ctx.fillStyle = bgGrad
  //     ctx.fillRect(0, 0, W, H)

  //     // 2. Starburst rays
  //     const cx = W * 0.62
  //     const cy = H * 0.40
  //     const numRays = 32
  //     const rotation = frame * 0.0006
  //     const maxLen = Math.sqrt(W * W + H * H)

  //     ctx.save()
  //     for (let i = 0; i < numRays; i++) {
  //       const angle = (i / numRays) * Math.PI * 2 + rotation
  //       const ex = cx + Math.cos(angle) * maxLen
  //       const ey = cy + Math.sin(angle) * maxLen
  //       const alpha = i % 2 === 0 ? 0.18 : 0.10

  //       const rayGrad = ctx.createLinearGradient(cx, cy, ex, ey)
  //       rayGrad.addColorStop(0,    `rgba(180, 100, 255, ${alpha})`)
  //       rayGrad.addColorStop(0.15, `rgba(140,  60, 230, ${alpha * 0.7})`)
  //       rayGrad.addColorStop(0.5,  `rgba(100,  30, 180, ${alpha * 0.3})`)
  //       rayGrad.addColorStop(1,    'rgba(80, 0, 140, 0)')

  //       ctx.beginPath()
  //       ctx.moveTo(cx, cy)
  //       ctx.lineTo(ex, ey)
  //       ctx.strokeStyle = rayGrad
  //       ctx.lineWidth = 1.2
  //       ctx.stroke()
  //     }
  //     ctx.restore()

  //     // 3. Core glow orb
  //     const pulse = 0.88 + 0.12 * Math.sin(frame * 0.025)
  //     const orbR = W * 0.32 * pulse
  //     const orbGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orbR)
  //     orbGrad.addColorStop(0,    'rgba(200, 120, 255, 0.95)')
  //     orbGrad.addColorStop(0.08, 'rgba(160,  70, 240, 0.80)')
  //     orbGrad.addColorStop(0.25, 'rgba(120,  40, 200, 0.55)')
  //     orbGrad.addColorStop(0.55, 'rgba( 80,  15, 160, 0.20)')
  //     orbGrad.addColorStop(1,    'rgba( 40,   0,  90, 0)')
  //     ctx.beginPath()
  //     ctx.arc(cx, cy, orbR, 0, Math.PI * 2)
  //     ctx.fillStyle = orbGrad
  //     ctx.fill()

  //     // 4. Bright core highlight
  //     const coreR = W * 0.06 * pulse
  //     const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR)
  //     coreGrad.addColorStop(0,   'rgba(255, 220, 255, 0.9)')
  //     coreGrad.addColorStop(0.3, 'rgba(210, 130, 255, 0.6)')
  //     coreGrad.addColorStop(1,   'rgba(160,  60, 220, 0)')
  //     ctx.beginPath()
  //     ctx.arc(cx, cy, coreR, 0, Math.PI * 2)
  //     ctx.fillStyle = coreGrad
  //     ctx.fill()

  //     // 5. Secondary orb (upper-left accent)
  //     const s2x = W * 0.18
  //     const s2y = H * 0.25
  //     const s2pulse = 0.85 + 0.15 * Math.sin(frame * 0.018 + 1.5)
  //     const s2Grad = ctx.createRadialGradient(s2x, s2y, 0, s2x, s2y, W * 0.18 * s2pulse)
  //     s2Grad.addColorStop(0,   'rgba(140, 60, 220, 0.45)')
  //     s2Grad.addColorStop(0.5, 'rgba( 90, 20, 170, 0.18)')
  //     s2Grad.addColorStop(1,   'rgba( 50,  0, 100, 0)')
  //     ctx.beginPath()
  //     ctx.arc(s2x, s2y, W * 0.18 * s2pulse, 0, Math.PI * 2)
  //     ctx.fillStyle = s2Grad
  //     ctx.fill()

  //     // 6. Horizon wave glow
  //     const waveY = H * 0.78 + 8 * Math.sin(frame * 0.015)
  //     const waveGrad = ctx.createLinearGradient(0, waveY - 60, 0, waveY + 30)
  //     waveGrad.addColorStop(0,   'rgba(130, 50, 220, 0)')
  //     waveGrad.addColorStop(0.5, 'rgba(130, 50, 220, 0.20)')
  //     waveGrad.addColorStop(1,   'rgba( 80, 10, 160, 0.08)')
  //     ctx.fillStyle = waveGrad
  //     ctx.fillRect(0, waveY - 60, W, 90)

  //     frame++
  //     raf = requestAnimationFrame(draw)
  //   }

  //   draw()
  //   return () => {
  //     cancelAnimationFrame(raf)
  //     window.removeEventListener('resize', resize)
  //   }
  // }, [])

  return (
    <section
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden"
      // style={{ background: 'linear-gradient(160deg, #200055 0%, #1a0045 40%, #15003a 100%)' }}
    >
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
      {/* <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" /> */}

      {/* Floating particles */}
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          // className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.07] tracking-tight mb-3"
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
