import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Package } from 'lucide-react'

export function Books() {
  return (
    <section id="books" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center max-w-5xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Books Display Here</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-6">
              Exclusive Physical Books
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Go deeper with our comprehensive guides. Designed for practitioners who want real-world frameworks.
              </p>
              <ul className="space-y-3">
                {[
                  "Actionable frameworks you can apply immediately.",
                  "Case studies from real projects.",
                  "Bonus templates and checklists.",
                  "Free updates when new content is released.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Package className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button size="lg">Get the Books</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
