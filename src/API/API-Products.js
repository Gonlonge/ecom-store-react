// import React from "react";

// function API_PRODUCTS() {
//   const [posts, setPosts] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [isError, setIsError] = React.useState(false);
//   const [searchQuery, setSearchQuery] = React.useState("");

//   React.useEffect(() => {
//     async function getData() {
//       try {
//         setIsError(false);
//         setIsLoading(true);
//         const response = await fetch(
//           "https://api.noroff.dev/api/v1/online-shop"
//         );
//         const json = await response.json();
//         console.log(json);
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
// }

// export default API_PRODUCTS;
