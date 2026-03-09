'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'

type Variant = 'orange' | 'outline-orange' | 'outline-purple'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: Variant
}

const VARIANT_CLASSES: Record<Variant, string> = {
  orange:
    'bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold shadow-lg shadow-orange-600/30',
  'outline-orange':
    'border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10',
  'outline-purple':
    'border-2 border-purple-400/50 text-purple-200 hover:bg-purple-700/25 backdrop-blur-sm',
}

export default function Button({
  variant = 'orange',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className={`btn-orange-glow shadow-none inline-flex items-center gap-2 justify-center font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
