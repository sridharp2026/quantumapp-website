"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Workflow,
  CheckSquare,
  BrainCircuit,
  Calendar,
  Users,
  FileText,
  Settings,
  Bell,
} from "lucide-react";
import {
  ProductAiDecision,
  ProductAIPowered,
  ProductAnalyze,
  ProductAutoFill,
  ProductCourtCalender,
  ProductGoviText,
  ProductImapct,
  ProductOperate,
  ProductProvider,
  ProductScheduling,
  ProductStreamLine,
} from "../../../public/assets/svg";

const features = [
  {
    Icon: ProductAutoFill,
    description:
      "Automatically fill in inputs with the right context, reducing errors.",
  },
  {
    Icon: ProductProvider,
    description:
      "Provide predictive guidance, telling users what they need before the next step in the process.",
  },
  {
    Icon: ProductAnalyze,
    description:
      "Analyze data intelligently, offering all relevant possibilities with up-to-date recommendations.",
  },
  {
    Icon: ProductOperate,
    description:
      "Operate via simple prompts, making complex tasks intuitive and faster.",
  },
];

const impacts = [
  {
    Icon: Workflow,
    description:
      "Streamline operations, saving time and reducing administrative burden.",
    accent: false,
  },
  {
    Icon: CheckSquare,
    description: "Ensure accuracy across scheduling and data entry.",
    accent: true,
  },
  {
    Icon: BrainCircuit,
    description:
      "Stay ahead with AI that understands context and guides decision-making.",
    accent: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

// Mini dashboard stat rows
const dashStats = [
  [
    { label: "Total Cases", val: 3 },
    { label: "Entry Types", val: 11 },
    { label: "Pending Tasks", val: 97 },
    { label: "Mapping Type", val: 14 },
    { label: "Documents", val: 23 },
    { label: "Expiring Docs", val: 46 },
  ],
  [
    { label: "Filed", val: 43 },
    { label: "Reviewed", val: 28 },
    { label: "Scheduled", val: 1 },
    { label: "Hearings", val: 7 },
    { label: "Archived", val: 10 },
    { label: "Flagged", val: 11 },
  ],
];

// GovAI Logo SVG
function GovAILogo() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5">
      <span className="text-white font-black text-base tracking-tight leading-none">
        <span className="text-[#F59E0B]">Gov</span>
        <span className="text-white">AI</span>
      </span>
    </span>
  );
}

// Illustration: Person at clipboard (Hero right side)
function HeroIllustration() {
  return (
    <svg viewBox="0 0 220 240" className="w-full h-full" aria-hidden>
      {/* clipboard body */}
      <rect
        x="55"
        y="30"
        width="120"
        height="155"
        rx="10"
        fill="#7C3AED"
        opacity="0.7"
      />
      <rect
        x="65"
        y="50"
        width="100"
        height="120"
        rx="4"
        fill="#A78BFA"
        opacity="0.5"
      />
      {/* clip at top */}
      <rect x="85" y="22" width="50" height="20" rx="6" fill="#F59E0B" />
      {/* lines on clipboard */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="72"
          y={60 + i * 18}
          width={i % 2 === 0 ? 86 : 60}
          height="6"
          rx="3"
          fill="#C4B5FD"
          opacity="0.6"
        />
      ))}
      {/* Robot arm */}
      <line
        x1="175"
        y1="90"
        x2="155"
        y2="110"
        stroke="#F59E0B"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="180" cy="85" r="12" fill="#F59E0B" opacity="0.9" />
      <circle cx="180" cy="85" r="6" fill="#1a0045" />
      {/* Person silhouette */}
      <circle cx="42" cy="130" r="18" fill="#5B21B6" opacity="0.9" />
      <ellipse cx="42" cy="185" rx="22" ry="35" fill="#5B21B6" opacity="0.8" />
      {/* Person arm holding */}
      <line
        x1="60"
        y1="155"
        x2="90"
        y2="130"
        stroke="#7C3AED"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Sparkle dots */}
      <circle cx="195" cy="40" r="4" fill="#F59E0B" opacity="0.7" />
      <circle cx="30" cy="60" r="3" fill="#A78BFA" opacity="0.6" />
      <circle cx="200" cy="160" r="3" fill="#A78BFA" opacity="0.5" />
    </svg>
  );
}

// Illustration: Calendar with person
function CalendarIllustration() {
  return (
    <svg viewBox="0 0 180 160" className="w-full h-full" aria-hidden>
      <rect
        x="20"
        y="25"
        width="130"
        height="110"
        rx="10"
        fill="#7C3AED"
        opacity="0.7"
      />
      <rect
        x="20"
        y="25"
        width="130"
        height="28"
        rx="10"
        fill="#F59E0B"
        opacity="0.85"
      />
      <rect
        x="20"
        y="38"
        width="130"
        height="15"
        rx="0"
        fill="#F59E0B"
        opacity="0.85"
      />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={30 + col * 28}
            y={65 + row * 22}
            width="20"
            height="14"
            rx="3"
            fill="#A78BFA"
            opacity="0.5"
          />
        )),
      )}
      {/* Highlight cell */}
      <rect
        x="86"
        y="87"
        width="20"
        height="14"
        rx="3"
        fill="#F59E0B"
        opacity="0.85"
      />
      {/* Person */}
      <circle cx="158" cy="70" r="14" fill="#5B21B6" opacity="0.9" />
      <ellipse cx="158" cy="115" rx="18" ry="28" fill="#5B21B6" opacity="0.8" />
    </svg>
  );
}

// Illustration: Impact graphic
function ImpactIllustration() {
  return (
    <svg viewBox="0 0 180 160" className="w-full h-full" aria-hidden>
      {/* Grid/table background */}
      <rect
        x="20"
        y="20"
        width="130"
        height="105"
        rx="8"
        fill="#5B21B6"
        opacity="0.5"
      />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="20"
          y={20 + i * 26}
          width="130"
          height="1"
          fill="#A78BFA"
          opacity="0.3"
        />
      ))}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={50 + i * 35}
          y="20"
          width="1"
          height="105"
          fill="#A78BFA"
          opacity="0.3"
        />
      ))}
      {/* Colored cells */}
      <rect
        x="22"
        y="22"
        width="27"
        height="23"
        rx="2"
        fill="#F59E0B"
        opacity="0.7"
      />
      <rect
        x="57"
        y="48"
        width="27"
        height="23"
        rx="2"
        fill="#7C3AED"
        opacity="0.7"
      />
      <rect
        x="92"
        y="74"
        width="27"
        height="23"
        rx="2"
        fill="#F59E0B"
        opacity="0.7"
      />
      {/* Person */}
      <circle cx="158" cy="50" r="14" fill="#F59E0B" opacity="0.9" />
      <ellipse cx="158" cy="100" rx="18" ry="30" fill="#F59E0B" opacity="0.7" />
    </svg>
  );
}

export default function ProductContent() {
  return (
    <main className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="product-hero-bg flex items-center min-h-screen relative pt-24 pb-16 px-6 overflow-hidden">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(120,50,240,0.6) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[79px] [text-shadow:12px_13px_4px_rgba(0,0,0,0.29)] font-[300] leading-tight mb-4">
                In Partnership
                <div className="flex items-center gap-8">
                  <span className="text-[59px]">with </span>
                  <ProductGoviText />
                </div>
              </h1>

              <div className="mt-5 text-[59px] font-[300]">
                <span className="text-[#F59E0B]">AI</span>
                <span className="">-Powered</span>
              </div>
              <p className="text-[28px] font-[300]">Court Operations</p>
            </motion.div>

            {/* Right illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center"
            >
              {/* purple card backdrop */}
              <div className="relative w-full h-full p-4">
                <ProductAIPowered />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[20px] leading-relaxed max-w-2xl"
          >
            QuantumApps.AI and GovAI built{" "}
            <span className="font-medium">Court Calendar</span>, a system that
            transforms judicial operations by automating scheduling and input
            tasks with precision and contextual intelligence.
          </motion.p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-row-1 gap-12 items-start">
            {/* Left: calendar illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-end gap-20"
            >
              <ProductCourtCalender />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[36px] font-[300] mb-8 leading-snug"
              >
                Court Calendar leverages
                <br />
                <span className="text-purple-300">QuantumApps.AI</span> to:
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-8"
            >
              {features.map(({ Icon, description }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-violet-900 rounded-tl-[60px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[80px]"
                  // className="bg-[#2D0878]/50 border border-purple-500/25 rounded-2xl cursor-default transition-all"
                >
                  <div className="flex items-center justify-center w-[100%] h-28 bg-purple-700 rounded-tl-[60px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[60px]">
                    {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center mb-4 shadow-lg shadow-purple-900/40"> */}
                    <Icon />
                  </div>
                  <p className="p-8 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-row-1 gap-12">
            {/* Left: text + cards */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-end justify-between gap-20 mb-20"
              >
                <div className="text-[32px]">
                  <h2 className="text-[42px] font-[300] leading-tight">
                    Impact
                  </h2>
                  <p className="mt-1">With Court Calendar, courts can:</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex justify-center md:justify-end"
                >
                  <div className="relative w-full h-full p-4">
                    <ProductImapct />
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {impacts.map(({ Icon, description, accent }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl cursor-default transition-all ${
                      i === 0
                        ? "w-[100%] bg-gradient-to-r from-red-400 to-yellow-400 rounded-tl-[10px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[20px]"
                        : i === 1
                          ? "w-[100%] bg-gradient-to-t from-red-400 to-yellow-400 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[80px] rounded-br-[80px]"
                          : "w-[100%] bg-gradient-to-l from-red-400 to-yellow-400 rounded-tl-[60px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[80px]"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-[100%] h-28 bg-purple-700 ${
                        i === 0
                          ? "rounded-tl-[10px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[10px]"
                          : i === 1
                            ? "rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[60px] rounded-br-[60px]"
                            : "rounded-tl-[60px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[60px]"
                      }`}
                    >
                      {i === 0 ? (
                        <ProductStreamLine />
                      ) : i === 1 ? (
                        <ProductScheduling />
                      ) : (
                        <ProductAiDecision />
                      )}
                    </div>
                    <p
                      className={`leading-relaxed font-[300] p-16 text-black`}
                    >
                      {description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Result ── */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-right text-[#F8C557] font-[300] text-[42px]">Result</p>
            <p className="text-right text-[#D8D8D8] max-w-3xl ml-auto text-[18px] leading-relaxed">
              Judicial staff can focus on meaningful work, while the AI handles
              repetitive, precise, and context-sensitive tasks — making court
              operations faster, smarter, and more reliable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Dashboard Mockup ── */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          
        
          <div className="rounded-[28px] p-[6px] bg-[linear-gradient(90deg,#7F25D1_-34.01%,#F5835F_47.71%,#FECF08_127.88%),linear-gradient(93deg,#FECF08_-19.92%,#F5835F_49.16%,#7F25D1_116.27%),linear-gradient(106deg,#E9B341_1.35%,#610CAD_102.79%)]">
            <div className="bg-[#2D0878] border border-purple-500 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(120,50,220)] backdrop-blur-sm">
             
             
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-900/40"
          >
            {/* Browser chrome */}
            <div className="bg-[#1e0050] border-b border-purple-500/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-purple-900/40 rounded-md px-3 py-1 text-purple-300/50 text-xs font-mono truncate">
                  courtcalendar.quantumapps.ai/dashboard
                </div>
              </div>
              <div className="flex items-center gap-2 text-purple-300/50">
                <Bell size={13} />
                <Settings size={13} />
              </div>
            </div>

            {/* Dashboard body */}
            <div className="bg-[#0f0028] p-5">
              {/* Top nav */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-purple-800/40">
                <div className="flex gap-1.5">
                  {[
                    "Dashboard",
                    "Entry Types",
                    "Mapping Type",
                    "Judges",
                    "Documents",
                  ].map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${
                        t === "Dashboard"
                          ? "bg-[#F59E0B] text-black"
                          : "text-purple-300/50"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <Users size={12} className="text-purple-400/60" />
                  <span className="text-purple-300/50 text-[10px]">Admin</span>
                </div>
              </div>

              <p className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <Calendar size={14} className="text-[#F59E0B]" />
                Admin Dashboard
              </p>

              {/* Filter row */}
              <div className="flex gap-2 mb-5">
                {[
                  "Project",
                  "Group",
                  "Status",
                  "Groups",
                  "Email Template",
                  "Rule Management",
                ].map((f) => (
                  <span
                    key={f}
                    className="bg-purple-900/40 border border-purple-700/30 text-purple-300/60 text-[9px] px-2 py-0.5 rounded-md whitespace-nowrap"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Stat grids */}
              <div className="space-y-3">
                {dashStats.map((row, ri) => (
                  <div key={ri} className="grid grid-cols-6 gap-2">
                    {row.map(({ label, val }, ci) => (
                      <div
                        key={ci}
                        className="bg-purple-900/30 border border-purple-700/25 rounded-xl p-2.5 flex flex-col items-center gap-1"
                      >
                        <span className="text-white font-bold text-base">
                          {val}
                        </span>
                        <span className="text-purple-300/50 text-[8px] text-center leading-tight">
                          {label}
                        </span>
                        <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#F59E0B]/60 to-orange-600/40 flex items-center justify-center">
                          <FileText size={9} className="text-white/70" />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        </div>
             </div>
             

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {[true, false, false].map((active, i) => (
              <span
                key={i}
                className={`rounded-full transition-all ${active ? "w-6 h-2.5 bg-[#F59E0B]" : "w-2.5 h-2.5 bg-purple-700/50"}`}
              />
            ))}
          </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F59E0B] to-orange-500 text-black px-14 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]"

          > 
            Request Demo
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
