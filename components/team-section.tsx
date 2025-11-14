import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

export function TeamSection() {
  const team = [
    {
      name: "Juan Carlos",
      role: "Coordinador General",
      area: "Educación y Liderazgo",
      image: "/jc.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Jorge",
      role: "Especialista en Tecnología",
      area: "Tecnología e Innovación",
      image: "/jorge.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Marlene",
      role: "Especialista en Ética",
      area: "Ética y Filosofía",
      image: "/marlene.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Ariana",
      role: "Especialista en Psicología",
      area: "Psicología y Bienestar",
      image: "/ari.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Diego",
      role: "Especialista en Comunicación",
      area: "Comunicación Digital",
      image: "/diego.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Aldo",
      role: "Especialista en Datos",
      area: "Análisis de Datos",
      image: "/aldo.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
  ]

  return (
    <section id="equipo" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Conoce a los Expertos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Un equipo interdisciplinario dedicado a guiarte en el uso ético y crítico de la IA.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-background group-hover:border-primary transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.area}</p>
              <div className="flex justify-center gap-4">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
