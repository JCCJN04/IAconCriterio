export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">Σ</span>
              </div>
              <h3 className="font-bold text-foreground">IA con Criterio</h3>
            </div>
            <p className="text-sm text-muted-foreground">Pensamiento crítico en la era digital</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#problema" className="text-muted-foreground hover:text-primary transition-colors">
                  El Desafío
                </a>
              </li>
              <li>
                <a href="#modulos" className="text-muted-foreground hover:text-primary transition-colors">
                  Módulos
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-muted-foreground hover:text-primary transition-colors">
                  Equipo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@iaconciterio.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@iaconciterio.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-border mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} IA con Criterio. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
