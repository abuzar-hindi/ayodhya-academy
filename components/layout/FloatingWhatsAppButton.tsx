'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SCHOOL_INFO } from '@/lib/constants'

/**
 * FloatingWhatsAppButton Component - WhatsApp CTA button
 */
export function FloatingWhatsAppButton() {
  const whatsappLink = `https://wa.me/91${SCHOOL_INFO.contact.phones[0]}?text=Hi%20Ayodhya%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20admissions.`

  return (
    <motion.div
      className="fixed bottom-24 right-6 z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center text-white shadow-xl transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.562 0-3.051-.474-4.315-1.372-.6-.398-1.162-.927-1.563-1.54-.401-.613-.659-1.341-.659-2.088 0-3.097 2.52-5.618 5.618-5.618 1.502 0 2.929.588 3.998 1.656 1.069 1.067 1.657 2.495 1.657 3.998 0 3.098-2.52 5.618-5.618 5.618m5.618-11.236C12.306 0 6.684 5.622 6.684 12.36c0 2.34.703 4.524 1.908 6.356l-2.03 6.104 6.41-2.03c1.913 1.175 4.14 1.851 6.522 1.851 6.738 0 12.36-5.622 12.36-12.36S19.098 0 12.36 0z" />
        </svg>
      </Link>
    </motion.div>
  )
}
