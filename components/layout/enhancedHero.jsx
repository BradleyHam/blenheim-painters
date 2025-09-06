'use client'
import Image from "next/image"
import { Phone, Calendar, ArrowRight, Star, CheckCircle, Loader } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { siteConfig } from "@/config/site-config"

export default function EnhancedHero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Thank you! Your request has been sent.");
        setForm({ name: "", phone: "", email: "", service: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a1f3b] to-[#0c2547] rounded-xl">
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.businessName,
            description: `Premium Interior & Exterior Painting Specialists in ${siteConfig.townName}`,
            image: "/images/hero-painting.jpg",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.townName,
              addressRegion: siteConfig.region,
              addressCountry: "NZ",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: siteConfig.coordinates.latitude.toString(),
              longitude: siteConfig.coordinates.longitude.toString(),
            },
            telephone: `+64${siteConfig.phoneNumber}`,
            areaServed: siteConfig.townName,
            serviceArea: `${siteConfig.townName}`,
          }),
        }}
      />

      <div className=" absolute inset-0 z-20 bg-gradient-to-b lg:bg-gradient-to-r from-[#0a1f3b] to-transparent rounded-xl "/>

      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0 rounded-lg">
        <Image
          src="/Interior-repaint-in-queenstown-with-views-of-lake-wakatipu.jpg"
          alt="Premium painting services in Queenstown - beautifully finished interior with mountain views"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      {/* Content container */}
      <div className="container relative z-30 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 rounded-lg">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          {/* Left column - Main content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Location tag for SEO */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm w-fit">
              <span className="mr-1 text-gold-dark">★</span> {siteConfig.townName}'s Trusted Painting Specialists
            </div>

            {/* Main headline - SEO optimized */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Premium Interior &</span>
              <span className="block text-gold">Exterior Painting</span>
              <span className="block">in {siteConfig.townName}</span>
            </h1>

            {/* Subheading with keywords */}
            <p className="max-w-xl text-lg text-gray-200 sm:text-xl">
              Transform your {siteConfig.townName} property with our expert painting services. Meticulous attention to detail,
              premium materials, and flawless finishes guaranteed.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <div className="flex text-gold-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm">5 Stars on Google</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-yellow-400" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-yellow-400" />
                <span className="text-sm">{siteConfig.yearsInBusiness}+ Years in {siteConfig.townName}</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a href={`tel:+64${siteConfig.phoneNumber}`}>
                <Button size="lg" className="bg-gold-dark text-white font-bold hover:bg-gold">
                  <Phone className="mr-2 h-4 w-4" />
                  Call For a Quote
                </Button>
              </a>
            
            </div>
          </div>

          {/* Right column - CRO focused form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-lg bg-white/10 p-6 backdrop-blur-md sm:p-8">
              <h3 className="mb-4 text-xl font-bold text-white">Get Your Free Quote</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border-gray-300 bg-white/80 p-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-md border-gray-300 bg-white/80 p-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border-gray-300 bg-white/80 p-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-md border-gray-300 bg-white/80 p-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select Service Needed</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="exterior">Roof Painting</option>
                    <option value="commercial">Wallpapering</option>
                    {/* <option value="residential">French Wash</option> */}
                    <option value="other">Other Services</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-gold-dark text-white font-bold hover:bg-gold-dark" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <Loader className="animate-spin mr-2 h-5 w-5" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Request Free Quote</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                {success && <p className="text-green-300 text-center text-sm mt-2">{success}</p>}
                {error && <p className="text-red-300 text-center text-sm mt-2">{error}</p>}
              </form>
              <p className="mt-4 text-center text-sm text-gray-200">
              No obligation. Get clear, competitive pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Featured clients/projects - social proof */}
        {/* <div className="mt-16 border-t border-white/20 pt-8">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-gray-300">
            Trusted by Queenstown's finest properties
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70">
            {["Hilton", "Eichardt's", "Millbrook Resort", "Jack's Point", "Remarkables Lodge"].map((client) => (
              <div key={client} className="text-lg font-semibold text-white">
                {client}
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-4 from-[#0a1f3b] to-transparent"></div>
      <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl"></div>
      <div className="absolute -left-12 top-1/4 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"></div> */}
    </section> 
  )
}
