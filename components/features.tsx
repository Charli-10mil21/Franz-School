import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, TrendingUp } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description:
      "Access structured learning paths with in-depth video lessons, practical exercises, and real-world projects.",
  },
  {
    icon: Users,
    title: "One-on-One Mentoring",
    description:
      "Get personalized guidance tailored to your goals with direct access to Franz for feedback and support.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Learn from years of hands-on experience and proven strategies that deliver real results.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Accelerate your professional development with actionable insights and networking opportunities.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Comprehensive learning resources and personalized support to help you reach your goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
