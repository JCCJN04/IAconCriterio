import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { ValuesSection } from "@/components/values-section"
import { ModulesSection } from "@/components/modules-section"
import { ScamperSection } from "@/components/scamper-section"
import { TeamSection } from "@/components/team-section"
import { InspirationSection } from "@/components/inspiration-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSection />
      <ValuesSection />
      <ModulesSection />
      <ScamperSection />
      <TeamSection />
      <InspirationSection />
      <CallToAction />
      <Footer />
    </main>
  )
}
