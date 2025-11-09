import { Brain, Lightbulb, Scale, Sparkles } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Brain,
      title: "Pensamiento Crítico",
      description: "Cuestiona, analiza y evalúa la información generada por IA para formar un juicio propio.",
    },
    {
      icon: Lightbulb,
      title: "Creatividad Aumentada",
      description: "Usa la IA como un colaborador para expandir tus ideas y explorar nuevas posibilidades.",
    },
    {
      icon: Scale,
      title: "Ética y Responsabilidad",
      description: "Comprende y aplica principios éticos en el uso de la IA, promoviendo un ecosistema digital justo.",
    },
    {
      icon: Sparkles,
      title: "Voz Auténtica",
      description: "Desarrolla y mantén tu perspectiva única, usando la IA para potenciar tu mensaje, no para reemplazarlo.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nuestros Pilares</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Formamos mentes críticas y creativas que lideran con integridad en la era de la inteligencia artificial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 border-4 border-background">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
