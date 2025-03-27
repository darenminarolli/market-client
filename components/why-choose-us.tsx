import Image from "next/image"
import { Award, Leaf, ShieldCheck, Truck, Clock } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose SuperMart</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're committed to providing the best shopping experience with quality products and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-red-600/20"></div>
              <Image
                src="/placeholder.svg?height=600&width=800&text=Quality+Products"
                alt="Quality products"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: <Award className="h-6 w-6 text-blue-600" />,
                title: "Premium Quality",
                description:
                  "We source the highest quality products from trusted suppliers and farmers to ensure you get the best.",
              },
              {
                icon: <Leaf className="h-6 w-6 text-green-600" />,
                title: "Organic & Fresh",
                description:
                  "Our produce is organic, sustainably sourced, and delivered fresh to maintain nutritional value.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
                title: "Safety Guaranteed",
                description:
                  "We follow strict safety protocols for handling and delivering all our products to ensure your well-being.",
              },
              {
                icon: <Truck className="h-6 w-6 text-purple-600" />,
                title: "Fast Delivery",
                description:
                  "Get your groceries delivered to your doorstep in as little as 1 hour with our express delivery service.",
              },
              {
                icon: <Clock className="h-6 w-6 text-yellow-600" />,
                title: "Convenient Shopping",
                description:
                  "Shop anytime, anywhere with our user-friendly website and mobile app for a seamless experience.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "10+",
              title: "Years of Excellence",
              description: "Serving customers with quality products since 2013",
            },
            {
              number: "50+",
              title: "Store Locations",
              description: "Conveniently located stores across the country",
            },
            {
              number: "100K+",
              title: "Happy Customers",
              description: "Trusted by thousands of satisfied customers",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

