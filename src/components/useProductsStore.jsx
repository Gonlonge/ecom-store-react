// import { create } from "zustand";
// import { shallow } from "zustand/shallow";

// export const useProductsStore = create((set) => {
//   const storedCart = JSON.parse(localStorage.getItem("cart")) || {
//     products: [],
//     count: 0,
//     totalPrice: 0,
//   };

//   // initial state is either the stored cart or the default cart
//   const initialState = {
//     ...storedCart,
//     addProduct: (product) =>
//       set((state) => ({
//         products: [...state.products, product],
//         count: state.count + 1,
//         totalPrice: state.totalPrice + product.price,
//       })),
//     removeProduct: (index, price) =>
//       set((state) => ({
//         products: state.products.filter((_, i) => i !== index),
//         count: Math.max(0, state.count - 1),
//         totalPrice: Math.max(0, state.totalPrice - price),
//       })),
//     setProducts: (products) =>
//       set(() => {
//         const count = products.length;
//         const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
//         return { products, count, totalPrice };
//       }),
//     clearCart: () =>
//       set(() => ({
//         products: [],
//         count: 0,
//         totalPrice: 0,
//       })),
//   };

//   return initialState;
// }, shallow);
