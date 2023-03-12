import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { MainContainer } from "../components/styled-components/Body.styles";
import {
  GridContainer,
  GridItem,
  GridItemImage,
  GridItemContent,
  GridItemTitle,
  GridItemPrice,
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
        <GridContainer>
          {filteredPosts.map((post) => (
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

// import React, { useEffect, useState } from "react";
// import { MainContainer } from "../components/styled-components/Body.styles";
// import { Link } from "react-router-dom";
// import {
//   GridContainer,
//   GridItem,
//   GridItemImage,
//   GridItemContent,
//   GridItemTitle,
//   GridItemPrice,
// } from "../components/styled-components/Card.styles";

// const url = "https://api.noroff.dev/api/v1/online-shop";

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     async function getData() {
//       try {
//         setIsError(false);

//         setIsLoading(true);
//         const response = await fetch(url);
//         const json = await response.json();
//         setPosts(json);

//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         setIsError(true);
//       }
//     }

//     getData();
//   }, []);

//   const filteredPosts = posts.filter((post) =>
//     post.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   if (isLoading) {
//     return <div>Loading posts</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   return (
//     <div>
//       <MainContainer>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//         />
//         <GridContainer>
//           {filteredPosts.map((post) => (
//             <GridItem key={post.id}>
//               <GridItemImage src={post.imageUrl} alt={post.title} />
//               <GridItemContent>
//                 <Link to={`/ProductPage/${post.id}`}>
//                   <GridItemTitle>{post.title}</GridItemTitle>
//                   {post.price !== post.discountedPrice && (
//                     <GridItemPrice>{post.price}</GridItemPrice>
//                   )}
//                   <GridItemPrice
//                     isDiscounted={post.price !== post.discountedPrice}
//                   >
//                     {post.discountedPrice}
//                   </GridItemPrice>
//                 </Link>
//               </GridItemContent>
//             </GridItem>
//           ))}
//         </GridContainer>
//       </MainContainer>
//     </div>
//   );
// }

// export default Home;
