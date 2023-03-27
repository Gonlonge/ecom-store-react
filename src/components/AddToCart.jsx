import React from "react";
import { create } from "zustand";
import { shallow } from "zustand/shallow";
import {
  CartContainer,
  CountDisplay,
  TotalPriceDisplay,
  CartButton,
} from "../components/styled-components/AddToCart.styles";

export const useProductsStore = create((set) => ({
  // initial state
  products: [],
  count: 0,
  totalPrice: 0,
  // addProduct and removeProduct remain the same
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
  // new function to clear the cart
  clearCart: () =>
    set(() => ({
      products: [],
      count: 0,
      totalPrice: 0,
    })),
}));

function AddToCart({ product }) {
  const { count, addProduct, removeProduct, totalPrice } = useProductsStore(
    (state) => ({
      count: state.count,
      totalPrice: state.totalPrice,
      addProduct: state.addProduct,
      removeProduct: state.removeProduct,
    }),
    shallow
  );

  return (
    <CartContainer>
      <TotalPriceDisplay>
        Total Price: {totalPrice.toFixed(2)}
      </TotalPriceDisplay>
      <CartButton onClick={() => addProduct(product)}>+</CartButton>
      <CountDisplay>{count}</CountDisplay>
      <CartButton onClick={() => removeProduct(product.id, product.price)}>
        -
      </CartButton>
      {/* If you want to add clearCart <CartButton onClick={clearCart}>Clear</CartButton> */}
    </CartContainer>
  );
}

export default AddToCart;
