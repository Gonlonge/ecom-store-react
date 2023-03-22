import React from "react";
import MainButton from "../components/styled-components/MainButton.styles";
import { useNavigate } from "react-router-dom";
import {
  CheckoutSuccessPageContainer,
  Heading,
  Message,
  ReturnButton,
} from "../components/styled-components/CheckoutSuccess.style";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <CheckoutSuccessPageContainer>
      <Heading>Order Complete!</Heading>
      <Message>
        Thank you for your purchase. Your order has been successfully placed.
      </Message>
      <MainButton onClick={handleReturnHome}>Return to Home Page</MainButton>
    </CheckoutSuccessPageContainer>
  );
};

export default CheckoutSuccess;
