import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full"></div>
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white">Plazas Limitadas: ¡25 de 30 disponibles!</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Transforma tu Interacción con la IA
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Únete a un grupo selecto de estudiantes y aprende a utilizar la inteligencia artificial de forma crítica, creativa y ética. ¡Inscríbete ahora y asegura tu lugar!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg py-6 px-8 shadow-lg transform hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://forms.gle/eDkxFagakxToFVGG7" target="_blank" rel="noopener noreferrer">
                  Inscríbete Ahora
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white gap-2 text-lg py-6 px-8"
              >
                <Mail className="w-5 h-5" />
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
