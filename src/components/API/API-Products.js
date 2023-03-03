const API_URL = "https://api.noroff.dev/api/v1/online-shop";

const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getProducts;
