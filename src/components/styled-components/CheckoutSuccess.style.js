import styled from "styled-components";

export const CheckoutSuccessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ReturnButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background-color: #3f51b5;
  color: #ffffff;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #283593;
  }
`;
