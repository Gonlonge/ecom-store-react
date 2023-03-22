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
  count: 0,
  totalPrice: 0,
  addOne: (price) =>
    set((state) => ({
      count: state.count + 1,
      totalPrice: state.totalPrice + price,
    })),
  removeOne: (price) =>
    set((state) => ({
      count: Math.max(0, state.count - 1),
      totalPrice: Math.max(0, state.totalPrice - price),
    })),
  clearCount: () => set({ count: 0, totalPrice: 0 }),
}));

function AddToCart({ price }) {
  const { count, addOne, removeOne, totalPrice } = useProductsStore(
    (state) => ({
      count: state.count,
      totalPrice: state.totalPrice,
      addOne: state.addOne,
      removeOne: state.removeOne,
      clearCount: state.clearCount,
    }),
    shallow
  );

  return (
    <CartContainer>
      <TotalPriceDisplay>
        Total Price: {totalPrice.toFixed(2)}
      </TotalPriceDisplay>
      <CartButton onClick={() => addOne(price)}>+</CartButton>
      <CountDisplay>{count}</CountDisplay>
      <CartButton onClick={() => removeOne(price)}>-</CartButton>
      {/* If you want to add clearCount <CartButton onClick={clearCount}>Clear</CartButton> */}
    </CartContainer>
  );
}

export default AddToCart;
