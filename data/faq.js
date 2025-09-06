import { siteConfig, getServiceAreasText } from '@/config/site-config'

export const faqData = [
  {
    id: 1,
    question: `Do you provide painting services throughout ${siteConfig.townName}?`,
    answer: `Yes, we provide comprehensive painting services throughout ${siteConfig.townName} and surrounding areas including ${getServiceAreasText()}. We travel up to ${siteConfig.serviceRadius}km from our base for projects.`,
    category: "service-area"
  },
  {
    id: 2,
    question: "What types of painting services do you offer?",
    answer: `We offer a full range of painting and decorating services including interior painting, exterior painting, roof painting, cedar restoration, deck staining, and decorating services. We work on both residential and commercial properties in ${siteConfig.townName}.`,
    category: "services"
  },
  {
    id: 3,
    question: "Do you provide free quotes?",
    answer: `Absolutely! We provide free, no-obligation quotes for all painting projects in ${siteConfig.townName}. Contact us at ${siteConfig.phoneDisplay} or ${siteConfig.email} to schedule your consultation.`,
    category: "pricing"
  },
  {
    id: 4,
    question: "Are you insured and certified?",
    answer: `Yes, we are fully insured and certified. We hold certifications with the ${siteConfig.certifications.join(' and ')} and carry comprehensive public liability insurance for your peace of mind.`,
    category: "credentials"
  },
  {
    id: 5,
    question: "How long does a typical painting project take?",
    answer: `Project timelines vary depending on the scope of work. Interior rooms typically take 1-3 days, while full exterior painting can take 3-7 days. We'll provide a detailed timeline with your quote and keep you informed throughout the project.`,
    category: "timeline"
  },
  {
    id: 6,
    question: "What brands of paint do you use?",
    answer: `We use premium quality paints from leading brands like Dulux, Resene, and Wattyl. We select paints specifically suited to ${siteConfig.townName}'s climate conditions to ensure the longest-lasting results.`,
    category: "materials"
  },
  {
    id: 7,
    question: "Do you clean up after the job?",
    answer: "Yes, we take pride in leaving your property spotless. Our service includes complete cleanup, removal of all materials, and a final walkthrough to ensure everything meets our high standards.",
    category: "process"
  },
  {
    id: 8,
    question: "Can you paint in winter?",
    answer: `Yes, we can paint year-round in ${siteConfig.townName}. For exterior work, we monitor weather conditions carefully and may adjust schedules for optimal painting conditions. Interior painting can be done any time of year.`,
    category: "weather"
  },
  {
    id: 9,
    question: "Do you offer color consultation?",
    answer: `Yes, we provide professional color consultation as part of our service. We can help you choose the perfect colors that complement your home's style and ${siteConfig.townName}'s beautiful surroundings.`,
    category: "design"
  },
  {
    id: 10,
    question: "What warranty do you provide?",
    answer: `We stand behind our work with comprehensive warranties. Interior work is warrantied for 3 years, exterior painting for 5 years, and roof painting for up to 10 years, depending on the products used.`,
    category: "warranty"
  }
]

// Helper functions
export const getFaqByCategory = (category) => {
  return faqData.filter(faq => faq.category === category)
}

export const getFeaturedFaqs = (count = 5) => {
  return faqData.slice(0, count)
}

export const searchFaqs = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  return faqData.filter(faq => 
    faq.question.toLowerCase().includes(term) || 
    faq.answer.toLowerCase().includes(term)
  )
}