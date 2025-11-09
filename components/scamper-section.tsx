'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScamperSection() {
  const scamperPhases = [
    { letter: "S", word: "Sustituir", description: "¿Qué puedes sustituir en tu proceso de aprendizaje o trabajo por una herramienta de IA? Por ejemplo, usar un generador de texto para crear un primer borrador.", color: "bg-red-500" },
    { letter: "C", word: "Combinar", description: "¿Cómo puedes combinar la IA con otras herramientas o procesos? Por ejemplo, usar un generador de imágenes junto con un editor de fotos tradicional.", color: "bg-orange-500" },
    { letter: "A", word: "Adaptar", description: "¿Cómo puedes adaptar una idea o proceso existente con la ayuda de la IA? Por ejemplo, adaptar un ensayo para diferentes audiencias usando un asistente de escritura.", color: "bg-yellow-500" },
    { letter: "M", word: "Modificar", description: "¿Qué puedes magnificar o minimizar en tu uso de la IA? Por ejemplo, magnificar la fase de lluvia de ideas o minimizar la edición final con IA.", color: "bg-green-500" },
    { letter: "P", word: "Proponer", description: "¿Qué otros usos puedes darle a una herramienta de IA? Por ejemplo, usar un generador de código para aprender un nuevo lenguaje de programación.", color: "bg-blue-500" },
    { letter: "E", word: "Eliminar", description: "¿Qué pasaría si eliminas la IA de una parte de tu proceso? Esto ayuda a identificar dónde es realmente valiosa y dónde es una muleta.", color: "bg-indigo-500" },
    { letter: "R", word: "Reordenar", description: "¿Puedes cambiar el orden de cómo usas la IA en tu flujo de trabajo? Por ejemplo, usarla para investigar al principio en lugar de para editar al final.", color: "bg-purple-500" },
  ]

  const [activePhase, setActivePhase] = useState(scamperPhases[0]);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Innovación con SCAMPER</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Una metodología creativa para desbloquear el potencial de la IA de manera estructurada y crítica.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex flex-col gap-2">
            {scamperPhases.map((phase) => (
              <button
                key={phase.letter}
                onClick={() => setActivePhase(phase)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${activePhase.letter === phase.letter ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-card hover:bg-accent/50'}`}>
                <span className={`font-bold text-xl ${activePhase.letter === phase.letter ? 'text-primary-foreground' : 'text-primary'}`}>{phase.letter}</span> - {phase.word}
              </button>
            ))}
          </div>

          <div className="md:col-span-2 bg-card p-8 rounded-2xl border border-border min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.letter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{activePhase.word}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{activePhase.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
