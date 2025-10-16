"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { CircuitsSection } from "@/components/circuits-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation"
import { ContactSection } from "@/components/contact-section"
import { BackToTopButton } from "@/components/back-to-top-button"
import { ChatButton } from "@/components/chat-button"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <LoadingAnimation />}</AnimatePresence>

      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <CircuitsSection />
        <StatsSection />
        <ContactSection />
        <Footer />
      </main>

      <BackToTopButton />
      <ChatButton />
    </>
  )
}
