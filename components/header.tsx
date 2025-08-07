/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Search, Heart, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="py-6 border-b">
                      <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-10 w-10">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-green-600 shadow-lg"></div>
                          <div className="absolute inset-[2px] rounded-full bg-white flex items-center justify-center">
                            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-green-500 to-orange-500"></div>
                          </div>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                          AlbMarket
                        </span>
                      </Link>
                    </div>

                    <nav className="flex-1 py-6">
                      <ul className="space-y-4">
                        <li>
                          <Link href="/" className="text-lg font-medium hover:text-orange-500 transition-colors">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href="/about" className="text-lg font-medium hover:text-orange-500 transition-colors">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/locations"
                            className="text-lg font-medium hover:text-orange-500 transition-colors"
                          >
                            Locations
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-lg font-medium hover:text-orange-500 transition-colors">
                            Categories
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-lg font-medium hover:text-orange-500 transition-colors">
                            Deals
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-lg font-medium hover:text-orange-500 transition-colors">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    <div className="py-6 border-t">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white">
                        Sign In
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-green-600 shadow-lg animate-pulse"></div>
                  <div className="absolute inset-[2px] rounded-full bg-white flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-green-500 to-orange-500"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                  AlbMarket
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="font-medium hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="font-medium hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/locations" className="font-medium hover:text-orange-500 transition-colors">
                Locations
              </Link>
              <Link href="#" className="font-medium hover:text-orange-500 transition-colors">
                Categories
              </Link>
              <Link href="#" className="font-medium hover:text-orange-500 transition-colors">
                Deals
              </Link>
              <Link href="#" className="font-medium hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center relative">
              <div className="relative w-[500px]">
                <Input
                  type="search"
                  placeholder="Search for products, brands and more..."
                  className="pl-10 pr-12 py-6 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-all"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-9 bg-orange-500 hover:bg-orange-600">
                  Search
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative hidden md:flex">
                <Heart className="h-5 w-5 text-gray-700" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-green-600 text-white">
                  5
                </Badge>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-green-600 text-white">
                  3
                </Badge>
              </Button>
              <div className="h-8 w-[1px] bg-gray-200 mx-1 hidden md:block"></div>
              <Button className="hidden md:flex bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gray-50 py-3 border-b hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <Button variant="ghost" className="flex items-center gap-2 font-medium">
                <span>All Categories</span>
              </Button>
              {["Fresh Produce", "Dairy & Eggs", "Meat & Seafood", "Bakery", "Frozen"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm font-medium text-green-600 flex items-center gap-1 hover:underline">
                Today&apos;s Deals
              </Link>
              <Link href="#" className="text-sm font-medium text-orange-500 flex items-center gap-1 hover:underline">
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



