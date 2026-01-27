import type { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive: boolean
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