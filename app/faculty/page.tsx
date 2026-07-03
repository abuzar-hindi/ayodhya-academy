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
import { ChevronRight, Award, GraduationCap, Briefcase, HeartHandshake, ShieldCheck, Cpu } from 'lucide-react'

const facultyMembers = [
  {
    name: 'Mrs. Saumya Achari',
    position: 'School Principal',
    qualification: 'M.A., B.Ed.',
    experience: '18 Years',
    subject: 'Education Leadership & English Literature',
  },
  {
    name: 'Mr. Rajesh Kumar',
    position: 'Vice Principal',
    qualification: 'M.Ed., M.A.',
    experience: '15 Years',
    subject: 'Hindi Language & Administration',
  },
  {
    name: 'Mrs. Priya Singh',
    position: 'Senior Lecturer',
    qualification: 'M.Sc., B.Ed.',
    experience: '12 Years',
    subject: 'Theoretical & Applied Physics',
  },
  {
    name: 'Dr. Arun Sharma',
    position: 'Head Lecturer',
    qualification: 'Ph.D., M.Sc.',
    experience: '10 Years',
    subject: 'Organic & Inorganic Chemistry',
  },
  {
    name: 'Mrs. Anjali Verma',
    position: 'Senior Lecturer',
    qualification: 'B.Sc., B.Ed.',
    experience: '8 Years',
    subject: 'Biology & Environmental Science',
  },
  {
    name: 'Mr. Vikram Patel',
    position: 'Senior Lecturer',
    qualification: 'B.A., B.Ed.',
    experience: '9 Years',
    subject: 'English Communication & Grammar',
  },
  {
    name: 'Mrs. Neha Gupta',
    position: 'Lecturer',
    qualification: 'B.Com., B.Ed.',
    experience: '7 Years',
    subject: 'Mathematics & Algebra',
  },
  {
    name: 'Mr. Abhishek Kumar',
    position: 'IT Director & Coordinator',
    qualification: 'B.Tech., M.Ed.',
    experience: '6 Years',
    subject: 'Computer Science & Artificial Intelligence',
  },
  {
    name: 'Mrs. Divya Mishra',
    position: 'Student Counselor',
    qualification: 'M.A. (Psychology), B.Ed.',
    experience: '5 Years',
    subject: 'Student Wellness & Counselling',
  },
]

export default function FacultyPage() {
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
            <span className="text-white/80">Faculty</span>
          </div>

          <h1 className="text-5xl gradient-text-gold md:text-6xl font-extrabold tracking-tight">
            Our Educators
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            Meet the academic leadership and subject mentors dedicated to shaping student success.
          </p>
        </div>
      </section>

      {/* SECTION 1: Faculty Grid */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Pedagogues"
            title="Experienced {Faculty} Members"
            description="Highly qualified subject matter experts who focus on logic and conceptual validation."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <GlassCard
                key={index}
                className="space-y-6 border border-slate-100 hover:border-accent-500/20 group hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                hover
                delay={index * 0.05}
              >
                <div>
                  {/* Styled Avatar initials */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-900 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white shadow-md border border-accent/25 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-[5deg]">
                    <span className="gradient-text-gold">
                      {member.name
                        .split(' ')
                        .filter((n) => n !== 'Mrs.' && n !== 'Mr.' && n !== 'Dr.')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>

                  {/* Profile info */}
                  <div className="mt-6 space-y-1">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-accent font-bold text-xs uppercase tracking-wider">{member.position}</p>
                  </div>
                </div>

                {/* Info parameters */}
                <div className="border-t border-slate-100 pt-5 space-y-3 text-xs text-slate-650 font-medium">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={15} className="text-primary flex-shrink-0" />
                    <p>
                      <span className="text-slate-400 font-normal">Degree:</span> {member.qualification}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={15} className="text-primary flex-shrink-0" />
                    <p>
                      <span className="text-slate-400 font-normal">Tenure:</span> {member.experience}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={15} className="text-accent flex-shrink-0" />
                    <p>
                      <span className="text-slate-400 font-normal">Discipline:</span> {member.subject}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Highlights / Stats */}
      <section className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Standards"
            title="Pedagogical {Strength}"
            description="Our teaching benchmarks that create academic milestones."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="space-y-4 border border-slate-150" hover={false}>
              <div className="text-4xl font-extrabold gradient-text-gold leading-none">12+ Years</div>
              <h3 className="text-lg font-bold text-slate-800">Average Class Experience</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Our faculty members possess deep experience inside classroom instruction and subject pedagogy.
              </p>
            </GlassCard>

            <GlassCard className="space-y-4 border border-slate-150" hover={false}>
              <div className="text-4xl font-extrabold gradient-text-gold leading-none">100%</div>
              <h3 className="text-lg font-bold text-slate-800">UGC & B.Ed. Certified</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Every academic staff member holds registered professional degrees in teacher coaching programs.
              </p>
            </GlassCard>

            <GlassCard className="space-y-4 border border-slate-150" hover={false}>
              <div className="text-4xl font-extrabold gradient-text-gold leading-none">1:15</div>
              <h3 className="text-lg font-bold text-slate-800">Mentor to Pupil Ratio</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                We manage classroom sizes to maintain focus on every child's academic development.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 3: Support & Operations Staff */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Operations"
            title="Administration & {Support} Personnel"
            description="Behind our academic success is a dedicated operations structure."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="space-y-5 border border-slate-100" hover={false}>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="p-2 bg-primary-50 rounded-xl text-primary">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-800">Administrative Office</h3>
              </div>
              <ul className="space-y-3.5 text-xs font-semibold text-slate-650">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  Executive Academic Management
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  Finance Oversight & Fees Vouchers
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  Academic Curriculum Planners
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  Office Registry & Archives Management
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="space-y-5 border border-slate-100" hover={false}>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="p-2 bg-accent-100 rounded-xl text-accent-700">
                  <HeartHandshake size={20} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-800">Support & Student Care</h3>
              </div>
              <ul className="space-y-3.5 text-xs font-semibold text-slate-650">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Active Psychological Counselling desk
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Fulltime school clinic Nurse and first aid
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  IT systems & Smart screen supervisors
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Security guard teams and track bus drivers
                </li>
              </ul>
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
