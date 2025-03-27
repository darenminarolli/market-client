import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-red-600 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=900&width=1600')] opacity-20 mix-blend-overlay bg-fixed"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Locations</h1>
              <p className="text-xl text-white/90 mb-8">Find a SuperMart store near you with our store locator</p>

              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Enter your zip code or city"
                  className="pl-12 pr-4 py-6 rounded-full border-2 border-white/30 bg-white/10 placeholder:text-white/60 text-white focus:border-white focus:ring-white"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-blue-600 hover:bg-gray-100">
                  Find Stores
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Store Types */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 p-1 rounded-full">
                  <TabsTrigger
                    value="all"
                    className="rounded-full px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    All Stores
                  </TabsTrigger>
                  <TabsTrigger
                    value="flagship"
                    className="rounded-full px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Flagship
                  </TabsTrigger>
                  <TabsTrigger
                    value="superstore"
                    className="rounded-full px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Superstore
                  </TabsTrigger>
                  <TabsTrigger
                    value="express"
                    className="rounded-full px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Express
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {storeLocations.map((location) => (
                    <StoreCard key={location.id} location={location} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="flagship" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {storeLocations
                    .filter((store) => store.type === "Flagship Store")
                    .map((location) => (
                      <StoreCard key={location.id} location={location} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="superstore" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {storeLocations
                    .filter((store) => store.type === "Superstore")
                    .map((location) => (
                      <StoreCard key={location.id} location={location} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="express" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {storeLocations
                    .filter((store) => store.type === "Express Store")
                    .map((location) => (
                      <StoreCard key={location.id} location={location} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-3">Store Locations Map</h2>
              <p className="text-gray-600">View all our store locations on the map</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[600px] shadow-lg">
              <Image
                src="/placeholder.svg?height=1200&width=2400&text=Interactive+Store+Map"
                alt="Store locations map"
                width={2400}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Store Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Store Features</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Our stores are designed with your convenience in mind</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Flagship Stores",
                  description:
                    "Our largest stores with the widest selection of products, in-store cafes, and specialized departments.",
                  features: [
                    "In-store cafe",
                    "Pharmacy",
                    "Wine & spirits",
                    "Prepared foods",
                    "Bakery",
                    "Floral department",
                  ],
                  image: "/placeholder.svg?height=300&width=600&text=Flagship+Store",
                },
                {
                  title: "Superstores",
                  description:
                    "Full-service grocery stores with a wide selection of products and essential departments.",
                  features: [
                    "Deli counter",
                    "Bakery",
                    "Meat & seafood",
                    "Produce section",
                    "Frozen foods",
                    "Health & beauty",
                  ],
                  image: "/placeholder.svg?height=300&width=600&text=Superstore",
                },
                {
                  title: "Express Stores",
                  description: "Smaller, convenient locations perfect for quick shopping trips and essentials.",
                  features: [
                    "Grab & go meals",
                    "Coffee bar",
                    "Essential groceries",
                    "Fresh produce",
                    "Snacks",
                    "Beverages",
                  ],
                  image: "/placeholder.svg?height=300&width=600&text=Express+Store",
                },
              ].map((storeType, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={storeType.image || "/placeholder.svg"}
                      alt={storeType.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{storeType.title}</h3>
                    <p className="text-gray-600 mb-4">{storeType.description}</p>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {storeType.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">Store Hours</h2>
                <p className="text-gray-600">Our regular operating hours across all locations</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      type: "Flagship Stores",
                      hours: [
                        { day: "Monday - Friday", time: "7:00 AM - 11:00 PM" },
                        { day: "Saturday", time: "7:00 AM - 11:00 PM" },
                        { day: "Sunday", time: "8:00 AM - 10:00 PM" },
                      ],
                    },
                    {
                      type: "Superstores",
                      hours: [
                        { day: "Monday - Friday", time: "7:00 AM - 10:00 PM" },
                        { day: "Saturday", time: "7:00 AM - 10:00 PM" },
                        { day: "Sunday", time: "8:00 AM - 9:00 PM" },
                      ],
                    },
                    {
                      type: "Express Stores",
                      hours: [
                        { day: "Monday - Friday", time: "6:00 AM - 12:00 AM" },
                        { day: "Saturday", time: "6:00 AM - 12:00 AM" },
                        { day: "Sunday", time: "7:00 AM - 11:00 PM" },
                      ],
                    },
                  ].map((storeHours, index) => (
                    <div key={index} className="text-center p-4">
                      <h3 className="font-bold text-lg mb-4">{storeHours.type}</h3>
                      <div className="space-y-3">
                        {storeHours.hours.map((schedule, i) => (
                          <div key={i} className="border-b border-gray-100 pb-2 last:border-0">
                            <p className="font-medium">{schedule.day}</p>
                            <p className="text-gray-600">{schedule.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center text-gray-500 text-sm">
                  <p>* Hours may vary on holidays. Please check with your local store for specific holiday hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Need Help Finding a Store?</h2>
              <p className="text-xl mb-8">
                Our customer service team is ready to assist you in finding the nearest SuperMart location.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
                Contact Customer Service
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotButton />
    </div>
  )
}

// Store Card Component
function StoreCard({ location }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={location.image || "/placeholder.svg"}
          alt={location.name}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge
            className={`
            ${
              location.type === "Flagship Store"
                ? "bg-blue-600"
                : location.type === "Superstore"
                  ? "bg-purple-600"
                  : "bg-green-600"
            }
          `}
          >
            {location.type}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-lg mb-2">{location.name}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
            <p className="text-gray-600 text-sm">{location.address}</p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
            <p className="text-gray-600 text-sm">{location.phone}</p>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
            <p className="text-gray-600 text-sm">{location.hours}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/locations/${location.id}`}>
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Store Details
            </Button>
          </Link>
          <Link href="#" className="text-sm font-medium text-blue-600 hover:underline flex items-center">
            Get Directions
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const storeLocations = [
  {
    id: 1,
    name: "SuperMart Downtown",
    address: "123 Main Street, Downtown, City 10001",
    phone: "(123) 456-7890",
    hours: "8:00 AM - 10:00 PM",
    type: "Flagship Store",
    image: "/placeholder.svg?height=200&width=400&text=Downtown+Store",
    features: ["Cafe", "Pharmacy", "Bakery", "Deli"],
  },
  {
    id: 2,
    name: "SuperMart Westside",
    address: "456 West Avenue, Westside, City 10002",
    phone: "(123) 456-7891",
    hours: "7:00 AM - 11:00 PM",
    type: "Superstore",
    image: "/placeholder.svg?height=200&width=400&text=Westside+Store",
    features: ["Bakery", "Deli", "Meat Counter"],
  },
  {
    id: 3,
    name: "SuperMart Eastside",
    address: "789 East Boulevard, Eastside, City 10003",
    phone: "(123) 456-7892",
    hours: "8:00 AM - 9:00 PM",
    type: "Express Store",
    image: "/placeholder.svg?height=200&width=400&text=Eastside+Store",
    features: ["Coffee Bar", "Grab & Go"],
  },
  {
    id: 4,
    name: "SuperMart Northside",
    address: "101 North Road, Northside, City 10004",
    phone: "(123) 456-7893",
    hours: "7:00 AM - 10:00 PM",
    type: "Superstore",
    image: "/placeholder.svg?height=200&width=400&text=Northside+Store",
    features: ["Bakery", "Deli", "Seafood Counter"],
  },
  {
    id: 5,
    name: "SuperMart Southside",
    address: "202 South Lane, Southside, City 10005",
    phone: "(123) 456-7894",
    hours: "6:00 AM - 12:00 AM",
    type: "Express Store",
    image: "/placeholder.svg?height=200&width=400&text=Southside+Store",
    features: ["Coffee Bar", "Grab & Go"],
  },
  {
    id: 6,
    name: "SuperMart Central",
    address: "303 Central Plaza, Midtown, City 10006",
    phone: "(123) 456-7895",
    hours: "7:00 AM - 11:00 PM",
    type: "Flagship Store",
    image: "/placeholder.svg?height=200&width=400&text=Central+Store",
    features: ["Cafe", "Pharmacy", "Wine & Spirits", "Bakery"],
  },
]

