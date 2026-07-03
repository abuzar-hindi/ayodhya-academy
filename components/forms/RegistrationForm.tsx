'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { CTAButton } from '@/components/ui/CTAButton'
import { CLASSES } from '@/lib/constants'
import { User, Shield, Phone, Mail, Calendar, School, Navigation, MessageSquare, GraduationCap } from 'lucide-react'

interface RegistrationFormData {
  studentName: string
  fatherName: string
  motherName: string
  dob: string
  gender: string
  class: string
  address: string
  email: string
  phone: string
  previousSchool: string
  transport: string
  message: string
}

/**
 * RegistrationForm Component - Premium admissions form with luxurious inputs and status animations
 */
export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormData>({
    defaultValues: {
      studentName: '',
      fatherName: '',
      motherName: '',
      dob: '',
      gender: '',
      class: '',
      address: '',
      email: '',
      phone: '',
      previousSchool: '',
      transport: 'No',
      message: '',
    },
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: RegistrationFormData) => {
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Registration Submitted Successfully!', {
      description: 'Your application has been received. Our Admissions Board will reach out to you within 48 hours.',
      duration: 5000,
    })

    reset()
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      
      {/* SECTION 1: Student Particulars */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/65">
          <div className="p-1.5 bg-primary-50 rounded-lg text-primary">
            <GraduationCap size={16} />
          </div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest text-slate-800">
            Student Particulars
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Student Full Name <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 pointer-events-none">
                <User size={16} />
              </span>
              <input
                type="text"
                {...register('studentName', { required: 'Student name is required' })}
                placeholder="Enter full legal name"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
              />
            </div>
            {errors.studentName && (
              <p className="text-red-500 text-xs font-semibold">{errors.studentName.message}</p>
            )}
          </div>

          {/* Father's Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Father / Guardian Name <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 pointer-events-none">
                <User size={16} />
              </span>
              <input
                type="text"
                {...register('fatherName', { required: "Father's name is required" })}
                placeholder="Father's full name"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
              />
            </div>
            {errors.fatherName && (
              <p className="text-red-500 text-xs font-semibold">{errors.fatherName.message}</p>
            )}
          </div>

          {/* Mother's Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Mother Name <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 pointer-events-none">
                <User size={16} />
              </span>
              <input
                type="text"
                {...register('motherName', { required: "Mother's name is required" })}
                placeholder="Mother's full name"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
              />
            </div>
            {errors.motherName && (
              <p className="text-red-500 text-xs font-semibold">{errors.motherName.message}</p>
            )}
          </div>

          {/* DOB */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Date of Birth <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 pointer-events-none">
                <Calendar size={16} />
              </span>
              <input
                type="date"
                {...register('dob', { required: 'Date of birth is required' })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
              />
            </div>
            {errors.dob && (
              <p className="text-red-500 text-xs font-semibold">{errors.dob.message}</p>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Gender <span className="text-accent">*</span>
            </label>
            <select
              {...register('gender', { required: 'Gender is required' })}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-850 cursor-pointer"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs font-semibold">{errors.gender.message}</p>
            )}
          </div>

          {/* Class Offered */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Proposed Class <span className="text-accent">*</span>
            </label>
            <select
              {...register('class', { required: 'Class is required' })}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-850 cursor-pointer"
            >
              <option value="">Select Class level</option>
              {CLASSES.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
            {errors.class && (
              <p className="text-red-500 text-xs font-semibold">{errors.class.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 2: Contact Details */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/65">
          <div className="p-1.5 bg-primary-50 rounded-lg text-primary">
            <Shield size={16} />
          </div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest text-slate-800">
            Contact & Location Details
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Email Address <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 pointer-events-none">
                <Mail size={16} />
              </span>
              <input
                type="email"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address format',
                  },
                })}
                placeholder="your@email.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs font-semibold">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Mobile Contact <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 pointer-events-none">
                <Phone size={16} />
              </span>
              <input
                type="tel"
                {...register('phone', {
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit number',
                  },
                })}
                placeholder="10-digit mobile number"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs font-semibold">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Residential Address <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <span className="absolute top-4 left-4 text-slate-400 pointer-events-none">
              <Navigation size={16} />
            </span>
            <textarea
              {...register('address', { required: 'Permanent address is required' })}
              placeholder="Enter complete current residential address"
              rows={3}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800 resize-none"
            />
          </div>
          {errors.address && (
            <p className="text-red-500 text-xs font-semibold">{errors.address.message}</p>
          )}
        </div>
      </div>

      {/* SECTION 3: Academic History */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/65">
          <div className="p-1.5 bg-primary-50 rounded-lg text-primary">
            <School size={16} />
          </div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest text-slate-800">
            Educational Background
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous School */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Previous Institution Attended
            </label>
            <input
              type="text"
              {...register('previousSchool')}
              placeholder="Enter name and city of previous school"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800"
            />
          </div>

          {/* Transport */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              School Bus Transport Facility Required?
            </label>
            <select
              {...register('transport')}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800 cursor-pointer"
            >
              <option value="No">No, self arrangement</option>
              <option value="Yes">Yes, require transport</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Parent Remarks / Special Considerations
          </label>
          <div className="relative">
            <span className="absolute top-4 left-4 text-slate-400 pointer-events-none">
              <MessageSquare size={16} />
            </span>
            <textarea
              {...register('message')}
              placeholder="State any specific health condition, siblings, or special educational requirements"
              rows={4}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/25 focus:outline-none transition-all text-sm font-medium text-slate-800 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <CTAButton type="submit" variant="accent" fullWidth loading={loading} size="lg">
          Submit Admissions Register Form
        </CTAButton>
        <p className="text-center text-[10px] text-slate-400 mt-3 tracking-wide">
          By submitting this form, you certify that all information supplied is legally correct and complete.
        </p>
      </div>
    </form>
  )
}
