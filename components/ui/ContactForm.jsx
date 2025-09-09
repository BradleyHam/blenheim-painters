'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState(null) // 'success', 'error', or null

  // Reset form status after 5 seconds of success
  useEffect(() => {
    let timer;
    if (formStatus === 'success') {
      timer = setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [formStatus]);

  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Phone validation (optional but validate format if provided)
    if (formData.phone && !/^[\d\s\+\-\(\)]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when field is edited
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: undefined }))
    }
    
    // Clear form status when user starts editing again
    if (formStatus) {
      setFormStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Validate form
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }
    
    try {
      setIsSubmitting(true)
      setFormStatus(null)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setErrors({})
      setFormStatus('success')
      
      toast.success('Your message has been sent! We will get back to you soon.')
    } catch (error) {
      console.error('Submission error:', error)
      setFormStatus('error')
      toast.error(error.message || 'Failed to send your message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {formStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
          <h3 className="text-green-700 font-medium text-sm">Message Sent Successfully!</h3>
          <p className="text-green-600 text-xs">Thank you for your inquiry. We'll get back to you soon.</p>
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <h3 className="text-red-700 font-medium text-sm">Something went wrong</h3>
          <p className="text-red-600 text-xs">We couldn't send your message. Please try again or contact us directly.</p>
        </div>
      )}
    
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              onClick={handleInputClick}
              className={`flex h-10 w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
              placeholder="John Smith"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onClick={handleInputClick}
              className={`flex h-10 w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onClick={handleInputClick}
            className={`flex h-10 w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-200'} bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
            placeholder="+64 21 632 938"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Project Details (Optional)
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            onClick={handleInputClick}
            className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Please describe your project, including size, current colors, desired outcome, etc."
          />
        </div>

        <div className="text-xs text-gray-500 mt-1">
          <p>Fields marked with <span className="text-red-500">*</span> are required</p>
        </div>

        <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white py-4 text-base mt-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <Loader className="animate-spin mr-2 h-5 w-5" />
              Sending...
            </span>
          ) : (
            'Submit Inquiry'
          )}
        </Button>
      </form>
    </div>
  )
}