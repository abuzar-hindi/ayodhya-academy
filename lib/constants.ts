/**
 * School Information Constants
 */
export const SCHOOL_INFO = {
  name: 'Ayodhya Academy',
  motto: 'Excellence in Education',
  affiliation: '2131319',
  schoolCode: '70372',
  address: {
    street: 'Mani Parvat Road, Ranopali',
    city: 'Ayodhya',
    state: 'Uttar Pradesh',
    postal: '224123',
    country: 'India',
  },
  contact: {
    emails: ['70372@cbseshiksha.in', 'ayodhyaacadmy@gmail.com'],
    phones: ['9415155790', '9452305777', '8090239773'],
    website: 'https://www.ayodhyaacademy.com',
  },
  principal: {
    name: 'Mrs. Saumya Achari',
    qualification: 'M.A., B.Ed.',
  },
}

/**
 * Navigation Menu Structure
 */
export const NAVIGATION_MENU = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    submenu: [
      { label: 'About Us', href: '/about' },
      { label: "Principal's Message", href: '/principal-message' },
      { label: 'Management', href: '/management' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    submenu: [
      { label: 'Curriculum', href: '/academics' },
      { label: 'Teaching Methodology', href: '/academics#methodology' },
      { label: 'Examinations', href: '/academics#exams' },
    ],
  },
  { label: 'Admission', href: '/admission' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'News & Notices', href: '/news-notices' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Footer Links
 */
export const FOOTER_LINKS = {
  school: [
    { label: 'About Us', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Faculty', href: '/faculty' },
  ],
  admission: [
    { label: 'Admission Process', href: '/admission' },
    { label: 'Fee Structure', href: '/downloads' },
    { label: 'Registration', href: '/admission#register' },
    { label: 'Documents Required', href: '/admission#documents' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
    { label: 'Downloads', href: '/downloads' },
  ],
  social: [
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  ],
}

/**
 * Color Palette
 */
export const COLORS = {
  primary: '#003d82', // Deep Royal Blue
  secondary: '#ffffff', // White
  accent: '#d4af37', // Golden
  skyBlue: '#0ea5e9', // Light Sky Blue
  success: '#10b981', // Green
  danger: '#ef5350', // Soft Red
  background: '#f9fafb', // Very light gray
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
}

/**
 * Facilities Data
 */
export const FACILITIES = [
  {
    id: 'smart-classes',
    name: 'Smart Classes',
    description: 'Interactive digital learning with multimedia content',
    icon: 'Monitor',
  },
  {
    id: 'science-lab',
    name: 'Science Laboratories',
    description: 'Well-equipped labs for Physics, Chemistry, and Biology',
    icon: 'Beaker',
  },
  {
    id: 'computer-lab',
    name: 'Computer Laboratory',
    description: 'Modern computers with high-speed internet',
    icon: 'Cpu',
  },
  {
    id: 'library',
    name: 'Library',
    description: 'Vast collection of books and digital resources',
    icon: 'BookOpen',
  },
  {
    id: 'sports',
    name: 'Sports Facilities',
    description: 'Playground, basketball court, badminton court',
    icon: 'Trophy',
  },
  {
    id: 'music-dance',
    name: 'Music & Dance',
    description: 'Dedicated studios for cultural activities',
    icon: 'Music',
  },
  {
    id: 'transport',
    name: 'Transport',
    description: 'Safe and reliable transportation network',
    icon: 'Bus',
  },
  {
    id: 'medical',
    name: 'Medical Facility',
    description: 'On-campus medical clinic and first aid',
    icon: 'Heart',
  },
  {
    id: 'security',
    name: 'Security',
    description: '24/7 CCTV surveillance and security personnel',
    icon: 'Shield',
  },
  {
    id: 'cafeteria',
    name: 'Cafeteria',
    description: 'Nutritious and hygienic food for students',
    icon: 'Utensils',
  },
]

/**
 * Why Choose Us Statistics
 */
export const STATISTICS = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Expert Teachers', value: '50+' },
  { label: 'Students Enrolled', value: '800+' },
  { label: 'Awards Won', value: '25+' },
]

/**
 * Academic Classes
 */
export const CLASSES = [
  'Pre-Primary (Nursery)',
  'Pre-Primary (KG)',
  'Primary (I-V)',
  'Middle (VI-VIII)',
  'Secondary (IX-X)',
  'Senior Secondary (XI-XII)',
]

/**
 * Gallery Categories
 */
export const GALLERY_CATEGORIES = [
  'All',
  'Campus',
  'Sports',
  'Events',
  'Classrooms',
  'Labs',
  'Annual Day',
]
