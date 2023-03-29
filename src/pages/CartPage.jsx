import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProductsStore } from "../components/AddToCart";
import { CountDisplay } from "../components/styled-components/AddToCart.styles";
import styled from "styled-components";
import { MainContainer } from "../components/styled-components/Body.styles";
import MainButton from "../components/styled-components/Buttons.styles";
import { CartButton } from "../components/styled-components/Buttons.styles";

const CartItemContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding: 20px 0;
  width: 100%;
`;

const CartItemImage = styled.img`
  width: 28%;
  height: auto;
`;

const CartItemButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

function CartPage() {
  const { products, count, totalPrice, removeProduct, addProduct } =
    useProductsStore((state) => ({
      products: state.products,
      count: state.count,
      totalPrice: state.totalPrice,
      removeProduct: state.removeProduct,
      addProduct: state.addProduct,
    }));

  const getProductCount = (product) => {
    const filteredProducts = products.filter((p) => p.id === product.id);
    return filteredProducts.length;
  };

  const uniqueProducts = Array.from(new Set(products.map((p) => p.id))).map(
    (id) => {
      return products.find((p) => p.id === id);
    }
  );

  return (
    <MainContainer>
      {uniqueProducts.map((product) => (
        <CartItemContainer key={product.id}>
          <CartItemImage src={product.imageUrl} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <CartItemButtonsContainer>
              <CartButton onClick={() => addProduct(product)}>+</CartButton>
              <CountDisplay>{getProductCount(product)}</CountDisplay>
              <CartButton
                onClick={() =>
                  removeProduct(
                    products.findIndex((p) => p.id === product.id),
                    product.price
                  )
                }
              >
                -
              </CartButton>
            </CartItemButtonsContainer>
          </div>
        </CartItemContainer>
      ))}
      <CartSummaryContainer>
        <p>{count} Items</p>
        <p>Total Price: {totalPrice.toFixed(2)}</p>
        {count > 0 && (
          <Link to="/CheckoutSuccess">
            <MainButton>Purchase</MainButton>
          </Link>
        )}
      </CartSummaryContainer>
    </MainContainer>
  );
}

export default CartPage;
