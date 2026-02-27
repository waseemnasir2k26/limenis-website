'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="serviceGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#C8A45A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#serviceGrid)" />
        </svg>
      </div>

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel className="justify-center">Our Expertise</SectionLabel>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl">
            Strategic Services for the{' '}
            <span className="text-gold italic">Maritime</span> Industry
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 border border-gold/20 bg-transparent hover:bg-navy-light hover:border-gold transition-all duration-500 overflow-hidden">
                  {/* Animated top line */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500" />

                  {/* Icon */}
                  <div className="mb-6 text-gold">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl md:text-[22px] text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate text-sm md:text-[14.5px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
