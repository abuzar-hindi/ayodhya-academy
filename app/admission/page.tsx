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
import { RegistrationForm } from '@/components/forms/RegistrationForm'
import { CLASSES } from '@/lib/constants'
import { CheckCircle2, FileText, FileCheck, Users, ChevronRight, HelpCircle, Download, CreditCard, Gift, ShieldAlert } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export default function AdmissionPage() {
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
            <span className="text-white/80">Admissions</span>
          </div>

          <h1 className="text-5xl md:text-6xl gradient-text-gold font-extrabold tracking-tight">
            Join the Academy
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            Begin your child's educational journey towards logic, character building, and future readiness.
          </p>
        </div>
      </section>

      {/* SECTION 1: Timeline steps */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Steps"
            title="Admission {Timeline} Process"
            description="Follow these direct steps to complete the enrollment process."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Registration',
                description: 'Fill out the online application form with parent and student details.',
                icon: <FileText className="text-accent-500" size={24} />,
              },
              {
                step: 2,
                title: 'Document Verify',
                description: 'Upload birth proof, previous marks, and identity proofs.',
                icon: <FileCheck className="text-primary" size={24} />,
              },
              {
                step: 3,
                title: 'Assessment',
                description: 'Interactive parent counselling and basic eligibility entrance test.',
                icon: <Users className="text-sky-500" size={24} />,
              },
              {
                step: 4,
                title: 'Confirmation',
                description: 'Secure admission confirmation by paying the first semester fee.',
                icon: <CheckCircle2 className="text-emerald-500" size={24} />,
              },
            ].map((item) => (
              <GlassCard key={item.step} className="text-center space-y-4 border border-slate-100 hover:border-accent/20" hover>
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-center justify-center font-extrabold text-lg text-primary shadow-sm">
                    {item.step}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-center text-accent">{item.icon}</div>
                  <h3 className="text-base font-extrabold text-slate-800 leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Classes available */}
      <section className="section-container bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Admissions Open"
            title="Classes {Available} for Enrollment"
            description="We welcome application candidates across various academic divisions."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CLASSES.map((cls, index) => (
              <GlassCard key={cls} className="flex items-center gap-4 p-6 border border-slate-200/50 hover:border-accent-500/20" hover>
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-primary/10">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">{cls}</h3>
                  <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Admissions Open</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Requirements & Documents */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Eligibility */}
            <div className="space-y-6">
              <SectionTitle
                subtitle="Guidelines"
                title="Eligibility {Criteria}"
                centered={false}
              />
              <div className="space-y-4 pt-4 border-l-2 border-accent-500/20 pl-6">
                {[
                  'Appropriate biological age alignment with class standard rules.',
                  'Positive performance verification in school assessment tests.',
                  'Satisfactory code of conduct remarks from previous school principal.',
                  'Medical fitness self-declarations for physical activities.'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-600 text-sm font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-6">
              <SectionTitle
                subtitle="Verification"
                title="Required {Documents}"
                centered={false}
              />
              <div className="space-y-4 pt-4 border-l-2 border-primary-200 pl-6">
                {[
                  'Attested copy of Child Birth Certificate.',
                  'Official Transfer Certificate (TC) from previous institution.',
                  'Report Card or Transcript copy of previous final examination.',
                  'Passport size photographs of student & parents (4 copies).',
                  'Residential address proof (Aadhaar Card, Passport, etc.).'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-5 h-5 rounded-lg bg-slate-100 text-primary border border-slate-200 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Registration Form */}
      <section id="register" className="section-container bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Application Portal"
            title="Online {Admissions} Register"
            description="Submit the child's academic details to schedule counselling."
            className="mb-12"
          />

          <div className="glass-premium rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl bg-white/90">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* SECTION 5: Fee Structure Information */}
      <section className="section-container bg-white noise-overlay">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Finance"
            title="Transparent {Fee} Structure"
            description="Detailed review parameters regarding annual academic investments."
            className="mb-12"
          />

          <GlassCard className="space-y-8 border border-slate-100" hover={false}>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              We structure our academic fees in full conformity with CBSE regulations. Concessions are allowed for sibling admissions and category aid based on verified government documentation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl w-fit">
                  <CreditCard size={20} />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">Term Installments</h4>
                <ul className="text-xs text-slate-500 space-y-1.5 font-light">
                  <li>• semi-annual installments</li>
                  <li>• quarterly payment options</li>
                  <li>• net banking and card portal support</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="p-2.5 bg-amber-50 text-accent-700 rounded-xl w-fit">
                  <Gift size={20} />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">Sibling Concessions</h4>
                <ul className="text-xs text-slate-500 space-y-1.5 font-light">
                  <li>• Sibling discount policy</li>
                  <li>• Merit-based academic aids</li>
                  <li>• EWS category verification</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
                  <ShieldAlert size={20} />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">Auxiliary Charges</h4>
                <ul className="text-xs text-slate-500 space-y-1.5 font-light">
                  <li>• Track school bus services</li>
                  <li>• School uniforms & books</li>
                  <li>• Annual sport gear kits</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 font-light max-w-lg leading-relaxed">
                For complete schedule lists, fees details by division, and offline pay vouchers, download the admissions fee documentation brochure.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white hover:bg-primary-900 rounded-xl font-bold text-xs transition-colors shadow-md shadow-primary/10 whitespace-nowrap"
              >
                <Download size={14} />
                Download Fee Brochure
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </main>
  )
}
