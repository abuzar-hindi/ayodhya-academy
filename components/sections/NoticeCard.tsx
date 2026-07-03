'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Bell, FileText, CalendarClock } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface NoticeCardProps {
  title: string
  description: string
  date: Date | string
  category: 'news' | 'notice' | 'event'
  link?: string
  delay?: number
}

const categoryConfigs = {
  news: {
    label: 'News Update',
    bg: 'bg-blue-50 text-blue-700 border-blue-200/50',
    icon: Bell
  },
  notice: {
    label: 'Academic Notice',
    bg: 'bg-amber-50 text-amber-700 border-amber-200/50',
    icon: FileText
  },
  event: {
    label: 'Campus Event',
    bg: 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
    icon: CalendarClock
  },
}

/**
 * NoticeCard Component - Elite news and notices feed module
 */
export function NoticeCard({ title, description, date, category, link, delay = 0 }: NoticeCardProps) {
  const config = categoryConfigs[category]
  const Icon = config.icon

  return (
    <motion.div
      className="group bg-white/90 rounded-3xl p-8 border border-slate-200/60 hover:border-accent-500/30 hover:shadow-[0_15px_45px_rgba(11,61,145,0.08)] transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Accent Corner Glow */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-500/5 to-transparent pointer-events-none" />

      <div>
        {/* Category Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border',
            config.bg
          )}>
            <Icon size={12} className="stroke-[2.5px]" />
            {config.label}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
            <Calendar size={12} className="text-slate-400" />
            {formatDate(date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-6 border-t border-slate-100/80 mt-auto">
        <a 
          href={link || '/news-notices'} 
          className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider group-hover:gap-3.5 transition-all"
        >
          <span>Read Announcement</span>
          <ArrowRight size={14} className="text-accent stroke-[2.5px]" />
        </a>
      </div>
    </motion.div>
  )
}
