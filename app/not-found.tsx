import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <main className="bg-background">
      <Navbar />

      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-lg">
          {/* 404 Text */}
          <div className="space-y-2">
            <div className="text-9xl font-bold text-primary-500">404</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Page Not Found</h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/">
              <CTAButton variant="primary" size="lg">
                Go to Home
              </CTAButton>
            </Link>
            <Link href="/contact">
              <CTAButton variant="outline" size="lg">
                Contact Us
              </CTAButton>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-gray-200 mt-8">
            <p className="text-sm text-gray-600 mb-4">Popular Pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Admission', href: '/admission' },
                { label: 'Facilities', href: '/facilities' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-primary-500 hover:bg-primary-50 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
