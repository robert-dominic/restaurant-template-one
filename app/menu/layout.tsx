"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import CategoryNav from "@/app/components/CategoryNav"

export default function MenuLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  
  const showCategoryNav = pathname === "/menu" || pathname.startsWith("/menu/categories/")

  return (
    <div className="min-h-screen bg-gray-50">
      {showCategoryNav && <CategoryNav />}
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}