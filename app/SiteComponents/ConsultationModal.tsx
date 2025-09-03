'use client'
import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        additionalInfo: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after a delay and close modal
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', service: '', additionalInfo: '' });
            onClose();
        }, 2000);
    };

    const services = [
        'Interior Painting',
        'Exterior Painting',
        'Both Interior & Exterior',
        'Commercial Painting',
        'Other'
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    
                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-lg bg-background rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Subtle texture overlay */}
                        <div 
                            className="absolute inset-0 opacity-5 pointer-events-none"
                            style={{
                                backgroundImage: "url('/images/dot-grid.png')",
                                backgroundSize: '220px 220px',
                                backgroundRepeat: 'repeat',
                            }}
                        />
                        
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg text-text-heading hover:text-text-paragraph transition-all duration-200"
                        >
                            <IoClose size={20} />
                        </button>

                        <div className="p-6 sm:p-8 relative z-10">
                            {!isSubmitted ? (
                                <>
                                    {/* Header */}
                                    <div className="text-center mb-6">
                                        <h2 className="text-xl sm:text-2xl font-semibold text-text-heading mb-3">
                                            Book a Consultation
                                        </h2>
                                        <p className="text-text-paragraph text-sm leading-relaxed">
                                            A member of our team will be in touch within 24 hours
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-text-heading mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors duration-200 text-gray-900 placeholder-gray-500"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors duration-200 text-gray-900 placeholder-gray-500"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        {/* Service */}
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-text-heading mb-2">
                                                Service Required *
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors duration-200 text-gray-900"
                                            >
                                                <option value="">Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Additional Info */}
                                        <div>
                                            <label htmlFor="additionalInfo" className="block text-sm font-medium text-text-heading mb-2">
                                                Additional Information
                                                <span className="text-text-paragraph font-normal ml-1">(optional)</span>
                                            </label>
                                            <textarea
                                                id="additionalInfo"
                                                name="additionalInfo"
                                                value={formData.additionalInfo}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors duration-200 text-gray-900 placeholder-gray-500 resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full group relative isolate inline-flex items-center justify-center gap-3 rounded-lg font-semibold tracking-wide text-sm transition duration-300 ease-in-out px-6 py-4 shadow-[0_8px_24px_rgba(16,24,40,0.18)] hover:shadow-[0_12px_28px_rgba(16,24,40,0.22)] hover:-translate-y-0.5 active:translate-y-0 bg-cta text-cta-foreground"
                                            style={{
                                                backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(0,0,0,0.12))',
                                            }}
                                        >
                                            <span
                                                className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/15"
                                                style={{
                                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.08)'
                                                }}
                                            />
                                            <span className="relative z-10">
                                                Request Consultation
                                            </span>
                                            <span
                                                className="pointer-events-none absolute -right-6 top-0 h-full w-16 -skew-x-12 bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
                                            />
                                        </button>
                                    </form>
                                </>
                            ) : (
                                /* Success Message */
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-cta-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-text-heading mb-2">
                                        Thank You!
                                    </h3>
                                    <p className="text-text-paragraph">
                                        Your consultation request has been submitted. We&apos;ll be in touch within 24 hours.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConsultationModal;