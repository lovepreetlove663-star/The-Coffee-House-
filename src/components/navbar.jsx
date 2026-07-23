import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
        <div className="flex items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-[#D9A441] font-semibold text-xl"
          >
            <Coffee className="w-7 h-7" />
            <span>The Coffee Shop</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-white text-[15px] font-medium hover:text-[#D9A441] transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white text-[15px] font-medium hover:text-[#D9A441] transition"
            >
              About
            </Link>

            <Link
              to="/menu"
              className="text-white text-[15px] font-medium hover:text-[#D9A441] transition"
            >
              Menu
            </Link>

            <Link
              to="/gallery"
              className="text-white text-[15px] font-medium hover:text-[#D9A441] transition"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="text-white text-[15px] font-medium hover:text-[#D9A441] transition"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            <Sun className="w-5 h-5 text-white cursor-pointer hover:text-[#D9A441] transition" />
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#5B3A2E] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-6 border-b border-[#D9A441]/20">
          <div className="flex items-center gap-2 text-[#D9A441] font-semibold text-xl">
            <Coffee className="w-7 h-7" />
            <span>The Coffee Shop</span>
          </div>

          <button onClick={closeMenu}>
            <X className="text-white w-7 h-7 hover:text-[#D9A441]" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col px-6 py-8 space-y-7">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-white text-lg hover:text-[#D9A441] transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="text-white text-lg hover:text-[#D9A441] transition"
          >
            About
          </Link>

          <Link
            to="/menu"
            onClick={closeMenu}
            className="text-white text-lg hover:text-[#D9A441] transition"
          >
            Menu
          </Link>

          <Link
            to="/gallery"
            onClick={closeMenu}
            className="text-white text-lg hover:text-[#D9A441] transition"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-white text-lg hover:text-[#D9A441] transition"
          >
            Contact
          </Link>

          <div className="border-t border-[#D9A441]/20 pt-7">
            <div className="flex items-center gap-4 mb-6">
              <Sun className="text-white cursor-pointer hover:text-[#D9A441]" />
              <span className="text-white">Theme</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
