import React from "react";
import { useNavigate } from "react-router-dom";
import { CartContainer } from "../components/styled-components/AddToCart.styles";
import { MainContainer } from "../components/styled-components/Body.styles";
import MainButton from "../components/styled-components/MainButton.styles";
import { useProductsStore } from "../components/AddToCart";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useProductsStore();

  const handleReturnHome = () => {
    clearCart(); // call the clearCart function
    navigate("/");
  };

  return (
    <MainContainer>
      <CartContainer>
        <h2>Order Complete!</h2>
        <p>
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <MainButton onClick={handleReturnHome}>Return to Home Page</MainButton>
      </CartContainer>
    </MainContainer>
  );
};

export default CheckoutSuccess;
