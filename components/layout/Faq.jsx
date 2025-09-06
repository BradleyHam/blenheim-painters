'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqData = [
  {
    question: 'Why should I choose a Master Painter for my home painting project in Queenstown?',
    answer:
      'Choosing a Master Painter ensures your painting project is completed to the highest professional standards. As members of Master Painters NZ, Little Dog Decorating provides exceptional workmanship, extensive industry training (BCITO-qualified), and guaranteed customer satisfaction.',
  },
  {
    question: 'What residential painting services do you offer in Queenstown?',
    answer:
      'Little Dog Decorating specializes in interior and exterior painting services for residential re-paints, renovations, and new builds in Queenstown. Our comprehensive service includes detailed preparation, premium painting products, and meticulous finishes tailored to your home.',
  },
  {
    question: 'Do you use environmentally friendly paints for residential projects?',
    answer:
      'Yes, we proudly offer eco-friendly, low-VOC paints from top-quality brands such as Dulux and Resene. These paints provide superior finish quality, durability, and are safer for your family and the environment.',
  },
  {
    question: 'Are your painting services guaranteed?',
    answer:
      'Absolutely. Little Dog Decorating is fully licensed, insured, and offers a 5-year warranty on our painting services. We guarantee against peeling, cracking, and fading, providing you peace of mind and protecting your investment.',
  },
  {
    question: 'Can you help me choose the right colours for my Queenstown home?',
    answer:
      'Certainly! We offer personalized colour consultation services to complement your existing décor, architectural features, and the stunning natural environment of Queenstown. We also collaborate closely with your interior designer or architect if required.',
  },
  {
    question: 'What measures do you take to protect my home during painting?',
    answer:
      'We employ meticulous protection protocols, including furniture coverings, specialized floor protection, precision masking, and dust-free equipment. Your valuable furnishings, flooring, and fixtures are treated with utmost care and respect throughout our painting process.',
  },
  {
    question: 'How long will it take to repaint the exterior of my house in Queenstown?',
    answer:
      'Exterior repaint timelines typically range from one to three weeks, depending on house size, condition, and weather conditions. We provide detailed timelines at the outset and ensure minimal disruption to your routine.',
  },
  {
    question: "How often should I repaint my home's exterior in Queenstown?",
    answer:
      "Due to Queenstown's alpine climate, we recommend repainting your home's exterior every 7-10 years. Regular maintenance protects your property from harsh weather conditions, maintains aesthetics, and preserves home value.",
  },
];


const FaqItem = ({ item, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden ">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="flex justify-between items-center w-full p-6 md:p-8 text-left focus:outline-none"
      >
        <h3 className="text-lg md:text-xl font-semibold leading-snug text-navy mr-4">{item.question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold text-2xl font-light"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginBottom: '2rem', marginTop: '-1rem' },
              collapsed: { opacity: 0, height: 0, marginBottom: 0, marginTop: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="px-6 md:px-8"
          >
            <p className="text-navy/80 leading-snug lg:leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-32 bg-gray-100">
      <div className="container px-4 lg:px-8">
        <div className="lg:text-center max-w-3xl mx-auto mb-8 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-navy">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-gold lg:mx-auto mb-8"></div>
          <p className="text-navy/80 text-lg leading-snug">
            Common questions about our interior and exterior painting services for Queenstown homes, from our Master Painter qualifications to climate-specific recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq