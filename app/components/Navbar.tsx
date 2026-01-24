"use client"

import Link from "next/link"
import { X, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import NavLink from "@/app/components/NavLinks"
import Logo from "@/public/logo.svg"
import Telephone from "@/public/telephone.svg"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "menu", "about", "services"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="w-full bg-white fixed top-0 z-45">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/#hero">
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={Logo.src} alt="Logo" className="w-[45px] h-auto" />
            <span className="font-bold mt-2 text-gray-700 text-xl uppercase">The Cozy Table</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="font-medium mt-2 hidden md:flex items-center gap-1.5">
          <NavLink href="#menu" isActive={activeSection === "menu"}>
            Menu
          </NavLink>
          <NavLink href="#about" isActive={activeSection === "about"}>
            About us
          </NavLink>
          <NavLink href="#services" isActive={activeSection === "services"}>
            Services
          </NavLink>
        </ul>

        {/* Desktop CTA */}
        <div className="bg-primary text-white gap-1.5 hidden md:flex items-center px-4 rounded-md hover:bg-primary/90 cursor-pointer">
          <img src={Telephone.src} alt="Phone Icon" className="w-5 h-5" />
          <button className="py-2 text-sm uppercase">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden cursor-pointer ${mobileMenuOpen ? "hidden" : "block"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-gray-700"/>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden z-45 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <ul className="flex flex-col font-bold gap-6 p-8 pt-20">
          <NavLink
            href="#menu"
            isActive={activeSection === "menu"}
            onClick={handleLinkClick}
          >
            Menu
          </NavLink>
          <NavLink
            href="#about"
            isActive={activeSection === "about"}
            onClick={handleLinkClick}
          >
            About us
          </NavLink>
          <NavLink
            href="#services"
            isActive={activeSection === "services"}
            onClick={handleLinkClick}
          >
            Services
          </NavLink>
          <div className="bg-primary text-white flex items-center px-4 py-1 rounded-md cursor-pointer hover:bg-primary/90">
            <img src={Telephone.src} alt="Phone Icon" className="w-5 h-5" />
            <button className="text-white px-2 py-3 text-sm uppercase cursor-pointer">
              Contact Us
            </button>
          </div>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/45 md:hidden z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}