"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-green-600">Tea Tree</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-green-600">
            Services
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-green-600">
            Pricing
          </Link>
          <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-green-600">
            FAQ
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-green-600">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Log in
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Sign up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-4 pt-2">
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                Log in
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">Sign up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
