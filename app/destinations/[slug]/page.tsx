"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationBreadcrumb } from "@/components/destination-breadcrumb"
import { DestinationHero } from "@/components/destination-hero"
import { DestinationStats } from "@/components/destination-stats"
import { FeaturedAdventure } from "@/components/featured-adventure"
import { OtherAdventures } from "@/components/other-adventures"
import { NewsletterSection } from "@/components/newsletter-section"
import { DownloadCTA } from "@/components/download-cta"
import { BackToTopButton } from "@/components/back-to-top-button"
import { getCityBySlug } from "@/lib/cities-data"

interface CityPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CityPage({ params }: CityPageProps) {
  const { slug } = use(params)
  const city = getCityBySlug(slug)

  if (!city) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background pt-20">
        {/* Breadcrumb */}
        <DestinationBreadcrumb cityName={city.name} />

        {/* City Hero Section */}
        <DestinationHero
          city={city.name}
          subtitle={city.subtitle}
          description={city.description}
        />

        {/* Stats Section */}
        {city.stats.adventures > 0 && (
          <div className="py-16 ">
            <DestinationStats
              adventures={city.stats.adventures}
              treasures={city.stats.treasures}
              hours={city.stats.hours}
            />
          </div>
        )}

        {/* Featured Adventure */}
        {city.featuredAdventure && (
          <div className="py-8 md:py-12">
            <FeaturedAdventure
              badge={city.featuredAdventure.badge}
              title={city.featuredAdventure.title}
              description={city.featuredAdventure.description}
              location={city.featuredAdventure.location}
              imageUrl={city.featuredAdventure.imageUrl}
            />
          </div>
        )}

        {/* Newsletter Section (for Fès) */}
        {city.hasNewsletter && (
          <div className="py-8 md:py-12 border-t border-border">
            <NewsletterSection
              city={city.name}
              subtitle={city.subtitle}
              description={city.description}
              ctaText={city.newsletterCta || "Me prévenir"}
            />
          </div>
        )}

        {/* Other Adventures */}
        {city.otherAdventures.length > 0 && (
          <div className="py-6">
            <OtherAdventures city={city.name} adventures={city.otherAdventures} />
          </div>
        )}

        {/* Download CTA */}
        <div className=" mt-10">
          <DownloadCTA />
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  )
}

