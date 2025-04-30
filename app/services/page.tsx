import { Button } from "@/components/ui/button"
import { CheckCircle2, Leaf, Scissors, Shovel, Sprout, Wrench } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "lawn-mowing",
    name: "Lawn Mowing",
    icon: Scissors,
    description: "Professional lawn mowing service to keep your yard looking neat and well-maintained.",
    features: ["Bi-weekly mowing", "Edge trimming", "Grass clipping removal", "Professional equipment"],
    regularPrice: 180,
    discountedPrice: 54,
  },
  {
    id: "landscaping",
    name: "Landscaping",
    icon: Leaf,
    description: "Transform your outdoor space with our professional landscaping services.",
    features: ["Garden design", "Plant selection", "Mulching", "Decorative stone placement"],
    regularPrice: 300,
    discountedPrice: 90,
  },
  {
    id: "lawn-treatment",
    name: "Lawn Treatment",
    icon: Sprout,
    description: "Keep your lawn healthy and green with our specialized treatment services.",
    features: ["Fertilization", "Weed control", "Pest management", "Soil testing"],
    regularPrice: 200,
    discountedPrice: 60,
  },
  {
    id: "yard-cleanup",
    name: "Yard Cleanup",
    icon: Shovel,
    description: "Comprehensive yard cleanup services to keep your property looking its best.",
    features: ["Leaf removal", "Debris cleanup", "Bush trimming", "Seasonal maintenance"],
    regularPrice: 250,
    discountedPrice: 75,
  },
  {
    id: "equipment-repair",
    name: "Equipment Repair",
    icon: Wrench,
    description: "Expert repair services for your lawn care equipment and machinery.",
    features: ["Mower repair", "Trimmer maintenance", "Parts replacement", "Performance tuning"],
    regularPrice: 150,
    discountedPrice: 45,
  },
]

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Professional lawn care and landscaping services at affordable prices. New customers get 70% off their first
            month!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <service.icon className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900">{service.name}</h2>
                <p className="mb-4 text-gray-600">{service.description}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t bg-gray-50 p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Regular price</span>
                    <span className="text-lg font-medium text-gray-500 line-through">${service.regularPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-600">70% off</span>
                    <span className="text-2xl font-bold text-gray-900">${service.discountedPrice}</span>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Need a custom service?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            We offer customized lawn care solutions tailored to your specific needs. Contact us to discuss your
            requirements.
          </p>
          <Button className="mt-6 bg-green-600 hover:bg-green-700" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
