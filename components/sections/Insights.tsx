'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { INSIGHTS } from '@/lib/constants'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Insights() {
  return (
    <section id="insights" className="section-padding bg-navy relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light/50 to-transparent" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel className="justify-center">Intelligence</SectionLabel>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl">
            Maritime <span className="text-gold italic">Intelligence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {INSIGHTS.map((insight, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 md:p-8 bg-charcoal border border-gold/10 hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300">
                {/* Tag */}
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] uppercase tracking-wider font-dm font-medium mb-4">
                  {insight.tag}
                </span>

                {/* Title */}
                <h3 className="font-playfair text-lg md:text-xl text-white mb-4 group-hover:text-gold transition-colors">
                  {insight.title}
                </h3>

                {/* Date */}
                <p className="text-slate text-xs uppercase tracking-wider">
                  {insight.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#insights"
            className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider font-dm hover:gap-4 transition-all duration-300 group"
          >
            View All Insights
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
