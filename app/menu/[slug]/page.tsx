import { getDishBySlug } from "@/app/lib/menu"
import { notFound } from "next/navigation"
import { ArrowLeft, Flame, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface DishDetailProps {
    params: Promise<{ slug: string }>
}

export default async function DishDetailPage({ params }: DishDetailProps) {
  const { slug } = await params
  const dish = getDishBySlug(slug)

  if (!dish) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-12 md:pt-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/menu" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition">
          <ArrowLeft size={20} />
          Back to Menu
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                {dish.isVegetarian && (
                  <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                    <Leaf size={16} /> Vegetarian
                  </span>
                )}
                {dish.isSpicy && (
                  <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                    <Flame size={16} /> Spicy
                  </span>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12">
              <h1 className="text-4xl font-bold mb-4">{dish.name}</h1>
              <p className="text-3xl text-primary font-bold mb-6">${dish.price}</p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {dish.description}
              </p>

              {/* Ingredients */}
              {dish.ingredients && dish.ingredients.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Ingredients</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {dish.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Allergens */}
              {dish.allergens && dish.allergens.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Allergens</h3>
                  <p className="text-red-600">{dish.allergens.join(", ")}</p>
                </div>
              )}

              {/* CTA */}
              <a 
                href={`https://wa.me/231XXXXXXXXXX?text=${encodeURIComponent(`Hi! I'd like to order: ${dish.name} ($${dish.price})`)}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:opacity-90 transition">
                  Order Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}