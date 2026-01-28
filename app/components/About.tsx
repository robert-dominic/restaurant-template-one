import SpecialDish from "@/public/about/special-dish.png"

export default function About() {
  return (
    <section id="about" className="max-w-7xl min-h-screen flex items-center justify-center gap-12 px-10 py-10 pt-20 mx-auto md:px-15">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-15 lg:gap-24 items-center">
        
        {/* Left Side - Content */}
        <div className="space-y-6 md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Welcome to Our Restaurant
          </h2>
          
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Here at The Cozy Table, we believe that great food brings people together. Founded in 2020, our restaurant has become a beloved gathering place where families and friends create lasting memories over exceptional meals.
          </p>

          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            We take pride in using only the freshest locally-sourced ingredients, prepared with authentic techniques passed down through generations. Our chefs craft each dish with passion and precision, ensuring every plate that leaves our kitchen is a masterpiece.
          </p>

          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Known for our warm hospitality and vibrant atmosphere, The Cozy Table offers more than just a meal—we offer an experience. Whether you're celebrating a special occasion or simply enjoying a casual dinner, we're here to make every moment memorable.
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="flex justify-center items-center pt-10 md:p-0 lg:p-10 relative">
          <div className="md:ml-10 rounded-3xl overflow-hidden z-10">
            <img 
              src={SpecialDish.src}
              alt="Delicious meal" 
              className="w-full md:w-[400px] h-auto object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}