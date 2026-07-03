'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import { SCHOOL_INFO } from '@/lib/constants'
import { Mail, Phone, MapPin, Clock, ChevronRight, Send, HelpCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import { toast } from 'sonner'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate contact submission
    await new Promise((resolve) => setTimeout(resolve, 1200))

    toast.success('Inquiry Message Sent', {
      description: 'Thank you for contacting Ayodhya Academy. Our support desk will reach out shortly.',
      duration: 4000,
    })

    // Reset form fields
    const form = e.target as HTMLFormElement
    form.reset()
    setLoading(false)
  }

  return (
    <main className="bg-background-luxury text-slate-800 antialiased">
      <ScrollProgress />
      <Navbar />

      {/* SUBPAGE HERO */}
      <section className="relative pt-44 pb-24 bg-[#071B3A] text-white overflow-hidden noise-overlay-dark border-b border-accent-500/25">
        <div className="absolute inset-0 mesh-gradient-bg opacity-80 z-0" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#071B3A]/80 z-0" />
        <div className="absolute top-12 right-12 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-white/50 font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="text-white/80">Contact</span>
          </div>

          <h1 className="text-5xl md:text-6xl gradient-text-gold font-extrabold tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            Have questions about admissions, fees, or academics? Reach out to our team.
          </p>
        </div>
      </section>

      {/* SECTION 1: Contact Cards Grid */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Office Details"
            title="Admissions & {General} Offices"
            description="Call or email our dedicated coordinators to address any queries."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Email Card */}
            <GlassCard className="text-center space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-primary-50 rounded-xl text-primary flex items-center justify-center mx-auto">
                <Mail size={22} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 text-sm">Email Coordinates</h3>
                {SCHOOL_INFO.contact.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-primary hover:text-accent font-semibold text-xs break-all"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </GlassCard>

            {/* Phone Card */}
            <GlassCard className="text-center space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-accent/15 rounded-xl text-primary-900 flex items-center justify-center mx-auto">
                <Phone size={22} className="text-accent-700" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 text-sm">Direct Calls</h3>
                {SCHOOL_INFO.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="block text-primary hover:text-accent font-semibold text-xs"
                  >
                    +91 {phone}
                  </a>
                ))}
              </div>
            </GlassCard>

            {/* Address Card */}
            <GlassCard className="text-center space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-sky-50 rounded-xl text-sky-600 flex items-center justify-center mx-auto">
                <MapPin size={22} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 text-sm">Campus Address</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  {SCHOOL_INFO.address.street}
                  <br />
                  {SCHOOL_INFO.address.city}, {SCHOOL_INFO.address.state} - {SCHOOL_INFO.address.postal}
                </p>
              </div>
            </GlassCard>

            {/* Hours Card */}
            <GlassCard className="text-center space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center mx-auto">
                <Clock size={22} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 text-sm">Office Hours</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  Mon - Fri: 8:00 AM - 4:00 PM
                  <br />
                  Sat: 8:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Grayscale Campus Google Map */}
          <div className="rounded-3xl overflow-hidden h-[400px] border border-slate-200 shadow-xl relative group">
            <iframe
              title="Ayodhya Academy Interactive Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8569877969307!2d82.17937397631317!3d26.7170068767664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07a16fbd9b47%3A0xe100c5ee54b73b5a!2sRanopali%2C%20Ayodhya%2C%20Uttar%20Pradesh%20224123!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 invert-[0.9] opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Query Form */}
      <section className="section-container bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Send Messages"
            title="Office {Inquiry} Dispatch"
            description="Submit an offline query and our counselors will respond via phone call or email."
            className="mb-12"
          />

          <div className="glass-premium rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl bg-white/95">
            <form onSubmit={handleMessageSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Mobile Phone</label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Inquiry Subject *</label>
                  <select
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800 cursor-pointer"
                  >
                    <option value="">Choose subject area</option>
                    <option value="admissions">Admission counselling</option>
                    <option value="fees">Fee details concessions</option>
                    <option value="facilities">Classrooms & sports</option>
                    <option value="careers">Job applications</option>
                    <option value="other">Other general inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Inquiry Message *</label>
                <textarea
                  required
                  placeholder="Type your message description here..."
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800 resize-none"
                />
              </div>

              <div className="pt-4">
                <CTAButton
                  type="submit"
                  variant="primary"
                  fullWidth
                  loading={loading}
                  icon={<Send size={14} />}
                >
                  Dispatch Inquiry
                </CTAButton>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </main>
  )
}
