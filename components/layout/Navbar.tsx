'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, Search, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION_MENU, SCHOOL_INFO } from '@/lib/constants'
import { CTAButton } from '@/components/ui/CTAButton'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Information Bar */}
      <div
        className={cn(
          "w-full bg-[#071B3A] text-white/90 text-xs py-2 px-4 md:px-8 border-b border-white/5 transition-all duration-500 overflow-hidden",
          scrolled ? "h-0 py-0 border-none opacity-0" : "h-auto opacity-100"
        )}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Contacts */}
          <div className="flex items-center gap-6">
            <a href={`tel:+91${SCHOOL_INFO.contact.phones[0]}`} className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
              <Phone size={12} className="text-accent-500" />
              <span>+91 {SCHOOL_INFO.contact.phones[0]}</span>
            </a>
            <a href={`mailto:${SCHOOL_INFO.contact.emails[1]}`} className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
              <Mail size={12} className="text-accent-500" />
              <span>{SCHOOL_INFO.contact.emails[1]}</span>
            </a>
          </div>

          {/* Affiliation & Admissions Badges */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full text-[10px] tracking-wide font-medium border border-white/15">
              <Award size={10} className="text-accent-400" />
              CBSE Affiliated No. {SCHOOL_INFO.affiliation}
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
            </span>
            <span className="text-accent-400 font-bold uppercase tracking-wider text-[10px]">
              Admissions Open 2025-26
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <motion.nav
        className={cn(
          'w-full px-4 md:px-8 py-4 transition-all duration-500',
          scrolled
            ? 'glass-premium shadow-lg py-3 border-b border-accent-500/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Premium Logo Design */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg border border-accent-500/25 shadow-[0_4px_10px_rgba(11,61,145,0.2)] group-hover:border-accent-500 group-hover:shadow-[0_4px_15px_rgba(212,175,55,0.35)] transition-all duration-300">
              <span className="gradient-text-gold">AA</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-base font-extrabold tracking-tight leading-none transition-colors",
                scrolled ? "text-primary-900" : "text-white"
              )}>
                Ayodhya Academy
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION_MENU.map((item) => {
              const isActive = pathname === item.href
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 font-semibold text-sm transition-all flex items-center gap-1 rounded-lg group-hover:bg-primary-900/5",
                      scrolled
                        ? (isActive ? "text-primary" : "text-slate-700 hover:text-primary")
                        : (isActive ? "text-accent-400" : "text-white/95 hover:text-white")
                    )}
                  >
                    <span>{item.label}</span>
                    {item.submenu && <ChevronDown size={14} className="opacity-80 group-hover:rotate-180 transition-transform duration-300" />}

                    {/* Animated Underline */}
                    {isActive && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Submenu Dropdown Container */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 w-56 pt-2 pointer-events-auto"
                      >
                        <div className="glass-premium rounded-2xl p-2 border border-accent-500/15 shadow-xl bg-white/95">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="block px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-primary hover:bg-primary-50 rounded-xl transition-all"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* CTA & Menu triggers */}
          <div className="flex items-center gap-3">
            {/* Search Icon Decorator */}
            <button
              className={cn(
                "p-2 rounded-xl transition-colors hover:bg-white/10 hidden md:block",
                scrolled ? "text-primary" : "text-white/80 hover:text-white"
              )}
              aria-label="Search website"
            >
              <Search size={18} />
            </button>

            <Link href="/admission" className="hidden sm:block">
              <CTAButton size="sm" variant={scrolled ? "primary" : "accent"}>
                Apply Now
              </CTAButton>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 rounded-xl transition-all cursor-pointer",
                scrolled ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-slate-200/50 space-y-1 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl overflow-hidden"
            >
              {NAVIGATION_MENU.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                    className="w-full text-left px-4 py-3 text-slate-800 hover:bg-slate-50 hover:text-primary rounded-xl font-bold flex items-center justify-between text-sm"
                  >
                    <span>{item.label}</span>
                    {item.submenu && <ChevronDown size={16} className={cn('transition-transform duration-300', activeSubmenu === item.label && 'rotate-180 text-accent-500')} />}
                  </button>

                  {/* Mobile Submenu drawer */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6 space-y-1 mt-1 bg-slate-50/50 rounded-xl"
                      >
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
                            onClick={() => {
                              setIsOpen(false)
                              setActiveSubmenu(null)
                            }}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <Link href="/admission" className="w-full" onClick={() => setIsOpen(false)}>
                  <CTAButton fullWidth variant="primary" size="sm">
                    Admission Process
                  </CTAButton>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
