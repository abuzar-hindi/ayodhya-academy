'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
  light?: boolean
}

/**
 * SectionTitle Component - Premium Section Headers with Dynamic Highlights
 */
export function SectionTitle({
  title,
  subtitle,
  description,
  centered = true,
  className,
  light = false,
}: SectionTitleProps) {
  
  // Highlight words wrapped in curly braces, e.g., "Excellence in {Education}"
  const renderTitle = (rawTitle: string) => {
    const regex = /\{([^}]+)\}/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = regex.exec(rawTitle)) !== null) {
      if (match.index > lastIndex) {
        parts.push(rawTitle.substring(lastIndex, match.index))
      }
      parts.push(
        <span key={match.index} className="gradient-text-gold inline-block font-extrabold">
          {match[1]}
        </span>
      )
      lastIndex = regex.lastIndex
    }

    if (lastIndex < rawTitle.length) {
      parts.push(rawTitle.substring(lastIndex))
    }

    return parts.length > 0 ? parts : rawTitle
  }

  return (
    <div className={cn('space-y-4 md:space-y-5', centered && 'text-center', className)}>
      {/* Premium Subtitle Badging */}
      {subtitle && (
        <div className={cn('inline-flex items-center gap-3', centered && 'justify-center')}>
          <span className="w-6 h-[1px] bg-accent-500/80"></span>
          <p className="text-accent-500 font-bold text-xs md:text-sm uppercase tracking-[0.25em]">
            {subtitle}
          </p>
          <span className="w-6 h-[1px] bg-accent-500/80"></span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight',
          light ? 'text-white' : 'text-primary-900'
        )}
      >
        {renderTitle(title)}
      </h2>

      {/* Luxury Divider */}
      <div className={cn('flex items-center gap-2 mt-2', centered ? 'justify-center' : 'justify-start')}>
        <div className={cn('h-[2px] w-8 rounded-full', light ? 'bg-white/20' : 'bg-primary-900/10')} />
        <div className="w-2 h-2 rotate-45 bg-accent-500 border border-accent-300" />
        <div className={cn('h-[2px] w-16 rounded-full', light ? 'bg-white/30' : 'bg-primary-900/20')} />
        <div className="w-2 h-2 rotate-45 bg-accent-500 border border-accent-300" />
        <div className={cn('h-[2px] w-8 rounded-full', light ? 'bg-white/20' : 'bg-primary-900/10')} />
      </div>

      {/* Description text */}
      {description && (
        <p
          className={cn(
            'text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed',
            light ? 'text-white/80' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
