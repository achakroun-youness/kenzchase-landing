"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { DestinationBreadcrumb } from "@/components/destination-breadcrumb"
import { cities } from "@/lib/cities-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background pt-20">
        {/* Breadcrumb */}
        <DestinationBreadcrumb />

        {/* Hero Section */}
        <section className="pt-5 px-4">
          <div className="container mx-auto max-w-7xl ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-5"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-brand">
                Nos <span className="text-primary">Destinations</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mt-4">
                Découvrez les trésors cachés du Maroc, une ville à la fois. Choisissez votre prochaine aventure et
                plongez dans l'histoire et la culture de chaque destination.
              </p>
            </motion.div>

            {/* Cities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/destinations/${city.slug}`}>
                    <Card className="h-full p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group rounded-2xl cursor-pointer flex flex-col">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                            {city.name}
                          </h2>
                          <p className="text-sm text-muted-foreground font-medium mt-1">{city.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-pretty line-clamp-3 leading-relaxed flex-grow ">
                        {city.description}
                      </p>

                      {/* Stats Preview */}
                      {city.stats.adventures > 0 && (
                        <div className="flex justify-between gap-6 text-sm border-t border-border pt-4 ">
                          <div>
                            <span className="font-bold text-primary text-base">{city.stats.adventures}</span>
                            <span className="text-muted-foreground ml-1.5">Aventures</span>
                          </div>
                          <div>
                            <span className="font-bold text-primary text-base">{city.stats.treasures}+</span>
                            <span className="text-muted-foreground ml-1.5">Trésors</span>
                          </div>
                        </div>
                      )}

                      <Button
                        variant="outline"
                        className="w-full border-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                      >
                        Découvrir {city.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  )
}
