import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="mb-6 inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <p className="text-accent font-semibold text-sm">📚 Educación ética en IA</p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">IA con Criterio</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Pensamiento crítico en la era digital
          </p>
          <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Aprende a pensar mejor <span className="font-semibold text-primary">con IA</span>, no a dejar que piense por ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group"
              asChild
            >
              <a href="https://forms.gle/eDkxFagakxToFVGG7" target="_blank" rel="noopener noreferrer">
                Inscríbete Ahora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-muted-foreground hover:bg-accent/50"
            >
              Ver temario
            </Button>
          </div>
        </div>
        
        <div className="relative h-80 md:h-full w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
          <Image 
            src="/placeholder.svg"
            alt="Ilustración abstracta de una red neuronal"
            layout="fill"
            objectFit="cover"
            className="rounded-lg opacity-80"
          />
          <div className="absolute bottom-4 right-4 z-20 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-6 py-4 shadow-lg">
            <p className="text-sm text-muted-foreground mb-2">Plazas Disponibles</p>
            <p className="text-3xl font-bold text-primary">25 de 30</p>
          </div>
        </div>
      </div>
    </section>
  )
}
