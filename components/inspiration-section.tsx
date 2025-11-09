import Image from 'next/image';

export function InspirationSection() {
  const inspirations = [
    {
      name: "UT Austin",
      description: "Programas de liderazgo ético en tecnología",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "Illinois State",
      description: "Educación interdisciplinaria en IA",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "UNESCO",
      description: "Recomendaciones sobre la ética de la IA",
      logo: "/placeholder-logo.svg",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Inspiración Global</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuestro enfoque está alineado con las mejores prácticas y recomendaciones de líderes mundiales en educación y tecnología.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Placeholder for a world map SVG */}
            <div className="w-full h-full bg-no-repeat bg-center bg-contain opacity-10" style={{backgroundImage: 'url(/world-map.svg)'}}></div>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {inspirations.map((item, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center flex flex-col items-center shadow-lg">
                <div className="relative w-24 h-12 mb-4">
                  <Image 
                    src={item.logo} 
                    alt={`${item.name} logo`} 
                    layout="fill" 
                    objectFit="contain" 
                    className="filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 text-center shadow-xl">
          <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
            "La IA no sustituye el pensamiento, lo amplifica. El reto es aprender a dirigir esa amplificación con criterio y propósito."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
