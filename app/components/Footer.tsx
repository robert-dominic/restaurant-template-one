import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Mail, Phone, MapPin } from "lucide-react"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          
          {/* Restaurant Info + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="logo-text text-xl font-bold">Mama's Kitchen</span>
            <p className="text-sm leading-relaxed mb-4">
              Here at Mama's Kitchen, we believe that authentic African cuisine brings families together. Founded with love and passion, our restaurant has become a cherished destination where people gather to experience the rich, vibrant flavors of Africa.
              <a href="/#about" className="ml-1 text-primary underline">Learn More</a>
            </p>
            
            {/* Social Icons */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm uppercase">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                  <FaFacebook size={18} />
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                  <FaInstagram size={18} />
                </a>
                <a href="https://wa.me/231XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:ml-12">
            <h3 className="text-white font-bold mb-4 uppercase text-sm">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="/#gallery" className="hover:text-primary transition">Gallery</a></li>
              <li><a href="/#about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="/menu" className="hover:text-primary transition">Menu</a></li>
              <li><a href="/#testimonials" className="hover:text-primary transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>123 Food Street, Monrovia, Liberia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+231XXXXXXXXXX" className="hover:text-primary transition">+231 XXX XXX XXXX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@cozytable.com" className="hover:text-primary transition">info@cozytable.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm">Opening Hours</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="flex-1 border-b border-dotted border-gray-700 mx-2"></span>
                <span className="text-primary font-bold uppercase">7:30 am - 9:30 pm</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Monday - Friday</span>
                <span className="flex-1 border-b border-dotted border-gray-700 mx-2"></span>
                <span className="text-primary font-semibold">8:00 am - 9:00 pm</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Saturday</span>
                <span className="flex-1 border-b border-dotted border-gray-700 mx-2"></span>
                <span className="text-gray-500 uppercase font-semibold">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-gray-800 mb-6" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Cozy Table. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}