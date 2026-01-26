import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ 
    href, 
    children, 
    isActive,
    onClick,
   }: NavLinkProps) {
  return (
    <li className="text-[0.85rem] uppercase">
      <Link
        href={href}
        onClick={onClick}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-primary ${isActive ? "text-primary" : "text-gray-600"}`}
      >{children}</Link>
    </li>
  )
}