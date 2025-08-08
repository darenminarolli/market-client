import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star, ArrowRight, Heart, TrendingUp, ShieldCheck, Truck, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ChatbotButton from "@/components/chatbot-button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhyChooseUs from "@/components/why-choose-us"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50"></div>

          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
              <div className="order-2 md:order-1 z-10">
                <div className="inline-block mb-4">
                  <Badge className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Limited Time Offer
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                  Fresh Food, <br />
                  <span className="text-orange-500">Delivered Daily</span>
                </h1>

                <p className="text-lg text-gray-600 mb-8 max-w-md">
                  Shop quality groceries at unbeatable prices. Get free delivery on your first order over $50.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full px-8 py-6"
                  >
                    View Offers
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Truck className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Quality Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Heart className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Customer Favorites</span>
                  </div>
                </div>
              </div>

              {/* Right content - Product showcase */}
              <div className="order-1 md:order-2 relative">
                <div className="relative">
                  {/* Main product image */}
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Fresh+Groceries"
                      alt="Fresh groceries"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />

                    {/* Discount tag */}
                    <div className="absolute top-6 right-6 bg-red-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-lg shadow-lg">
                      30% OFF
                    </div>
                  </div>

                  {/* Floating product cards */}
                  <div className="absolute -bottom-6 -left-6 z-20 w-32 md:w-40 bg-white rounded-xl shadow-lg p-2 transform transition-transform hover:scale-105 duration-300">
                    <div className="relative rounded-lg overflow-hidden mb-2">
                      <Image
                        src="/placeholder.svg?height=100&width=150&text=Fruits"
                        alt="Fruits"
                        width={150}
                        height={100}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900 text-sm">Fresh Fruits</p>
                      <p className="text-blue-600 font-bold text-sm">From $1.99</p>
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 z-20 w-32 md:w-40 bg-white rounded-xl shadow-lg p-2 transform transition-transform hover:scale-105 duration-300">
                    <div className="relative rounded-lg overflow-hidden mb-2">
                      <Image
                        src="/placeholder.svg?height=100&width=150&text=Vegetables"
                        alt="Vegetables"
                        width={150}
                        height={100}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900 text-sm">Vegetables</p>
                      <p className="text-blue-600 font-bold text-sm">From $2.49</p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-orange-100 to-green-100 opacity-70 blur-3xl"></div>
                  <div className="absolute -z-10 bottom-0 right-0 w-32 h-32 rounded-full bg-orange-200 opacity-40 blur-2xl"></div>
                  <div className="absolute -z-10 top-0 left-0 w-24 h-24 rounded-full bg-green-200 opacity-40 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 text-white">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,141.14c67.6,0,123.2-18.21,168.3-49.71Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Truck className="h-6 w-6" />, title: "Free Delivery", desc: "On orders over $50" },
                { icon: <ShieldCheck className="h-6 w-6" />, title: "100% Secure", desc: "Guaranteed safe checkout" },
                { icon: <TrendingUp className="h-6 w-6" />, title: "Daily Deals", desc: "Save up to 60% off" },
                { icon: <Heart className="h-6 w-6" />, title: "100% Satisfaction", desc: "30-day return policy" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="mb-4 h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-3">Shop by Category</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Browse through our extensive collection of products organized by category
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href="#"
                  className="group flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                >
                  <div className="mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-orange-50 to-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={category.image || "/placeholder.svg?height=60&width=60"}
                      alt={category.name}
                      width={60}
                      height={60}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <span className="font-medium group-hover:text-blue-600 transition-colors">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Featured Products Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Discover our selection of top-rated and fresh products</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 p-1 rounded-full">
                  <TabsTrigger
                    value="all"
                    className="rounded-full px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    All Products
                  </TabsTrigger>
                  <TabsTrigger
                    value="trending"
                    className="rounded-full px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    Trending
                  </TabsTrigger>
                  <TabsTrigger
                    value="popular"
                    className="rounded-full px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    Popular
                  </TabsTrigger>
                  <TabsTrigger
                    value="new"
                    className="rounded-full px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    New Arrivals
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="trending" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.trending)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.popular)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="new" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.isNew)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-10 text-center">
              <Link href="/products">
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-8">
                  View All Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-3">Special Offers</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Limited time deals on your favorite products</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800 opacity-90 group-hover:opacity-95 transition-opacity"></div>
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Fresh+Produce"
                  alt="Fresh produce"
                  width={800}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-10">
                  <Badge className="w-fit mb-4 bg-white/20 text-white border-none backdrop-blur-sm">Limited Time</Badge>
                  <h3 className="text-3xl font-bold text-white mb-3">Fresh Organic Produce</h3>
                  <p className="text-white/90 mb-6 max-w-[400px]">
                    Up to 30% off on organic fruits and vegetables. Farm fresh, delivered to your door.
                  </p>
                  <Button className="w-fit bg-white text-orange-600 hover:bg-gray-100 rounded-full group">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-90 group-hover:opacity-95 transition-opacity"></div>
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Meat+%26+Seafood"
                  alt="Meat and seafood"
                  width={800}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-10">
                  <Badge className="w-fit mb-4 bg-white/20 text-white border-none backdrop-blur-sm">Special Deal</Badge>
                  <h3 className="text-3xl font-bold text-white mb-3">Premium Meat & Seafood</h3>
                  <p className="text-white/90 mb-6 max-w-[400px]">
                    Buy one get one free on selected premium cuts. Sustainably sourced and fresh.
                  </p>
                  <Button className="w-fit bg-white text-green-600 hover:bg-gray-100 rounded-full group">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Locations Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-3">Our Locations</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Find a Xhangolli store near you</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[400px] mb-8">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=800&width=1600&text=Store+Locations+Map"
                  alt="Store locations map"
                  width={1600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Find Your Nearest Store</h3>
                <p className="text-white/90 mb-4 max-w-md">We have over 50 locations nationwide to serve you better.</p>
                <Link href="/locations">
                  <Button className="bg-white text-orange-500 hover:bg-gray-100 rounded-full group">
                    View All Locations
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredLocations.map((location) => (
                <Card key={location.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-600">{location.type}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{location.address}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {location.hours}
                      </div>
                      <Link href={`/locations/${location.id}`}>
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/locations">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  View All Locations
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-green-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 to-green-300"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">Subscribe to Our Newsletter</h2>
                <p className="text-white/80">Get the latest deals and special offers straight to your inbox</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1 border-white/30 bg-white/20 placeholder:text-white/60 text-white rounded-full focus:border-white focus:ring-white"
                />
                <Button className="bg-white text-orange-500 hover:bg-gray-100 font-bold rounded-full">Subscribe</Button>
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

// Product Card Component
type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  rating: number;
  reviews: number;
  discount?: number | null;
  trending?: boolean;
  popular?: boolean;
  isNew?: boolean;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="rounded-2xl overflow-hidden group border-0 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <div className="overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg?height=300&width=400"}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {product.discount && (
          <Badge className="absolute top-3 left-3 bg-red-600 font-bold">{product.discount}% OFF</Badge>
        )}

        {product.isNew && <Badge className="absolute top-3 right-3 bg-blue-600 font-bold">NEW</Badge>}

        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl">Add to Cart</Button>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex items-center gap-1 mb-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-gray-500 line-through text-sm">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const categories = [
  { name: "Fresh Produce", image: "/placeholder.svg?height=60&width=60&text=Produce" },
  { name: "Dairy & Eggs", image: "/placeholder.svg?height=60&width=60&text=Dairy" },
  { name: "Meat & Seafood", image: "/placeholder.svg?height=60&width=60&text=Meat" },
  { name: "Bakery", image: "/placeholder.svg?height=60&width=60&text=Bakery" },
  { name: "Frozen Foods", image: "/placeholder.svg?height=60&width=60&text=Frozen" },
  { name: "Beverages", image: "/placeholder.svg?height=60&width=60&text=Beverages" },
]

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 1.99,
    oldPrice: 2.49,
    image: "/placeholder.svg?height=300&width=400&text=Organic+Bananas",
    rating: 4,
    reviews: 42,
    discount: 20,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Fresh Milk",
    price: 3.49,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Fresh+Milk",
    rating: 5,
    reviews: 28,
    discount: null,
    trending: true,
    popular: false,
    isNew: false,
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    price: 2.99,
    oldPrice: 3.99,
    image: "/placeholder.svg?height=300&width=400&text=Whole+Grain+Bread",
    rating: 4,
    reviews: 36,
    discount: 25,
    trending: false,
    popular: true,
    isNew: false,
  },
  {
    id: 4,
    name: "Free Range Eggs",
    price: 4.99,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Free+Range+Eggs",
    rating: 5,
    reviews: 19,
    discount: null,
    trending: false,
    popular: false,
    isNew: true,
  },
  {
    id: 5,
    name: "Organic Avocados (4 pack)",
    price: 6.99,
    oldPrice: 8.99,
    image: "/placeholder.svg?height=300&width=400&text=Organic+Avocados",
    rating: 4,
    reviews: 52,
    discount: 22,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 6,
    name: "Premium Greek Yogurt",
    price: 3.99,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Greek+Yogurt",
    rating: 5,
    reviews: 31,
    discount: null,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 7,
    name: "Fresh Atlantic Salmon Fillet",
    price: 12.99,
    oldPrice: 15.99,
    image: "/placeholder.svg?height=300&width=400&text=Salmon+Fillet",
    rating: 4,
    reviews: 27,
    discount: 18,
    trending: false,
    popular: true,
    isNew: false,
  },
  {
    id: 8,
    name: "Artisanal Sourdough Bread",
    price: 5.49,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Sourdough+Bread",
    rating: 5,
    reviews: 45,
    discount: null,
    trending: false,
    popular: false,
    isNew: true,
  },
]

const featuredLocations = [
  {
    id: 1,
    name: "Xhangolli Downtown",
    address: "123 Main Street, Downtown, City 10001",
    hours: "8:00 AM - 10:00 PM",
    type: "Flagship Store",
    image: "/placeholder.svg?height=200&width=400&text=Downtown+Store",
  },
  {
    id: 2,
    name: "Xhangolli Westside",
    address: "456 West Avenue, Westside, City 10002",
    hours: "7:00 AM - 11:00 PM",
    type: "Superstore",
    image: "/placeholder.svg?height=200&width=400&text=Westside+Store",
  },
  {
    id: 3,
    name: "Xhangolli Eastside",
    address: "789 East Boulevard, Eastside, City 10003",
    hours: "8:00 AM - 9:00 PM",
    type: "Express Store",
    image: "/placeholder.svg?height=200&width=400&text=Eastside+Store",
  },
]

