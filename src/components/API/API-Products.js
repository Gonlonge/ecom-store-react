// const API_URL = "https://api.noroff.dev/api/v1/online-shop";

// async function getProducts() {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error("Failed to fetch products.");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default getProducts;

//

// import React, { useEffect, useState } from 'react';

// const API_URL = "https://api.noroff.dev/api/v1/online-shop";

// function getProducts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(API_URL);
//       const json = await response.json();
//       setPosts(json);
//     }
//     getData();
//   }, []);

//   export default getProducts;
