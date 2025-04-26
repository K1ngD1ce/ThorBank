export const fetchProducts = async () => {
  const response = await fetch("/mocks/products.json");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};
