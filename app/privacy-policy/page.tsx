import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { SectionTitle } from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ayodhya Academy',
  description: 'Privacy policy for Ayodhya Academy website.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600">
                Ayodhya Academy (&quot;we&quot; or &quot;our&quot;) respects the privacy of our website visitors and students. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect information about you in a variety of ways:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Information you provide directly (name, email, phone number)</li>
                <li>Information automatically collected (cookies, IP address)</li>
                <li>Academic and personal information during admission</li>
                <li>Information from third parties with your consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Use of Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect for purposes including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Processing admissions and registrations</li>
                <li>Communicating with you about admissions and events</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Protecting our rights and preventing fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Protection</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sharing of Information</h2>
              <p className="text-gray-600">
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website or conducting business, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600">
                You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy periodically to reflect changes in our practices. We will notify you of significant changes by updating the date of this policy and providing notice on our website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: ayodhyaacadmy@gmail.com
                <br />
                Phone: +91-9415155790
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">Last Updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
