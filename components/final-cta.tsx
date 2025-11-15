import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center bg-primary text-primary-foreground rounded-2xl p-12 md:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Ready to Get Unstuck?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 text-pretty leading-relaxed">
            Your first step is a simple 30-minute session.
            No pressure. Just honest conversation about your goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Schedule Your Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
