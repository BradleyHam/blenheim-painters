'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqData = [
  {
    question: 'How long will my roof repaint last?',
    answer:
      "If it's prepped and painted right (that’s our thing!), you're typically looking at around 10 years before needing another coat. Harsh sun or coastal exposure may shorten that slightly, but we always aim for real longevity.",
  },
  {
    question: 'Do I need to disconnect water tanks before painting?',
    answer:
      "Yes. It’s important to disconnect downpipes during painting to avoid any paint residue getting into your tanks. After a good rain rinse, you can safely reconnect everything.",
  },
  {
    question: 'Can you paint older roofs like decramastic or tile?',
    answer:
      "Absolutely. Whether it's Colorsteel®, concrete tile, or decramastic, we’ve got the right prep and paint system to get it looking fresh and protected for years to come.",
  },
  {
    question: 'Do you replace rusty nails or screws before painting?',
    answer:
      "Yep—we can swap out any corroded fasteners before we paint. It’s all part of making sure the finish lasts and the job’s done properly.",
  },
  {
    question: 'How long does it take to paint a roof?',
    answer:
      "It depends on the size, condition, and the weather, but most residential roof jobs take 2–4 days including prep. We’ll give you a heads-up before we begin.",
  },
]

const FaqItem = ({ item, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
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

const RoofPaintingFaq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-32 bg-gray-100">
      <div className="container px-4 lg:px-8">
        <div className="lg:text-center max-w-3xl mx-auto mb-8 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-navy">
            Roof Painting FAQs
          </h2>
          <div className="h-1 w-24 bg-gold lg:mx-auto mb-8"></div>
          <p className="text-navy/80 text-lg leading-snug">
            Got questions about painting your roof in Queenstown? Here are a few we get all the time.
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

export default RoofPaintingFaq
