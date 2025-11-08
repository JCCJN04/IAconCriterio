import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 neural-pattern bg-gradient-to-b from-primary/10 to-transparent">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Aprende a pensar mejor con IA
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          No esperes más. Únete a nuestro taller interdisciplinario y desarrolla un pensamiento crítico para la era
          digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
            asChild
          >
            <a href="https://forms.gle/eDkxFagakxToFVGG7" target="_blank" rel="noopener noreferrer">
              Quiero Participar
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
          >
            Enviar correo
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">📧 Contáctanos para más información o consultas sobre el taller</p>
      </div>
    </section>
  )
}
