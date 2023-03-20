import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ReviewItem = styled.div`
  margin-bottom: 1rem;
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
      <h3>{review.username}</h3>
      <p>{review.description}</p>
      <Rating>
        {[...Array(review.rating)].map((star, i) => (
          <Star key={i} />
        ))}
      </Rating>
    </ReviewItem>
  ));

  return (
    <div>
      <h2>Reviews</h2>
      {reviewItems}
    </div>
  );
}

export default ReviewList;
