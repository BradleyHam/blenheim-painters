import { CheckCircle, Clock, MapPin } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Exceptional Quality",
      description: "Premium materials and expert craftsmanship for flawless, long-lasting results in your luxury home."
    },
    {
      icon: Clock, 
      title: "Timely Execution",
      description: "We respect your schedule with efficient work and reliable project timelines, minimizing disruption."
    },
    {
      icon: MapPin,
      title: "Queenstown Expertise", 
      description: "Proudly serving Queenstown's most distinguished properties with personalized, attentive service."
    }
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className=" p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md">
                <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}