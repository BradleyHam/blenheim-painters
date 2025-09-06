import { siteConfig } from '@/config/site-config'

export const testimonials = [
  {
    id: 1,
    text: `Our experience with ${siteConfig.ownerName} and his team was excellent from beginning to end. They were respectful, polite and even went as far as highlighting a small repair issue on our roof and fixed it too. We would highly recommend ${siteConfig.ownerName} and his team and we will be definitely using his services again in the future.`,
    author: "Mike & Linda Hill",
    date: "4 months ago",
    initials: "MH",
    location: "Google Review",
    service: "Exterior Painting",
    area: "Fernhill",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    text: `${siteConfig.ownerName} is so great to deal with. Have used him for the past 6 years. He is the only person I call when I need work done at my house or the houses I manage. Reliable, good word and friendly to deal with.`,
    author: "Stephanie Lacey",
    date: "5 months ago", 
    initials: "SL",
    location: "Google Review",
    service: "Interior Painting",
    area: "Arrowtown",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    text: `I've used ${siteConfig.ownerName} & his company for various decorating jobs throughout the last 5 yrs. They have been completely professional, turn up on the organised days & complete the work required without any issues. ${siteConfig.ownerName} is Very friendly & a pleasure to deal with. I would recommend him without any hesitation.`,
    author: "Roger Lee",
    date: "5 months ago",
    initials: "RL", 
    location: "Local Guide",
    service: "Decorating",
    area: "Kelvin Heights",
    rating: 5,
    verified: true
  },
  {
    id: 4,
    text: `Have used ${siteConfig.ownerName} for years, have never even considered approaching any body else.`,
    author: "Daniel Keber",
    date: "6 months ago",
    initials: "DK",
    location: "Google Review",
    service: "Roof Painting", 
    area: "Arthur's Point",
    rating: 5,
    verified: true
  },
  {
    id: 5,
    text: "Professional company that delivers quality service with a smile. Thanks.",
    author: "Michele White",
    date: "3 years ago",
    initials: "MW",
    location: "Google Review",
    service: "Cedar Restoration",
    area: "Millbrook", 
    rating: 5,
    verified: true
  },
  {
    id: 6,
    text: `Excellent painting work on our ${siteConfig.townName} home. Attention to detail and professional service throughout.`,
    author: "Marianne Finn",
    date: "5 years ago",
    initials: "MF",
    location: "Google Review",
    service: "Interior Painting",
    area: "Wakatipu Heights",
    rating: 5,
    verified: true
  }
];

// Helper function to get testimonials by service
export const getTestimonialsByService = (serviceId) => {
  return testimonials.filter(testimonial => 
    testimonial.service.toLowerCase().includes(serviceId.replace('-', ' ').toLowerCase())
  )
}

// Helper function to get featured testimonials 
export const getFeaturedTestimonials = (count = 3) => {
  return testimonials
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count)
}

// Helper function to calculate average rating
export const getAverageRating = () => {
  const totalRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0)
  return (totalRating / testimonials.length).toFixed(1)
} 