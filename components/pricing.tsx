import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Course Access",
    price: "$99",
    period: "one-time",
    description: "Perfect for self-paced learners",
    features: [
      "Access to all course materials",
      "Lifetime updates",
      "Community forum access",
      "Certificate of completion",
    ],
  },
  {
    name: "Mentoring",
    price: "$299",
    period: "per month",
    description: "Personalized guidance for faster growth",
    features: [
      "Everything in Course Access",
      "2 one-on-one sessions per month",
      "Direct messaging support",
      "Personalized learning plan",
      "Career guidance",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$599",
    period: "per month",
    description: "Maximum support and accountability",
    features: [
      "Everything in Mentoring",
      "Weekly one-on-one sessions",
      "Priority support",
      "Code reviews",
      "Interview preparation",
      "Networking introductions",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Choose Your Path</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Select the plan that best fits your learning style and career goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`border-border bg-card relative ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
