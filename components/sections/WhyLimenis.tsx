'use client'

import { motion } from 'framer-motion'
import { Diamond } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

const BULLET_POINTS = [
  'Former port authority directors and C-suite executives',
  'Deep expertise in IMO, ISPS, and environmental compliance',
  'Proven track record with $2B+ in port assets optimized',
  'Trusted by government agencies and Fortune 500 shipping firms',
]

export default function WhyLimenis() {
  return (
    <section id="about" className="section-padding bg-navy-light relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutPattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="none" stroke="#C8A45A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutPattern)" />
        </svg>
      </div>

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Why Limenis</SectionLabel>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl mb-8">
              Your Harbor in a{' '}
              <span className="text-gold italic">Complex World</span>
            </h2>

            <p className="text-slate text-base md:text-[17px] leading-relaxed mb-8">
              Named from the ancient Greek <span className="text-gold italic">&#955;&#953;&#956;&#942;&#957;</span> (lim&#275;n) — meaning harbor, haven, and refuge — Limenis Global Advisory embodies the strategic shelter that maritime enterprises need in an increasingly complex global landscape. Our team comprises former port authority directors, shipping executives, and regulatory specialists who have spent decades navigating the intricacies of global maritime operations.
            </p>

            <ul className="space-y-4">
              {BULLET_POINTS.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <Diamond className="w-3 h-3 text-gold mt-1.5 flex-shrink-0 fill-gold" />
                  <span className="text-white/90 text-sm md:text-[15px]">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-8 md:p-10 bg-gradient-to-br from-navy to-navy-light border border-gold/20 overflow-hidden">
              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold" />

              {/* Decorative quote mark */}
              <div className="absolute top-6 right-8 text-gold opacity-[0.08]">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16 md:w-20 md:h-20"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 font-playfair text-lg md:text-[22px] italic text-white leading-relaxed mb-8">
                &ldquo;Limenis transformed our port operations from a regional facility into a competitive global gateway. Their strategic vision was instrumental in our $400M expansion program.&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="relative z-10">
                <p className="text-gold font-dm text-sm font-medium mb-1">
                  Director of Maritime Operations
                </p>
                <p className="text-slate text-xs uppercase tracking-wider">
                  Major International Port Authority
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
