import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, Leaf, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-red-600 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=900&width=1600')] opacity-20 mix-blend-overlay bg-fixed"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About SuperMart</h1>
              <p className="text-xl text-white/90 mb-8">
                We're on a mission to make grocery shopping easier, faster, and more enjoyable for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  SuperMart was founded in 2013 with a simple vision: to create a grocery shopping experience that puts
                  customers first. What started as a small corner store has grown into a nationwide chain with over 50
                  locations.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey began when our founder, Jane Smith, noticed how frustrating grocery shopping could be –
                  long lines, limited selection, and poor quality produce. She believed there had to be a better way.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, SuperMart is known for its exceptional customer service, wide selection of high-quality
                  products, and commitment to supporting local farmers and suppliers. We continue to innovate and
                  improve, always keeping our customers' needs at the heart of everything we do.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">
                    Our Locations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full">
                    Join Our Team
                  </Button>
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-blue-100 blur-xl opacity-70"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Our+Story"
                    alt="Our story"
                    width={800}
                    height={600}
                    className="relative rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Our Mission & Values</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Guided by our core principles, we strive to make a positive impact in everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Our+Mission"
                  alt="Our mission"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-8">
                  To provide communities with access to high-quality, fresh food at affordable prices while supporting
                  local producers and promoting sustainable practices.
                </p>

                <h3 className="text-2xl font-bold mb-6">Our Values</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
                      value: "Quality",
                      desc: "We never compromise on the quality of our products",
                    },
                    {
                      icon: <Users className="h-5 w-5 text-blue-600" />,
                      value: "Community",
                      desc: "We support local communities and build lasting relationships",
                    },
                    {
                      icon: <Award className="h-5 w-5 text-blue-600" />,
                      value: "Excellence",
                      desc: "We strive for excellence in everything we do",
                    },
                    {
                      icon: <Leaf className="h-5 w-5 text-blue-600" />,
                      value: "Sustainability",
                      desc: "We're committed to environmentally responsible practices",
                    },
                    {
                      icon: <Heart className="h-5 w-5 text-blue-600" />,
                      value: "Care",
                      desc: "We care deeply about our customers, employees, and partners",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-bold">{item.value}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Meet Our Leadership Team</h2>
              <p className="text-gray-600 max-w-xl mx-auto">The passionate individuals behind SuperMart's success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Jane Smith",
                  title: "Founder & CEO",
                  image: "/placeholder.svg?height=400&width=400&text=Jane+Smith",
                },
                {
                  name: "Michael Johnson",
                  title: "Chief Operations Officer",
                  image: "/placeholder.svg?height=400&width=400&text=Michael+Johnson",
                },
                {
                  name: "Sarah Williams",
                  title: "Chief Marketing Officer",
                  image: "/placeholder.svg?height=400&width=400&text=Sarah+Williams",
                },
                {
                  name: "David Chen",
                  title: "Chief Financial Officer",
                  image: "/placeholder.svg?height=400&width=400&text=David+Chen",
                },
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <div className="flex gap-3">
                          {["LinkedIn", "Twitter", "Email"].map((social) => (
                            <Link
                              key={social}
                              href="#"
                              className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                            >
                              {/* Icons would go here */}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full">
                View Full Team
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "SuperMart has completely changed how I shop for groceries. The quality is outstanding and the delivery is always on time!",
                  name: "Emily R.",
                  location: "New York, NY",
                  image: "/placeholder.svg?height=100&width=100&text=Emily",
                },
                {
                  quote:
                    "I love the selection of organic produce. Everything is always fresh and the prices are reasonable. SuperMart is my go-to grocery store!",
                  name: "Marcus T.",
                  location: "Chicago, IL",
                  image: "/placeholder.svg?height=100&width=100&text=Marcus",
                },
                {
                  quote:
                    "The customer service is exceptional. When I had an issue with my order, they resolved it immediately and even gave me a discount on my next purchase.",
                  name: "Sophia L.",
                  location: "Los Angeles, CA",
                  image: "/placeholder.svg?height=100&width=100&text=Sophia",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Join the SuperMart Family</h2>
              <p className="text-xl mb-8">
                Whether you're a customer, supplier, or looking for career opportunities, we'd love to have you join our
                growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
                  Find a Store Near You
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                  Career Opportunities
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotButton />
    </div>
  )
}

