import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="max-w-7xl min-h-screen flex items-center justify-center px-10 py-10 pt-20 mx-auto md:px-15">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-15 lg:gap-18 items-center">
        
        {/* Left Side - Content */}
        <div className="space-y-6 md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Welcome to Our Restaurant
          </h2>
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Here at Mama's Kitchen, we believe that authentic African cuisine brings families together. Founded with love and passion, our restaurant has become a cherished destination where people gather to experience the rich, vibrant flavors of Africa.
          </p>

          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            We take pride in using traditional recipes and cooking methods passed down through generations, combined with the freshest ingredients. From aromatic Jollof Rice to savory Suya and hearty Egusi Soup, each dish is prepared with care to transport you straight to the heart of Africa.
          </p>

          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Known for our warm African hospitality and welcoming atmosphere, Mama's Kitchen offers more than just a meal—we offer a cultural experience. Whether you're exploring African cuisine for the first time or craving the tastes of home, Mama welcomes you with open arms.
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="flex justify-center items-center md:pt-18 md:p-0 lg:p-10 relative">
          <div className="md:ml-10 rounded-3xl overflow-hidden z-10">
          <Image 
            src="/menu/mains/jollof-rice.jpeg"
            alt="Delicious meal" 
            width={800}
            height={600}
            quality={90}
            className="w-full md:w-[400px] h-auto object-cover"
          />
          </div>
        </div>
        
      </div>
    </section>
  )
}