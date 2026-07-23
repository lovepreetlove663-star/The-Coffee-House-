import { useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./router/Router";
import Footer from "./components/Footer";
import Cart from "./components/cart";
import Wishlist from "./components/wishlist";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar setShowCart={setShowCart} setShowWishlist={setShowWishlist} />
      <Router
        showCart={showCart}
        setShowCart={setShowCart}
        showWishlist={showWishlist}
        setShowWishlist={setShowWishlist}
      />
      <Wishlist show={showWishlist} onClose={() => setShowWishlist(false)} />
      <Cart show={showCart} onClose={() => setShowCart(false)} />
      <Footer />
    </div>
  );
}

export default App;
