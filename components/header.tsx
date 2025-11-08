"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 py-4 md:px-6 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">Σ</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">IA con Criterio</h1>
            <p className="text-xs text-muted-foreground">Pensamiento crítico digital</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            El Problema
          </a>
          <a href="#modulos" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Módulos
          </a>
          <a href="#equipo" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Equipo
          </a>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="https://forms.gle/eDkxFagakxToFVGG7" target="_blank" rel="noopener noreferrer">
              Inscríbete
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <a href="#problema" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                El Problema
              </a>
              <a href="#modulos" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                Módulos
              </a>
              <a href="#equipo" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                Equipo
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="https://forms.gle/eDkxFagakxToFVGG7" target="_blank" rel="noopener noreferrer">
                  Inscríbete
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
