import styled from "styled-components";

export const MainButton = styled.button`
  display: block;
  margin: 0 auto;
  text-align: center;

  margin-top: 20px;
  font-size: 1rem;
  padding: 0.75rem 3rem 0.75rem 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.success};
    transition: background-color 0.5s;
  }
`;
export default MainButton;
