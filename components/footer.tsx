"use client"

import { Apple, Play, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-5 mb-10">
          {/* Col 1: L'AVENTURE */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">L'AVENTURE</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#experiences" className="hover:text-foreground transition-colors">Comment ça marche ?</a></li>
              <li><a href="#experiences" className="hover:text-foreground transition-colors">L'Expérience AR</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Le Codex des Trésors</a></li>
              <li><a href="#experiences" className="hover:text-foreground transition-colors">Niveaux & Progression</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Offrir une Aventure (Carte Cadeau)</a></li>
            </ul>
          </div>

          {/* Col 2: EXPLORER PAR VILLE */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">EXPLORER PAR VILLE</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Marrakech</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Rabat</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Fès</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Essaouira</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Tanger</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Voir toutes les destinations...</a></li>
            </ul>
          </div>

          {/* Col 3: EXPLORER PAR THÈME */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">EXPLORER PAR THÈME</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Aventures Royales (Palais & Kasbahs)</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Mystères des Médinas</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Jardins Secrets</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Sur la Voie des Artisans</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-colors">Événements Saisonniers</a></li>
            </ul>
          </div>

          {/* Col 4: KENZ CHASE & VOUS */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">KENZ CHASE & VOUS</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Notre Mission</a></li>
              <li><a href="#pros" className="hover:text-foreground transition-colors">Devenez Partenaire (Hôtels, Restaurants...)</a></li>
              <li><a href="#creer" className="hover:text-foreground transition-colors">Devenez Conteur (Historiens, Guides...)</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Presse & Média</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog des Explorateurs</a></li>
            </ul>
          </div>

          {/* Col 5: AIDE & LÉGAL */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">AIDE & LÉGAL</h4>
            <ul className="space-y-2 text-muted-foreground text-sm mb-4">
              <li><a href="#" className="hover:text-foreground transition-colors">Centre d'Aide (FAQ)</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Nous Contacter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Conditions d'Utilisation</a></li>
            </ul>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8.5a7.5 7.5 0 01-5-1.85V17a7 7 0 11-7-7c.34 0 .67.03 1 .08V12a3 3 0 103 3V3h3.06c.6 2.9 2.99 5.14 5.94 5.5V8.5z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.33 6 7.66V24h-5v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-5V8z"/></svg>
              </a>
            </div>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-primary">Kenz Chase</h3>
            <p className="text-muted-foreground">Le Maroc, Votre Nouveau Terrain de Jeu.</p>
          </div>
          <p>© {new Date().getFullYear()} Kenz Chase. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
