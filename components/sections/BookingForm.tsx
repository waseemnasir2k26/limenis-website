'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[150px]" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-[680px] mx-auto text-center"
        >
          <SectionLabel className="justify-center">Start the Conversation</SectionLabel>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl mb-6">
            Book Your <span className="text-gold italic">Free Consultation</span>
          </h2>

          <p className="text-slate text-base md:text-[17px] leading-relaxed mb-12">
            Share your maritime challenge. Our senior advisors will respond within 24 hours to schedule a complimentary strategic consultation.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 md:p-12 border border-gold/30 bg-navy/50"
            >
              <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
              <h3 className="font-playfair text-2xl text-white mb-4">
                Thank You for Reaching Out
              </h3>
              <p className="text-slate">
                A senior advisor will contact you within 24 hours to schedule your complimentary consultation.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-white text-sm mb-2 font-dm">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gold/30 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none transition-colors font-dm text-sm"
                    placeholder="Your full name"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="email" className="block text-white text-sm mb-2 font-dm">
                    Business Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gold/30 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none transition-colors font-dm text-sm"
                    placeholder="email@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-white text-sm mb-2 font-dm">
                    Company / Organization <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gold/30 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none transition-colors font-dm text-sm"
                    placeholder="Your organization"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white text-sm mb-2 font-dm">
                    Phone <span className="text-slate text-xs">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-transparent border border-gold/30 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none transition-colors font-dm text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-white text-sm mb-2 font-dm">
                  How Can We Help? <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-gold/30 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none transition-colors font-dm text-sm resize-none"
                  placeholder="Describe your maritime challenge or area of interest..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="min-w-[240px]"
                >
                  {isSubmitting ? 'Sending...' : 'Request Consultation'}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
