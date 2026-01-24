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