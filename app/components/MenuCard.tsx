import Link from "next/link"
import Image from "next/image"
import type { MenuItem } from "@/app/types"
import { Flame, Leaf } from "lucide-react"

interface MenuCardProps {
  dish: MenuItem
}

export default function MenuCard({ dish }: MenuCardProps) {
  return (
    <Link href={`/menu/${dish.slug}`}>
      <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition cursor-pointer group h-full flex flex-col">
        {/* Image */}
        <div className="relative mb-4 overflow-hidden rounded-xl h-64 flex-shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex gap-2">
            {dish.isVegetarian && (
              <span className="bg-green-500 text-white p-1.5 rounded-full">
                <Leaf size={14} />
              </span>
            )}
            {dish.isSpicy && (
              <span className="bg-red-500 text-white p-1.5 rounded-full">
                <Flame size={14} />
              </span>
            )}
          </div>

          {/* Price Badge */}
          <span className="absolute bottom-3 right-3 bg-gray-900 text-white text-sm font-bold px-3 py-1.5 rounded-full">
            ${dish.price}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-2">{dish.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{dish.description}</p>
        </div>
      </div>
    </Link>
  )
}