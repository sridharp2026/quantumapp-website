import Link from "next/link";
import { Mail, Linkedin, X } from "lucide-react";
import { FooterFacebook, FooterInstagram, FooterLinkedIn, FooterYoutube, QuantumAppsLogo } from '@/assets/svg';

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Contact", href: "/contact" },
];

// const COMPANY_LINKS = [
//   { label: 'Our Story', href: '/about' },
//   { label: 'Team', href: '/about/team' },
//   { label: 'Careers', href: '/about/careers' },
//   { label: 'Press', href: '/about/press' },
// ]

const HELP_LINKS = [
  { label: "Customer Support", href: "#" },
  { label: "Delivery Details", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer-bg border-t border-purple-800/25 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand — spans 2 cols */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <QuantumAppsLogo width={106} />
            </Link>
            <p className="text-white/85 text-sm leading-relaxed max-w-xs">
              Intelligent AI Agents built for government systems and processes.
              Trusted by agencies nationwide.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { Icon: <FooterFacebook />, href: "#" },
                { Icon: <FooterLinkedIn />, href: "#" },
                { Icon: <FooterYoutube />, href: "#" },
                { Icon: <FooterInstagram />, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-700/30 flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-700/50 transition-colors"
                >
                  {Icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#E9B341] font-[300] mb-5 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/85 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#E9B341] font-[300] mb-5 tracking-wide">
              HELP
            </h4>
            <ul className="space-y-3">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/85 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h4 className="text-[#E9B341] font-[300] mb-5 tracking-wide">
              Legal
            </h4>
            <a
              href="mailto:contact@quantumappsai.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              contact@quantumappsai.com
            </a>
          </div>
        </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl h-px bg-white/60"></div>
      </div>
        {/* Bottom bar */}
        <div className="border-t border-purple-800/20 pt-8 text-center gap-3">
          <p className="text-white/65 text-base">
            &copy; {new Date().getFullYear()} <a
              href="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              QuantumApps.AI
            </a>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
