import DishCard from "./DishCard"
import { galleryData } from "@/app/data/galleryData"

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-gray-50 px-6 py-22"
    >
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Our Special Dishes
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {galleryData.map((dish) => (
          <DishCard key={dish.id} {...dish} />
        ))}
      </div>
    </div>
    </section>
  )
}
