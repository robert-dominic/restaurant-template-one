"use client"

import { X } from "lucide-react"
import { usePathname } from "next/navigation"
import NavLink from "@/app/components/NavLinks"

interface MobileMenuProps {
  isOpen: boolean
  activeSection: string
  onClose: () => void
}

export default function MobileMenu({ isOpen, activeSection, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      > 
        <div className="flex justify-between items-center p-3">
          <span className="logo-text text-xl font-bold mt-2">Mama's Kitchen</span>
          {/* Close Button */}
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="absolute top-6 right-6"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>          

        <ul className="flex flex-col font-bold gap-6 p-8">
          <NavLink href="/#home" isActive={activeSection === "home"} onClick={onClose}>
            Home
          </NavLink>
          <NavLink href="/menu" isActive={pathname.startsWith("/menu")} onClick={onClose}>
            Menu
          </NavLink>
          <NavLink href="/#gallery" isActive={activeSection === "gallery"} onClick={onClose}>
            Gallery
          </NavLink>
          <NavLink href="/#about" isActive={activeSection === "about"} onClick={onClose}>
            About us
          </NavLink>
          <NavLink href="/#testimonials" isActive={activeSection === "testimonials"} onClick={onClose}>
            Testimonials
          </NavLink>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/45 md:hidden z-40"
          onClick={onClose}
        />
      )}
    </>
  )
}