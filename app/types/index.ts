import type { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive: boolean
    className?: string
    onClick?: () => void
}

export type DishItem = {
    id : string
    title: string
    description: string
    price: number
    image: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export interface MenuItem {
    id: number 
    slug: string
    name: string
    description: string
    price: number
    category: string
    image: string
    ingredients?: string[]
    allergens?: string[]
    isVegetarian?: boolean
    isSpicy?: boolean
}

export interface MenuCategory {
    slug: string
    displayName: string
}