import React, { useState, useEffect } from "react";

const API_URL = "https://api.noroff.dev/api/v1/online-shop";

const IndividualProductPage = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/products/${match.params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [match.params.id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>{product.price}</p>
    </div>
  );
};

export default IndividualProductPage;
