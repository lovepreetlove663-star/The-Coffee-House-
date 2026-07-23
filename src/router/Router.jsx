// import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import Menu from "../pages/Menu";
// import HotCoffee from "../pages/HotCoffee";
// import ColdCoffee from "../pages/ColdCoffee";
// import Dessert from "../pages/Dessert";
// import Gallery from "../pages/Gallery";
// import Contact from "../pages/Contact";

// const Router = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/menu" element={<Menu />}>
//         <Route index element={<HotCoffee />} />
//         <Route path="hotCoffee" element={<HotCoffee />} />
//         <Route path="coldCoffee" element={<ColdCoffee />} />
//         <Route path="dessert" element={<Dessert />} />
//       </Route>
//       <Route path="/gallery" element={<Gallery />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default Router;

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import HotCoffee from "../pages/HotCoffee";
import ColdCoffee from "../pages/ColdCoffee";
import Dessert from "../pages/Dessert";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

const Router = ({ showCart, setShowCart, showWishlist, setShowWishlist }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route
        path="/menu"
        element={
          <Menu showWishlist={showWishlist} setShowWishlist={setShowWishlist} />
        }
      >
        <Route index element={<HotCoffee />} />
        <Route path="hotCoffee" element={<HotCoffee />} />
        <Route path="coldCoffee" element={<ColdCoffee />} />
        <Route path="dessert" element={<Dessert />} />
      </Route>

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
