import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, Users } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: "Faster Results",
    description: "Skip the trial-and-error. Apply proven strategies immediately.",
  },
  {
    icon: Clock,
    title: "Save Months of Work",
    description: "Get answers that typically take years to figure out on your own.",
  },
  {
    icon: Users,
    title: "Direct Access",
    description: "Work with Franz personally. Real support, real accountability.",
  },
]

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            What You Get
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-border bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
