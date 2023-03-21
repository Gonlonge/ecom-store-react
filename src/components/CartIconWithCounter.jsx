// CartIconWithCounter.js
import React from "react";
import { useProductsStore } from "../components/AddToCart";
import {
  CartIcon,
  CounterContainer,
  Counter,
} from "../components/styled-components/CartIconWithCounter.styles";

function CartIconWithCounter() {
  const count = useProductsStore((state) => state.count);

  return (
    <CounterContainer>
      <CartIcon />
      {count > 0 && <Counter>{count}</Counter>}
    </CounterContainer>
  );
}

export default CartIconWithCounter;
