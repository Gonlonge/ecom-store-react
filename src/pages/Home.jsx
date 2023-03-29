import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MainButton from "../components/styled-components/Buttons.styles";
import { MainContainer } from "../components/styled-components/Body.styles";
import {
  GridContainer,
  GridItem,
  GridItemImage,
  GridItemContent,
  GridItemTitle,
  GridItemPrice,
  DiscountedPrice,
} from "../components/styled-components/Card.styles";

function Home() {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop"
        );
        const json = await response.json();
        console.log(json);
        setPosts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <MainContainer>
        <div>
          <SearchBar
            searchQuery={searchQuery}
            onSearchInputChange={handleSearchInputChange}
          />
        </div>
      </MainContainer>
      <MainContainer>
        <GridContainer>
          {filteredPosts.map((post) => (
            <GridItem key={post.id}>
              <GridItemImage src={post.imageUrl} alt={post.title} />
              <GridItemContent>
                <GridItemTitle>{post.title}</GridItemTitle>
                {post.price !== post.discountedPrice && (
                  <GridItemPrice isDiscounted={true}>
                    {post.price}
                  </GridItemPrice>
                )}
                {post.price !== post.discountedPrice ? (
                  <DiscountedPrice>{post.discountedPrice}</DiscountedPrice>
                ) : (
                  <GridItemPrice isDiscounted={false}>
                    {post.price}
                  </GridItemPrice>
                )}
                <Link to={`/ProductPage/${post.id}`}>
                  <MainButton>View</MainButton>
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
