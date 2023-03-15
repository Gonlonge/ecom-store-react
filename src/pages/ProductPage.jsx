import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";
import cardImage from "../images/ecom-card.png";

import MainButton from "../components/styled-components/MainButton.styles";
import { MainContainer } from "../components/styled-components/Body.styles";
import {
  GridItem,
  GridItemImage,
  GridItemContent,
  GridItemTitle,
  GridItemPrice,
} from "../components/styled-components/ProductPage.styles";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ProductPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  // const [reviews, setReviews] = useState([]);
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
        // setReviews(json.reviews);

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

  // const reviewList = reviews.map((review) => (
  //   <div key={review.id}>
  //     <p>{review.description}</p>
  //     <p>Rating: {review.rating}</p>
  //   </div>
  // ));

  return (
    <MainContainer>
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
          <p>Tags: {post.tags}</p>
          <MainButton>Add To Cart</MainButton>
        </GridItemContent>
      </GridItem>

      <GridItem>
        {/* <GridItemContent>{reviewList}</GridItemContent> */}
        <GridItemImage src={cardImage} alt="My Image" />
      </GridItem>
    </MainContainer>
  );
}

export default ProductPage;

//

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import cardImage from "../images/ecom-card.png";

// import MainButton from "../components/styled-components/MainButton.styles";
// import { MainContainer } from "../components/styled-components/Body.styles";
// import {
//   GridItem,
//   GridItemImage,
//   GridItemContent,
//   GridItemTitle,
//   GridItemPrice,
// } from "../components/styled-components/ProductPage.styles";

// const url = "https://api.noroff.dev/api/v1/online-shop";

// const RatingText = styled.p`
//   color: ${(props) => props.theme.colors.rating};
// `;

// function ProductPage() {
//   const { id } = useParams();
//   const [post, setPost] = useState({});
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   console.log(`ProductPage rendered with id: ${id}`);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setIsError(false);

//         setIsLoading(true);
//         const response = await fetch(`${url}/${id}`);
//         const json = await response.json();
//         console.log(json);
//         setPost(json);
//         setReviews(json.reviews);

//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         setIsError(true);
//       }
//     }

//     getData();
//   }, [id]);

//   if (isLoading) {
//     return <div>Loading post details</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   const reviewList = reviews.map((review) => (
//     <div key={review.id}>
//       <RatingText>Rating: {review.rating}</RatingText>
//       <p>{review.description}</p>
//     </div>
//   ));

//   return (
//     <MainContainer>
//       <GridItem>
//         <GridItemImage src={post.imageUrl} alt={post.title} />
//         <GridItemContent>
//           <GridItemTitle>{post.title}</GridItemTitle>
//           <p>{post.description}</p>
//           {post.price !== post.discountedPrice && (
//             <GridItemPrice>{post.price}</GridItemPrice>
//           )}
//           <GridItemPrice isDiscounted={post.price !== post.discountedPrice}>
//             {post.discountedPrice}
//           </GridItemPrice>
//           <RatingText>Tags: {post.tags}</RatingText>
//           <MainButton>Add To Cart</MainButton>
//         </GridItemContent>
//       </GridItem>
//       {/*  */}
//       <GridItem>
//         <GridItemContent>
//           <RatingText>{reviewList}</RatingText>
//         </GridItemContent>
//         <GridItemImage src={cardImage} alt="My Image" />
//       </GridItem>
//     </MainContainer>
//   );
// }

// export default ProductPage;
