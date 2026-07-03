'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  label: string
  value: string
  icon?: React.ReactNode
  delay?: number
}

/**
 * StatsCard Component - Premium animated statistics module
 */
export function StatsCard({ label, value, icon, delay = 0 }: StatsCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Extract number and text suffix (e.g., "15+" -> 15 and "+")
    const numStr = value.replace(/\D/g, '')
    const suffix = value.replace(/[0-9]/g, '')
    const num = parseInt(numStr, 10)

    if (isNaN(num)) {
      setDisplayValue(value)
      return
    }

    let start = 0
    const duration = 1200 // total animation time in ms
    const steps = 40
    const stepTime = duration / steps
    const increment = num / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= num) {
        setDisplayValue(num + suffix)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(start) + suffix)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      className="glass-premium rounded-3xl p-8 text-center space-y-4 hover:shadow-[0_15px_45px_rgba(212,175,55,0.1)] hover:-translate-y-1.5 transition-all duration-500 bg-white/80 border border-accent-500/10 flex flex-col justify-center items-center relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dynamic Background Circle Accent */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-500/5 rounded-full blur-xl pointer-events-none" />

      {icon && (
        <div className="p-4 bg-primary-50 rounded-2xl text-primary border border-primary-100/50 mb-2">
          {icon}
        </div>
      )}
      
      <div className="space-y-2">
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text-gold drop-shadow-sm font-heading">
          {displayValue}
        </h3>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">
          {label}
        </p>
      </div>
    </motion.div>
  )
}
