export function InspirationSection() {
  const inspirations = [
    {
      name: "UT Austin",
      description: "Programas de liderazgo ético en tecnología",
      icon: "🏛️",
    },
    {
      name: "Illinois State",
      description: "Educación interdisciplinaria en IA",
      icon: "🎓",
    },
    {
      name: "UNESCO",
      description: "Recomendaciones en ética de la IA",
      icon: "🌍",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Inspiración Global</h2>
          <p className="text-lg text-muted-foreground">
            Alineados con tendencias internacionales en educación ética con IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirations.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-bold text-xl text-foreground mb-2">{item.name}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-xl p-8 md:p-12 text-center">
          <p className="text-2xl font-bold text-foreground mb-4 leading-relaxed">
            "La IA no sustituye tu pensamiento; lo amplifica cuando sabes usarla con criterio."
          </p>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
