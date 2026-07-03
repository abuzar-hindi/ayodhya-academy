'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
  dark?: boolean
  borderTrace?: boolean
  delay?: number
}

/**
 * GlassCard Component - Premium glassmorphism with subtle glow and tracing
 */
export function GlassCard({
  children,
  className,
  hover = true,
  onClick,
  dark = false,
  borderTrace = false,
  delay = 0,
}: GlassCardProps) {
  
  const cardClasses = cn(
    'rounded-3xl p-8 md:p-10 transition-all duration-500 ease-out relative overflow-hidden',
    dark ? 'glass-premium-dark text-white' : 'glass-premium text-slate-800',
    borderTrace && 'border-trace',
    hover && 'hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,61,145,0.12)] hover:border-accent-500/40',
    hover && dark && 'hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]',
    onClick && 'cursor-pointer select-none',
    className
  )

  return (
    <motion.div
      onClick={onClick}
      className={cardClasses}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dynamic Golden Accent Light Dot (Hover active) */}
      {hover && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl pointer-events-none transition-opacity opacity-0 group-hover:opacity-100" />
      )}
      
      {/* Decorative Golden Corner Highlight */}
      <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-accent-500/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-[1px] h-8 bg-gradient-to-b from-accent-500/40 to-transparent pointer-events-none" />

      {children}
    </motion.div>
  )
}
