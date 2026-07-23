// const Wishlist = ({ wishlist, show, onClose, removeFromWishlist }) => {
//   if (!show) return null;

//   return (
//     <div>
//       <button onClick={onClose}>Close</button>

//       <h2>My Wishlist</h2>

//       {wishlist.length === 0 ? (
//         <p>No coffee added.</p>
//       ) : (
//         wishlist.map((coffee) => (
//           <div key={coffee.id}>
//             <img src={coffee.image} alt={coffee.name} width="80" />

//             <h3>{coffee.name}</h3>

//             <p>{coffee.price}</p>

//             <button onClick={() => removeFromWishlist(coffee.id)}>
//               Remove
//             </button>

//             <hr />
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Wishlist;

import useStore from "../store/zustand";

const Wishlist = ({ show, onClose }) => {
  const wishlist = useStore((state) => state.wishlist);
  const removeFromWishlist = useStore((state) => state.removeFromWishlist);
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] max-h-[80vh] overflow-y-auto rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-5 text-center">My Wishlist ❤️</h2>

        {wishlist.length === 0 ? (
          <p className="text-center text-gray-500">No coffee added.</p>
        ) : (
          wishlist.map((coffee) => (
            <div
              key={coffee.id}
              className="flex items-center gap-4 border-b py-3"
            >
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{coffee.name}</h3>
                <p className="text-[#8B4513]">{coffee.price}</p>
              </div>

              <button
                onClick={() => removeFromWishlist(coffee.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
