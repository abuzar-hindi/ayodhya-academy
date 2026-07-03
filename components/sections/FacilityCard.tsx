'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'

interface FacilityCardProps {
  name: string
  description: string
  iconName: keyof typeof Icons
  image?: string
}

/**
 * FacilityCard Component - Premium image-first facility card with floating icons and 3D layering
 */
export function FacilityCard({ name, description, iconName, image }: FacilityCardProps) {
  const Icon = Icons[iconName] as React.ComponentType<{ size: number; className?: string }>
  
  return (
    <motion.div
      className="group relative rounded-3xl overflow-hidden glass-premium border border-slate-200/50 hover:border-accent-500/30 transition-all duration-500 shadow-md hover:shadow-[0_20px_50px_rgba(11,61,145,0.1)] flex flex-col h-full bg-white/95"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dynamic Golden glow behind card */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Container with Zoom effect */}
      {image && (
        <div className="relative w-full h-48 md:h-52 overflow-hidden bg-primary-900/10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient overlay to fade image into text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      )}

      {/* Card Content Section */}
      <div className="p-8 pt-10 relative flex-1 flex flex-col justify-between">
        
        {/* Floating Overlapping Icon Pill */}
        <div className="absolute top-[-24px] left-8 w-12 h-12 bg-primary text-white group-hover:bg-accent group-hover:text-primary-900 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 transition-all duration-300 transform group-hover:rotate-[10deg] group-hover:scale-110">
          {Icon && <Icon size={20} className="stroke-[2.5px]" />}
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Learn More link with moving gold arrow */}
        <div className="pt-6 border-t border-slate-100 mt-6">
          <span className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
            Explore Details
            <motion.span 
              className="text-accent-500 font-extrabold text-sm"
              animate={{ x: [0, 4, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
