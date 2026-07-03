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
import { SCHOOL_INFO } from '@/lib/constants'
import { ASSETS } from '@/lib/assets'
import { ChevronRight, Quote, Heart, Award, ShieldAlert, Sparkles } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export default function PrincipalMessagePage() {
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
            <span className="text-white/80">Principal's Message</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Principal's Message
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            A message from Mrs. Saumya Achari on the educational foundation of Ayodhya Academy.
          </p>
        </div>
      </section>

      {/* SECTION 1: Principal Message - Split Layout */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Photo Column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden border-2 border-accent shadow-2xl mb-4 bg-primary">
                <Image
                  src={ASSETS.team.principal}
                  alt="Principal Mrs. Saumya Achari"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/60 via-transparent to-transparent" />
              </div>

              <div className="text-center space-y-1">
                <h3 className="font-extrabold text-lg text-slate-800 leading-none">Mrs. Saumya Achari</h3>
                <p className="text-accent text-xs font-bold uppercase tracking-wider">M.A., B.Ed. • Principal Executive</p>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Affiliation Code {SCHOOL_INFO.affiliation}</p>
              </div>
            </div>

            {/* Message Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Vision Message</h4>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Welcome to Ayodhya Academy
              </h2>

              <div className="space-y-4 text-slate-500 font-light leading-relaxed">
                <p>
                  I welcome you all to Ayodhya Academy, where we believe education is not simply compiling academic marks but developing the complete character of the student. Over the past decade, our campus has scaled to be one of the premier schools in Ranopali, Ayodhya, Uttar Pradesh.
                </p>
                <p>
                  Our goal is to create a dynamic space where children learn by asking questions, verify principles inside science laboratories, and form code values that make them responsible citizens of India.
                </p>

                {/* Styled Quote Box */}
                <div className="relative p-6 rounded-2xl bg-slate-50 border-l-4 border-accent font-semibold italic text-slate-700 text-sm">
                  <Quote size={20} className="text-accent/20 absolute right-4 top-4" />
                  We believe that learning must match modern technical advances without losing strong connection to moral truth and self-responsibility.
                </div>

                <p>
                  We are highly committed to providing:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2 text-xs font-semibold text-slate-700">
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    Conceptual learning & CBSE examination focus
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    Safe classrooms with active supervision
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    Public speaking & sports training options
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    Open, active parent-teacher relationship reviews
                  </div>
                </div>

                <p>
                  I welcome you to join our educational family. If you have questions regarding admissions, feel free to visit our campus or register through the portal.
                </p>

                <p className="pt-6 font-bold text-slate-800">
                  Warm regards,
                  <br />
                  <span className="text-primary font-extrabold">Mrs. Saumya Achari</span>
                  <br />
                  <span className="text-xs font-normal text-slate-500">Principal Executive, Ayodhya Academy</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Values */}
      <section className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Philosophy"
            title="Our Core {Principles}"
            description="The values we cultivate in every student who joins the academy."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Academic Excellence',
                desc: 'Consistently higher board grading average through continuous test parameters.',
                icon: Award
              },
              {
                title: 'Character Integrity',
                desc: 'Instilling truthfulness, respect, and responsibility in children.',
                icon: Heart
              },
              {
                title: 'Creative Logic',
                desc: 'Encouraging students to innovate and ask questions rather than memorize.',
                icon: Sparkles
              },
              {
                title: 'Physical Health',
                desc: 'Sports track routines, badminton, basketball, and tracking physical wellness.',
                icon: ShieldIcon
              }
            ].map((val, idx) => {
              const Icon = val.icon
              return (
                <GlassCard key={idx} className="text-center space-y-4 border border-slate-100 hover:border-accent/20" hover>
                  <div className="w-12 h-12 bg-primary-50 rounded-xl text-primary flex items-center justify-center mx-auto">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">{val.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{val.desc}</p>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Vision & Mission */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Foundation"
            title="Vision & {Mission} Goals"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-8 space-y-4 border border-slate-100" hover={false}>
              <span className="text-accent text-[9px] uppercase tracking-widest font-bold">Direction</span>
              <h3 className="text-xl font-bold text-slate-800">Our Vision Statement</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                To stand as a beacon of academic leadership in Uttar Pradesh, creating compassionate, highly skilled graduates who use logic and ethics to lead change in the society of tomorrow.
              </p>
            </GlassCard>

            <GlassCard className="p-8 space-y-4 border border-slate-100" hover={false}>
              <span className="text-accent text-[9px] uppercase tracking-widest font-bold">Execution</span>
              <h3 className="text-xl font-bold text-slate-800">Our Mission Statement</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                To build infrastructure and recruit teachers who cultivate curiosity, respect individual learning speeds, provide safe spaces, and verify NCERT CBSE concepts in a real-world environment.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </main>
  )
}

function ShieldIcon({ size }: { size: number }) {
  return <Award size={size} />
}
