import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ChevronLeft, Star, Search, Grid3X3, Grid2X2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-12 bg-gradient-to-r from-blue-600 to-red-600 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1600')] opacity-10 mix-blend-overlay bg-fixed"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
              <p className="text-lg text-white/90 mb-6">Browse our complete selection of high-quality products</p>

              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="pl-12 pr-4 py-6 rounded-full border-2 border-white/30 bg-white/10 placeholder:text-white/60 text-white focus:border-white focus:ring-white"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-blue-600 hover:bg-gray-100">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-gray-900">All Products</span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="w-full lg:w-1/4">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Reset All
                    </Button>
                  </div>

                  <Accordion type="multiple" defaultValue={["categories", "price", "rating"]}>
                    <AccordionItem value="categories">
                      <AccordionTrigger className="text-lg font-medium">Categories</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <div key={category.name} className="flex items-center space-x-2">
                              <Checkbox id={`category-${category.name}`} />
                              <label
                                htmlFor={`category-${category.name}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {category.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="price">
                      <AccordionTrigger className="text-lg font-medium">Price Range</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <Slider defaultValue={[0, 50]} max={100} step={1} />
                          <div className="flex items-center justify-between">
                            <div className="bg-white border rounded px-3 py-1 text-sm">$0</div>
                            <div className="text-gray-500">to</div>
                            <div className="bg-white border rounded px-3 py-1 text-sm">$50</div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rating">
                      <AccordionTrigger className="text-lg font-medium">Rating</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center space-x-2">
                              <Checkbox id={`rating-${rating}`} />
                              <label
                                htmlFor={`rating-${rating}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                              >
                                {Array(5)
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                    />
                                  ))}
                                <span className="ml-1">{rating === 5 ? "& up" : "& up"}</span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="availability">
                      <AccordionTrigger className="text-lg font-medium">Availability</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="in-stock" />
                            <label
                              htmlFor="in-stock"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              In Stock
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="out-of-stock" />
                            <label
                              htmlFor="out-of-stock"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Out of Stock
                            </label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="discount">
                      <AccordionTrigger className="text-lg font-medium">Discount</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {["10% or more", "20% or more", "30% or more", "40% or more", "50% or more"].map(
                            (discount) => (
                              <div key={discount} className="flex items-center space-x-2">
                                <Checkbox id={`discount-${discount}`} />
                                <label
                                  htmlFor={`discount-${discount}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {discount}
                                </label>
                              </div>
                            ),
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="w-full lg:w-3/4">
                {/* Sorting and View Options */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600">Showing 1-24 of 156 products</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Sort by:</span>
                      <Select defaultValue="featured">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="featured">Featured</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="newest">Newest Arrivals</SelectItem>
                          <SelectItem value="rating">Highest Rated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center border rounded-lg">
                      <Button variant="ghost" size="icon" className="rounded-r-none">
                        <Grid3X3 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-l-none">
                        <Grid2X2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    {[1, 2, 3, 4, 5].map((page) => (
                      <Button
                        key={page}
                        variant={page === 1 ? "default" : "outline"}
                        className={`rounded-full w-10 h-10 ${page === 1 ? "bg-blue-600" : ""}`}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button variant="outline" size="icon" className="rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {recentlyViewed.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
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
function ProductCard({ product }) {
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
          <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">Add to Cart</Button>
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
  { name: "Fresh Produce", count: 42 },
  { name: "Dairy & Eggs", count: 36 },
  { name: "Meat & Seafood", count: 28 },
  { name: "Bakery", count: 24 },
  { name: "Frozen Foods", count: 30 },
  { name: "Beverages", count: 38 },
  { name: "Snacks", count: 45 },
  { name: "Canned Goods", count: 22 },
]

// Extended product list for all products page
const allProducts = [
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
  {
    id: 9,
    name: "Organic Strawberries",
    price: 4.99,
    oldPrice: 5.99,
    image: "/placeholder.svg?height=300&width=400&text=Organic+Strawberries",
    rating: 4,
    reviews: 38,
    discount: 15,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 10,
    name: "Almond Milk",
    price: 3.79,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Almond+Milk",
    rating: 4,
    reviews: 24,
    discount: null,
    trending: false,
    popular: true,
    isNew: false,
  },
  {
    id: 11,
    name: "Grass-Fed Ground Beef",
    price: 8.99,
    oldPrice: 10.99,
    image: "/placeholder.svg?height=300&width=400&text=Ground+Beef",
    rating: 5,
    reviews: 33,
    discount: 18,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 12,
    name: "Organic Baby Spinach",
    price: 3.49,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Baby+Spinach",
    rating: 4,
    reviews: 29,
    discount: null,
    trending: false,
    popular: false,
    isNew: true,
  },
  {
    id: 13,
    name: "Chocolate Chip Cookies",
    price: 4.29,
    oldPrice: 4.99,
    image: "/placeholder.svg?height=300&width=400&text=Chocolate+Cookies",
    rating: 4,
    reviews: 47,
    discount: 14,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 14,
    name: "Cold Brew Coffee",
    price: 4.49,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Cold+Brew",
    rating: 5,
    reviews: 36,
    discount: null,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 15,
    name: "Organic Honey",
    price: 7.99,
    oldPrice: 9.99,
    image: "/placeholder.svg?height=300&width=400&text=Organic+Honey",
    rating: 5,
    reviews: 41,
    discount: 20,
    trending: false,
    popular: true,
    isNew: false,
  },
  {
    id: 16,
    name: "Gluten-Free Pasta",
    price: 3.99,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Gluten+Free+Pasta",
    rating: 4,
    reviews: 22,
    discount: null,
    trending: false,
    popular: false,
    isNew: true,
  },
  {
    id: 17,
    name: "Organic Blueberries",
    price: 5.99,
    oldPrice: 6.99,
    image: "/placeholder.svg?height=300&width=400&text=Organic+Blueberries",
    rating: 4,
    reviews: 34,
    discount: 14,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 18,
    name: "Extra Virgin Olive Oil",
    price: 12.99,
    oldPrice: 15.99,
    image: "/placeholder.svg?height=300&width=400&text=Olive+Oil",
    rating: 5,
    reviews: 48,
    discount: 19,
    trending: false,
    popular: true,
    isNew: false,
  },
]

// Recently viewed products
const recentlyViewed = [
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
    id: 11,
    name: "Grass-Fed Ground Beef",
    price: 8.99,
    oldPrice: 10.99,
    image: "/placeholder.svg?height=300&width=400&text=Ground+Beef",
    rating: 5,
    reviews: 33,
    discount: 18,
    trending: true,
    popular: true,
    isNew: false,
  },
  {
    id: 14,
    name: "Cold Brew Coffee",
    price: 4.49,
    oldPrice: null,
    image: "/placeholder.svg?height=300&width=400&text=Cold+Brew",
    rating: 5,
    reviews: 36,
    discount: null,
    trending: true,
    popular: true,
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
]

