'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SCHOOL_INFO } from '@/lib/constants'

/**
 * FloatingCallButton Component - Floating call to action button
 */
export function FloatingCallButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 left-0 flex flex-col gap-2 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {SCHOOL_INFO.contact.phones.map((phone, index) => (
              <motion.a
                key={phone}
                href={`tel:+91${phone}`}
                className="bg-success-500 hover:bg-success-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-lg whitespace-nowrap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Phone size={16} />
                {phone}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-success-500 hover:bg-success-600 rounded-full flex items-center justify-center text-white shadow-xl transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        aria-label="Call us"
      >
        <Phone size={24} />
      </motion.button>
    </div>
  )
}
