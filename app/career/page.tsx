import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import { CTAButton } from '@/components/ui/CTAButton'
import { Briefcase, Users, Heart, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Career | Ayodhya Academy',
  description: 'Career opportunities at Ayodhya Academy. Join our team of dedicated educators.',
  keywords: 'Career, Jobs, Teaching, Employment, Ayodhya Academy',
}

const openPositions = [
  {
    title: 'Senior Teacher - English',
    department: 'Languages',
    experience: '5+ years',
    qualification: 'M.A., B.Ed.',
    description: 'Looking for experienced English teacher to lead secondary and senior secondary classes',
  },
  {
    title: 'Mathematics Teacher - Secondary',
    department: 'Mathematics',
    experience: '3+ years',
    qualification: 'M.Sc., B.Ed.',
    description: 'Passionate educator for middle and secondary school mathematics',
  },
  {
    title: 'Science Teacher - Physics',
    department: 'Science',
    experience: '4+ years',
    qualification: 'M.Sc., B.Ed.',
    description: 'Experienced Physics teacher with lab management skills',
  },
  {
    title: 'Computer Science Teacher',
    department: 'IT',
    experience: '3+ years',
    qualification: 'B.Tech/B.Sc., B.Ed.',
    description: 'Tech-savvy educator for computer science classes',
  },
]

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
  },
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    description: 'Training and development opportunities for career advancement',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with dedicated professionals in a supportive environment',
  },
  {
    icon: Briefcase,
    title: 'Competitive Salary',
    description: 'Attractive salary package commensurate with experience',
  },
]

export default function CareerPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Build a rewarding career at Ayodhya Academy, making a difference in students' lives.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Opportunity"
            title="Why Join Ayodhya Academy?"
            description="We offer more than just a job - we offer a calling"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <GlassCard key={index} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary-100 rounded-xl text-primary-600">
                      <IconComponent size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </GlassCard>
              )
            })}
          </div>

          <GlassCard className="p-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Our Culture</h3>
            <p className="text-gray-600">
              We believe in creating an inclusive workplace where every team member feels valued and supported. Our culture is built on collaboration, innovation, and a shared commitment to educational excellence.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-container bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Openings"
            title="Current Vacancies"
            description="We are currently hiring for the following positions"
            className="mb-16"
          />

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <GlassCard key={index} className="p-6 space-y-4 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Department</p>
                        <p className="text-gray-900 font-medium">{position.department}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Experience</p>
                        <p className="text-gray-900 font-medium">{position.experience}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-xs text-gray-500 uppercase font-semibold">Qualification</p>
                        <p className="text-gray-900 font-medium">{position.qualification}</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <CTAButton variant="primary" size="lg">
                      Apply Now
                    </CTAButton>
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-sky-50 border-2 border-sky-200 text-center">
            <p className="text-gray-600 mb-4">Don't see your ideal position?</p>
            <Link href="/contact">
              <CTAButton variant="outline" size="lg">
                Send Us Your CV
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Steps"
            title="Application Process"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Submit Application',
                description: 'Send your CV and cover letter to our HR team',
              },
              {
                step: 2,
                title: 'Initial Screening',
                description: 'We review applications and shortlist candidates',
              },
              {
                step: 3,
                title: 'Interview',
                description: 'Selected candidates are invited for interview',
              },
              {
                step: 4,
                title: 'Selection',
                description: 'Final candidates are selected and offered position',
              },
            ].map((item, index) => (
              <GlassCard key={index} className="text-center space-y-4 p-6">
                <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container bg-gradient-to-r from-primary-500 to-sky-500">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-4xl font-bold">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90">
            Send your application to our HR team. We look forward to hearing from you!
          </p>
          <a href="mailto:ayodhyaacadmy@gmail.com" className="inline-block">
            <CTAButton variant="secondary" size="lg">
              Send Application
            </CTAButton>
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </main>
  )
}
