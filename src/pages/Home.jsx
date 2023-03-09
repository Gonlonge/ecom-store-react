import React, { useEffect, useState } from "react";
import { MainContainer } from "../components/styled-components/Body.styles";
import { Link } from "react-router-dom";
import {
  GridContainer,
  GridItem,
  GridItemImage,
  GridItemContent,
  GridItemTitle,
  GridItemPrice,
} from "../components/styled-components/Card.styles";

const url = "https://api.noroff.dev/api/v1/online-shop";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);

        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json); // add this line
        setPosts(json);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <MainContainer>
        <GridContainer>
          {posts.map((post) => (
            <GridItem key={post.id}>
              <GridItemImage src={post.imageUrl} alt={post.title} />
              <GridItemContent>
                <Link to={`/ProductPage/${post.id}`}>
                  <GridItemTitle>{post.title}</GridItemTitle>
                  {post.price !== post.discountedPrice && (
                    <GridItemPrice>{post.price}</GridItemPrice>
                  )}
                  <GridItemPrice
                    isDiscounted={post.price !== post.discountedPrice}
                  >
                    {post.discountedPrice}
                  </GridItemPrice>
                </Link>
              </GridItemContent>
            </GridItem>
          ))}
        </GridContainer>
      </MainContainer>
    </div>
  );
}

export default Home;
