import SpecialDish from "@/public/about/special-dish.png"


export default function About() {
  return (
    <section id="about" className="max-w-7xl min-h-screen flex items-center justify-center gap-12 px-10 py-10 pt-20 mx-auto md:px-15">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-15 lg:gap-24 items-center">        
        {/* Left Side - Content */}
        <div className="space-y-6 md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Welcome to Our Restaurant
          </h2>
          
          <p className="text-gray-600 text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-start gap-2 md:gap-4">
            <button className="bg-primary text-white px-5 py-3 md:px-8 uppercase text-[0.8rem] md:text-sm btn-custom-rounded hover:opacity-90 transition">
              Book a Table
            </button>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div className="flex justify-center items-center md:p-0 lg:p-10 relative">
          <div className="md:ml-10 rounded-3xl overflow-hidden z-10">
            <img 
              src={SpecialDish.src}
              alt="Our Special dish" 
              className="w-full md:w-[370px] h-auto object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}