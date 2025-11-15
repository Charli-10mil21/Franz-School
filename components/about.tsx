import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-6">
              Meet Franz Velasco
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                15+ years of industry experience. Mentored 500+ professionals.
                Proven track record of transforming careers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Franz doesn't teach theory—he teaches what actually works in the real world.
                Direct access. Real results.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <Card className="bg-background">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <p className="text-sm text-muted-foreground mt-2">Professionals Mentored</p>
                  </CardContent>
                </Card>
                <Card className="bg-background">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-4">📸</div>
              <p>Franz's Photo Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
