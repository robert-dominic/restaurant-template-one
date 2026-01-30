"use client"

import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import NavLink from "@/app/components/NavLinks"
import MobileMenu from "@/app/components/MobileMenu"
import { useActiveSection } from "@/app/hooks/useActiveSection"

export default function Navbar() {
  const pathname = usePathname()
  const activeSection = useActiveSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white md:fixed">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
          <span className="logo-text text-2xl font-bold">Mama's Kitchen</span>

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
          <NavLink href="/menu" isActive={pathname.startsWith("/menu")}>
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