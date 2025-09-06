'use client'

import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/ui/ContactForm'
import { siteConfig } from '@/config/site-config'
const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 bg-gray-50">
      <div className="container px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-navy">
              Contact Us for a Complimentary Consultation
            </h2>
            <div className="h-1 w-24 bg-gold mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Ready to transform your space? Connect with us for a personalized, no-obligation consultation and
              detailed proposal.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg tracking-tight font-semibold  text-navy">Telephone</h3>
                  <p className="text-gray-700 text-base">+64{siteConfig.phoneNumber}</p>
                  <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg tracking-tight font-semibold  text-navy">Email</h3>
                  <p className="text-gray-700 text-base">{siteConfig.email}</p>
                  <p className="text-sm text-gray-500 mt-1">We respond to all inquiries within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg tracking-tight font-semibold  text-navy">Service Area</h3>
                  <p className="text-gray-700 text-base">{siteConfig.townName} and surrounding areas</p>
               
                </div>
              </div>
            </div>

            <div className="mt-12">
  <h3 className=" text-xl tracking-tightlg:text-2xl font-semibold mb-6 text-navy">Why Discerning Homeowners Choose Us</h3>
  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">BCITO-certified Master Painter</span>
    </li>
    <li className="flex items-start gap-3">
      <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">Fully insured with a workmanship guarantee</span>
    </li>
    <li className="flex items-start gap-3">
      <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">{siteConfig.yearsInBusiness}+ years of trusted service in {siteConfig.townName}</span>
    </li>
    <li className="flex items-start gap-3">
      <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">Perfect 5-star rating on Google</span>
    </li>
    <li className="flex items-start gap-3">
      <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">Known for exceptional quality and attention to detail</span>
    </li>
  </ul>
</div>
          </div>

          <div>
            <div className="bg-white p-5 py-6 lg:p-10 rounded-lg shadow-md border border-gray-100">
              <h3 className=" text-xl tracking-tight lg:text-2xl font-semibold mb-8 text-navy">Request Your Complimentary Consultation</h3>
             <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact