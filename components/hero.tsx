import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 neural-pattern bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
          <p className="text-accent font-semibold text-sm">📚 Educación ética en IA</p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">IA con Criterio</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Pensamiento crítico en la era digital
        </p>
        <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Aprende a pensar mejor <span className="font-semibold text-primary">con IA</span>, no a dejar que piense por
          ti.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            asChild
          >
            <a href="https://forms.gle/eDkxFagakxToFVGG7" target="_blank" rel="noopener noreferrer">
              Inscríbete Ahora
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
          >
            Conoce más
          </Button>
        </div>

        {/* Available Seats Badge */}
        <div className="mt-12 flex justify-center">
          <div className="bg-card border border-border rounded-lg px-6 py-4">
            <p className="text-sm text-muted-foreground mb-2">Plazas Disponibles</p>
            <p className="text-3xl font-bold text-primary">25 de 30</p>
          </div>
        </div>
      </div>
    </section>
  )
}
