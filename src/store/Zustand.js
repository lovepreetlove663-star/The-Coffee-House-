import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      addToCart: (coffee) => {
        const cart = get().cart;
        const existingItem = cart.find((item) => item.id === coffee.id);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.id === coffee.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: [...cart, { ...coffee, quantity: 1 }],
          });
        }
      },

      increment: (id) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },

      decrement: (id) => {
        const updatedCart = get()
          .cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);

        set({ cart: updatedCart });
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      addToWishlist: (coffee) => {
        const wishlist = get().wishlist;
        const exists = wishlist.find((item) => item.id === coffee.id);

        if (!exists) {
          set({
            wishlist: [...wishlist, coffee],
          });
  
        }
      },

      removeFromWishlist: (id) => {
        set({
          wishlist: get().wishlist.filter((item) => item.id !== id),
        });
      },
    }),
    {
      name: "coffee-store"
    }
  )
);

export default useStore;