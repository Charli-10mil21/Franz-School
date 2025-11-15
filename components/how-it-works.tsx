import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: 1,
    title: "Schedule Your Call",
    description: "Book a 30-min session to discuss your goals and challenges.",
  },
  {
    number: 2,
    title: "Assessment",
    description: "Franz evaluates your situation and identifies what you need most.",
  },
  {
    number: 3,
    title: "Custom Strategy",
    description: "Receive a personalized roadmap tailored to your specific situation.",
  },
  {
    number: 4,
    title: "Implementation & Support",
    description: "Execute with ongoing feedback and guidance from Franz.",
  },
  {
    number: 5,
    title: "Track & Adjust",
    description: "Monitor progress and adjust strategy based on real-world results.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            How the Process Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Clear, simple, and focused on your results.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
