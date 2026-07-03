'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost' | 'glass'
type ButtonSize = 'sm' | 'md' | 'lg'

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  icon?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-900 border border-primary-700/20 shadow-[0_4px_15px_rgba(11,61,145,0.25)] hover:shadow-[0_8px_25px_rgba(11,61,145,0.4)] hover:-translate-y-[2px] shimmer-btn-effect',
  accent: 'bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600 text-primary-900 hover:from-accent-600 hover:to-accent-700 border border-accent-300/30 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] hover:-translate-y-[2px] shimmer-btn-effect font-bold',
  secondary: 'bg-white text-primary-900 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]',
  outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5 hover:border-primary-800 hover:-translate-y-[2px]',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] hover:-translate-y-[2px]',
  ghost: 'text-primary hover:bg-primary-50 hover:text-primary-900 transition-colors',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-wider uppercase',
  md: 'px-7 py-3.5 text-sm tracking-wide',
  lg: 'px-9 py-4 text-base tracking-wide',
}

/**
 * CTAButton Component - Luxury Call-to-action button with premium hover animations and states
 */
export function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  className,
  disabled,
  ...props
}: CTAButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={cn(
        'rounded-xl font-bold transition-all duration-300 ease-out',
        'flex items-center justify-center gap-2 cursor-pointer select-none active:scale-[0.98]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {icon && !loading && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
      
      <span>{children}</span>
    </button>
  )
}
