import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, location, quote, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="mt-4 text-gray-600">"{quote}"</p>
      <div className="mt-6">
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
  )
}
