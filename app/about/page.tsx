'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import { CTAButton } from '@/components/ui/CTAButton'
import { SCHOOL_INFO } from '@/lib/constants'
import { ASSETS } from '@/lib/assets'
import { Target, Lightbulb, Award, CheckCircle, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react'

export default function AboutPage() {
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
            <span className="text-white/80">About Us</span>
          </div>

          <h1 className="text-5xl gradient-text-gold md:text-6xl font-extrabold tracking-tight">
            About Our Institution
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            Nurturing intelligence and integrity. Read the story of Ayodhya Academy's legacy and future commitments.
          </p>
        </div>
      </section>

      {/* SECTION 1: Legacy - Split Layout */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Story */}
            <div className="lg:col-span-7 space-y-6">
              <SectionTitle
                subtitle="Our Story"
                title="A Legacy of {Educational} Excellence"
                description="Founded in 2010 with a vision to deliver premium instruction."
                centered={false}
              />

              <div className="space-y-4 text-slate-500 font-light leading-relaxed">
                <p>
                  Ayodhya Academy was established with a mission to provide holistic education that nurtures young minds and develops them into responsible global citizens. From inception, we have stood out for our academic environment in Uttar Pradesh.
                </p>
                <p>
                  We aim to spark student curiosity. Our CBSE school structure has consistently generated outstanding results in competitive assessments and board exams.
                </p>
                <p>
                  Our journey has been defined by state-of-the-art classroom structures, interactive science labs, and a curriculum framework that encourages creative logic.
                </p>
              </div>
            </div>

            {/* Collage Image wrapper */}
            <div className="lg:col-span-5 relative flex justify-center py-6">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-accent-500/25 shadow-2xl">
                <Image
                  src={ASSETS.about.schoolHistory}
                  alt="School Campus History"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider">Established</h4>
                  <span className="text-accent text-2xl font-extrabold tracking-tight">Year 2010</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Mission, Vision, Values */}
      <section className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Pillars"
            title="Mission, Vision & {Values}"
            description="The core values that guide our administrative decisions."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-primary-50 rounded-xl text-primary flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                To provide quality education that develops academically proficient, socially responsible, and ethically sound individuals who contribute positively to society.
              </p>
            </GlassCard>

            <GlassCard className="space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-accent-50 rounded-xl text-primary-900 flex items-center justify-center">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                To be a leading educational institution recognized for academic excellence, innovation, and holistic development of students.
              </p>
            </GlassCard>

            <GlassCard className="space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-sky-50 rounded-xl text-sky-600 flex items-center justify-center">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Core Values</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Excellence, Integrity, Innovation, Inclusivity, and Responsibility guide our decisions and actions every single day.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose Us */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Strengths"
            title="What Sets {Us} Apart"
            description="Our highlights that draw ambitious families from all across Uttar Pradesh."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Experienced Faculty',
                description: 'Our teachers are highly qualified professionals with years of experience in their respective fields.',
              },
              {
                title: 'Modern Facilities',
                description: 'State-of-the-art classrooms, laboratories, library, and sports facilities for comprehensive development.',
              },
              {
                title: 'Holistic Education',
                description: 'We focus on academic excellence combined with physical, emotional, and social development.',
              },
              {
                title: 'Student Support',
                description: 'Personalized attention, counseling, and mentoring to help each student reach their potential.',
              },
              {
                title: 'Innovation',
                description: 'Adoption of latest teaching methodologies and technology integration in classroom instruction.',
              },
              {
                title: 'Safe Environment',
                description: '24/7 security, strict discipline, and a positive, nurturing learning atmosphere.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-slate-50/50 rounded-2xl border border-slate-200/50 hover:border-accent-500/30 hover:shadow-md transition-all duration-300">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Management Team */}
      <section className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Leadership"
            title="Our {Management} Team"
            description="Dedicated executives shaping the school's developmental course."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="text-center space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-900 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg border-2 border-accent/20">
                SA
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Mrs. Saumya Achari</h3>
                <p className="text-accent font-semibold text-xs mb-2">School Principal</p>
                <p className="text-slate-500 text-xs font-light">{SCHOOL_INFO.principal.qualification}</p>
              </div>
            </GlassCard>

            <GlassCard className="text-center space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-900 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg border-2 border-accent/20">
                VP
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Vice Principal</h3>
                <p className="text-accent font-semibold text-xs mb-2">Academic Operations</p>
                <p className="text-slate-500 text-xs font-light">M.Ed., M.A. • Administration</p>
              </div>
            </GlassCard>

            <GlassCard className="text-center space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-900 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg border-2 border-accent/20">
                AD
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Administrator</h3>
                <p className="text-accent font-semibold text-xs mb-2">Finance & Infrastructure</p>
                <p className="text-slate-500 text-xs font-light">Campus Operations Lead</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SUBPAGE CTA */}
      <section className="section-container bg-gradient-to-br from-primary-900 via-primary-800 to-sky-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Want to Know More About Us?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Get in touch with our admissions board or schedule a physical school campus visit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact" className="sm:flex-none">
              <CTAButton variant="accent" size="md">
                Contact Admissions
              </CTAButton>
            </Link>
            <Link href="/admission" className="sm:flex-none">
              <CTAButton variant="glass" size="md">
                Admission Process
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </main>
  )
}
