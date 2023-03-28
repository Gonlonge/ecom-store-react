import styled from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 150px auto 100px;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  margin-bottom: 20px;

  img {
    grid-row: 1 / 3;
    justify-self: center;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 5px 0;
  }

  button {
    border: none;
    background-color: #c4c4c4;
    font-size: 18px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
