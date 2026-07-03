'use client'

import React, { useState } from 'react'
import Link from 'next/link'
// Facebook, X, Instagram, Linkedin,
import { Mail, Phone, MapPin, Heart, ArrowUp, Award, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { SCHOOL_INFO, FOOTER_LINKS } from '@/lib/constants'
import { CTAButton } from '@/components/ui/CTAButton'

export function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200))

    toast.success('Subscription Successful', {
      description: 'You have been subscribed to Ayodhya Academy updates.',
    })

    setEmail('')
    setLoading(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-section text-white pt-24 pb-8 relative overflow-hidden noise-overlay-dark border-t border-accent-500/20">
      {/* Golden accent line at the top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      {/* Decorative radial glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-0 w-[300px] h-[300px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 md:right-16 w-12 h-12 bg-accent text-primary-900 rounded-full flex items-center justify-center hover:bg-accent-600 transition-all shadow-lg border border-accent-300/30 cursor-pointer"
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="stroke-[3px]" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* School Overview */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center font-bold text-accent border border-accent-500/35">
                AA
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight leading-none text-white">Ayodhya Academy</h3>
                <span className="text-[9px] text-accent tracking-widest uppercase font-semibold">Mani Parvat Road</span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed font-light">
              Excellence in education. We are dedicated to nurturing young minds and fostering a culture of learning, character development, and future readiness.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 w-full">
              <Award size={18} className="text-accent flex-shrink-0" />
              <div className="text-[11px]">
                <p className="text-white/60 font-semibold uppercase leading-none mb-1">CBSE Affiliated</p>
                <p className="text-accent font-bold leading-none">Code: {SCHOOL_INFO.affiliation}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm text-accent uppercase tracking-widest relative pb-2 inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.school.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/75 hover:text-accent transition-colors text-sm font-medium flex items-center gap-1 group">
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">-</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm text-accent uppercase tracking-widest relative pb-2 inline-block">
              Admissions
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.admission.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/75 hover:text-accent transition-colors text-sm font-medium flex items-center gap-1 group">
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">-</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map & Contacts */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm text-accent uppercase tracking-widest relative pb-2 inline-block">
              Location
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
            </h4>
            {/* Grayscale Map Embed */}
            <div className="relative w-full h-32 rounded-xl overflow-hidden border border-white/10 group shadow-md shadow-black/10">
              <iframe
                title="Ayodhya Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8569877969307!2d82.17937397631317!3d26.7170068767664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07a16fbd9b47%3A0xe100c5ee54b73b5a!2sRanopali%2C%20Ayodhya%2C%20Uttar%20Pradesh%20224123!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 invert-[0.85] opacity-75 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
              />
              <a
                href="https://maps.google.com/?q=Ayodhya+Academy+Ranopali+Ayodhya"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1 font-bold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="space-y-2.5 text-xs text-white/85">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-accent flex-shrink-0" />
                <span>{SCHOOL_INFO.address.street}, {SCHOOL_INFO.address.city}, {SCHOOL_INFO.address.state} - {SCHOOL_INFO.address.postal}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-premium-dark rounded-3xl p-8 md:p-10 mb-16 border border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-white">Subscribe to our newsletter</h3>
              <p className="text-white/70 font-light text-sm">Stay updated with class openings, event announcements, and academic disclosures.</p>
            </div>
            <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-6 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm min-w-[280px]"
              />
              <CTAButton type="submit" variant="accent" loading={loading} className="px-8 py-4 whitespace-nowrap">
                Subscribe
              </CTAButton>
            </form>
          </div>
        </motion.div>

        {/* Social Links & Legal */}
        <div className="border-t border-white/10 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Social Icons with Luxury design */}
            {/* <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: X, label: 'X' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map((soc, i) => {
                const Icon = soc.icon
                return (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-accent hover:text-primary-900 border border-white/10 hover:border-accent rounded-xl flex items-center justify-center transition-all duration-300 text-white/85"
                    aria-label={soc.label}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div> */}

            {/* Legal Links */}
            <div className="flex items-center gap-6 flex-wrap justify-center text-xs font-semibold text-white/70">
              {FOOTER_LINKS.legal.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-white/5">
            <p className="text-white/40 text-xs flex items-center justify-center gap-1 font-light">
              © {currentYear} Ayodhya Academy. All Rights Reserved. Crafted with <Heart size={10} className="text-accent fill-accent" /> for academic leadership.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
