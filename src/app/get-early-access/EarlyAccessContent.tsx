'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'

const contactInfo = [
  { Icon: Mail, label: 'Email', value: 'solutions@quantumapps.ai', href: 'mailto:solutions@quantumapps.ai' },
  { Icon: Phone, label: 'Phone', value: '+1 (717) 690-0472', href: 'tel:+17176900472' },
  { Icon: MapPin, label: 'Headquarters', value: <>3800 Market Street, Suite 204<br />Camp Hill, PA 17011</>, href: null },
]

const interestOptions = [
  'Workflow Automation',
  'Legacy System Modernization',
  'AI-Powered Document Processing',
  'Citizen Services Automation',
  'Data Analytics & Reporting',
  'Other',
]


const faqs = [
  {
    q: 'Who is eligible for early access?',
    a: 'Federal, state, and local government agencies — including municipal departments, county offices, and federal bureaus. Priority is given to agencies with active modernization or automation needs.',
  },
  {
    q: 'Does it replace our existing systems?',
    a: 'No. QuantumApps.AI integrates with your current infrastructure. You get AI capabilities layered on top of legacy systems without disruptive migrations.',
  },
  {
    q: 'Is the platform compliant with government security standards?',
    a: 'Yes. QuantumApps.AI is built with FedRAMP-aligned security controls, including data sovereignty, role-based access, and full audit trails.',
  },
  {
    q: 'How fast is the onboarding process?',
    a: 'Most agencies begin their pilot within weeks. Our team handles setup and configuration so you can focus on outcomes.',
  },
  {
    q: 'What happens after I submit the form?',
    a: 'A member of our team will contact you within one business day to schedule a personalized walkthrough of the platform.',
  },
  {
    q: 'Is early access free?',
    a: 'Early access participants receive preferred pricing and dedicated support. Our team will walk you through the options during your onboarding call.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }

export default function EarlyAccessContent() {
  const [form, setForm] = useState({ name: '', email: '', agency: '', phone: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'early-access' }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or email us directly at solutions@quantumapps.ai')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full bg-[#431396]/60 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder:text-white/55 text-sm focus:outline-none focus:border-purple-400/70 focus:bg-[#2D0878]/40 transition-all'

  return (
    <main>
      <PageHero
        eyebrow="Early Access Program"
        title="Be the First to Experience "
        highlight="QuantumApps.AI"
        subtitle="Sign up now for priority access to QuantumApps.AI. Be among the first agencies to leverage our new AI capabilities and help shape the future of our platform."
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3 bg-[#2D0878]/45 border border-purple-500/25 rounded-3xl p-8 backdrop-blur-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <CheckCircle size={56} className="text-green-400 mx-auto mb-5" />
                  </motion.div>
                  <h3 className="text-white font-medium text-3xl mb-3">You&apos;re on the List</h3>
                  <p className="text-white/65 max-w-sm leading-relaxed">
                    Thanks for signing up. A member of our team will reach out within one business day to schedule your agency&apos;s walkthrough.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-medium text-xl mb-1">Request Early Access</h3>
                  <p className="text-white/55 text-sm mb-6">Fill out the form and we&apos;ll be in touch within one business day.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/75 text-xs mb-1.5">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-white/75 text-xs mb-1.5">Work Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@agency.gov" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/75 text-xs mb-1.5">Agency / Organization *</label>
                        <input name="agency" value={form.agency} onChange={handleChange} required placeholder="Dept. of Homeland Security" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-white/75 text-xs mb-1.5">Phone</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (717) 000-0000" className={inputClass} />
                      </div>
                    </div>

                    {/* <div>
                      <label className="block text-white/75 text-xs mb-1.5">Primary Interest</label>
                      <select name="interest" value={form.interest} onChange={handleChange} className={inputClass + ' cursor-pointer'}>
                        <option value="" disabled>Select your main use case…</option>
                        {interestOptions.map(o => (
                          <option key={o} value={o} className="bg-[#1a0045] text-white">{o}</option>
                        ))}
                      </select>
                    </div> */}

                    <div>
                      <label className="block text-white/75 text-xs mb-1.5">Primary Interest</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="" className={inputClass + ' resize-none'} />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-60 text-black font-medium py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-orange-600/25"
                    >
                      {loading ? <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" /> : <Send size={14} />}
                      {loading ? 'Submitting…' : 'Request Early Access'}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Benefits */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#3B0D9E]/60 to-[#2D0878]/70 border border-purple-400/30 rounded-3xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={20} className="text-[#F59E0B]" />
                  <h4 className="text-white font-medium text-base">Early Access Benefits</h4>
                </div>
                <ul className="space-y-4">
                  {benefits.map(b => (
                    <li key={b.label} className="flex gap-3">
                      <CheckCircle size={16} className="text-[#F59E0B] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium">{b.label}</p>
                        <p className="text-white/60 text-xs mt-0.5">{b.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div> */}

              {/* Contact info */}
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <motion.div key={label} variants={fadeUp} className="flex items-center gap-4 bg-[#2D0878]/35 border border-purple-500/20 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/75 text-xs font-medium">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors">{value}</a>
                      ) : (
                        <p className="text-white text-sm font-semibold">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Schedule demo */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-[#2D0878]/35 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-sm"
              >
                <Calendar size={24} className="text-[#F59E0B] mb-3" />
                <h4 className="text-white font-medium text-base mb-1">Prefer a live demo first?</h4>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  See QuantumApps.AI in action with a personalized 30-minute walkthrough tailored to your agency&apos;s workflows.
                </p>
                <motion.a
                  href="mailto:solutions@quantumapps.ai?subject=Demo Request"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-medium px-5 py-2.5 rounded-full text-sm transition-colors shadow-lg shadow-orange-600/25"
                >
                  Schedule a Demo <Calendar size={13} />
                </motion.a>
              </motion.div> */}

            </div>
          </div>

          {/* FAQ section for AEO */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-20"
          >
            <h2 className="text-white font-semibold text-2xl mb-2 text-center">Frequently Asked Questions</h2>
            <p className="text-white/55 text-sm text-center mb-10">Everything you need to know about the Early Access Program.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-[#2D0878]/35 border border-purple-500/20 rounded-2xl p-5 backdrop-blur-sm">
                  <h3 className="text-white font-medium text-sm mb-2">{q}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </motion.div> */}

        </div>
      </section>
    </main>
  )
}
