import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-green-600">Tea Tree</h3>
            <p className="text-sm text-gray-600">
              Professional lawn care services with affordable monthly subscriptions.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-green-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-green-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-green-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li></li>
              <li>info@teatreeservices.com</li>
              <li>Harlowe Point </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-green-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          © 2025 Tea Tree Lawn Care. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
