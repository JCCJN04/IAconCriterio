export function TeamSection() {
  const team = [
    {
      name: "Juan Carlos",
      role: "Coordinador General",
      area: "Educación y Liderazgo",
      emoji: "👨‍🏫",
    },
    {
      name: "Jorge",
      role: "Especialista",
      area: "Tecnología e Innovación",
      emoji: "💻",
    },
    {
      name: "Marlene",
      role: "Especialista",
      area: "Ética y Filosofía",
      emoji: "🤔",
    },
    {
      name: "Ariana",
      role: "Especialista",
      area: "Psicología y Bienestar",
      emoji: "🧬",
    },
    {
      name: "Diego",
      role: "Especialista",
      area: "Comunicación Digital",
      emoji: "📱",
    },
    {
      name: "Aldo",
      role: "Especialista",
      area: "Análisis de Datos",
      emoji: "📊",
    },
  ]

  return (
    <section id="equipo" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Equipo Interdisciplinario</h2>
          <p className="text-lg text-muted-foreground">Expertos de múltiples disciplinas aportan perspectivas únicas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all"
            >
              <div className="text-5xl mb-4">{member.emoji}</div>
              <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
              <div className="h-px bg-border mb-3"></div>
              <p className="text-sm text-muted-foreground">{member.area}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl text-center">
          <p className="text-lg text-foreground mb-2 leading-relaxed">
            Cada disciplina aporta una visión única sobre la IA ética, creando una experiencia educativa integral
          </p>
        </div>
      </div>
    </section>
  )
}
