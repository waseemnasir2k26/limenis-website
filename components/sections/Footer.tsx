'use client'

import { FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <span className="font-playfair text-gold text-lg">L</span>
              </div>
              <span className="font-playfair text-white text-xl tracking-wide">LIMENIS</span>
            </div>
            <p className="text-slate text-sm leading-relaxed mb-4">
              From the Greek <span className="text-gold italic">&#955;&#953;&#956;&#942;&#957;</span> — harbor, haven, refuge. Strategic maritime advisory for a complex global landscape.
            </p>
            <p className="text-slate/60 text-xs">
              30+ years of excellence in maritime consulting
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.15em] font-dm font-medium mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.15em] font-dm font-medium mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.15em] font-dm font-medium mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-slate/60 text-xs">
              &copy; 2026 Limenis Global Advisory Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate/60 text-xs hover:text-slate transition-colors">
                Privacy Policy
              </a>
              <span className="text-slate/30">&middot;</span>
              <a href="#" className="text-slate/60 text-xs hover:text-slate transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
