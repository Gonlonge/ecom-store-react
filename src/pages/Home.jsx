import React, { useState, useEffect } from "react";
import getProducts from "../components/API/API-Products";
import { MainContainer } from "../components/styled-components/Body.styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      if (productsData) {
        setProducts(productsData);
      }
    };
    fetchProducts();
  }, []);

  return (
    <MainContainer>
      <GridContainer>
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <p>{product.price}</p>
            </div>
          ))}
      </GridContainer>{" "}
    </MainContainer>
  );
};

export default Home;
