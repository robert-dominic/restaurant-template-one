import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Home() {
  return (
    <section id="home" className="max-w-7xl min-h-screen flex items-center justify-center gap-12 px-10 py-15 lg:pt-20 mx-auto md:px-15">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-15 lg:gap-24 items-center">        
        {/* Content */}
        <div className="space-y-6 order-2 md:order-1 md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            We provide the best food for you
          </h1>
          
          <p className="text-gray-600 text-lg max-w-md">
            Experience the authentic flavors of Africa, prepared with love and served with the warmth of home. Every dish tells a story.          
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-2 md:gap-4">
            <Link href="/menu">
              <button className="bg-black text-white px-5 py-3 md:px-8 uppercase text-[0.8rem] md:text-sm btn-custom-rounded hover:bg-gray-800 transition">
                Menu
              </button>
            </Link>
            <Link href="/#gallery">
              <button className="bg-primary text-white px-5 py-3 md:px-8 uppercase text-[0.8rem] md:text-sm btn-custom-rounded hover:opacity-90 transition">
                Our Gallery
              </button>
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-primary transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-primary transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-primary transition">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
        
        {/* Image */}
        <div className="flex justify-center items-center pt-3 md:pt-8 lg:p-10 relative order-1 md:order-2">
          <div className="md:ml-6 rounded-3xl overflow-hidden z-10">
            <Image 
              src="/menu/mains/jollof-rice.jpeg"
              alt="Best Dish" 
              width={800}
              height={600}
              quality={100}
              priority
              className="md:w-[400px] w-350 h-auto object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}