import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'

export const metadata: Metadata = {
  title: 'Management | Ayodhya Academy',
  description: 'Meet the management team of Ayodhya Academy committed to educational excellence.',
  keywords: 'Management, Leadership, Administration, Ayodhya Academy',
}

const managementTeam = [
  {
    name: 'Mrs. Saumya Achari',
    position: 'Principal',
    qualification: 'M.A., B.Ed.',
    responsibility: 'Overall management and academic leadership',
  },
  {
    name: 'Mr. Rajesh Kumar',
    position: 'Vice Principal (Academics)',
    qualification: 'M.Ed., M.A.',
    responsibility: 'Academic program coordination and curriculum',
  },
  {
    name: 'Mrs. Priya Singh',
    position: 'Vice Principal (Administration)',
    qualification: 'M.Com., B.Ed.',
    responsibility: 'Administrative affairs and student welfare',
  },
  {
    name: 'Mr. Arun Sharma',
    position: 'Office Manager',
    qualification: 'B.A.',
    responsibility: 'Office operations and records management',
  },
  {
    name: 'Mrs. Divya Mishra',
    position: 'Academic Coordinator',
    qualification: 'M.A., B.Ed.',
    responsibility: 'Curriculum implementation and teacher coordination',
  },
  {
    name: 'Mr. Vikram Patel',
    position: 'Finance Officer',
    qualification: 'B.Com., CA',
    responsibility: 'Financial management and accounting',
  },
]

const committees = [
  {
    title: 'Management Committee',
    description: 'Oversees overall policy and strategic direction of the school',
    members: ['Principal', 'Vice Principals', 'Finance Officer', 'Representatives from Board'],
  },
  {
    title: 'Academic Committee',
    description: 'Responsible for curriculum development and academic standards',
    members: ['Vice Principal (Academics)', 'Department Heads', 'Senior Teachers'],
  },
  {
    title: 'Discipline Committee',
    description: 'Ensures discipline and conducts disciplinary proceedings',
    members: ['Principal', 'Vice Principals', 'Class Advisors', 'Counselor'],
  },
  {
    title: 'Parent-Teacher Association',
    description: 'Facilitates parent-teacher cooperation and school development',
    members: ['Principal', 'Teachers', 'Parent Representatives'],
  },
]

export default function ManagementPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Management</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Meet the dedicated professionals leading Ayodhya Academy towards excellence.
          </p>
        </div>
      </section>

      {/* Management Team */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Leadership"
            title="Management Team"
            description="Experienced administrators committed to educational excellence"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <GlassCard key={index} className="text-center space-y-4">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-200 to-sky-200 rounded-full flex items-center justify-center text-3xl font-bold text-primary-600">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-accent-500 font-semibold mb-1">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.qualification}</p>
                </div>

                {/* Responsibility */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-sm">{member.responsibility}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="section-container bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Governance"
            title="Administrative Committees"
            description="Committees ensuring smooth functioning and policy implementation"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <GlassCard key={index} className="space-y-4 p-6">
                <h3 className="text-xl font-bold text-gray-900">{committee.title}</h3>
                <p className="text-gray-600">{committee.description}</p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Members:</p>
                  <ul className="space-y-2">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-primary-500 font-bold">•</span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Structure"
            title="Organizational Hierarchy"
            className="mb-16"
          />

          <GlassCard className="p-8 space-y-8">
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-primary-100 rounded-lg text-primary-600 font-bold mb-4">
                Principal
              </div>
              <p className="text-gray-600">Overall management and academic leadership</p>
            </div>

            <div className="flex justify-center">
              <div className="w-1 h-8 bg-gray-300" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Vice Principal (Academics)', items: ['Academic Coordinator', 'Department Heads', 'Senior Teachers'] },
                { title: 'Vice Principal (Admin)', items: ['Office Manager', 'Counselor', 'Administrative Staff'] },
                { title: 'Finance Officer', items: ['Accountant', 'Finance Assistant', 'Billing Staff'] },
              ].map((dept, index) => (
                <div key={index}>
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-accent-100 rounded-lg text-accent-700 font-semibold mb-2">
                      {dept.title}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {dept.items.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded-lg">{item}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
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
