import { getAllDishes } from "@/app/lib/menu"
import MenuCard from "@/app/components/MenuCard"

export default function MenuPage() {
  const dishes = getAllDishes()

  return (
    <main>
      <div className="mb-10 md:pt-16">
        <h1 className="text-3xl font-bold mb-2">Our Menu</h1>
        <p className="text-gray-600">
          Discover our delicious selection of dishes
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dishes.map(dish => (
          <MenuCard key={dish.id} dish={dish} />
        ))}
      </div>
    </main>
  )
}
