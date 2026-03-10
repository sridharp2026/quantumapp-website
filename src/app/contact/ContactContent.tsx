'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'

const contactInfo = [
  { Icon: Mail, label: 'Email', value: 'hello@quantumapps.ai', href: 'mailto:hello@quantumapps.ai' },
  { Icon: Phone, label: 'Phone', value: '+1 (202) 555-0147', href: 'tel:+12025550147' },
  { Icon: MapPin, label: 'Headquarters', value: 'Washington, DC', href: null },
  { Icon: Calendar, label: 'Schedule a Demo', value: 'Book a 30-min call', href: '#' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', agency: '', phone: '', message: '' })
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
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full bg-[#1a0045]/60 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder:text-purple-300/35 text-sm focus:outline-none focus:border-purple-400/70 focus:bg-[#2D0878]/40 transition-all'

  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Agency"
        highlight="Your Agency"
        subtitle="Whether you're exploring AI for your agency, evaluating vendors, or ready to pilot — our team is here to help."
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
              className="lg:col-span-3 bg-[#2D0878]/40 border border-purple-500/25 rounded-3xl p-8 backdrop-blur-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <CheckCircle size={56} className="text-green-400 mx-auto mb-5" />
                  </motion.div>
                  <h3 className="text-white font-extrabold text-2xl mb-3">Message Received</h3>
                  <p className="text-purple-200/65 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-white font-bold text-xl mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-purple-200/60 text-xs font-medium mb-1.5">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-purple-200/60 text-xs font-medium mb-1.5">Work Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@agency.gov" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-purple-200/60 text-xs font-medium mb-1.5">Agency / Organization *</label>
                        <input name="agency" value={form.agency} onChange={handleChange} required placeholder="Dept. of Homeland Security" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-purple-200/60 text-xs font-medium mb-1.5">Phone</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-purple-200/60 text-xs font-medium mb-1.5">How can we help? *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your agency's challenges..." className={inputClass + ' resize-none'} />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-60 text-white font-bold py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-orange-600/25"
                    >
                      {loading ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <Send size={14} />}
                      {loading ? 'Sending…' : 'Send Message'}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <motion.div key={label} variants={fadeUp} className="flex items-center gap-4 bg-[#2D0878]/35 border border-purple-500/20 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="text-purple-300/55 text-xs font-medium">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors">{value}</a>
                      ) : (
                        <p className="text-white text-sm font-semibold">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-gradient-to-br from-[#3B0D9E]/60 to-[#2D0878]/70 border border-purple-400/30 rounded-3xl p-7 backdrop-blur-sm"
              >
                <Calendar size={28} className="text-[#F59E0B] mb-3" />
                <h4 className="text-white font-bold text-lg mb-2">Schedule a Demo</h4>
                <p className="text-purple-200/60 text-sm leading-relaxed mb-5">
                  See QuantumApps.AI in action with a personalized 30-minute walkthrough tailored to your agency&apos;s workflows.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-lg shadow-orange-600/25"
                >
                  Book a Time <Calendar size={13} />
                </motion.a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-purple-300/40 text-xs text-center px-2"
              >
                We typically respond within one business day.
              </motion.p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
