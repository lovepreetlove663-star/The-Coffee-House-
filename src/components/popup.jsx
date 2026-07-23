// const Popup = () => {
//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
//       <div className="bg-white w-96 h-96 rounded-xl">Popup</div>
//     </div>
//   );
// };

// export default Popup;

// const Popup = ({ coffee, closePopup }) => {
//   if (!coffee) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
//       <div className="bg-white rounded-xl p-6 w-[400px]">
//         <button onClick={closePopup} className="text-2xl float-right">
//           ✕
//         </button>

// <button
//   onClick={() => addToWishlist(coffee)}
//   className="w-full mt-5 bg-[#8B4513] hover:bg-[#6f3410] text-white py-3 rounded-lg font-semibold transition"
// >
//   ❤️ Add to Wishlist
// </button>
//         <img
//           src={coffee.image}
//           alt={coffee.name}
//           className="w-full h-60 object-cover rounded-lg"
//         />

//         <h2 className="text-3xl font-bold mt-4">{coffee.name}</h2>
//         <p className="mt-3">{coffee.description}</p>
//         <h3 className="text-2xl text-[#9b6a3d] mt-3">{coffee.price}</h3>
//       </div>
//     </div>
//   );
// };

// export default Popup;

import useStore from "../store/zustand";

const Popup = ({ coffee, closePopup }) => {
  const addToWishlist = useStore((state) => state.addToWishlist);
  const addToCart = useStore((state) => state.addToCart);

  if (!coffee) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[450px] relative">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow text-xl hover:bg-gray-100"
        >
          ✕
        </button>
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-64 object-cover rounded-xl"
        />
        <h1 className="text-5xl font-bold mt-4">{coffee.name}</h1>
        <p className="text-xl mt-4">{coffee.description}</p>
        <p className="text-4xl text-[#b47a39] mt-4">{coffee.price}</p>
        <button
          onClick={() => {
            addToWishlist(coffee);
            alert("Added to Wishlist ❤️");
          }}
          className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg text-xl hover:bg-red-600"
        >
          ❤️ Add to Wishlist
        </button>
        <button
          onClick={() => {
            addToCart(coffee);
            alert("Added to Cart 🛒");
          }}
          className="w-full mt-3 bg-[#8B4513] text-white py-3 rounded-lg text-xl hover:bg-[#6d3510]"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Popup;
