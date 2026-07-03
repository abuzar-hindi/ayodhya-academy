'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, ChevronDown, Award, Calendar, ArrowRight, ShieldCheck } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import { SCHOOL_INFO } from '@/lib/constants'
import { ASSETS } from '@/lib/assets'

export function Hero() {
  const [videoModal, setVideoModal] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#071B3A] pt-24">
      {/* Mesh gradients for luxury background feel */}
      <div className="absolute inset-0 z-0 mesh-gradient-bg opacity-75" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#071B3A]/30 to-[#071B3A]/90 z-0" />

      {/* Decorative Golden & Sky Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Admissions Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-ping" />
                Admissions Open 2025 - 2026
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Excellence in <br className="hidden sm:inline" />
              <span className="gradient-text-gold">Education</span> & <br className="hidden sm:inline"/>
              Character
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl"
            >
              Nurturing young minds in Ranopali, Ayodhya. We offer an international education curriculum under CBSE affiliation that blends modern science with strong moral values.
            </motion.p>

            {/* Stats row inside Hero */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
            >
              {[
                { number: '15+', label: 'Years Legacy' },
                { number: '50+', label: 'Faculty Expert' },
                { number: '800+', label: 'Active Students' },
                { number: '100%', label: 'Results' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left sm:border-r border-white/10 last:border-none sm:pr-4 sm:last:pr-0">
                  <div className="text-2xl md:text-3xl font-extrabold text-accent">{stat.number}</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="/admission" className="sm:flex-none">
                <CTAButton variant="accent" size="lg" className="w-full sm:w-auto" icon={<ArrowRight size={16} />}>
                  Apply Online
                </CTAButton>
              </Link>
              <button 
                onClick={() => setVideoModal(true)}
                className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/20 backdrop-blur-md hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Play size={16} className="fill-white group-hover:fill-accent" />
                <span>Virtual Campus Tour</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Visual Composition */}
          <motion.div 
            className="lg:col-span-5 relative flex items-center justify-center py-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {/* Overlay stack of premium images */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] md:aspect-[3/4]">
              {/* Back Image (Campus) */}
              <div className="absolute top-0 right-4 w-[85%] h-[85%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src={ASSETS.hero.main} 
                  alt="Ayodhya Academy Campus" 
                  fill 
                  className="object-cover brightness-90 hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/60 via-transparent to-transparent" />
              </div>

              {/* Front Image (Smart Classes) */}
              <div className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-3xl overflow-hidden border-2 border-accent-500/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <Image 
                  src={ASSETS.facilities.smartClassroom} 
                  alt="Digital Classroom" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              {/* CBSE Affiliation Badge */}
              <motion.div 
                className="absolute top-1/4 -left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-accent-300 shadow-xl flex items-center gap-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-2 bg-primary-100 rounded-xl text-primary">
                  <Award size={20} className="stroke-[2.5px]" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-primary leading-none mb-0.5">CBSE Affiliation</h4>
                  <span className="text-[10px] text-slate-500 leading-none">Code {SCHOOL_INFO.affiliation}</span>
                </div>
              </motion.div>

              {/* Security Shield Badge */}
              <motion.div 
                className="absolute bottom-1/4 -right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-accent-300 shadow-xl flex items-center gap-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-2 bg-emerald-100 rounded-xl text-emerald-600">
                  <ShieldCheck size={20} className="stroke-[2.5px]" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800 leading-none mb-0.5">Safe Campus</h4>
                  <span className="text-[10px] text-slate-500 leading-none">CCTV & Guards</span>
                </div>
              </motion.div>

              {/* Golden Rotating frame accent */}
              <motion.div 
                className="absolute -inset-4 border border-accent/20 rounded-[40px] pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Explore indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div 
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => {
            window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })
          }}
        >
          <span className="text-white/40 text-[9px] uppercase tracking-[0.25em] font-semibold">Scroll to Explore</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-accent rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Video Modal Popup */}
      {videoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <button 
              onClick={() => setVideoModal(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors z-10"
            >
              <X size={20} />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
