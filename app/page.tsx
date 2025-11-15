import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhoIsThis } from "@/components/who-is-this"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Books } from "@/components/books"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhoIsThis />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Books />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
