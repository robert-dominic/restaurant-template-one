"use client"

import { Star } from "lucide-react"
import { useEffect, useRef } from "react"
import { testimonialsData } from "@/app/data/testimonialsData"

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    let intervalId: NodeJS.Timeout | null = null

    const autoScroll = () => {
      scrollAmount += 1
      
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      
      scrollContainer.scrollLeft = scrollAmount
    }

    const startScrolling = () => {
      if (!intervalId) {
        intervalId = setInterval(autoScroll, 20)
      }
    }

    const stopScrolling = () => {
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
      }
    }

    startScrolling()
    scrollContainer.addEventListener("mouseenter", stopScrolling)
    scrollContainer.addEventListener("mouseleave", startScrolling)

    return () => {
      stopScrolling()
      scrollContainer.removeEventListener("mouseenter", stopScrolling)
      scrollContainer.removeEventListener("mouseleave", startScrolling)
    }
  }, [])

  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData]

  return (
    <section id="testimonials" className="bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Happy Customers
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Scrolling Containers */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-6 pb-4 cursor-grab">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition flex-shrink-0 w-[340px] md:w-[380px]"
                >
                  {/* Avatar + Name/Role Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < testimonial.rating ? "fill-primary text-primary" : "text-gray-300"}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Faded edges */}
          <div className="absolute top-0 -left-2 w-20 h-full pointer-events-none bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="absolute top-0 -right-2 w-20 h-full pointer-events-none bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  )
}