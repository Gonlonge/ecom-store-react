import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import ReviewList from "../components/ReviewList";
import { MainContainer } from "../components/styled-components/Body.styles";
import {
  GridItemPrice,
  GridItemContent,
  GridItemImage,
  GridItemIndividual,
  DiscountedPrice,
} from "../components/styled-components/Card.styles";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(`${url}/${id}`);
        const json = await response.json();
        console.log(json);
        setProduct(json);
        setReviews(json.reviews);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, [id]);

  if (isLoading) {
    return <div>Loading post details</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <MainContainer>
      <GridItemIndividual>
        <GridItemImage src={product.imageUrl} alt={product.title} />
        <GridItemContent>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {product.price !== product.discountedPrice && (
            <GridItemPrice isDiscounted={true}>{product.price}</GridItemPrice>
          )}
          {product.price !== product.discountedPrice ? (
            <DiscountedPrice>{product.discountedPrice}</DiscountedPrice>
          ) : (
            <GridItemPrice isDiscounted={false}>{product.price}</GridItemPrice>
          )}
          <AddToCart product={product} />
        </GridItemContent>
      </GridItemIndividual>
      <GridItemContent>
        <ReviewList reviews={reviews} />
        <p>Tags: {product.tags}</p>
      </GridItemContent>
    </MainContainer>
  );
}

export default ProductPage;
