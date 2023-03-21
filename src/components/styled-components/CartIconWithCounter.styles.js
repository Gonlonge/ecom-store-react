// CartIconWithCounter.styles.js
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export const CartIcon = styled(FiShoppingCart)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;

export const CounterContainer = styled.div`
  position: relative;
`;

export const Counter = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  background: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
`;
