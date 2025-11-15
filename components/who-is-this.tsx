import { Check } from 'lucide-react'

export function WhoIsThis() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-6">
            This Mentoring Is For You If...
          </h2>
          <div className="space-y-4">
            {[
              "You know you can do better but feel stuck.",
              "You want professional guidance from someone who's been there.",
              "You're serious about results and willing to invest in yourself.",
              "You need a roadmap—not generic advice.",
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
