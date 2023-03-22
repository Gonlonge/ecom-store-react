import React from "react";
import { Link } from "react-router-dom";
import { useProductsStore } from "../components/AddToCart";

import MainButton from "../components/styled-components/MainButton.styles";
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
        <Link to="/CheckoutSuccess">
          <MainButton>Purchase</MainButton>
        </Link>
      </CartContainer>
    </MainContainer>
  );
}

export default CartPage;
