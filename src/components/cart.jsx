import useCartStore from "../store/zustand";

const Cart = ({ show, onClose }) => {
  const { cart, increment, decrement } = useCartStore();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[500px]">
        <button onClick={onClose}>✖</button>

        <h2 className="text-2xl font-bold mb-5">My Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => decrement(item.id)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increment(item.id)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
