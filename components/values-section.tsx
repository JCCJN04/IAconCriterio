import { Brain, Lightbulb, Scale, Sparkles } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Brain,
      title: "Pensamiento Crítico",
      description: "Cuestiona, analiza y evalúa la información generada por IA",
    },
    {
      icon: Lightbulb,
      title: "Creatividad",
      description: "Usa la IA como herramienta para amplificar tus ideas originales",
    },
    {
      icon: Scale,
      title: "Ética Digital",
      description: "Actúa responsablemente en el uso y generación de contenido con IA",
    },
    {
      icon: Sparkles,
      title: "Autenticidad",
      description: "Mantén tu voz única y perspectiva personal en todo lo que haces",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Valores del Taller</h2>
          <p className="text-lg text-muted-foreground">Lo que nos guía en la educación ética con IA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
