import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FacilityCard } from '@/components/sections/FacilityCard'
import { ASSETS } from '@/lib/assets'


export const metadata: Metadata = {
  title: 'Facilities | Ayodhya Academy',
  description: 'Explore our world-class facilities designed for comprehensive student development.',
  keywords: 'Facilities, Infrastructure, Classrooms, Labs, Sports, Ayodhya Academy',
}

const facilitiesWithImages = [
  {
    name: 'Smart Classes',
    description: 'Interactive digital learning with multimedia content and modern teaching aids',
    image: ASSETS.facilities.smartClassroom,
    iconName: 'Monitor' as const,
  },
  {
    name: 'Science Laboratories',
    description: 'Well-equipped labs for Physics, Chemistry, and Biology with modern instruments',
    image: ASSETS.facilities.scienceLab,
    iconName: 'Beaker' as const,
  },
  {
    name: 'Computer Laboratory',
    description: 'Modern computers with high-speed internet and latest software',
    image: ASSETS.facilities.computerLab,
    iconName: 'Cpu' as const,
  },
  {
    name: 'Library',
    description: 'Vast collection of books, journals, and digital resources for research',
    image: ASSETS.facilities.library,
    iconName: 'BookOpen' as const,
  },
  {
    name: 'Sports Facilities',
    description: 'Playground, basketball court, badminton court, and other sports equipment',
    image: ASSETS.facilities.sports,
    iconName: 'Trophy' as const,
  },
  {
    name: 'Music & Dance Studio',
    description: 'Dedicated studios for cultural activities and music education',
    image: ASSETS.facilities.musicStudio,
    iconName: 'Music' as const,
  },
]

export default function FacilitiesPage() {
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
          <h1 className="text-5xl md:text-6xl gradient-text-gold font-bold mb-6">Our Facilities</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            State-of-the-art infrastructure designed for comprehensive student development.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Campus Infrastructure"
            title="World-Class Facilities"
            description="Equipped with modern infrastructure to support comprehensive development"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesWithImages.map((facility) => (
              <FacilityCard
                key={facility.name}
                name={facility.name}
                description={facility.description}
                iconName={facility.iconName}
                image={facility.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="section-container bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Infrastructure"
            title="Campus Highlights"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Facilities</h3>
              <div className="space-y-3">
                {[
                  'Interactive smart classrooms with projectors and digital boards',
                  'Well-ventilated and spacious classrooms with proper lighting',
                  'Physics, Chemistry, and Biology laboratories with modern equipment',
                  'Computer lab with high-speed internet connectivity',
                  'Digital library with e-books and online resources',
                  'Seminar hall for presentations and events',
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      ✓
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Co-Curricular Facilities</h3>
              <div className="space-y-3">
                {[
                  'Playground for various sports and outdoor activities',
                  'Indoor sports complex with badminton and table tennis courts',
                  'Basketball and volleyball courts',
                  'Music and dance studios',
                  'Art and craft room',
                  'Multipurpose gymnasium',
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      ✓
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Additional Services"
            title="Support Services"
            description="Comprehensive support system for student welfare"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Transportation',
                description: 'Safe and reliable bus transport with trained drivers and supervisors',
              },
              {
                title: 'Cafeteria',
                description: 'Hygienic and nutritious food prepared by trained staff',
              },
              {
                title: 'Medical Care',
                description: 'On-campus clinic with first aid and basic medical services',
              },
              {
                title: '24/7 Security',
                description: 'CCTV surveillance and trained security personnel throughout campus',
              },
              {
                title: 'Counseling',
                description: 'Student counselors for academic and personal guidance',
              },
              {
                title: 'Wi-Fi Connectivity',
                description: 'High-speed internet connectivity across the campus',
              },
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-2xl border-2 border-gray-200 hover:border-primary-300 transition-colors space-y-3">
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
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
