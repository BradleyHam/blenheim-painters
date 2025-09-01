'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialCard from "./TestimonialCard";
import SectionHeading from '../SiteComponents/SectionHeading';
import ButtonSeeMore from '../SiteComponents/ButtonSeeMore';

const testimonials = [
    {
        name: 'Kate Wilkins',
        occupation: 'Aroha Wellness',
        testimonial: `Bradley went above and beyond for the painting of my tiny house. From the initial consult to the finer details and even coming out of his way to paint an extra panel that I wanted after the job was done, he made the effort to get it done when I was ready. Would highly recommend to anyone who is eco minded and wants attention to detail. Love the all natural paint`
    },
    {
        name: 'Claire Hampson',
        occupation: 'Avis Car Rental',
        testimonial: `Brad did an amazing job of painting a bathroom renovation. Great attention to detail and even went the extra mile to fill a sizeable hole we found behind a mirror. Great communication and would definitely recommend.`

    },
    {
        name: 'Joe Drummond',
        occupation: 'Harcouts',
        testimonial: `Lakeside Painting transformed our home beautifully. The team was professional, punctual, and paid great attention to detail. They used high-quality paints and finished the job ahead of schedule. Our walls look flawless, and the color advice they provided was spot-on. Cleanup was thorough, and they were respectful of our property throughout. Highly recommend for any painting needs!`
    },
    {
        name: 'Sarah Mitchell',
        occupation: 'Homeowner',
        testimonial: `Outstanding service from start to finish! Bradley and his team painted our entire house exterior and the results exceeded our expectations. They handled everything with care, provided excellent color consultation, and completed the work on time. The quality is exceptional and our neighbors have been complimenting the fresh new look. Will definitely use them again!`
    },
    {
        name: 'Mark Thompson',
        occupation: 'Property Manager',
        testimonial: `We've used Lakeside Painting for multiple rental properties and they consistently deliver excellent results. Professional, reliable, and great value for money. They work efficiently without compromising on quality and always leave the properties spotless. Our go-to painters for all commercial work.`
    },
    {
        name: 'Emma Rodriguez',
        occupation: 'Interior Designer',
        testimonial: `I regularly recommend Lakeside Painting to my clients and they never disappoint. Bradley understands color and finish requirements perfectly, and his attention to detail matches my standards. The team is respectful of timelines and budgets. A pleasure to work with on every project.`
    }
]

export default function Testimonials() {
    const topRowRef = useRef<HTMLDivElement>(null);
    const bottomRowRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            const topRow = topRowRef.current;
            const bottomRow = bottomRowRef.current;
            const section = sectionRef.current;

            if (topRow && bottomRow && section) {
                // Top row animation - moves left
                gsap.fromTo(topRow, 
                    { x: 0 },
                    {
                        x: -30,
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                        }
                    }
                );

                // Bottom row animation - moves right  
                gsap.fromTo(bottomRow,
                    { x: 0 },
                    {
                        x: 30,
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom", 
                            end: "bottom top",
                            scrub: 1,
                        }
                    }
                );
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Split testimonials into two rows
    const topRowTestimonials = testimonials.slice(0, 3);
    const bottomRowTestimonials = testimonials.slice(3, 6);

    return (
        <section ref={sectionRef} className="relative mt-12 overflow-hidden">
            {/* Left gradient overlay */}
            <div className="absolute left-0 top-0 w-48 h-full z-20 pointer-events-none bg-gradient-to-r from-background to-transparent"></div>
            
            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 w-48 h-full z-20 pointer-events-none bg-gradient-to-l from-background to-transparent"></div>
            
            <div className="testimonials flex flex-col mx-auto relative z-10 mb-12">
                {/* Top row - offset right with space on left */}
                <div 
                    ref={topRowRef}
                    className="flex justify-end mb-8 pl-8 lg:pl-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {topRowTestimonials.map((item, index) => (
                            <div key={index}>
                                <TestimonialCard {...item}/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom row - offset left with space on right */}
                <div 
                    ref={bottomRowRef}
                    className="flex justify-start pr-8 lg:pr-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {bottomRowTestimonials.map((item, index) => (
                            <div key={index}>
                                <TestimonialCard {...item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flex md:justify-center">
                <ButtonSeeMore label='Read More Testimonials' linkTo='/testimonials' />
            </div>
        </section>
    )
}