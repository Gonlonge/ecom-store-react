import styled from "styled-components";

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 50px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.quaternary};
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const GridItemContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GridItemTitle = styled.h2`
  font-size: 1.2rem;
`;

export const GridItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme, isDiscounted }) =>
    isDiscounted ? theme.colors.danger : "inherit"};
  text-decoration: ${({ isDiscounted }) =>
    isDiscounted ? "none" : "line-through"};
`;
