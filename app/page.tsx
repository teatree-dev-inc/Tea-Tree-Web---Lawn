import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle2, Clock, Settings } from "lucide-react"
import ServiceFeature from "@/components/service-feature"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800">
                70% Off for New Customers
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Professional Lawn Care Made Simple
              </h1>
              <p className="text-lg text-gray-600">
                Subscribe to our affordable lawn care service and enjoy a beautiful yard without the hassle.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=600&auto=format&fit=crop"
                alt="Green leaf closeup"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Why Choose Tea Tree</h2>
            <p className="mt-4 text-lg text-gray-600">We make lawn care simple, reliable, and affordable</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ServiceFeature
              icon={<Calendar className="h-6 w-6 text-green-600" />}
              title="Bi-weekly Service"
              description="Your lawn gets mowed twice per month, keeping it neat and healthy."
            />
            <ServiceFeature
              icon={<CheckCircle2 className="h-6 w-6 text-green-600" />}
              title="No Contracts"
              description="Subscribe month-to-month and cancel anytime with no penalties."
            />
            <ServiceFeature
              icon={<Clock className="h-6 w-6 text-green-600" />}
              title="Reliable Schedule"
              description="Know exactly when your lawn will be serviced with our predictable schedule."
            />
            <ServiceFeature
              icon={<Settings className="h-6 w-6 text-green-600" />}
              title="Professional Service"
              description="Experienced lawn care professionals using quality equipment."
            />
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-green-600">PRICING</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Simple, affordable pricing</h2>
            <p className="mt-4 text-lg text-gray-600">One simple plan that covers all your lawn care needs.</p>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border bg-white shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Monthly Subscription</h3>
                <p className="mt-4 text-gray-600">
                  Get your lawn mowed twice per month with our professional service. Available exclusively for Harlowe
                  Point and Pagehurst residents.
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-green-600">What's included</h4>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                      <span>Two mowings per month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                      <span>Grass clipping removal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                      <span>Reliable scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                      <span>Professional equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                      <span>Edge trimming</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                      <span>Easy online management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-gray-50 p-8">
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-600">Monthly subscription</span>
                  <div className="mt-2 flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900">$30</span>
                    <span className="ml-2 text-gray-600">/month</span>
                  </div>

                  <Button className="mt-6 w-full bg-green-600 hover:bg-green-700">Get started</Button>

                  <p className="mt-4 text-sm text-gray-600">Cancel anytime. No contracts or hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Sarah Johnson"
              location="Harlowe Point"
              quote="Tea Tree has been taking care of my lawn for 6 months now. The service is reliable and my yard has never looked better!"
              rating={5}
            />
            <TestimonialCard
              name="Michael Chen"
              location="Pagehurst"
              quote="I love that I don't have to worry about my lawn anymore. The team is professional and the pricing is straightforward."
              rating={5}
            />
            <TestimonialCard
              name="Jessica Williams"
              location="Harlowe Point"
              quote="The online management system makes it easy to communicate with the team. Great service at a fair price."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready for a beautiful, hassle-free lawn?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
            Join our growing community of satisfied customers and enjoy 70% off your first month.
          </p>
          <Button size="lg" className="mt-8 bg-white text-green-600 hover:bg-green-50" asChild>
            <Link href="/pricing">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
