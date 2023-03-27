import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../components/styled-components/SecondaryButton.styles";
// import {
//   GridItemPrice,
//   GridItemContent,
//   GridItemImage,
//   GridItemIndividual,
// } from "../components/styled-components/Card.styles";
import { useProductsStore } from "../components/AddToCart";
import MainButton from "../components/styled-components/MainButton.styles";
import { shallow } from "zustand/shallow";
import {
  CartContainer,
  CountDisplay,
  TotalPriceDisplay,
} from "../components/styled-components/AddToCart.styles";
import { MainContainer } from "../components/styled-components/Body.styles";

function CartPage() {
  const { products, count, totalPrice, removeProduct, addProduct } =
    useProductsStore(
      (state) => ({
        products: state.products,
        count: state.count,
        totalPrice: state.totalPrice,
        removeProduct: state.removeProduct,
        addProduct: state.addProduct,
      }),
      shallow
    );

  return (
    <MainContainer>
      <CartContainer>
        {products.map((product, index) => (
          <div key={`${product.id}-${index}`}>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} width="100" />
            <p>Price: {product.price}</p>
            <SecondaryButton
              onClick={() => removeProduct(index, product.price)}
            >
              -
            </SecondaryButton>
            <SecondaryButton onClick={() => addProduct(product)}>
              +
            </SecondaryButton>
          </div>
        ))}
        <CountDisplay>{count} Items</CountDisplay>
        <TotalPriceDisplay>
          Total Price: {totalPrice.toFixed(2)}
        </TotalPriceDisplay>
        <Link to="/CheckoutSuccess">
          <MainButton>Purchase</MainButton>
        </Link>
      </CartContainer>
    </MainContainer>
  );
}

export default CartPage;
