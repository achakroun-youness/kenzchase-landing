"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Destinations", href: "/destinations" },
    { label: "Expériences", href: "#experiences" },
    { label: "Pour les Pros", href: "#pros" },
    { label: "Créer une Aventure", href: "#creer" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <nav className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Image
                src="/icons/logo.png" 
                alt="Kenz Chase Logo"
                width={40}
                height={40}
                priority
              />
              <span className="text-xl mx-2 font-bold text-foreground font-brand">Kenz Chase</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link key={index} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </motion.a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90">Télécharger l'App</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navItems.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90">Télécharger l'App</Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}