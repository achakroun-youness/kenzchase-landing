"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const screenshots = [
  {
    title: "Easy Login",
    description: "Sign in with Google or Apple for quick access",
    image: "/screens/1.png",
  },
  {
    title: "Nearby Circuits",
    description: "Discover interesting circuits around your location",
    image: "/screens/2.png",
  },
  {
    title: "Interactive Map",
    description: "Follow circuit paths with timing information",
    image: "/screens/3.png",
  },
  {
    title: "Quest Introduction",
    description: "Get started with engaging challenges and adventures",
    image: "/screens/4.png",
  },
];

export function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance font-brand">
            See It In <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore the app interface and discover all the features
          </p>
        </motion.div>

        <div className="hidden md:flex justify-center items-center gap-4 mb-12">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transition-all duration-300 flex-shrink-0 ${
                activeIndex === index ? "scale-110" : "scale-90 opacity-60"
              }`}
            >
              <div className="w-48 h-96 rounded-3xl border-4 border-card shadow-2xl overflow-hidden">
                {/* Replace gradient background with actual screenshot */}
                <div className="relative h-full w-full">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 flex flex-col items-center justify-end p-6 text-center">
                    <h4 className="font-bold text-sm mb-2 text-foreground">
                      {screenshot.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden relative h-[450px] flex items-center justify-center mb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              className="absolute"
            >
              <div className="w-64 h-[420px] rounded-3xl border-4 border-card shadow-2xl overflow-hidden">
                {/* Replace gradient background with actual screenshot */}
                <div className="relative h-full w-full">
                  <Image
                    src={screenshots[activeIndex].image}
                    alt={screenshots[activeIndex].title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 flex flex-col items-center justify-end p-6 text-center">
                    <h4 className="font-bold text-lg mb-3 text-foreground">
                      {screenshots[activeIndex].title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {screenshots[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
