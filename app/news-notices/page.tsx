import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { NoticeCard } from '@/components/sections/NoticeCard'

export const metadata: Metadata = {
  title: 'News & Notices | Ayodhya Academy',
  description: 'Latest news, announcements, and notices from Ayodhya Academy.',
  keywords: 'News, Notices, Announcements, Updates, Ayodhya Academy',
}

const news = [
  {
    id: 1,
    title: 'Board Exam Results - Excellent Performance',
    description: '95% students scored above 70%. Congratulations to all achievers!',
    date: new Date('2024-12-15'),
    category: 'news' as const,
  },
  {
    id: 2,
    title: 'Annual Sports Day 2024 - A Grand Success',
    description: 'Students showcased their athletic talents in various sporting events',
    date: new Date('2024-12-10'),
    category: 'event' as const,
  },
  {
    id: 3,
    title: 'Admissions Open for 2025-26 Session',
    description: 'Register now for admission to various classes from Pre-Primary to XII',
    date: new Date('2024-12-05'),
    category: 'notice' as const,
  },
  {
    id: 4,
    title: 'Annual Day Celebration',
    description: 'A spectacular show showcasing student talents in music, dance, and drama',
    date: new Date('2024-11-30'),
    category: 'event' as const,
  },
  {
    id: 5,
    title: 'Mid-Term Examinations Schedule',
    description: 'Mid-term exams for all classes from November 15-25',
    date: new Date('2024-11-05'),
    category: 'notice' as const,
  },
  {
    id: 6,
    title: 'Science Exhibition & Fair',
    description: 'Students displayed innovative science projects and experiments',
    date: new Date('2024-10-20'),
    category: 'event' as const,
  },
  {
    id: 7,
    title: 'Foundation Day Celebration',
    description: 'Celebrated the 15th foundation day of Ayodhya Academy with pride',
    date: new Date('2024-10-10'),
    category: 'news' as const,
  },
  {
    id: 8,
    title: 'Holiday Announcement - Diwali Break',
    description: 'School will remain closed from October 25-31 for Diwali festival',
    date: new Date('2024-10-01'),
    category: 'notice' as const,
  },
  {
    id: 9,
    title: 'Inter-School Debate Competition',
    description: 'Our students won first prize in the regional debate competition',
    date: new Date('2024-09-25'),
    category: 'news' as const,
  },
]

export default function NewsNoticesPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text-gold mb-6">News & Notices</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Stay updated with the latest news and announcements from Ayodhya Academy.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Latest Updates"
            title="News & Announcements"
            description="Important updates from the school"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <NoticeCard
                key={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                category={item.category}
              />
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
