import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-green-600"></div>
                <div className="absolute inset-[2px] rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-br from-green-500 to-orange-500"></div>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                AlbMarket
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your one-stop shop for all your grocery needs with the best prices and quality products. We deliver fresh
              food to your doorstep with care.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Contact Us", "FAQs", "Terms & Conditions", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "About Us" ? "/about" : "#"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              {["Fresh Produce", "Dairy & Eggs", "Meat & Seafood", "Bakery", "Frozen Foods", "Beverages"].map((cat) => (
                <li key={cat}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Contact Us</h3>
            <address className="not-italic space-y-3 text-gray-400">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>123 Grocery Lane, Foodville, FD 12345</span>
              </p>
              <p className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>info@albmarket.com</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>(123) 456-7890</span>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AlbMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

