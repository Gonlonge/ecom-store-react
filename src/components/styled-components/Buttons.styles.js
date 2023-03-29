import styled from "styled-components";

const MainButton = styled.button`
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 1rem;
  padding: 0.75rem 3rem 0.75rem 3rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.textDark};
  }
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
  &:hover {
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

export default MainButton;
