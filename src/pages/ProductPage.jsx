import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cardImage from "../images/ecom-card.png";
import AddToCart from "../components/AddToCart";
import { MainContainer } from "../components/styled-components/Body.styles";
import {
  GridItem,
  GridItemImage,
  GridItemContent,
  GridItemTitle,
  GridItemPrice,
} from "../components/styled-components/ProductPage.styles";
import ReviewList from "../components/ReviewList";

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
      <GridItem>
        <GridItemImage src={product.imageUrl} alt={product.title} />
        <GridItemContent>
          <GridItemTitle>{product.title}</GridItemTitle>
          <p>{product.description}</p>
          {product.price !== product.discountedPrice && (
            <GridItemPrice>{product.price}</GridItemPrice>
          )}
          <GridItemPrice
            isDiscounted={product.price !== product.discountedPrice}
          >
            {product.discountedPrice}
          </GridItemPrice>
          <AddToCart price={product.price} />
        </GridItemContent>
      </GridItem>
      <GridItem>
        <GridItemContent>
          <ReviewList reviews={reviews} />
          <p>Tags: {product.tags}</p>
        </GridItemContent>
        <GridItemImage src={cardImage} alt="My Image" />
      </GridItem>
    </MainContainer>
  );
}

export default ProductPage;
