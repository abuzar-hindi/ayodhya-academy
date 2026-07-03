import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import { FileText, Download, Calendar, DollarSign, FileCheck, Book } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Downloads | Ayodhya Academy',
  description: 'Download important documents like academic calendar, fee structure, and admission forms.',
  keywords: 'Downloads, Forms, Documents, Calendar, Ayodhya Academy',
}

const documents = [
  {
    title: 'Academic Calendar 2024-25',
    description: 'Complete schedule of academic year with holidays and important dates',
    icon: Calendar,
    category: 'Academic',
    size: '2.4 MB',
  },
  {
    title: 'Fee Structure',
    description: 'Detailed fee structure for all classes and categories',
    icon: DollarSign,
    category: 'Admission',
    size: '1.8 MB',
  },
  {
    title: 'Admission Form',
    description: 'Download and fill the admission form',
    icon: FileText,
    category: 'Admission',
    size: '0.9 MB',
  },
  {
    title: 'School Prospectus',
    description: 'Comprehensive information about school facilities and programs',
    icon: Book,
    category: 'General',
    size: '3.2 MB',
  },
  {
    title: 'Code of Conduct',
    description: 'Student discipline and code of conduct policy',
    icon: FileCheck,
    category: 'Academic',
    size: '1.5 MB',
  },
  {
    title: 'Mandatory Disclosure',
    description: 'CBSE mandatory disclosure document',
    icon: FileText,
    category: 'Compliance',
    size: '2.1 MB',
  },
  {
    title: 'Transfer Certificate Form',
    description: 'Form for requesting transfer certificate',
    icon: FileText,
    category: 'Forms',
    size: '0.8 MB',
  },
  {
    title: 'Books List',
    description: 'Complete list of textbooks and reference books for all classes',
    icon: Book,
    category: 'Academic',
    size: '1.2 MB',
  },
  {
    title: 'Syllabus for Classes',
    description: 'Detailed syllabus for all subjects and classes',
    icon: FileText,
    category: 'Academic',
    size: '4.5 MB',
  },
]

const categoryColors: { [key: string]: string } = {
  Academic: 'bg-sky-100 text-sky-700',
  Admission: 'bg-primary-100 text-primary-700',
  General: 'bg-accent-100 text-accent-700',
  Compliance: 'bg-success-100 text-success-700',
  Forms: 'bg-danger-100 text-danger-700',
}

export default function DownloadsPage() {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Downloads</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Download important documents and resources from Ayodhya Academy.
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Resources"
            title="Available Documents"
            description="Download forms, schedules, and important information"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const IconComponent = doc.icon
              const bgColor = categoryColors[doc.category] || 'bg-gray-100 text-gray-700'

              return (
                <GlassCard key={index} className="space-y-4 group hover:shadow-2xl transition-all">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                      <IconComponent size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bgColor}`}>
                      {doc.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{doc.size}</span>
                    <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group-hover:gap-3 transition-all">
                      Download
                      <Download size={16} />
                    </button>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="section-container bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Quick Access"
            title="Important Links"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="space-y-4 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CBSE Resources</h3>
              <div className="space-y-2">
                {[
                  { label: 'CBSE Official Website', href: '#' },
                  { label: 'Board Exam Results', href: '#' },
                  { label: 'Curriculum Guidelines', href: '#' },
                ].map((link) => (
                  <a key={link.label} href={link.href} className="block text-primary-600 hover:text-primary-700 font-medium text-sm">
                    → {link.label}
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="space-y-4 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Parent Resources</h3>
              <div className="space-y-2">
                {[
                  { label: 'Class Time Table', href: '#' },
                  { label: 'Holiday Calendar', href: '#' },
                  { label: 'Parent Handbook', href: '#' },
                ].map((link) => (
                  <a key={link.label} href={link.href} className="block text-primary-600 hover:text-primary-700 font-medium text-sm">
                    → {link.label}
                  </a>
                ))}
              </div>
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
