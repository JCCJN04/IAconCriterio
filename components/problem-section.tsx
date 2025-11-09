import { Users, BrainCircuit } from 'lucide-react';

export function ProblemSection() {
  return (
    <section id="problema" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">El Desafío Actual</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">La IA está transformando la educación, pero también presenta nuevos retos para el desarrollo intelectual y profesional de los estudiantes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Los estudiantes universitarios necesitan aprender a usar la Inteligencia Artificial de manera{" "}
              <span className="font-semibold text-primary">ética y equilibrada</span>.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Muchos se sienten <span className="font-semibold text-accent">dependientes de ella</span> y temen perder su
              pensamiento crítico, creatividad y autenticidad. Este taller busca{" "}
              <span className="font-semibold text-primary">disminuir la ansiedad</span> ante la IA y fomentar su uso{" "}
              <span className="font-semibold text-primary">consciente y estratégico</span>.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6 bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-6 border border-primary/10">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">85%</p>
                <p className="text-sm text-foreground">de estudiantes expresan ansiedad sobre el impacto de la IA en sus futuras profesiones.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-gradient-to-br from-accent/10 to-transparent rounded-xl p-6 border border-accent/10">
              <div className="bg-accent/10 text-accent p-3 rounded-full">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">+70%</p>
                <p className="text-sm text-foreground">de los educadores creen que es crucial enseñar a pensar críticamente sobre la IA.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
