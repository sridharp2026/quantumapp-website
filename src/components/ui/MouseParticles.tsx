"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Particle = { id: number; x: number; y: number; size: number };

export default function MouseParticles() {
  const ref = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      const id = Date.now();
      setParticles((prev) => [...prev, { id, x, y, size: Math.random() * 4 + 2 }]);
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 2000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.6, x: 0, y: 0 }}
          animate={{ opacity: 0, x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "radial-gradient(circle, rgba(234,41,251,1) 60%, transparent 100%)",
          }}
        />
      ))}
    </div>
  );
}
