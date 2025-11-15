import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most people see tangible results within 2-4 weeks of starting. The timeline depends on your situation and commitment to implementation.",
  },
  {
    question: "What if I'm a complete beginner?",
    answer:
      "Perfect. Franz has mentored beginners to advanced practitioners. Sessions are customized to your current level.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes. If you're not satisfied after your first session, we'll provide a full refund. No questions asked.",
  },
  {
    question: "How often should I have mentoring sessions?",
    answer:
      "We recommend starting with bi-weekly sessions for the first month, then adjusting based on your needs and progress.",
  },
  {
    question: "Do courses expire? Can I access them forever?",
    answer:
      "Course access is lifetime. You get all future updates included. No subscription, no expiration.",
  },
  {
    question: "What's the best way to get started?",
    answer:
      "Schedule a 30-minute session. We'll discuss your goals, see if we're a good fit, and create a plan that works for you.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
