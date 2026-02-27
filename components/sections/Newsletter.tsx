'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
    }
  }

  return (
    <section id="newsletter" className="py-16 md:py-20 bg-navy relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="font-playfair text-2xl md:text-3xl text-white mb-2">
              Maritime Intelligence, Delivered
            </h2>
            <p className="text-slate text-sm md:text-base">
              Industry insights, regulatory updates, and strategic perspectives — monthly.
            </p>
          </div>

          {/* Form */}
          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 text-gold"
            >
              <CheckCircle size={20} />
              <span className="font-dm text-sm">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="px-5 py-3 bg-transparent border border-gold/30 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none transition-colors font-dm text-sm min-w-[280px]"
              />
              <button
                type="submit"
                className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 font-dm text-sm uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
