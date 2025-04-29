import Bag from "@/shared/assets/svg/bag.svg";
import Box from "@/shared/assets/svg/box.svg";
import Money from "@/shared/assets/svg/money.svg";

export const iconMap = {
  Bag,
  Box,
  Money,
};

export const fetchProducts = async () => {
  const response = await fetch("/mocks/products.json");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};
