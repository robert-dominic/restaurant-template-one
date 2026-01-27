"use client"

import { useEffect, useState } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "gallery", "about", "testimonials"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
        // Update URL hash without triggering a scroll
        if (window.location.hash !== `#${current}`) {
          window.history.replaceState(null, "", `#${current}`)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Sync activeSection with URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ["home", "gallery", "about", "testimonials"].includes(hash)) {
      setActiveSection(hash)
    }
  }, [])

  return activeSection
}