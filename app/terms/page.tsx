import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Ayodhya Academy',
  description: 'Terms and conditions for using Ayodhya Academy website and services.',
}

export default function TermsPage() {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold">Terms & Conditions</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Ayodhya Academy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600">
              The materials on Ayodhya Academy's website are provided on an 'as is' basis. Ayodhya Academy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Limitations</h2>
            <p className="text-gray-600">
              In no event shall Ayodhya Academy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ayodhya Academy's website, even if Ayodhya Academy or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-600">
              The materials appearing on Ayodhya Academy's website could include technical, typographical, or photographic errors. Ayodhya Academy does not warrant that any of the materials on its website are accurate, complete, or current. Ayodhya Academy may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Links</h2>
            <p className="text-gray-600">
              Ayodhya Academy has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ayodhya Academy of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Modifications</h2>
            <p className="text-gray-600">
              Ayodhya Academy may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-600">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Admission Terms</h2>
            <p className="text-gray-600 mb-4">When registering for admission:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>All information provided must be accurate and truthful</li>
              <li>Students must adhere to school discipline and code of conduct</li>
              <li>The school reserves the right to deny or revoke admission</li>
              <li>Fees must be paid as per the agreed schedule</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
