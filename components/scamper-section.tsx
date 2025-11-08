export function ScamperSection() {
  const scamperPhases = [
    { letter: "S", word: "Sustituir", description: "Reemplazar componentes tradicionales por alternativas IA" },
    { letter: "C", word: "Combinar", description: "Integrar múltiples herramientas de IA de forma estratégica" },
    { letter: "A", word: "Adaptar", description: "Modificar procesos existentes para incluir IA responsablemente" },
    { letter: "M", word: "Modificar", description: "Cambiar características o atributos del uso de IA" },
    { letter: "P", word: "Poner otro uso", description: "Explorar nuevas aplicaciones éticas de la tecnología" },
    { letter: "E", word: "Eliminar", description: "Remover lo innecesario para optimizar y simplificar" },
    { letter: "R", word: "Reordenar", description: "Reorganizar secuencias y procesos para mayor efectividad" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 neural-pattern bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Metodología SCAMPER</h2>
          <p className="text-lg text-muted-foreground">7 fases para innovar con pensamiento crítico</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scamperPhases.map((phase, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-lg text-accent">{phase.letter}</span>
                </div>
                <h3 className="font-bold text-foreground">{phase.word}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
