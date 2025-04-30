import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-green-600">FAQ</span>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">Frequently asked questions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Find answers to common questions about our lawn care service.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="rounded-lg border bg-white px-6">
              <AccordionTrigger className="text-left text-lg font-medium">
                How often will my lawn be mowed?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Your lawn will be mowed twice per month (every other week) as part of our standard subscription service.
                This frequency is optimal for maintaining a healthy and attractive lawn throughout the growing season.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="rounded-lg border bg-white px-6">
              <AccordionTrigger className="text-left text-lg font-medium">
                What neighborhoods do you service?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We currently service the Harlowe Point and Pagehurst neighborhoods. We're expanding to new areas soon,
                so please contact us if you're interested in service outside these areas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="rounded-lg border bg-white px-6">
              <AccordionTrigger className="text-left text-lg font-medium">
                Can I pause my subscription?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, you can pause your subscription at any time through your online account. This is useful for
                vacations or during winter months when lawn care may not be needed. You won't be charged while your
                subscription is paused.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="rounded-lg border bg-white px-6">
              <AccordionTrigger className="text-left text-lg font-medium">
                What happens if it rains on my scheduled mow day?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                If it rains on your scheduled service day, we'll reschedule your mowing for the next available day when
                conditions are suitable. We'll notify you of any schedule changes via email or text message.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="rounded-lg border bg-white px-6">
              <AccordionTrigger className="text-left text-lg font-medium">
                How do I cancel my subscription?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You can cancel your subscription at any time through your online account or by contacting our customer
                service team. There are no cancellation fees or penalties. Your service will continue until the end of
                your current billing period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="rounded-lg border bg-white px-6">
              <AccordionTrigger className="text-left text-lg font-medium">
                Do I need to be home during the service?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No, you don't need to be home during the service. Our team will access your yard and complete the
                service whether you're home or not. We'll leave a service completion notification so you know we've been
                there.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="rounded-lg border bg-white px-6">
              <AccordionTrigger className="text-left text-lg font-medium">
                Do you offer any additional services?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we offer additional services such as fertilization, weed control, seasonal cleanup, and landscaping
                services for an additional fee. Contact us for more information about these services and their pricing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
