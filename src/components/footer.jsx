import React from "react";
import { Coffee, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4A2F25] border-t border-[#D9A441]/30 text-[#E8DDD6] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">

          {/* Brand */}
          <div className="max-w-xs w-full">
            <div className="flex items-center gap-3 mb-8">
              <Coffee size={30} className="text-amber-400" />
              <h2 className="text-2xl font-bold text-white">
                The Coffee House
              </h2>
            </div>

            <p className="leading-8 text-gray-300">
              Handcrafted coffee and warm moments, brewed daily in the heart of
              Hoshiarpur.
            </p>

            <div className="flex gap-4 mt-8">
              <img
                src="/Icon-Facebook-In-circle-PNG.png"
                alt="Facebook"
                className="w-11 h-11 rounded-full object-cover p-2 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-110"
              />

              <img
                src="/Instagram-logo-in-a-circle---social-media-icon-PNG.avif"
                alt="Instagram"
                className="w-11 h-11 rounded-full object-cover p-2 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-110"
              />

              <img
                src="/images.png"
                alt="Twitter"
                className="w-11 h-11 rounded-full object-cover p-2 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-110"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4 text-lg">
              <li onClick={() => navigate("/")}
              className="cursor-pointer transition-all duration-300 hover:text-amber-400 hover:translate-x-2">
                Home
              </li>
              <li onClick={() => navigate("/about")}
              className="cursor-pointer transition-all duration-300 hover:text-amber-400 hover:translate-x-2">
                About
              </li>
              <li onClick={() => navigate("/menu")}
              className="cursor-pointer transition-all duration-300 hover:text-amber-400 hover:translate-x-2">
                Menu
              </li>
              <li onClick={() => navigate("/gallery")} 
              className="cursor-pointer transition-all duration-300 hover:text-amber-400 hover:translate-x-2">
                Gallery
              </li>
              <li onClick={() => navigate("/contact")}
              className="cursor-pointer transition-all duration-300 hover:text-amber-400 hover:translate-x-2">
                Contact
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Working Hours
            </h3>

            <p className="text-lg text-gray-300">
              Monday – Sunday
            </p>

            <p className="text-xl text-amber-400 mt-3 font-semibold">
              8:00 AM – 10:00 PM
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <p className="leading-7">
                  Near Bus Stand,
                  <br />
                  Hoshiarpur, Punjab
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <p>hello@thecoffeehouse.in</p>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#6F4E37] mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#C9B29B]">
          <p>© {new Date().getFullYear()} The Coffee House. All Rights Reserved.</p>

          <p className="mt-3 md:mt-0">
            Crafted with ❤️ for Coffee Lovers
          </p>
        </div>

      </div>

      
    </footer>
  );
};

export default Footer;