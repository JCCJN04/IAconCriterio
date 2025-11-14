import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">

        {/* Badge */}
        <div className="mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
          <p className="text-accent font-semibold text-sm">
            📚 Educación ética en IA
          </p>
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          IA con Criterio
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Pensamiento crítico en la era digital
        </p>

        {/* Descripción */}
        <p className="text-lg text-foreground mb-12 leading-relaxed max-w-2xl">
          Aprende a pensar mejor <span className="font-semibold text-primary">con IA</span>, no a dejar que piense por ti.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group w-full sm:w-auto"
            asChild
          >
            <a 
              href="https://forms.gle/eDkxFagakxToFVGG7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscríbete Ahora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border text-muted-foreground hover:bg-accent/50 w-full sm:w-auto"
          >
            Ver temario
          </Button>
        </div>

      </div>
    </section>
  )
}
