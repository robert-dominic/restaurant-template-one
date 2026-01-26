"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const phoneNumber = "234XXXXXXXXXX" // replace later
  const message = "Hello, I'd like to make an enquiry"

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-primary text-white
        shadow-lg
        hover:scale-105 hover:opacity-90
        transition
      "
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
