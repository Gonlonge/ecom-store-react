import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ReviewItem = styled.div`
  margin-bottom: 1rem;
`;

const Username = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled(FaStar)`
  color: ${({ theme }) => theme.colors.secondary};
`;

function ReviewList({ reviews }) {
  const reviewItems = reviews.map((review) => (
    <ReviewItem key={review.id}>
      <Username>{review.username}</Username>
      <Description>{review.description}</Description>
      <Rating>
        {[...Array(review.rating)].map((star, i) => (
          <Star key={i} />
        ))}
      </Rating>
    </ReviewItem>
  ));

  return <div>{reviewItems}</div>;
}

export default ReviewList;
