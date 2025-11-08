export function ModulesSection() {
  const modules = [
    {
      number: "0",
      title: "Inicio: El Desafío",
      description: "Introducción al problema de la dependencia de IA y sus implicaciones éticas",
      icon: "🎯",
    },
    {
      number: "1",
      title: "La IA Desmitificada",
      description: "Qué es la IA, cómo funciona, sus errores, sesgos y limitaciones reales",
      icon: "🧠",
    },
    {
      number: "2",
      title: "De Respuestas a Preguntas",
      description: "Técnicas para hacer mejores prompts y aprender a pensar con la IA",
      icon: "💡",
    },
    {
      number: "3",
      title: "Auditoría Crítica (Actividad)",
      description: "Comparar resultados de tareas realizadas con y sin ayuda de IA",
      icon: "🔍",
    },
    {
      number: "4",
      title: "Protocolo Ético y Originalidad",
      description: "Uso responsable de la IA, citación correcta y atribución de contenido",
      icon: "⚖️",
    },
    {
      number: "5",
      title: "Debate Final y Cierre",
      description: "Discusión colaborativa de dilemas éticos reales en la era digital",
      icon: "🎭",
    },
  ]

  return (
    <section id="modulos" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contenido del Taller</h2>
          <p className="text-lg text-muted-foreground">Una experiencia de aprendizaje estructurada en 6 módulos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{module.icon}</div>
                <div className="flex-1">
                  <div className="inline-block px-2 py-1 bg-primary/10 rounded text-xs font-semibold text-primary mb-2">
                    Módulo {module.number}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
                </div>
              </div>
              {index < modules.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
