import styled from "styled-components";

export const SecondaryButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;
