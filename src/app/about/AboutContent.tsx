'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'

/* ─── animation variants ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }

/* ─── HERO ILLUSTRATION ──────────────────────────────────────────── */
function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto">
      {/* Glow orb behind */}
      <ellipse cx="260" cy="200" rx="160" ry="100" fill="url(#heroGlow)" opacity="0.55" />

      {/* Desk surface */}
      <rect x="80" y="230" width="360" height="14" rx="7" fill="#3B0D9E" opacity="0.8" />
      <rect x="100" y="244" width="60" height="60" rx="4" fill="#2D0878" opacity="0.6" />
      <rect x="360" y="244" width="60" height="60" rx="4" fill="#2D0878" opacity="0.6" />

      {/* Monitor */}
      <rect x="155" y="155" width="140" height="90" rx="8" fill="#1a0045" stroke="#7F25D1" strokeWidth="2" />
      <rect x="163" y="163" width="124" height="74" rx="4" fill="#230256" />
      {/* Screen content: mini bar chart */}
      <rect x="175" y="205" width="12" height="22" rx="2" fill="#F59E0B" opacity="0.9" />
      <rect x="192" y="195" width="12" height="32" rx="2" fill="#7F25D1" opacity="0.9" />
      <rect x="209" y="185" width="12" height="42" rx="2" fill="#F59E0B" opacity="0.9" />
      <rect x="226" y="190" width="12" height="37" rx="2" fill="#7F25D1" opacity="0.9" />
      <rect x="243" y="178" width="12" height="49" rx="2" fill="#F59E0B" opacity="0.9" />
      {/* Line graph */}
      <polyline points="175,202 192,192 209,182 226,187 243,175 263,168" stroke="#FBBF24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
      {/* Monitor stand */}
      <rect x="218" y="245" width="4" height="14" rx="2" fill="#3B0D9E" />
      <rect x="208" y="257" width="24" height="4" rx="2" fill="#3B0D9E" />

      {/* Person (left of monitor) */}
      {/* Body */}
      <ellipse cx="148" cy="220" rx="22" ry="28" fill="#5B21B6" />
      {/* Head */}
      <circle cx="148" cy="182" r="20" fill="#7C3AED" />
      {/* Hair */}
      <ellipse cx="148" cy="168" rx="20" ry="10" fill="#230256" />
      {/* Face features */}
      <ellipse cx="143" cy="183" rx="3" ry="3.5" fill="#1a0045" opacity="0.7"/>
      <ellipse cx="153" cy="183" rx="3" ry="3.5" fill="#1a0045" opacity="0.7"/>
      <path d="M143 190 Q148 194 153 190" stroke="#1a0045" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      {/* Arm reaching toward monitor */}
      <path d="M162 214 Q172 218 182 220" stroke="#5B21B6" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="184" cy="221" r="6" fill="#7C3AED" />

      {/* AI Robot (right of monitor) */}
      {/* Robot body */}
      <rect x="318" y="190" width="50" height="55" rx="10" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Robot head */}
      <rect x="322" y="162" width="42" height="32" rx="8" fill="#1D4ED8" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Robot eyes */}
      <rect x="328" y="170" width="10" height="8" rx="3" fill="#60A5FA" />
      <rect x="348" y="170" width="10" height="8" rx="3" fill="#60A5FA" />
      {/* Robot mouth */}
      <rect x="330" y="182" width="26" height="4" rx="2" fill="#93C5FD" opacity="0.7" />
      {/* Robot antenna */}
      <line x1="343" y1="162" x2="343" y2="148" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <circle cx="343" cy="144" r="5" fill="#60A5FA" />
      <circle cx="343" cy="144" r="3" fill="#BFDBFE" />
      {/* Robot arms */}
      <rect x="300" y="198" width="18" height="8" rx="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1" />
      <rect x="368" y="198" width="18" height="8" rx="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1" />
      {/* Robot panel lines */}
      <line x1="328" y1="208" x2="358" y2="208" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
      <line x1="328" y1="218" x2="358" y2="218" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
      {/* Robot legs */}
      <rect x="325" y="243" width="14" height="24" rx="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1" />
      <rect x="347" y="243" width="14" height="24" rx="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1" />

      {/* Floating: Plant leaves top-left */}
      <ellipse cx="90" cy="110" rx="22" ry="11" fill="#16A34A" transform="rotate(-30 90 110)" opacity="0.9" />
      <ellipse cx="75" cy="125" rx="18" ry="9" fill="#15803D" transform="rotate(15 75 125)" opacity="0.85" />
      <ellipse cx="105" cy="125" rx="16" ry="8" fill="#22C55E" transform="rotate(-50 105 125)" opacity="0.8" />
      <line x1="90" y1="135" x2="90" y2="115" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />

      {/* Floating: Bar chart card top-right */}
      <rect x="400" y="95" width="80" height="55" rx="8" fill="#2D0878" stroke="#7F25D1" strokeWidth="1.5" opacity="0.9" />
      <rect x="410" y="120" width="8" height="20" rx="2" fill="#F59E0B" opacity="0.9" />
      <rect x="423" y="112" width="8" height="28" rx="2" fill="#7F25D1" opacity="0.9" />
      <rect x="436" y="105" width="8" height="35" rx="2" fill="#F59E0B" opacity="0.9" />
      <rect x="449" y="110" width="8" height="30" rx="2" fill="#7F25D1" opacity="0.9" />
      <polyline points="410,118 423,110 436,104 449,109 465,100" stroke="#FBBF24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Floating: purple orb small top-center */}
      <circle cx="260" cy="80" r="12" fill="#7F25D1" opacity="0.4" />
      <circle cx="260" cy="80" r="6" fill="#A855F7" opacity="0.6" />

      {/* Floating dots */}
      <circle cx="120" cy="160" r="3" fill="#F59E0B" opacity="0.7" />
      <circle cx="395" cy="170" r="3" fill="#60A5FA" opacity="0.7" />
      <circle cx="130" cy="195" r="2" fill="#A855F7" opacity="0.6" />
      <circle cx="405" cy="145" r="2" fill="#FBBF24" opacity="0.6" />

      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F25D1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7F25D1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

/* ─── MISSION ILLUSTRATION (target + person) ─────────────────────── */
function MissionIllustration() {
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      {/* Glow */}
      <ellipse cx="160" cy="150" rx="120" ry="90" fill="url(#missionGlow)" opacity="0.4" />

      {/* Target rings */}
      <circle cx="160" cy="140" r="100" stroke="#7F25D1" strokeWidth="2" fill="#2D0878" opacity="0.3" />
      <circle cx="160" cy="140" r="75" stroke="#7F25D1" strokeWidth="2" fill="#3B0D9E" opacity="0.35" />
      <circle cx="160" cy="140" r="50" stroke="#A855F7" strokeWidth="2" fill="#4C1D95" opacity="0.4" />
      <circle cx="160" cy="140" r="25" stroke="#F59E0B" strokeWidth="2" fill="#5B21B6" opacity="0.5" />
      <circle cx="160" cy="140" r="10" fill="#F59E0B" opacity="0.9" />

      {/* Arrow 1 hitting target */}
      <line x1="80" y1="60" x2="155" y2="135" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <polygon points="155,130 149,140 161,140" fill="#F59E0B" />
      <line x1="80" y1="60" x2="74" y2="50" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="60" x2="90" y2="50" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />

      {/* Arrow 2 */}
      <line x1="240" y1="75" x2="167" y2="137" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="167,132 161,142 173,141" fill="#A855F7" />

      {/* Person at laptop - bottom left */}
      {/* Chair */}
      <rect x="30" y="215" width="70" height="8" rx="4" fill="#3B0D9E" />
      <line x1="50" y1="223" x2="50" y2="255" stroke="#3B0D9E" strokeWidth="5" strokeLinecap="round" />
      <line x1="80" y1="223" x2="80" y2="255" stroke="#3B0D9E" strokeWidth="5" strokeLinecap="round" />
      {/* Laptop */}
      <rect x="28" y="195" width="60" height="40" rx="4" fill="#1a0045" stroke="#7F25D1" strokeWidth="1.5" />
      <rect x="32" y="199" width="52" height="30" rx="2" fill="#230256" />
      {/* Screen content */}
      <rect x="36" y="215" width="8" height="10" rx="1" fill="#F59E0B" opacity="0.8" />
      <rect x="48" y="210" width="8" height="15" rx="1" fill="#7F25D1" opacity="0.8" />
      <rect x="60" y="207" width="8" height="18" rx="1" fill="#F59E0B" opacity="0.8" />
      {/* Person */}
      <circle cx="58" cy="175" r="15" fill="#7C3AED" />
      <ellipse cx="58" cy="205" rx="18" ry="20" fill="#5B21B6" />
      {/* Pointing arm */}
      <path d="M70 195 Q100 175 140 145" stroke="#5B21B6" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="143" cy="143" r="5" fill="#7C3AED" />

      {/* Stars/sparkles */}
      <circle cx="240" cy="210" r="3" fill="#F59E0B" opacity="0.8" />
      <circle cx="255" cy="200" r="2" fill="#FBBF24" opacity="0.6" />
      <circle cx="270" cy="215" r="2" fill="#F59E0B" opacity="0.7" />

      <defs>
        <radialGradient id="missionGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F25D1" />
          <stop offset="100%" stopColor="#7F25D1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

/* ─── VISION ILLUSTRATION (growth chart + people) ────────────────── */
function VisionIllustration() {
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      {/* Glow */}
      <ellipse cx="160" cy="160" rx="130" ry="90" fill="url(#visionGlow)" opacity="0.35" />

      {/* Grid lines */}
      <line x1="60" y1="220" x2="280" y2="220" stroke="#7F25D1" strokeWidth="1" opacity="0.4" />
      <line x1="60" y1="190" x2="280" y2="190" stroke="#7F25D1" strokeWidth="1" opacity="0.25" />
      <line x1="60" y1="160" x2="280" y2="160" stroke="#7F25D1" strokeWidth="1" opacity="0.25" />
      <line x1="60" y1="130" x2="280" y2="130" stroke="#7F25D1" strokeWidth="1" opacity="0.25" />
      <line x1="60" y1="100" x2="280" y2="100" stroke="#7F25D1" strokeWidth="1" opacity="0.25" />
      <line x1="60" y1="100" x2="60" y2="220" stroke="#7F25D1" strokeWidth="1" opacity="0.4" />

      {/* Bar chart */}
      <rect x="80" y="185" width="30" height="35" rx="4" fill="#3B0D9E" opacity="0.8" />
      <rect x="120" y="165" width="30" height="55" rx="4" fill="#5B21B6" opacity="0.8" />
      <rect x="160" y="140" width="30" height="80" rx="4" fill="#7F25D1" opacity="0.8" />
      <rect x="200" y="115" width="30" height="105" rx="4" fill="#A855F7" opacity="0.8" />
      <rect x="240" y="95" width="30" height="125" rx="4" fill="url(#barGrad)" opacity="0.9" />

      {/* Area fill under line */}
      <path d="M95 185 L135 160 L175 135 L215 110 L255 88 L255 220 L95 220 Z" fill="url(#areaFill)" opacity="0.25" />

      {/* Trend line */}
      <polyline points="95,185 135,160 175,135 215,110 255,88" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Data points */}
      <circle cx="95" cy="185" r="4" fill="#F59E0B" />
      <circle cx="135" cy="160" r="4" fill="#F59E0B" />
      <circle cx="175" cy="135" r="4" fill="#F59E0B" />
      <circle cx="215" cy="110" r="4" fill="#F59E0B" />
      <circle cx="255" cy="88" r="5" fill="#FBBF24" stroke="white" strokeWidth="1.5" />

      {/* Upward arrow */}
      <line x1="255" y1="88" x2="255" y2="55" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
      <polygon points="255,42 249,58 261,58" fill="#F59E0B" />

      {/* Person 1 */}
      <circle cx="95" cy="47" r="14" fill="#7C3AED" />
      <ellipse cx="95" cy="74" rx="16" ry="18" fill="#5B21B6" />
      {/* Happy face */}
      <circle cx="90" cy="46" r="2.5" fill="#1a0045" opacity="0.7" />
      <circle cx="100" cy="46" r="2.5" fill="#1a0045" opacity="0.7" />
      <path d="M90 52 Q95 56 100 52" stroke="#1a0045" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />

      {/* Person 2 */}
      <circle cx="148" cy="47" r="14" fill="#6D28D9" />
      <ellipse cx="148" cy="74" rx="16" ry="18" fill="#4C1D95" />
      <circle cx="143" cy="46" r="2.5" fill="#1a0045" opacity="0.7" />
      <circle cx="153" cy="46" r="2.5" fill="#1a0045" opacity="0.7" />
      <path d="M143 52 Q148 56 153 52" stroke="#1a0045" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />

      {/* Stars */}
      <circle cx="50" cy="130" r="3" fill="#F59E0B" opacity="0.7" />
      <circle cx="55" cy="150" r="2" fill="#FBBF24" opacity="0.5" />
      <circle cx="290" cy="140" r="3" fill="#A855F7" opacity="0.7" />

      <defs>
        <radialGradient id="visionGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F25D1" />
          <stop offset="100%" stopColor="#7F25D1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#7F25D1" />
        </linearGradient>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ─── VALUE ILLUSTRATION (shield + security) ─────────────────────── */
function ValueIllustration() {
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      {/* Glow */}
      <ellipse cx="160" cy="150" rx="115" ry="90" fill="url(#valueGlow)" opacity="0.4" />

      {/* Outer ring decoration */}
      <circle cx="160" cy="148" r="105" stroke="#7F25D1" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
      <circle cx="160" cy="148" r="85" stroke="#A855F7" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

      {/* Main shield */}
      <path d="M160 40 L215 65 L215 130 Q215 175 160 200 Q105 175 105 130 L105 65 Z" fill="url(#shieldGrad)" stroke="#7F25D1" strokeWidth="2" />
      <path d="M160 52 L207 74 L207 130 Q207 168 160 190 Q113 168 113 130 L113 74 Z" fill="#2D0878" opacity="0.6" />

      {/* Checkmark */}
      <path d="M138 128 L152 143 L183 112" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Lock icon inside lower shield area */}
      <rect x="148" y="155" width="24" height="18" rx="3" fill="#3B0D9E" stroke="#7F25D1" strokeWidth="1.5" />
      <path d="M153 155 L153 148 Q153 141 160 141 Q167 141 167 148 L167 155" stroke="#7F25D1" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="160" cy="164" r="3" fill="#F59E0B" />

      {/* Orbiting security icons */}
      {/* Icon 1: key */}
      <circle cx="65" cy="90" r="18" fill="#2D0878" stroke="#7F25D1" strokeWidth="1.5" opacity="0.9" />
      <circle cx="62" cy="88" r="5" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
      <line x1="66" y1="91" x2="74" y2="99" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="71" y1="96" x2="71" y2="100" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="73" y1="98" x2="73" y2="102" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />

      {/* Icon 2: eye/visibility */}
      <circle cx="255" cy="90" r="18" fill="#2D0878" stroke="#7F25D1" strokeWidth="1.5" opacity="0.9" />
      <path d="M246 90 Q255 82 264 90 Q255 98 246 90" stroke="#A855F7" strokeWidth="1.5" fill="none" />
      <circle cx="255" cy="90" r="3" fill="#A855F7" />

      {/* Icon 3: fingerprint */}
      <circle cx="80" cy="205" r="18" fill="#2D0878" stroke="#7F25D1" strokeWidth="1.5" opacity="0.9" />
      <path d="M80 197 Q72 200 72 207 Q72 214 80 216" stroke="#60A5FA" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M80 200 Q75 203 75 208" stroke="#60A5FA" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M80 203 Q78 205 78 208 Q78 212 80 213" stroke="#60A5FA" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Icon 4: data */}
      <circle cx="240" cy="205" r="18" fill="#2D0878" stroke="#7F25D1" strokeWidth="1.5" opacity="0.9" />
      <rect x="232" y="200" width="16" height="3" rx="1" fill="#FBBF24" />
      <rect x="232" y="206" width="10" height="3" rx="1" fill="#FBBF24" opacity="0.7" />
      <rect x="232" y="212" width="13" height="3" rx="1" fill="#FBBF24" opacity="0.5" />

      {/* Connecting lines from shield to icons */}
      <line x1="115" y1="110" x2="82" y2="97" stroke="#7F25D1" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <line x1="205" y1="110" x2="238" y2="97" stroke="#7F25D1" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <line x1="120" y1="170" x2="93" y2="196" stroke="#7F25D1" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <line x1="200" y1="170" x2="227" y2="196" stroke="#7F25D1" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

      <defs>
        <radialGradient id="valueGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F25D1" />
          <stop offset="100%" stopColor="#7F25D1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#3B0D9E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */
export default function AboutContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/70 focus:bg-white/15 transition-all'

  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-10 px-6 text-center overflow-hidden">
        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(140,60,240,0.28) 0%, transparent 65%)', filter: 'blur(50px)' }}
        />
        <div className="relative max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-10"
          >
            About
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </section>

      {/* ── OUR MISSION ──────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <motion.div variants={fadeUp} className="bg-[#2D0878]/40 border border-purple-500/25 rounded-3xl p-10 backdrop-blur-sm">
              <p className="text-[#F59E0B] text-xs font-semibold tracking-widest uppercase mb-4">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Empowering agencies with intelligent tools
              </h2>
              <p className="text-purple-200/70 text-base leading-relaxed">
                QuantumApps.AI exists to bridge the gap between cutting-edge AI and the real-world demands of government agencies. We deliver intelligent, compliant, and secure automation so that public servants can focus on what truly matters — serving the people.
              </p>
              <p className="text-purple-200/55 text-sm leading-relaxed mt-4">
                With deep roots in government technology, we build solutions that understand procurement constraints, FedRAMP requirements, and the complexity of legacy infrastructure — making modernization practical, not just possible.
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div variants={fadeUp} className="flex items-center justify-center">
              <MissionIllustration />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR VISION ──────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Illustration — left on desktop */}
            <motion.div variants={fadeUp} className="flex items-center justify-center order-2 lg:order-1">
              <VisionIllustration />
            </motion.div>

            {/* Text — right on desktop */}
            <motion.div variants={fadeUp} className="bg-[#2D0878]/40 border border-purple-500/25 rounded-3xl p-10 backdrop-blur-sm order-1 lg:order-2">
              <p className="text-[#F59E0B] text-xs font-semibold tracking-widest uppercase mb-4">Our Vision</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                A future where every government interaction is smart
              </h2>
              <p className="text-purple-200/70 text-base leading-relaxed">
                We envision a future where every government-powered application — from citizen portals to inter-agency systems — is connected, intelligent, and responsive. Quantum-powered infrastructure will be the backbone of modern public service.
              </p>
              <p className="text-purple-200/55 text-sm leading-relaxed mt-4">
                Our platform is designed to grow with your agency: scalable, interoperable, and built for the complexity of tomorrow's challenges — not just today's requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR VALUE ────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <motion.div variants={fadeUp} className="bg-[#2D0878]/40 border border-purple-500/25 rounded-3xl p-10 backdrop-blur-sm">
              <p className="text-[#F59E0B] text-xs font-semibold tracking-widest uppercase mb-4">Our Value</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Trust, transparency, and mission-first thinking
              </h2>
              <div className="space-y-5">
                {[
                  { label: 'Trust First', desc: 'Every decision starts with security and citizen trust. Non-negotiable.' },
                  { label: 'Mission-Driven', desc: `We measure our success by your agency's outcomes, not software metrics.` },
                  { label: 'Pragmatic Innovation', desc: 'We innovate within real government constraints — budgets, compliance, legacy systems.' },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{label}</p>
                      <p className="text-purple-200/60 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div variants={fadeUp} className="flex items-center justify-center">
              <ValueIllustration />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── GET IN TOUCH ──────────────────────────────────────────── */}
      <section className="py-20 px-6 mx-4 mb-12 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 45%, #F97316 100%)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">Get in Touch</h2>
            <p className="text-white/80 text-base max-w-xl mx-auto">
              Whether you're a developer with questions, a partner, an investor, or an organization — we'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center min-h-[320px] text-center">
                  <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <CheckCircle size={56} className="text-white mx-auto mb-5" />
                  </motion.div>
                  <h3 className="text-white font-extrabold text-2xl mb-2">Message Received!</h3>
                  <p className="text-white/75 text-sm">We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 tracking-wide">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 tracking-wide">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@agency.gov"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 tracking-wide">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your needs..."
                      className={inputClass + ' resize-none'}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 bg-[#1a0045] hover:bg-[#2D0878] disabled:opacity-60 text-white font-bold py-3.5 rounded-full text-sm transition-colors shadow-xl"
                  >
                    {loading
                      ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      : <Send size={14} />}
                    {loading ? 'Sending…' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact info card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#1a0045]/85 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-white"
            >
              <h3 className="text-xl font-extrabold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center flex-shrink-0">
                    <Mail size={17} className="text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium">Email</p>
                    <a href="mailto:hello@quantumapps.ai" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors">
                      hello@quantumapps.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center flex-shrink-0">
                    <Phone size={17} className="text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium">Phone</p>
                    <a href="tel:+12025550147" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors">
                      +1 (202) 555-0147
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  Want to see the platform in action? Schedule a personalized 30-minute demo tailored to your agency.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-lg shadow-orange-900/30"
                >
                  Book a Demo
                </motion.a>
              </div>

              <p className="text-white/35 text-xs mt-5">We typically respond within one business day.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
