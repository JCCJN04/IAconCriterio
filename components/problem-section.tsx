export function ProblemSection() {
  return (
    <section id="problema" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">El Desafío</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Los estudiantes universitarios necesitan aprender a usar la Inteligencia Artificial de manera{" "}
            <span className="font-semibold text-primary">ética y equilibrada</span>.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Muchos se sienten <span className="font-semibold text-accent">dependientes de ella</span> y temen perder su
            pensamiento crítico, creatividad y autenticidad. Este taller busca{" "}
            <span className="font-semibold text-primary">disminuir la ansiedad</span> ante la IA y fomentar su uso{" "}
            <span className="font-semibold text-primary">consciente y equilibrado</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-6 border border-primary/10">
            <p className="text-3xl font-bold text-primary mb-2">85%</p>
            <p className="text-sm text-foreground">de estudiantes expresan ansiedad sobre la IA</p>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-transparent rounded-xl p-6 border border-accent/10">
            <p className="text-3xl font-bold text-accent mb-2">3+</p>
            <p className="text-sm text-foreground">disciplinas en nuestro equipo interdisciplinario</p>
          </div>
        </div>
      </div>
    </section>
  )
}
