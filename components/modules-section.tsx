import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle } from 'lucide-react';

export function ModulesSection() {
  const modules = [
    {
      title: "Módulo 1: La IA Desmitificada",
      description: "Entender qué es la IA, cómo funciona, y reconocer sus sesgos y limitaciones para usarla con una perspectiva informada.",
      learnings: [
        "Diferenciar entre IA generativa y otros tipos de IA.",
        "Identificar errores y sesgos comunes en modelos de lenguaje.",
        "Evaluar la fiabilidad de la información generada por IA."
      ]
    },
    {
      title: "Módulo 2: El Arte de Preguntar",
      description: "Aprender a formular prompts efectivos que transformen a la IA de un simple ejecutor a un colaborador creativo y analítico.",
      learnings: [
        "Aplicar técnicas de 'prompt engineering' para obtener mejores resultados.",
        "Usar la IA para explorar ideas, no solo para obtener respuestas.",
        "Fomentar un diálogo iterativo con la IA para refinar el pensamiento."
      ]
    },
    {
      title: "Módulo 3: Protocolo Ético y Voz Propia",
      description: "Establecer un marco para el uso ético de la IA, asegurando la integridad académica y la originalidad del trabajo.",
      learnings: [
        "Implementar un protocolo para el uso responsable de herramientas de IA.",
        "Citar y atribuir correctamente contenido generado o asistido por IA.",
        "Desarrollar una voz auténtica que integre la IA como herramienta, no como fuente."
      ]
    },
    {
      title: "Módulo 4: Integración Práctica y Debate",
      description: "Aplicar lo aprendido en un debate sobre dilemas éticos contemporáneos y presentar un proyecto final que demuestre un uso consciente de la IA.",
      learnings: [
        "Analizar y debatir sobre casos reales de ética en IA.",
        "Construir un proyecto que refleje un uso equilibrado y crítico de la IA.",
        "Presentar conclusiones y reflexiones sobre el rol de la IA en su disciplina."
      ]
    },
  ]

  return (
    <section id="modulos" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">¿Qué Aprenderás?</h2>
          <p className="text-lg text-muted-foreground">Un temario diseñado para darte control y confianza en la era de la IA.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {modules.map((module, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                {module.title}
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground mb-6">{module.description}</p>
                <ul className="space-y-3">
                  {module.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
