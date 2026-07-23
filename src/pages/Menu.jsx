// const Menu = () => {
//   return;
//   <>
//     <p>Our Menu</p>
//     <h1>Something brewing for everyone</h1>;
//     <p>Hot coffee, cold coffee, hearty food and desserts worth the calories.</p>
//   </>;
// };

// export default Menu;

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
    <section className="flex flex-col">
      <div className="w-full flex flex-col justify-center bg-[#772e09] items-center text-center pt-24 pb-10">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#c4a484] mb-5">
          OUR MENU
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-normal mb-5">
          Something brewing for everyone
        </h1>

        <p className="text-base sm:text-lg text-gray-300 font-normal max-w-2xl leading-relaxed">
          Hot coffee, cold coffee, and desserts worth the calories.
        </p>
      </div>

      <div className="flex bg-[#772e09] justify-center gap-4 ">
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
      <div className=" bg-[#772e09e3] shadow-amber-600 pt-8 pb-8">
        <Outlet />
      </div>

      <Wishlist show={showWishlist} onClose={() => setShowWishlist(false)} />
    </section>
  );
};
export default Menu;
