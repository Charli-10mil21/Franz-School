import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Get Unstuck. Grow Faster.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed md:text-xl">
            Expert mentoring and courses designed to accelerate your results.
            Skip the guesswork. Get proven strategies that work.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Schedule Your Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
