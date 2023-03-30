import React, { useState } from "react";
import { create } from "zustand";
import { shallow } from "zustand/shallow";
import {
  CartContainer,
  TotalPriceDisplay,
} from "../components/styled-components/AddToCart.styles";

import { CartButton } from "./styled-components/Buttons.styles";

export const useProductsStore = create((set) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || {
    products: [],
    count: 0,
    totalPrice: 0,
  };

  // initial state is either the stored cart or the default cart
  const initialState = {
    ...storedCart,
    addProduct: (product) =>
      set((state) => ({
        products: [...state.products, product],
        count: state.count + 1,
        totalPrice: state.totalPrice + product.price,
      })),
    removeProduct: (index, price) =>
      set((state) => ({
        products: state.products.filter((_, i) => i !== index),
        count: Math.max(0, state.count - 1),
        totalPrice: Math.max(0, state.totalPrice - price),
      })),

    clearCart: () =>
      set(() => ({
        products: [],
        count: 0,
        totalPrice: 0,
      })),
  };

  return initialState;
}, shallow);

// add an event listener to save the cart data to localStorage whenever the cart state changes
useProductsStore.subscribe(
  (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
  },
  (state) => {
    return {
      products: state.products,
      count: state.count,
      totalPrice: state.totalPrice,
    };
  }
);

// productCount
function AddToCart({ product }) {
  const [setProductCount] = useState(0);

  const { addProduct, totalPrice } = useProductsStore(
    (state) => ({
      count: state.count,
      totalPrice: state.totalPrice,
      addProduct: state.addProduct,
      removeProduct: state.removeProduct,
    }),
    shallow
  );

  const handleAddClick = () => {
    addProduct(product);
    setProductCount((prevCount) => prevCount + 1);
  };

  // const handleRemoveClick = () => {
  //   if (productCount > 0) {
  //     removeProduct(product.id, product.price);
  //     setProductCount((prevCount) => prevCount - 1);
  //   }
  // };

  return (
    <CartContainer>
      <CartButton onClick={handleAddClick}>Add To Cart</CartButton>
      <TotalPriceDisplay>
        Total Price: {totalPrice.toFixed(2)}
      </TotalPriceDisplay>
      {/* <CountDisplay>{productCount}</CountDisplay>
      <CartButton onClick={handleRemoveClick} disabled={productCount === 0}>
        -
      </CartButton> */}
    </CartContainer>
  );
}

export default AddToCart;
