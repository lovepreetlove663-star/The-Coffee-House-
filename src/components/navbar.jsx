import React from "react";
import { Link } from "react-router-dom";
import { Coffee, Sun } from "lucide-react";
import useStore from "../store/zustand";

const Navbar = ({ setShowCart, setShowWishlist }) => {
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);

  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 box-border bg-transparent absolute top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <Coffee className="text-[#D9A441]" />
        <span className="text-amber-600 text-xl font-bold tracking-wide">
          The Coffee Shop
        </span>
      </div>
      <div className="flex items-center gap-6 px-6 py-2">
        <Link
          to="/"
          className="text-white text-[15px] font-medium transition-colors hover:text-amber-500"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white/80 text-[15px] font-medium transition-colors hover:text-white"
        >
          About
        </Link>
        <Link
          to="/menu"
          className="text-white/80 text-[15px] font-medium transition-colors hover:text-white"
        >
          Menu
        </Link>
        <Link
          to="/gallery"
          className="text-white/80 text-[15px] font-medium transition-colors hover:text-white"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="text-white/80 text-[15px] font-medium transition-colors hover:text-white"
        >
          Contact
        </Link>
      </div>
      <button onClick={() => setShowWishlist(true)}>
        ❤️ {wishlist.length}
      </button>
      <button onClick={() => setShowCart(true)}>🛒 {cart.length}</button>
      onClick={() => setShowCart(true)}
      <div className="flex items-center gap-5">
        <Sun className="text-white/80 w-5 h-5 cursor-pointer hover:text-white transition-colors" />

        <button className="bg-transparent text-white border border-black px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all hover:bg-white hover:text-white">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
