'use client'

import React from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import { CLASSES } from '@/lib/constants'
import { BookOpen, Target, Lightbulb, Award, ChevronRight, CheckCircle, HelpCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export default function AcademicsPage() {
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
            <span className="text-white/80">Academics</span>
          </div>

          <h1 className="text-5xl gradient-text-gold md:text-6xl font-extrabold tracking-tight">
            Academic Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            Curriculum, teaching methodologies, grading systems, and schedules configured for student success.
          </p>
        </div>
      </section>

      {/* SECTION 1: Curriculum - Split Layout */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Programs"
            title="Our CBSE {Curriculum}"
            description="CBSE-based teaching structured to develop logic and scientific verification."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Subject Areas */}
            <div className="lg:col-span-6 space-y-6 bg-slate-50/50 p-8 rounded-3xl border border-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <BookOpen className="text-accent" size={22} />
                Key Subject Streams
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                We offer core and supplementary subjects mapping language depth, scientific logic, mathematical calculations, and physical training.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Hindi, English, Sanskrit',
                  'Core Mathematics',
                  'Physics & Chemistry',
                  'Biology & Environment Science',
                  'Computer Science & Coding',
                  'Physical Training & Sports',
                  'Fine Arts & Music',
                  'Vocational Skills'
                ].map((subject, index) => (
                  <div key={index} className="flex gap-2.5 items-start">
                    <CheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-slate-700 font-semibold text-xs leading-tight">{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Classes Offered Grid */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2 pl-2">
                <Award className="text-accent" size={22} />
                Admitting Class Levels
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CLASSES.map((cls, i) => (
                  <GlassCard key={cls} className="p-5 text-center hover:border-accent-500/20" hover>
                    <span className="text-accent text-[9px] uppercase tracking-widest font-bold block mb-1">Level {i + 1}</span>
                    <p className="font-extrabold text-sm text-slate-800 leading-none">{cls}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Teaching Methodology */}
      <section id="methodology" className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Approach"
            title="Pedagogical {Methodology}"
            description="We move away from rote learning, focusing on conceptual logic and practical validation."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-primary-50 rounded-xl text-primary flex items-center justify-center">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Conceptual Logic</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Deep conceptual explanation rather than simple syllabus completion guides.</p>
            </GlassCard>

            <GlassCard className="space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-accent-50 rounded-xl text-primary-900 flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Lab Experiments</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Practical hours inside computer, physics, chemistry, and biology test chambers.</p>
            </GlassCard>

            <GlassCard className="space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-sky-50 rounded-xl text-sky-600 flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Team Collaborations</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Group assessments, presentation sessions, and cultural event collaborations.</p>
            </GlassCard>

            <GlassCard className="space-y-4 border border-slate-100 hover:border-accent-500/20" hover>
              <div className="w-12 h-12 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Smart Integration</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Integrating visual animations, educational clips, and interactive screens.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 3: Assessment & Exams */}
      <section id="exams" className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Evaluation"
            title="Assessing {Academic} Progress"
            description="Continuous verification of concept grasp through structured review parameters."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Block */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 relative pb-2 inline-block">
                Continuous Evaluation
                <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                We monitor children continuous progress using small, stress-free checkpoints rather than depending solely on final assessments.
              </p>

              <ul className="space-y-3 font-semibold text-xs text-slate-700 pl-4 border-l-2 border-accent/30">
                <li className="flex gap-2">
                  <span className="text-accent font-extrabold">•</span>
                  Weekly quiz checklists & oral communication tests
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-extrabold">•</span>
                  Practical laboratory verify reviews
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-extrabold">•</span>
                  Subject Enrichment projects & homework assignments
                </li>
              </ul>
            </div>

            {/* Right Block */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 relative pb-2 inline-block">
                Terminal Examinations
                <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Formal examinations are conducted in mid-term and final terms according to general CBSE board regulations.
              </p>

              <ul className="space-y-3 font-semibold text-xs text-slate-700 pl-4 border-l-2 border-primary-200">
                <li className="flex gap-2">
                  <span className="text-primary font-extrabold">•</span>
                  Mid-Term examinations conducted in October
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-extrabold">•</span>
                  Pre-Board exams for Board Classes (X & XII)
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-extrabold">•</span>
                  Annual final verification exams in March/April
                </li>
              </ul>
            </div>

          </div>

          {/* Grading System Callout */}
          <div className="mt-16 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200/60 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-accent/15 text-accent-700 rounded-2xl flex-shrink-0">
              <HelpCircle size={32} />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-800">How is the grading done?</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                We implement CBSE guidelines for scholastic and co-scholastic grades. We grade not only writing capability but also lab work, sportsmanship, discipline, cleanliness, and team communication skills. Detailed reports are shared in Parent-Teacher Meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Academic Calendar timeline */}
      <section className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Schedule"
            title="Academic {Calendar} Roadmap"
            description="Our planned annual roadmap showing terms, major celebrations, and testing schedules."
            className="mb-16"
          />

          {/* Double column grid for layout variance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { month: 'April', events: 'Session Commences, Welcome Assembly' },
              { month: 'May', events: 'Summer Enrichment camps & workshops' },
              { month: 'June', events: 'First Periodic Checkpoint evaluations' },
              { month: 'July-August', events: 'Rain holidays, Digital extra hours' },
              { month: 'September', events: 'Revision and lab preparation hours' },
              { month: 'October', events: 'Mid-Term assessment tests' },
              { month: 'November', events: 'Annual Sports & Cultural Day' },
              { month: 'December', events: 'Science Fair & Foundation Day' },
              { month: 'January', events: 'Board examinee Pre-Boards' },
              { month: 'February', events: 'CBSE External board assessments start' },
              { month: 'March', events: 'Annual terminal evaluations' },
              { month: 'April', events: 'Report declarations & Admissions open' },
            ].map((item, index) => (
              <GlassCard key={index} className="flex items-center gap-5 p-6 border border-slate-200/50 hover:border-accent-500/20" hover>
                <div className="w-16 h-16 rounded-2xl bg-primary text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/10">
                  {item.month.slice(0, 3)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{item.month} Plan</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">{item.events}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SUBPAGE CTA */}
      <section className="section-container bg-gradient-to-br from-primary-900 via-primary-800 to-sky-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Looking to apply for admissions?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Admissions registration are open for nursery to higher classes. Apply online today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/admission" className="sm:flex-none">
              <CTAButton variant="accent" size="md">
                Admission Portal
              </CTAButton>
            </Link>
            <Link href="/contact" className="sm:flex-none">
              <CTAButton variant="glass" size="md">
                Get In Touch
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
