import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
`;

export const CountDisplay = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const TotalPriceDisplay = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const CartButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;
