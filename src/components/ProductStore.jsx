// import { create } from "zustand";
// import { shallow } from "zustand/shallow";

// const CART_KEY = "cart";

// export const useProductsStore = create(
//   (set) => {
//     // Try to get the cart data from local storage
//     const savedCartData = localStorage.getItem(CART_KEY);
//     const {
//       products: savedProducts = [],
//       count: savedCount = 0,
//       totalPrice: savedTotalPrice = 0,
//     } = savedCartData ? JSON.parse(savedCartData) : {};

//     return {
//       // initial state
//       products: savedProducts,
//       count: savedCount,
//       totalPrice: savedTotalPrice,
//       // addProduct and removeProduct remain the same
//       addProduct: (product) =>
//         set((state) => ({
//           products: [...state.products, product],
//           count: state.count + 1,
//           totalPrice: state.totalPrice + product.price,
//         })),
//       removeProduct: (index, price) =>
//         set((state) => ({
//           products: state.products.filter((_, i) => i !== index),
//           count: Math.max(0, state.count - 1),
//           totalPrice: Math.max(0, state.totalPrice - price),
//         })),
//       // new function to clear the cart
//       clearCart: () =>
//         set(() => ({
//           products: [],
//           count: 0,
//           totalPrice: 0,
//         })),
//     };
//   },
//   {
//     // Use the immer middleware to automatically save the cart data to local storage on each update
//     middleware: (set, get, api) =>
//       api.subscribe((_, prevState) => {
//         const { products, count, totalPrice } = get();
//         const cartData = { products, count, totalPrice };
//         localStorage.setItem(CART_KEY, JSON.stringify(cartData));
//       }, shallow),
//   }
// );
