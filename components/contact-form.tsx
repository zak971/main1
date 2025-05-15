"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init("IEcd1dEr2NXi9UByb")
      console.log("EmailJS initialized successfully")
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error)
      setErrorMessage("Failed to initialize email service")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all fields")
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "zakriya",
      }

      console.log("Attempting to send email with params:", templateParams)
      
      // First, verify the service and template IDs
      console.log("Using Service ID:", "service_pcgshdk")
      console.log("Using Template ID:", "template_mna8ohm")

      const result = await emailjs.send(
        "service_pcgshdk",
        "template_mna8ohm",
        templateParams
      )
      
      console.log("EmailJS response:", result)

      if (result.text === "OK") {
        console.log("Email sent successfully")
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        console.error("EmailJS returned non-OK status:", result.text)
        throw new Error(result.text || "Failed to send email")
      }
    } catch (error) {
      console.error("Detailed error information:", {
        error,
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined
      })
      setStatus("error")
      setErrorMessage(
        error instanceof Error 
          ? `Error: ${error.message}` 
          : "Failed to send message. Please try again."
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-neutral-900/95 rounded-xl border border-neutral-700/80">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-200 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
          name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-200 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-200 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
            placeholder="Your message..."
          />
        </div>

        <Button 
          type="submit" 
          disabled={status === "sending"}
          className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-2 rounded-lg transition-colors"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  )
}
