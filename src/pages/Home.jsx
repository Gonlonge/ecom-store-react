import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../components/styled-components/Body.styles";
import { Link } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.quaternary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GridItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const GridItemContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const GridItemTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const GridItemDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const GridItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.danger};
`;

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
                {" "}
                <Link to={`/ProductPage/${post.id}`}>
                  <GridItemTitle>{post.title}</GridItemTitle>
                  <GridItemDescription>{post.description}</GridItemDescription>
                  <GridItemPrice>{post.price}</GridItemPrice>
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
