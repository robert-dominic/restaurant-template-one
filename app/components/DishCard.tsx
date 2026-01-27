import type { DishItem } from "@/app/types"

export default function DishCard({
  title,
  description,
  price,
  image,
}: DishItem) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
      
      {/* Plate Image with Price Badge */}
      <div className="relative mb-6">
        <img
          src={image}
          alt={title}
          className="w-44 h-44 rounded-full object-cover"
        />

        {/* Price Badge */}
        <span className="absolute top-0 right-0 bg-gray-900 text-white text-sm font-bold px-3 py-1.5 rounded-full">
          ${price}
        </span>
      </div>

      {/* Card Content */}
      <h3 className="font-bold text-lg mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  )
}