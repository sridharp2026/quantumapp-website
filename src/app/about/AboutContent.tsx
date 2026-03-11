"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import {
  AboutHero,
  AboutMission,
  AboutValue,
  AboutVision,
} from "../../../public/assets/svg";

/* ─── animation variants ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

/* ─── VALUE ILLUSTRATION (shield + security) ─────────────────────── */
function ValueIllustration() {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm mx-auto"
    >
      {/* Glow */}
      <ellipse
        cx="160"
        cy="150"
        rx="115"
        ry="90"
        fill="url(#valueGlow)"
        opacity="0.4"
      />

      {/* Outer ring decoration */}
      <circle
        cx="160"
        cy="148"
        r="105"
        stroke="#7F25D1"
        strokeWidth="1"
        strokeDasharray="6 4"
        opacity="0.4"
      />
      <circle
        cx="160"
        cy="148"
        r="85"
        stroke="#A855F7"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.3"
      />

      {/* Main shield */}
      <path
        d="M160 40 L215 65 L215 130 Q215 175 160 200 Q105 175 105 130 L105 65 Z"
        fill="url(#shieldGrad)"
        stroke="#7F25D1"
        strokeWidth="2"
      />
      <path
        d="M160 52 L207 74 L207 130 Q207 168 160 190 Q113 168 113 130 L113 74 Z"
        fill="#2D0878"
        opacity="0.6"
      />

      {/* Checkmark */}
      <path
        d="M138 128 L152 143 L183 112"
        stroke="#F59E0B"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Lock icon inside lower shield area */}
      <rect
        x="148"
        y="155"
        width="24"
        height="18"
        rx="3"
        fill="#3B0D9E"
        stroke="#7F25D1"
        strokeWidth="1.5"
      />
      <path
        d="M153 155 L153 148 Q153 141 160 141 Q167 141 167 148 L167 155"
        stroke="#7F25D1"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="160" cy="164" r="3" fill="#F59E0B" />

      {/* Orbiting security icons */}
      {/* Icon 1: key */}
      <circle
        cx="65"
        cy="90"
        r="18"
        fill="#2D0878"
        stroke="#7F25D1"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <circle
        cx="62"
        cy="88"
        r="5"
        stroke="#F59E0B"
        strokeWidth="1.5"
        fill="none"
      />
      <line
        x1="66"
        y1="91"
        x2="74"
        y2="99"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="71"
        y1="96"
        x2="71"
        y2="100"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="73"
        y1="98"
        x2="73"
        y2="102"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Icon 2: eye/visibility */}
      <circle
        cx="255"
        cy="90"
        r="18"
        fill="#2D0878"
        stroke="#7F25D1"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <path
        d="M246 90 Q255 82 264 90 Q255 98 246 90"
        stroke="#A855F7"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="255" cy="90" r="3" fill="#A855F7" />

      {/* Icon 3: fingerprint */}
      <circle
        cx="80"
        cy="205"
        r="18"
        fill="#2D0878"
        stroke="#7F25D1"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <path
        d="M80 197 Q72 200 72 207 Q72 214 80 216"
        stroke="#60A5FA"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M80 200 Q75 203 75 208"
        stroke="#60A5FA"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M80 203 Q78 205 78 208 Q78 212 80 213"
        stroke="#60A5FA"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Icon 4: data */}
      <circle
        cx="240"
        cy="205"
        r="18"
        fill="#2D0878"
        stroke="#7F25D1"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <rect x="232" y="200" width="16" height="3" rx="1" fill="#FBBF24" />
      <rect
        x="232"
        y="206"
        width="10"
        height="3"
        rx="1"
        fill="#FBBF24"
        opacity="0.7"
      />
      <rect
        x="232"
        y="212"
        width="13"
        height="3"
        rx="1"
        fill="#FBBF24"
        opacity="0.5"
      />

      {/* Connecting lines from shield to icons */}
      <line
        x1="115"
        y1="110"
        x2="82"
        y2="97"
        stroke="#7F25D1"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.5"
      />
      <line
        x1="205"
        y1="110"
        x2="238"
        y2="97"
        stroke="#7F25D1"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.5"
      />
      <line
        x1="120"
        y1="170"
        x2="93"
        y2="196"
        stroke="#7F25D1"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.5"
      />
      <line
        x1="200"
        y1="170"
        x2="227"
        y2="196"
        stroke="#7F25D1"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.5"
      />

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
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */
export default function AboutContent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-[#431396] border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-[#CEADE3] text-sm focus:outline-none focus:border-white/70 focus:bg-[#340B7B] transition-all";

  return (
    <main className="overflow-hidden">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="product-hero-bg flex items-center min-h-screen pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <AboutHero />
        </div>
      </section>

      {/* ── OUR MISSION ──────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-[300] tracking-tight text-center mb-20"
        >
          About
        </motion.h1>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-6xl font-[300] text-white mb-5 leading-tight">
                Our Mission
              </h2>
              <p className="text-base leading-relaxed">
                QuantumApps.AI empowers developers and organizations to build
                trusted AI agents with deep domain expertise and intuitive user
                experiences. We modernize government operations with intelligent
                software and domain rich solutions based on our three decades of
                expertise with US government customers
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center"
            >
              <AboutMission />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl h-px bg-white/40"></div>
      </div>

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
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center order-2 lg:order-1"
            >
              <AboutVision />
            </motion.div>

            {/* Text — right on desktop */}
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-6xl font-[300] text-white mb-5 leading-tight">
                Our Vision
              </h2>
              <p className="text-base leading-relaxed">
                We envision a future where every government organization
                AI-driven intelligence seamlessly powers everyday operations.
                QuantumApps.AI is creating the foundation for this future,
                empowering the next generation of intelligent, connected, and
                impactful applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl h-px bg-white/40"></div>
      </div>

      {/* ── OUR VALUE ────────────────────────────────────────────── */}
      <section className="about-value-bg py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-6xl font-[300] text-white mb-5 leading-tight">
                Our value
              </h2>
              <p className="text-base leading-relaxed">
                QuantumApps.AI empowers developers and organizations to build
                trusted AI agents with deep domain expertise and intuitive user
                experiences. We modernize government operations with intelligent
                software and domain rich solutions based on our three decades of
                expertise with US government customers
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center"
            >
              <AboutValue />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── GET IN TOUCH ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 mt-[-50px] px-6">
        <div
          className="absolute inset-0 bg-[linear-gradient(158deg,#FECF08_-22.06%,#F5835F_64.54%,#7F25D1_148.66%)]
          [clip-path:polygon(0_115px,0_100%,100%_calc(100%-250px),100%_0)]
  min-[1000px]:[clip-path:polygon(0_150px,0_100%,100%_calc(100%-150px),100%_0)]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/10 pointer-events-none"
        />
        <div className="max-w-6xl mx-auto relative mt-[80px]">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-[#3D0470] mb-3">
              Get in Touch
            </h2>
            <p className="text-black font-[300] text-base max-w-xl mr-auto">
              Whether you’re a developer with a question, a potential invester,
              or a future partner. we’d love to hear from you
            </p>
          </div>
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center min-h-[320px] text-center">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle
                        size={56}
                        className="text-white mx-auto mb-5"
                      />
                    </motion.div>
                    <h3 className="text-white font-extrabold text-2xl mb-2">
                      Message Received!
                    </h3>
                    <p className="text-white/75 text-sm">
                      We'll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 mt-5">
                    <div>
                      <label className="block text-[#3B1161] font-[300] mb-1.5 tracking-wide">
                        Full Name
                      </label>
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
                      <label className="block text-[#3B1161] font-[300] mb-1.5 tracking-wide">
                        Email Address
                      </label>
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
                      <label className="block text-[#3B1161] font-[300] mb-1.5 tracking-wide">
                        I am a...
                      </label>
                      <input
                        name="aboutme"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Developer"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[#3B1161] font-[300] mb-1.5 tracking-wide">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your needs..."
                        className={inputClass + " resize-none"}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-[300] px-6 py-3 rounded-full text-md transition-colors shadow-lg shadow-orange-900/30"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send size={14} />
                      )}
                      {loading ? "Sending…" : "Send Message"}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact info card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className=""
            >
              <h3 className="text-[32px] font-[300] text-[#280646]">
                Other Ways to connect
              </h3>
              <p className="text-[#280646] mb-6">
                Prefer different method ? Reach out to us directly or follow our
                journey on social media.
              </p>
              <div className="space-y-5 mb-10">
                <div className="flex items-center w-[350px] gap-4 pl-6 bg-[#431396] rounded-[50px] p-2">
                  <Mail size={17} className="text-[#F59E0B]" />
                  <div>
                    <p className="text-[#F6D388]">Email</p>
                    <a
                      href="mailto:hello@quantumapps.ai"
                      className="text-[#F6D388] font-medium hover:text-[#F59E0B] transition-colors"
                    >
                      hello@quantumapps.com
                    </a>
                  </div>
                </div>
                <div className="inline-flex items-center min-w-[350px] gap-4 px-6 bg-[#431396] rounded-[50px] p-2">
                  <Phone size={17} className="text-[#F59E0B]" />
                  <div>
                    <p className="text-[#F6D388]">Follow on Linkedin</p>
                    <a
                      href="#"
                      className="text-[#F6D388] font-medium hover:text-[#F59E0B] transition-colors"
                    >
                      /quantumapps.ai
                    </a>
                  </div>
                </div>
                <div className="w-[350px] bg-gradient-to-l from-red-400/50 via-red-400/50 to-yellow-400/50 rounded-[20px] p-6 shadow-lg shadow-orange-900/30">
                  <h3 className="text-[#3D0470] text-[26px] font-[300]">Join our Beta</h3>
                  <p className="text-[#3D0470] font-[300] my-3">
                    Get early access to QuantumApps.AI and be part of shaping
                    the future of AI-powered development.
                  </p>
                  
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-[300] px-6 py-3 rounded-full text-md transition-colors shadow-lg shadow-orange-900/30"
                >
                  Limited Spots Available
                </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
