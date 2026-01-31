import type { CategoryPageProps } from "@/app/types"
import { getDishesByCategory, getAllCategories } from "@/app/lib/menu"
import MenuCard from "@/app/components/MenuCard"
import { notFound } from "next/navigation"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params

  const categories = getAllCategories()
  const category = categories.find(cat => cat.slug === categorySlug)

  if (!category) notFound()

  const dishes = getDishesByCategory(categorySlug)

  return (
    <main>
      <div className="mb-10 md:pt-16">
        <h1 className="text-4xl font-bold mb-2">
          {category.displayName}
        </h1>
        <p className="text-gray-600">
          {dishes.length} items available
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map(dish => (
          <MenuCard key={dish.id} dish={dish} />
        ))}
      </div>
    </main>
  )
}
