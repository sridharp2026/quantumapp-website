'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'

type Variant = 'orange' | 'outline-orange' | 'outline-purple' | 'ghost' | 'icon-purple' | 'list-item'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: Variant
}

const VARIANT_CLASSES: Record<Variant, string> = {
  orange:
    'bg-[#F59E0B] hover:bg-[#D97706] text-black font-medium px-8 py-3.5 rounded-full',
  'outline-orange':
    'border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10 px-8 py-3.5 rounded-full',
  'outline-purple':
    'border-2 border-purple-400/50 text-purple-200 hover:bg-purple-700/25 backdrop-blur-sm px-8 py-3.5 rounded-full',
  ghost:
    'text-white hover:bg-white/10 rounded-lg p-1',
  'icon-purple':
    'w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-700/30 text-purple-400 hover:text-white hover:bg-purple-700/50',
  'list-item':
    'w-full text-left justify-between p-3 rounded-xl hover:bg-purple-900/30 group',
}

// Ambient glow (resting) → bloom glow (hover)
const GLOW: Record<Variant, { rest: string; hover: string }> = {
  orange: {
    rest:  '0 0 12px rgba(245,158,11,0.35), 0 4px 20px rgba(245,158,11,0.2)',
    hover: '0 0 28px rgba(245,158,11,0.7), 0 6px 40px rgba(245,158,11,0.35)',
  },
  'outline-orange': {
    rest:  '0 0 10px rgba(245,158,11,0.25)',
    hover: '0 0 24px rgba(245,158,11,0.55), 0 0 48px rgba(245,158,11,0.2)',
  },
  'outline-purple': {
    rest:  '0 0 10px rgba(139,92,246,0.25)',
    hover: '0 0 24px rgba(139,92,246,0.55), 0 0 48px rgba(139,92,246,0.2)',
  },
  ghost: {
    rest:  '0 0 0px rgba(255,255,255,0)',
    hover: '0 0 14px rgba(255,255,255,0.12)',
  },
  'icon-purple': {
    rest:  '0 0 8px rgba(139,92,246,0.2)',
    hover: '0 0 20px rgba(139,92,246,0.45)',
  },
  'list-item': {
    rest:  '0 0 0px rgba(245,158,11,0)',
    hover: '0 0 18px rgba(245,158,11,0.12)',
  },
}

export default function Button({
  variant = 'orange',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const glow = GLOW[variant]
  return (
    <motion.button
      initial={{ boxShadow: glow.rest }}
      whileHover={{ scale: 1.05, boxShadow: glow.hover }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={`shadow-none inline-flex items-center gap-2 justify-center transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
