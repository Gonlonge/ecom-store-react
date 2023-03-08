import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

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
        const response = await fetch(`${url}/posts/${id}`);
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
    <div>
      <h1>Testing hard code this works</h1>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
}

export default ProductPage;
