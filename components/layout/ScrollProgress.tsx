'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * ScrollProgress Component - Progress bar at top of page
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-sky-500 z-50"
      style={{ width: `${progress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.2 }}
    />
  )
}
