import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.quaternary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GridItemIndividual = styled.div`
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
  padding-left: 1rem;
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
    isDiscounted ? "line-through" : "none"};
`;

// template

// export const GridItemPrice = styled.p`
//   font-size: 1.2rem;
//   font-weight: 600;
//   color: ${({ theme, isDiscounted }) =>
//     isDiscounted ? theme.colors.danger : "inherit"};
//   text-decoration: ${({ isDiscounted }) =>
//     isDiscounted ? "line-through" : "none"};
// `;

// {post.price !== post.discountedPrice && (
//   <GridItemPrice isDiscounted={true}>{post.price}</GridItemPrice>
// )}
// <GridItemPrice isDiscounted={false}>
//   {post.discountedPrice}
// </GridItemPrice>
