"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you learn about Kenz Chase?", isBot: true }])
  const [inputValue, setInputValue] = useState("")

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: inputValue, isBot: false }])

    // Simple bot responses
    const responses = [
      "Kenz Chase is a gamified tourism app for exploring Marrakech!",
      "You can discover hidden gems, complete quests, and earn rewards.",
      "Download the app to start your adventure in Marrakech!",
      "Our AR features bring the city's history to life.",
      "Join thousands of explorers discovering Marrakech in a new way!",
    ]

    // Add bot response after a delay
    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages((prev) => [...prev, { text: randomResponse, isBot: true }])
    }, 500)

    setInputValue("")
  }

  return (
    <>
      {/* Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col rounded-2xl border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-primary p-4 text-primary-foreground">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <h3 className="font-semibold">Kenz Chase Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 transition-colors hover:bg-primary-foreground/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
                />
                <Button onClick={handleSend} size="icon" className="h-10 w-10 rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
