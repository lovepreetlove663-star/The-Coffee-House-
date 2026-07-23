import { NavLink, Outlet } from "react-router-dom";
import Wishlist from "../components/wishlist";

const Menu = ({ showWishlist, setShowWishlist }) => {
  const navStyle = ({ isActive }) =>
    `px-8 py-3 rounded-full border transition-all duration-300 ${
      isActive
        ? "bg-[#9b6a3d] text-white border-[#9b6a3d]"
        : "bg-transparent text-gray-300 border-gray-600 hover:bg-[#9b6a3d] hover:border-[#9b6a3d] hover:text-white"
    }`;

  return (
    <>
    <section className="flex flex-col bg-[#6B4637] ">
      <div className="w-full flex flex-col justify-center items-center text-center p-28 pb-10">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#D9A441] mb-5">
          OUR MENU
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold mt-3 text-[#F8F4EF]"
            style={{ fontFamily: "Cardo, serif" }}>
          Something brewing for everyone
        </h1>

        <p className="text-base sm:text-lg text-white mt-4 font-normal max-w-2xl leading-relaxed">
          Hot coffee, cold coffee, and desserts worth the calories.
        </p>
      </div>

      <div className="flex bg-[#5B3A2E] justify-center gap-4 p-6 ">
        <NavLink to="hotCoffee" className={navStyle}>
          Hot Coffee
        </NavLink>

        <NavLink to="coldCoffee" className={navStyle}>
          Cold Coffee
        </NavLink>

        <NavLink to="dessert" className={navStyle}>
          Desserts
        </NavLink>
      </div>
      <div className=" bg-[#5B3A2E] shadow-amber-600 pt-8 pb-8">
        <Outlet />
      </div>

      <Wishlist show={showWishlist} onClose={() => setShowWishlist(false)} />
    </section>
   
</>
  );
};
export default Menu;
