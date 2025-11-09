import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  const navLinks = [
    { href: '#valores', name: 'Valores' },
    { href: '#modulos', name: 'Módulos' },
    { href: '#equipo', name: 'Equipo' },
    { href: '#inspiracion', name: 'Inspiración' },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-2xl text-primary-foreground font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">IA con Criterio</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Un taller interdisciplinario para desarrollar pensamiento crítico en la era de la inteligencia artificial.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <a href="mailto:info@iaconcriterio.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              info@iaconcriterio.com
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} IA con Criterio. Un proyecto de la Universidad de Monterrey.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
