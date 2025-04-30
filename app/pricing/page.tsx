import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-green-600">PRICING</span>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">Simple, affordable pricing</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            One simple plan that covers all your lawn care needs. No complicated packages or hidden fees.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900">Monthly Subscription</h2>
                <p className="mt-4 text-gray-600">
                  Get your lawn mowed twice per month with our professional service. Available exclusively for Harlowe
                  Point and Pagehurst residents.
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-green-600">What's included</h3>
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

                  <div className="mt-4 rounded-md bg-green-100 p-3 text-sm text-green-800">
                    <p className="font-medium">70% off for new customers!</p>
                    <p className="mt-1">First month only $9</p>
                  </div>

                  <Button className="mt-6 w-full bg-green-600 hover:bg-green-700">Get started</Button>

                  <p className="mt-4 text-sm text-gray-600">Cancel anytime. No contracts or hidden fees.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-medium text-gray-900">What's included in the service?</h3>
                <p className="mt-2 text-gray-600">
                  Our standard service includes lawn mowing, edge trimming, and grass clipping removal. We mow your lawn
                  twice per month on a regular schedule.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-medium text-gray-900">Do you offer additional services?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer additional services such as fertilization, weed control, and seasonal cleanup for an
                  additional fee. Contact us for more information and pricing.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-medium text-gray-900">How do I cancel my subscription?</h3>
                <p className="mt-2 text-gray-600">
                  You can cancel your subscription at any time through your online account or by contacting our customer
                  service team. There are no cancellation fees or penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
