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
import { Trophy, Star, Award, Medal, ChevronRight, Check } from 'lucide-react'

const achievements = [
  {
    title: 'CBSE Board Excellence Award',
    year: '2023',
    description: '100% pass rate with 10 students scoring above 95% in board exams.',
    icon: Trophy,
  },
  {
    title: 'School of Excellence',
    year: '2023',
    description: 'Recognition for outstanding academic growth and student development.',
    icon: Award,
  },
  {
    title: 'National Sports Championship',
    year: '2022',
    description: 'Gold medal in badminton and football regional tournaments.',
    icon: Medal,
  },
  {
    title: 'Science Olympiad Winners',
    year: '2022',
    description: 'Three senior secondary students qualified for national olympiad final exams.',
    icon: Star,
  },
  {
    title: 'Social Responsibility Award',
    year: '2022',
    description: 'Recognition for clean environment drives and community initiatives.',
    icon: Trophy,
  },
  {
    title: 'Best School Infrastructure',
    year: '2021',
    description: 'Award for modern laboratory facilities and smart screen integrations.',
    icon: Award,
  },
]

const studentAchievements = [
  {
    name: 'Ravi Kumar',
    class: 'XII-A',
    achievement: 'Scored 98% in CBSE Board Exam (School Rank 1)',
    category: 'Academic',
  },
  {
    name: 'Priya Singh',
    class: 'X-B',
    achievement: 'National Science Olympiad Qualifier (Rank 45)',
    category: 'Academic',
  },
  {
    name: 'Rahul Verma',
    class: 'XI-C',
    achievement: 'State-level Badminton Singles Champion',
    category: 'Sports',
  },
  {
    name: 'Anjali Gupta',
    class: 'XII-B',
    achievement: 'Selected for National Youth Orchestra Violins',
    category: 'Cultural',
  },
  {
    name: 'Vikram Patel',
    class: 'IX-A',
    achievement: 'District-level Debate Competition Winner',
    category: 'Academic',
  },
  {
    name: 'Sneha Sharma',
    class: 'X-C',
    achievement: 'All-India Math Wizard Olympiad Finalist',
    category: 'Academic',
  },
]

export default function AchievementsPage() {
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
            <span className="text-white/80">Achievements</span>
          </div>

          <h1 className="text-5xl gradient-text-gold md:text-6xl font-extrabold tracking-tight">
            Our Achievements
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            Celebrating excellence, sportsmanship, and student leadership milestones at regional and national stages.
          </p>
        </div>
      </section>

      {/* SECTION 1: School Milestones */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Milestones"
            title="School {Awards} & Recognition"
            description="Awards earned by Ayodhya Academy as a premium educational center."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <GlassCard
                  key={index}
                  className="space-y-6 border border-slate-100 hover:border-accent-500/20 group hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                  hover
                  delay={index * 0.05}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="p-3 bg-primary-50 rounded-xl text-primary border border-primary-100/50 group-hover:bg-accent group-hover:text-primary-900 transition-colors">
                      <Icon size={22} className="stroke-[2.5px]" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200/50 text-slate-500 text-[10px] uppercase font-bold tracking-widest leading-none">
                      Year {achievement.year}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-primary transition-colors leading-snug">{achievement.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">{achievement.description}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: Student Achievements */}
      <section className="section-container bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Honour Roll"
            title="Student {Excellence} in Action"
            description="Outstanding profiles of students representing the academy in diverse tracks."
            className="mb-16"
          />

          <div className="space-y-4">
            {studentAchievements.map((student, index) => {
              const isAcademic = student.category === 'Academic'
              const isSports = student.category === 'Sports'

              const badgeClasses = isAcademic
                ? 'bg-blue-50 text-blue-700 border-blue-100'
                : isSports
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                  : 'bg-amber-50 text-amber-700 border-amber-100'

              return (
                <GlassCard
                  key={index}
                  className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-slate-200/50 hover:border-accent-500/20"
                  hover
                  delay={index * 0.05}
                >
                  <div className="flex items-center gap-5">
                    {/* Avatar Initials */}
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-900 border border-accent/25 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                      {student.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-800">{student.name}</h3>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold leading-none">Class {student.class}</p>
                      <p className="text-slate-650 text-xs mt-1 font-light leading-relaxed">{student.achievement}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-bold border ${badgeClasses} whitespace-nowrap self-end sm:self-center`}>
                    {student.category}
                  </span>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Success Metrics */}
      <section className="section-container bg-[#071B3A] text-white noise-overlay-dark border-t border-white/5">
        <div className="absolute inset-0 bg-radial-gradient from-accent-500/5 via-transparent to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Metrics"
            title="Academic {Success} Rates"
            description="Our school average registers consistent progress parameters across board evaluations."
            className="mb-16"
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Board Exam Pass Rate', value: '100%' },
              { label: 'Distinction Rate average', value: '92%' },
              { label: 'Olympiad Gold Medals', value: '25+' },
              { label: 'Higher Education Enrolls', value: '95%' },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text-gold">{stat.value}</div>
                <p className="text-white/70 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </main>
  )
}
