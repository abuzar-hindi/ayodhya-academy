'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StatsCard } from '@/components/sections/StatsCard'
import { FacilityCard } from '@/components/sections/FacilityCard'
import { NoticeCard } from '@/components/sections/NoticeCard'
import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { STATISTICS, FACILITIES } from '@/lib/constants'
import { ASSETS } from '@/lib/assets'
import { Users, Award, Shield, Monitor, Quote, BookOpen, Sparkles, ChevronDown, CheckCircle, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'


export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const recentNews = [
    {
      id: 1,
      title: 'Annual Sports Day 2024 - A Grand Success',
      description: 'Students showcased their athletic talents in various sporting events, breaking multiple state-level track records.',
      date: new Date('2024-12-15'),
      category: 'event' as const,
    },
    {
      id: 2,
      title: 'Board Exam Results - Excellent Performance',
      description: 'Our students achieved outstanding results in CBSE board exams, with a school average of 92.4% distinction rate.',
      date: new Date('2024-12-10'),
      category: 'news' as const,
    },
    {
      id: 3,
      title: 'Admissions Open for 2025-26 Session',
      description: 'Register now for admission to various classes from Pre-Primary to XII. Interactive counseling dates are now live.',
      date: new Date('2024-12-05'),
      category: 'notice' as const,
    },
  ]

  const testimonials = [
    {
      quote: "Sending our daughter to Ayodhya Academy has been our best decision. The combination of smart classrooms and dedicated teachers has accelerated her learning tremendously.",
      author: "Mr. Rajeev Verma",
      role: "Parent of Class IX Student",
    },
    {
      quote: "The academic standards are exceptionally high, but what impresses me most is the focus on moral values and communication skills. It is truly a premium institution.",
      author: "Dr. Ananya Mishra",
      role: "Parent of Class VI Student",
    },
    {
      quote: "Fantastic infrastructure! The science and computer labs are fully equipped, and the sports program ensures my son stays physically fit and active.",
      author: "Mr. Sandeep Pandey",
      role: "Parent of Class XII Student",
    }
  ]

  const faqs = [
    {
      q: 'What is the admission registration process?',
      a: 'Parents can register their children online through our Admission Portal or visit the campus office. Admissions are based on academic performance and entrance verification for senior classes.',
    },
    {
      q: 'What are the school and class timings?',
      a: 'Pre-primary classes operate from 8:30 AM to 1:00 PM. Primary and secondary sections run from 8:00 AM to 2:30 PM, Monday through Saturday. Co-curricular activities operate in the afternoon sessions.',
    },
    {
      q: 'Is school transport available for students?',
      a: 'Yes, we provide safe, GPS-tracked transportation with trained attendants and speed limit controllers covering major routes across Ranopali, Ayodhya, and neighboring zones.',
    },
    {
      q: 'How is the academic performance evaluated?',
      a: 'We follow the CBSE continuous and comprehensive evaluation system. This includes weekly tests, subject enrichment projects, co-scholastic grading, and mid-term/final terminal assessments.',
    }
  ]

  return (
    <main className="bg-background-luxury text-slate-800 antialiased relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />

      {/* SECTION 1: Why Choose Ayodhya Academy - Split Layout */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Story Side */}
            <div className="lg:col-span-5 space-y-6">
              <SectionTitle
                subtitle="Why Choose Us"
                title="A Standard of {Elite} Learning"
                description="We bridge the gap between world-class education infrastructure and rich moral ethics."
                centered={false}
              />
              <p className="text-slate-500 leading-relaxed font-light">
                Ayodhya Academy is dedicated to providing students with an environment where learning is interactive, concepts are verified in laboratories, and teachers act as mentors.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  'CBSE Affiliation with focus on NCERT concepts',
                  'Smart digital screens in every lecture hall',
                  'Dedicated coaching for sports and public speaking',
                  'Regular parent-teacher academic reviews'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={18} />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/about">
                  <CTAButton variant="primary" size="md">
                    Learn Our Story
                  </CTAButton>
                </Link>
              </div>
            </div>

            {/* Right Cards Grid Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <GlassCard className="space-y-4 border border-slate-100 hover:border-accent/30" hover>
                <div className="w-12 h-12 bg-primary-50 rounded-xl text-primary flex items-center justify-center">
                  <Award size={24} className="stroke-[2px]" />
                </div>
                <h3 className="text-xl font-bold text-slate-855">Academic Excellence</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Consistent board exam averages of 90%+ with personalized tracking for board examinees.</p>
              </GlassCard>

              <GlassCard className="space-y-4 border border-slate-100 hover:border-accent/30" hover>
                <div className="w-12 h-12 bg-sky-50 rounded-xl text-sky-600 flex items-center justify-center">
                  <Monitor size={24} className="stroke-[2px]" />
                </div>
                <h3 className="text-xl font-bold text-slate-855">Smart Campus</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Fully digital infrastructure equipped with interactive smart displays and computer platforms.</p>
              </GlassCard>

              <GlassCard className="space-y-4 border border-slate-100 hover:border-accent/30" hover>
                <div className="w-12 h-12 bg-amber-50 rounded-xl text-accent flex items-center justify-center">
                  <Users size={24} className="stroke-[2px]" />
                </div>
                <h3 className="text-xl font-bold text-slate-855">Expert Faculty</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Experienced educators holding specialized degrees in education and subject areas.</p>
              </GlassCard>

              <GlassCard className="space-y-4 border border-slate-100 hover:border-accent/30" hover>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center">
                  <Shield size={24} className="stroke-[2px]" />
                </div>
                <h3 className="text-xl font-bold text-slate-855">Safe & Secure</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Safe environment with active CCTV monitoring, safety drills, and student support counseling.</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Principal Message Preview - Dark Luxury Section */}
      <section className="section-container bg-[#071B3A] text-white noise-overlay-dark">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Principal Photo with Gold Frame */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-accent-500/30">
                <Image
                  src={ASSETS.team.principal}
                  alt="Principal Mrs. Saumya Achari"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-extrabold text-sm tracking-tight leading-none mb-1">Mrs. Saumya Achari</p>
                  <p className="text-accent text-[10px] uppercase font-bold tracking-widest leading-none">M.A., B.Ed. • Principal</p>
                </div>
              </div>
            </div>

            {/* Principal Quote & Message */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent-400">Institutional Message</h4>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                From the desk of the Principal
              </h3>

              <div className="relative pl-8 border-l border-white/10 py-2">
                <Quote size={28} className="absolute left-0 top-0 text-accent/20 rotate-180" />
                <p className="text-white/85 text-base md:text-lg font-light leading-relaxed italic">
                  &ldquo;Education is not the learning of facts, but the training of the mind to think. At Ayodhya Academy, we empower students to lead with conviction, build with logic, and live with moral truth.&rdquo;
                </p>
              </div>

              <p className="text-white/70 text-sm leading-relaxed font-light">
                We believe that every child holds unique potentials that deserve personalized academic nurturing. Through continuous curriculum improvements and high teacher-student engagement, we ensure every student finds success.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
                <Link href="/principal-message">
                  <CTAButton variant="accent" size="sm">
                    Read Message
                  </CTAButton>
                </Link>
                <span className="text-xs text-white/55 font-semibold">Mrs. Saumya Achari, Principal Executive Officer</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Academic Excellence & Collage - Asymmetrical Layout */}
      <section className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Editorial Story */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <SectionTitle
                subtitle="Academic System"
                title="Shaping {Tomorrow's} Academic Leaders"
                description="Our curriculum is carefully structured according to CBSE guidelines, ensuring deep logical development."
                centered={false}
              />

              <p className="text-slate-500 font-light leading-relaxed">
                Ayodhya Academy provides academic streams starting from early nursery classes up to higher secondary certification levels (Class XII). We prepare our pupils to face the modern competitive examinations with scientific temperament.
              </p>

              {/* Programs Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-white rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="p-2.5 bg-primary-50 rounded-xl text-primary mt-1">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Primary Curriculum</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Language skill development, arithmetic, and conceptual environment studies.</p>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="p-2.5 bg-accent-100 rounded-xl text-accent-700 mt-1">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Senior Secondary</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Advanced study paths in Science, Commerce, and Arts with practical certifications.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/academics">
                  <CTAButton variant="outline" size="md">
                    Explore Academics
                  </CTAButton>
                </Link>
              </div>
            </div>

            {/* Right Side: Visual Overlapping Collage */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-6 order-1 lg:order-2">
              <div className="relative w-full max-w-[380px] aspect-[4/5]">
                {/* Large Background Photo */}
                <div className="absolute top-0 left-0 w-[90%] h-[90%] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
                  <Image
                    src={ASSETS.gallery.classroom}
                    alt="Students in classroom"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>

                {/* Overlapping small photo */}
                <div className="absolute bottom-0 right-0 w-[60%] h-[55%] rounded-3xl overflow-hidden border-2 border-white shadow-2xl">
                  <Image
                    src={ASSETS.facilities.scienceLab}
                    alt="Science laboratory experiment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: World-Class Facilities */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Campus Life"
            title="World-Class {Facilities}"
            description="Explore our elite modern facilities configured to encourage holistic development."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Smart Classes', iconName: 'Monitor' as const, image: ASSETS.facilities.smartClassroom },
              { name: 'Science Laboratories', iconName: 'Beaker' as const, image: ASSETS.facilities.scienceLab },
              { name: 'Computer Laboratory', iconName: 'Cpu' as const, image: ASSETS.facilities.computerLab },
              { name: 'Library', iconName: 'BookOpen' as const, image: ASSETS.facilities.library },
              { name: 'Sports Facilities', iconName: 'Trophy' as const, image: ASSETS.facilities.sports },
              { name: 'Music & Dance Studio', iconName: 'Music' as const, image: ASSETS.facilities.musicStudio },
            ].slice(0, 3).map((facility, idx) => {
              const facilityData = FACILITIES.find(f => f.name.includes(facility.name.split(' ')[0]))
              return (
                <FacilityCard
                  key={idx}
                  name={facility.name}
                  description={facilityData?.description || 'Premium facility for student development'}
                  iconName={facility.iconName}
                  image={facility.image}
                />
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/facilities">
              <CTAButton variant="primary" size="md">
                View All Campus Facilities
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: Gallery Preview - Masonry Collage */}
      <section className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionTitle
              subtitle="Inside Campus"
              title="Life at {Ayodhya} Academy"
              description="A snapshot look at recent cultural celebrations, experiments, and active sports."
              centered={false}
              className="md:max-w-2xl"
            />
            <Link href="/gallery" className="flex-shrink-0">
              <CTAButton variant="outline" size="sm">
                View Full Gallery
              </CTAButton>
            </Link>
          </div>

          {/* Masonry-like image grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 relative aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden border border-slate-200/50 group shadow-md shadow-slate-100">
              <Image
                src={ASSETS.events.annualDay}
                alt="Annual Day Celebration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/70 via-transparent to-transparent flex items-end p-8">
                <div>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest leading-none">Highlights</span>
                  <h4 className="text-white text-xl font-bold mt-2">Annual Cultural Day Celebration</h4>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 relative aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden border border-slate-200/50 group shadow-md shadow-slate-100">
              <Image
                src={ASSETS.facilities.smartClassroom}
                alt="Smart Classrooms"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/70 via-transparent to-transparent flex items-end p-8">
                <div>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest leading-none">Classrooms</span>
                  <h4 className="text-white text-lg font-bold mt-2">Interactive Lectures</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Achievements Section */}
      <section className="section-container bg-[#071B3A] text-white noise-overlay-dark border-y border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-accent-500/5 via-transparent to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle
            subtitle="By the numbers"
            title="Institutional {Achievements}"
            description="Our metrics represent over a decade of continuous academic excellence and structural expansion."
            className="mb-16"
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATISTICS.map((stat, index) => (
              <StatsCard key={index} label={stat.label} value={stat.value} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Latest Announcements */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionTitle
              subtitle="Latest Feed"
              title="Announcements & {Updates}"
              description="Keep up to date with immediate notices from our CBSE portal."
              centered={false}
              className="md:max-w-2xl"
            />
            <Link href="/news-notices" className="flex-shrink-0">
              <CTAButton variant="outline" size="sm">
                View All Notices
              </CTAButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <NoticeCard
                key={news.id}
                title={news.title}
                description={news.description}
                date={news.date}
                category={news.category}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Parent Testimonials */}
      <section className="section-container bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Feedback"
            title="What {Parents} Say"
            description="Read review reports directly from active parents of the school."
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-8">
            {testimonials.map((test, index) => (
              <GlassCard key={index} className="space-y-4 p-8 border border-slate-100 hover:border-accent-500/20" hover={false}>
                <Quote size={32} className="text-accent opacity-30" />
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed italic pl-2">
                  &ldquo;{test.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm text-primary">{test.author}</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">{test.role}</p>
                  </div>
                  <span className="text-[10px] font-bold text-accent-500 uppercase tracking-widest bg-accent-50/50 px-3 py-1 rounded-full border border-accent-100">Verified Parent</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQs Section Accordion */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Queries"
            title="Frequently Asked {Questions}"
            description="Find rapid answers to standard registration queries."
            className="mb-16"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/60 overflow-hidden transition-all bg-slate-50/50 hover:bg-slate-50/80"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 font-bold text-sm md:text-base text-slate-800 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={cn('text-accent transition-transform duration-300', isOpen && 'rotate-180')} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0 text-slate-500 text-sm leading-relaxed font-light border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: Admissions CTA Banner */}
      <section className="section-container bg-gradient-to-br from-primary-900 via-primary-800 to-sky-900 text-white border-t border-accent-500/25">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] tracking-widest font-bold uppercase text-accent">
            Admissions Board
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Begin Your Child's Journey at Ayodhya Academy
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Register your interest online now and schedule an interactive interview session with our academic counsel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/admission" className="sm:flex-none">
              <CTAButton variant="accent" size="lg" className="w-full sm:w-auto">
                Apply Now Online
              </CTAButton>
            </Link>
            <Link href="/contact" className="sm:flex-none">
              <CTAButton variant="glass" size="lg" className="w-full sm:w-auto">
                Contact Admissions
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
