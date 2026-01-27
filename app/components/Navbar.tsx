"use client"

import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import NavLink from "@/app/components/NavLinks"
import MobileMenu from "@/app/components/MobileMenu"
import { useActiveSection } from "@/app/hooks/useActiveSection"
import Logo from "@/public/logo.svg"

export default function Navbar() {
  const pathname = usePathname()
  const activeSection = useActiveSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white fixed top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={Logo.src} alt="Logo" className="w-[45px] h-auto" />
          <span className="font-bold mt-2 text-gray-700 text-[1.15rem] lg:text-xl uppercase">
            The Cozy Table
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="font-medium mt-2 hidden md:flex items-center gap-1.5">
          <NavLink href="/#home" isActive={activeSection === "home"}>
            Home
          </NavLink>
          <NavLink href="/#gallery" isActive={activeSection === "gallery"}>
            Gallery
          </NavLink>
          <NavLink href="/#about" isActive={activeSection === "about"}>
            About us
          </NavLink>
          <NavLink href="/menu" isActive={pathname === "/menu"}>
            Menu
          </NavLink>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden cursor-pointer ${mobileMenuOpen ? "hidden" : "block"}`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}