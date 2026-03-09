import Link from 'next/link'
import { Zap, Mail, Linkedin, Twitter } from 'lucide-react'
import { QuantumAppsLogo } from '../../../public/assets/svg'

const PRODUCT_LINKS = [
  { label: 'Overview', href: '/product' },
  { label: 'Features', href: '/product/features' },
  { label: 'Integrations', href: '/product/integrations' },
  { label: 'Pricing', href: '/product/pricing' },
]

const COMPANY_LINKS = [
  { label: 'Our Story', href: '/about' },
  { label: 'Team', href: '/about/team' },
  { label: 'Careers', href: '/about/careers' },
  { label: 'Press', href: '/about/press' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Accessibility', href: '#' },
  { label: 'Security', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-purple-800/25 bg-[#230256] mt-0">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand — spans 2 cols */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2">
                          <QuantumAppsLogo width={106} />
            </Link>
            <p className="text-white/85 text-sm leading-relaxed max-w-xs">
              Intelligent AI Agents built for government systems and processes. Trusted by agencies
              nationwide.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Mail, href: 'mailto:hello@quantumapps.ai' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-700/30 flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-700/50 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Product</h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/85 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/85 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3 mb-7">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/85 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-800/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/65 text-xs">
            &copy; {new Date().getFullYear()} QuantumApps.AI. All rights reserved.
          </p>
          <p className="text-white/65 text-xs">
            Built for Government. Trusted by Agencies.
          </p>
        </div>
      </div>
    </footer>
  )
}
