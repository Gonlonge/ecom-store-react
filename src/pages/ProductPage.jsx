import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MainButton from "../components/styled-components/MainButton.styles";
import { MainContainer } from "../components/styled-components/Body.styles";
import {
  GridContainer,
  GridItem,
  GridItemImage,
  GridItemContent,
  GridItemTitle,
  GridItemPrice,
} from "../components/styled-components/productPage.styles";

const url = "https://api.noroff.dev/api/v1/online-shop";

const RatingText = styled.p`
  color: ${(props) => props.theme.colors.rating};
`;

function ProductPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(`ProductPage rendered with id: ${id}`);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);

        setIsLoading(true);
        const response = await fetch(`${url}/${id}`);
        const json = await response.json();
        console.log(json);
        setPost(json);

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
      <GridContainer>
        <GridItem>
          <GridItemImage src={post.imageUrl} alt={post.title} />
          <GridItemContent>
            <GridItemTitle>{post.title}</GridItemTitle>
            <p>{post.description}</p>
            {post.price !== post.discountedPrice && (
              <GridItemPrice>{post.price}</GridItemPrice>
            )}
            <GridItemPrice isDiscounted={post.price !== post.discountedPrice}>
              {post.discountedPrice}
            </GridItemPrice>
            <RatingText>Rating: {post.rating}</RatingText>
            <MainButton>Add To Cart</MainButton>
          </GridItemContent>
        </GridItem>
      </GridContainer>
    </MainContainer>
  );
}

export default ProductPage;
