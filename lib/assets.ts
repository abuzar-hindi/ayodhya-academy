/**
 * Assets Configuration File
 * 
 * This file contains all image paths used throughout the website.
 * To change any image, simply replace the image file in the public/images folder
 * and keep the filename the same.
 * 
 * Image Directory Structure:
 * public/images/
 *   ├── hero/           (Hero section images)
 *   ├── facilities/     (Facility images - labs, classrooms, sports, etc)
 *   ├── gallery/        (Gallery and campus photos)
 *   ├── team/           (Team member photos)
 *   ├── about/          (About page images)
 *   ├── events/         (Event and celebration images)
 *   └── campus/         (Campus overview and general images)
 */

export const ASSETS = {
  // Hero Section
  hero: {
    main: '/images/hero/hero-main.png',
  },

  // Facilities
  facilities: {
    smartClassroom: '/images/facilities/smart-classroom.png',
    scienceLab: '/images/facilities/science-lab.png',
    computerLab: '/images/facilities/computer-lab.png',
    library: '/images/facilities/library.png',
    musicStudio: '/images/facilities/music-studio.png',
    sports: '/images/facilities/sports.png',
  },

  // Team
  team: {
    principal: '/images/team/principal.png',
  },

  // Campus
  campus: {
    overview: '/images/campus/overview.png',
  },

  // Gallery
  gallery: {
    classroom: '/images/gallery/classroom-1.png',
  },

  // Events
  events: {
    annualDay: '/images/events/annual-day.png',
  },

  // About
  about: {
    schoolHistory: '/images/about/school-history.png',
  },
} as const

/**
 * How to Use:
 * 
 * 1. Import the ASSETS object in your component:
 *    import { ASSETS } from '@/lib/assets'
 * 
 * 2. Use it in your component:
 *    <Image src={ASSETS.hero.main} alt="Hero" />
 * 
 * 3. To add new images:
 *    - Add the image file to public/images/[category]/
 *    - Add the path to this ASSETS object
 *    - Import and use in your component
 * 
 * 4. To replace images:
 *    - Simply replace the image file in public/images/[category]/
 *    - Keep the filename the same
 *    - No code changes needed!
 */
