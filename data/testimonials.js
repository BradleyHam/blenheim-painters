import { siteConfig } from '@/config/site-config'

export const testimonials = [
  {
    id: 1,
    text: `${siteConfig.ownerNameCasual} and his team transformed our weatherboard home beautifully. They took extra care with the prep work, fixed some rot we didn't even know about, and the finish is flawless. They covered everything properly and left the site spotless every day. Couldn't be happier with the result.`,
    author: "Sarah & James Mitchell",
    date: "2 weeks ago",
    initials: "SM",
    location: "Google Review",
    service: "Exterior Painting",
    area: "Albert Town",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    text: `We've used ${siteConfig.ownerNameCasual} for three properties now - our home, bach, and rental. Always punctual, fair pricing, and the quality speaks for itself. He's the only painter we trust in ${siteConfig.townName}. Just had him back to do our deck and fence too.`,
    author: "David Chen",
    date: "1 month ago", 
    initials: "DC",
    location: "Google Review",
    service: "Interior & Exterior",
    area: "Meadowstone",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    text: `Outstanding work on our 1960s home renovation. ${siteConfig.ownerNameCasual} helped us choose the perfect colour scheme and his attention to detail is incredible - perfect cutting in, smooth walls, no drips or marks anywhere. The whole house feels brand new. Professional, tidy, and a genuinely nice guy to deal with.`,
    author: "Emma Thompson",
    date: "2 months ago",
    initials: "ET", 
    location: "Local Guide",
    service: "Full Interior Repaint",
    area: "Fernhill",
    rating: 5,
    verified: true
  },
  {
    id: 4,
    text: `After getting three quotes, ${siteConfig.ownerNameCasual} was competitive and the most thorough in explaining the process. They pressure washed, sanded, primed and used premium paint on our cedar cladding. Two years later and it still looks fresh off the brush. Highly recommend.`,
    author: "Mark Roberts",
    date: "3 months ago",
    initials: "MR",
    location: "Google Review",
    service: "Cedar Restoration", 
    area: "Kelvin Heights",
    rating: 5,
    verified: true
  },
  {
    id: 5,
    text: `Perfect job on our commercial property. ${siteConfig.ownerNameCasual} worked around our business hours, finished ahead of schedule, and the place looks fantastic. Will definitely use again for our other properties.`,
    author: "Lisa Anderson",
    date: "4 months ago",
    initials: "LA",
    location: "Google Review",
    service: "Commercial Painting",
    area: "Frankton", 
    rating: 5,
    verified: true
  },
  {
    id: 6,
    text: `${siteConfig.ownerNameCasual} rescued us when another painter left us hanging. He squeezed us in, matched the existing paint perfectly, and finished our ensuite and kitchen to an exceptional standard. Reliable, skilled, and honest - everything you want in a tradesperson.`,
    author: "Paul & Rachel Kim",
    date: "6 months ago",
    initials: "PK",
    location: "Google Review",
    service: "Interior Painting",
    area: "Jack's Point",
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