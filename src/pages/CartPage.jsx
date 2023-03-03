import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProductContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  margin-top: 0;
`;

const ProductPrice = styled.p`
  margin: 8px 0;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }

  &:disabled {
    background-color: #b2b2b2;
    cursor: not-allowed;
  }
`;

const AddToCartPage = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    // Do some other logic to add the product to the cart
  };

  return (
    <Container>
      <ProductContainer>
        <ProductImage src="https://via.placeholder.com/300x200" alt="Product" />
        <ProductName>Product Name</ProductName>
        <ProductPrice>$10.00</ProductPrice>
        <Button onClick={handleAddToCart} disabled={isAddedToCart}>
          {isAddedToCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </ProductContainer>
    </Container>
  );
};

export default AddToCartPage;
