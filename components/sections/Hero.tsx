'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        {/* Radial gradient glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-navy-light rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8A45A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Compass Rose SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.06]"
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-spin-slow"
        >
          {/* Outer circle */}
          <circle cx="200" cy="200" r="190" stroke="#C8A45A" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="170" stroke="#C8A45A" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" stroke="#C8A45A" strokeWidth="0.3" />

          {/* Main compass points */}
          <path d="M200 10 L210 200 L200 220 L190 200 Z" fill="#C8A45A" />
          <path d="M200 390 L190 200 L200 180 L210 200 Z" fill="#C8A45A" opacity="0.5" />
          <path d="M10 200 L200 190 L220 200 L200 210 Z" fill="#C8A45A" opacity="0.5" />
          <path d="M390 200 L200 210 L180 200 L200 190 Z" fill="#C8A45A" />

          {/* Diagonal points */}
          <path d="M65 65 L195 185 L200 200 L185 195 Z" fill="#C8A45A" opacity="0.3" />
          <path d="M335 65 L215 185 L200 200 L205 195 Z" fill="#C8A45A" opacity="0.3" />
          <path d="M65 335 L185 215 L200 200 L195 205 Z" fill="#C8A45A" opacity="0.3" />
          <path d="M335 335 L215 215 L200 200 L205 205 Z" fill="#C8A45A" opacity="0.3" />

          {/* Center circle */}
          <circle cx="200" cy="200" r="15" fill="none" stroke="#C8A45A" strokeWidth="1" />
          <circle cx="200" cy="200" r="5" fill="#C8A45A" />

          {/* Degree markers */}
          {[...Array(36)].map((_, i) => (
            <line
              key={i}
              x1="200"
              y1="15"
              x2="200"
              y2={i % 3 === 0 ? '25' : '20'}
              stroke="#C8A45A"
              strokeWidth={i % 3 === 0 ? '1' : '0.5'}
              transform={`rotate(${i * 10} 200 200)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-dm">
              Maritime &middot; Port Operations &middot; Supply Chain
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] mb-8">
            Navigating
            <br />
            <span className="text-gold italic">Global Waters</span>
            <br />
            With Certainty
          </h1>

          {/* Subtext */}
          <p className="text-slate text-base md:text-[17px] leading-relaxed max-w-[520px] mb-10">
            For over three decades, Limenis Global Advisory has been the trusted counsel to port authorities, shipping enterprises, and logistics firms worldwide. From the Greek{' '}
            <span className="text-gold italic">&#955;&#953;&#956;&#942;&#957;</span> — meaning harbor and haven — we are your strategic port in every storm.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" onClick={() => handleScroll('#contact')}>
              Book Free Consultation
            </Button>
            <Button variant="secondary" size="lg" onClick={() => handleScroll('#services')}>
              Our Expertise
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  )
}
