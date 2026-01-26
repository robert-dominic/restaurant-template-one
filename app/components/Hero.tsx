import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import HeroImage from "@/public/hero-image.svg"
import HeroDish from "@/public/hero-dish.svg"

export default function Hero() {
  return (
    <section id="hero" className="max-w-7xl min-h-screen flex items-center justify-center gap-12 px-10 py-10 pt-20 mx-auto md:px-15">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-15 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Side - Content */}
        <div className="space-y-6 mx-auto order-2 md:order-1 md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            We provide the best food for you
          </h1>
          
          <p className="text-gray-600 text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-2 md:gap-4">
            <button className="bg-black text-white px-5 py-3 md:px-8 uppercase text-[0.8rem] md:text-sm btn-custom-rounded hover:bg-gray-800 transition">
              Menu
            </button>
            <button className="bg-primary text-white px-5 py-3 md:px-8 uppercase text-[0.8rem] md:text-sm btn-custom-rounded hover:opacity-90 transition">
              Our Gallery
            </button>
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
        
        {/* Right Side - Image */}
        <div className="flex justify-center items-center mb-3 md:p-0 p-10 relative leaf-decoration order-1 md:order-2">
          <div className="ml-10 rounded-3xl overflow-hidden z-10">
            <img 
              src={HeroImage.src}
              alt="Restaurant interior" 
              className="w-[350px] h-auto object-cover"
            />
          </div>

          {/* Overlapping dish image */}
          <div className="absolute -bottom-3 left-8 w-45 h-45 rounded-2xl overflow-hidden
               md:-bottom-12 md:-left-12 md:w-40 md:h-40
               lg:-bottom-2 lg:-left-12 lg:w-52 lg:h-48 z-10">
            <img
              src={HeroDish.src}
              alt="Special Dish"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}