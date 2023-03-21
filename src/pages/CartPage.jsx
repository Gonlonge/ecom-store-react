import React from "react";
import { useProductsStore } from "../components/AddToCart";
import { shallow } from "zustand/shallow";
import {
  CartContainer,
  CountDisplay,
  TotalPriceDisplay,
  CartButton,
} from "../components/styled-components/AddToCart.styles";
import { MainContainer } from "../components/styled-components/Body.styles";

function CartPage() {
  const { count, totalPrice, removeOne } = useProductsStore(
    (state) => ({
      count: state.count,
      totalPrice: state.totalPrice,
      removeOne: state.removeOne,
    }),
    shallow
  );

  return (
    <MainContainer>
      <CartContainer>
        <TotalPriceDisplay>
          Total Price: {totalPrice.toFixed(2)}
        </TotalPriceDisplay>
        <CountDisplay>{count} Items</CountDisplay>
        <CartButton onClick={() => removeOne(100)}>-</CartButton>
      </CartContainer>
    </MainContainer>
  );
}

export default CartPage;
