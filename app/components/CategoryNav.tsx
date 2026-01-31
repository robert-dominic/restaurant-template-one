"use client"

import { usePathname } from "next/navigation"
import NavLink from "@/app/components/NavLinks"
import { getAllCategories } from "@/app/lib/menu"
import { Filter } from "lucide-react"
import { useEffect } from "react"

export default function CategoryNav() {
  const pathname = usePathname()
  const categories = getAllCategories()

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"})
  }, [pathname])

  return (
    <div className="sticky top-[60px] z-40 w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <nav className="overflow-x-auto scrollbar-hide">
          <ul className="flex whitespace-nowrap gap-1 px-6 py-4">
            <Filter size={20} className="text-gray-600 flex-shrink-0" />
            <NavLink href="/menu" isActive={pathname === "/menu"}>
              All
            </NavLink>

            {categories
              .filter(cat => cat.slug !== "all")
              .map(category => (
                <NavLink
                  key={category.slug}
                  href={`/menu/categories/${category.slug}`}
                  isActive={pathname === `/menu/categories/${category.slug}`}
                >
                  {category.displayName}
                </NavLink>
              ))}
          </ul>
        </nav>
        {/* Faded edge */}
        <div className="absolute top-0 right-0 w-12 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}