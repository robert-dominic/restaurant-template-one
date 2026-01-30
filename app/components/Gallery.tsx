import MenuCard from "./MenuCard"
import { menuItems } from "@/app/data/menuData"

export default function Gallery() {
  // Featured dish ID from the menuData arr
  const featuredDishIds = [1, 2, 9, 20, 25, 27, 12, 17]
  
  const featuredDishes = menuItems.filter(dish => featuredDishIds.includes(dish.id))

  return (
    <section
      id="gallery"
      className="bg-gray-50 px-6 py-22"
    >
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Mama's Featured Favorites
        </h2>
        <p className="text-gray-600 mt-4">
          Handpicked specialties showcasing the best of authentic African cuisine
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {featuredDishes.map((dish) => (
          <MenuCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
    </section>
  )
}