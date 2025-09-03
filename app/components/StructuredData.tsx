import { FC } from 'react';

interface StructuredDataProps {
  data: object;
}

const StructuredData: FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
};

export const LocalBusinessData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lakeside Painting",
    "image": [
      "https://lakesidepainting.co.nz/images/wanaka.jpg",
      "https://lakesidepainting.co.nz/images/ldd-exterior.jpg",
      "https://lakesidepainting.co.nz/images/ldd-interior.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Blenheim",
      "addressRegion": "Marlborough",
      "addressCountry": "New Zealand"
    },
    "telephone": "+22 613 2936",
    "email": "lakesidepaintinglimited@gmail.com",
    "url": "https://lakesidepainting.co.nz",
    "description": "Lakeside Painting offers professional interior and exterior painting services in Blenheim. Transform your home or business with our expert team.",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -41.5131,
        "longitude": 173.9540
      },
      "geoRadius": "50000"
    },
    "foundingDate": "2018",
    "numberOfEmployees": "2-10",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Exterior Painting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Weather-resistant coatings",
                "description": "Professional exterior painting with weather-resistant coatings suitable for Blenheim's climate"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Deck and fence staining",
                "description": "Professional deck and fence staining services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Roof painting and restoration",
                "description": "Complete roof painting and restoration services"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Interior Painting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Feature wall creation",
                "description": "Custom feature wall design and painting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ceiling treatments", 
                "description": "Professional ceiling painting and treatments"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wallpaper installation/removal",
                "description": "Expert wallpaper installation and removal services"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Kate Wilkins"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Bradley went above and beyond for the painting of my tiny house. From the initial consult to the finer details and even coming out of his way to paint an extra panel that I wanted after the job was done, he made the effort to get it done when I was ready. Would highly recommend to anyone who is eco minded and wants attention to detail. Love the all natural paint",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Claire Hampson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Brad did an amazing job of painting a bathroom renovation. Great attention to detail and even went the extra mile to fill a sizeable hole we found behind a mirror. Great communication and would definitely recommend.",
        "datePublished": "2024-02-10"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Joe Drummond"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5", 
          "bestRating": "5"
        },
        "reviewBody": "Lakeside Painting transformed our home beautifully. The team was professional, punctual, and paid great attention to detail. They used high-quality paints and finished the job ahead of schedule. Our walls look flawless, and the color advice they provided was spot-on. Cleanup was thorough, and they were respectful of our property throughout. Highly recommend for any painting needs!",
        "datePublished": "2024-03-05"
      }
    ]
  };

  return <StructuredData data={structuredData} />;
};

export const WebSiteData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lakeside Painting",
    "url": "https://lakesidepainting.co.nz",
    "description": "Professional painting services in Blenheim, New Zealand",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lakesidepainting.co.nz/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return <StructuredData data={structuredData} />;
};

export const OrganizationData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lakeside Painting",
    "url": "https://lakesidepainting.co.nz",
    "logo": "https://lakesidepainting.co.nz/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+22 613 2936",
      "contactType": "customer service",
      "email": "lakesidepaintinglimited@gmail.com",
      "areaServed": "Blenheim, New Zealand",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Blenheim",
      "addressRegion": "Marlborough", 
      "addressCountry": "New Zealand"
    },
    "sameAs": []
  };

  return <StructuredData data={structuredData} />;
};

export const ServiceData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Painting Services",
    "description": "Expert interior and exterior painting services for homes and businesses in Blenheim, New Zealand",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lakeside Painting",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Blenheim",
        "addressRegion": "Marlborough",
        "addressCountry": "New Zealand"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Blenheim",
      "containedInPlace": {
        "@type": "Country",
        "name": "New Zealand"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Painting",
            "description": "Professional exterior house painting with weather-resistant coatings, deck staining, roof painting and restoration services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Painting", 
            "description": "Expert interior painting including feature walls, ceiling treatments, wallpaper installation and removal, spray painting and French wash techniques"
          }
        }
      ]
    }
  };

  return <StructuredData data={structuredData} />;
};

export default StructuredData;