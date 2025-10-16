"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Have questions about Kenz Chase? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 text-pretty">
                  Whether you're a tourist planning your Marrakech adventure or a local business interested in
                  partnering with us, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-accent/20 border border-accent/30"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-sm text-muted-foreground">contact@kenzchase.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-accent/20 border border-accent/30"
                >
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Live Chat</h4>
                    <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM GMT</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-2xl bg-card border border-border shadow-lg"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full py-6 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                      Sending...
                    </span>
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-center text-green-600 dark:text-green-400"
                  >
                    Thank you! We'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
