import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GALLERY_CATEGORIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gallery | Ayodhya Academy',
  description: 'View photos and images from Ayodhya Academy campus, events, and activities.',
  keywords: 'Gallery, Photos, Events, Campus, Ayodhya Academy',
}

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1427504494785-cddc0c3a8bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Campus', title: 'School Building' },
  { url: 'https://images.unsplash.com/photo-1516321318432-a04e4d1b3f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Labs', title: 'Science Lab' },
  { url: 'https://images.unsplash.com/photo-1516321259882-2f3f5c67b8f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Classrooms', title: 'Classroom' },
  { url: 'https://images.unsplash.com/photo-1507842160716-1e5c4c4cd1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Campus', title: 'Library' },
  { url: 'https://images.unsplash.com/photo-1504384308090-cb894fdbb938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Sports', title: 'Sports Ground' },
  { url: 'https://images.unsplash.com/photo-1491684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Events', title: 'Annual Day' },
  { url: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Events', title: 'Sports Day' },
  { url: 'https://images.unsplash.com/photo-1533928298208-27ff66555d39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Campus', title: 'Playground' },
  { url: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Labs', title: 'Computer Lab' },
]

export default function GalleryPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-gold">Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore moments from Ayodhya Academy - our campus, events, and activities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Moments"
            title="Campus Gallery"
            description="A visual glimpse into life at Ayodhya Academy"
            className="mb-16"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${category === 'All'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-accent-400 text-sm font-semibold">{image.category}</p>
                    <h3 className="text-white text-lg font-bold">{image.title}</h3>
                  </div>
                </div>
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
