import HandMoney from "@/shared/assets/svg/handMoney.svg";
import HandsDollar from "@/shared/assets/svg/handsDollar.svg";
import Bank from "@/shared/assets/svg/bank.svg";
import Book from "@/shared/assets/svg/book.svg";
import Houses from "@/shared/assets/svg/houses.svg";
import Money from "@/shared/assets/svg/money.svg";
import BuseinessExtention from "@/shared/assets/svg/businessExtention.svg";
import DollarWithBg from "@/shared/assets/svg/dollarWithBg.svg";

export const iconMap = {
    HandMoney,
    HandsDollar,
    Money,
    Bank,
    Book,
    Houses, 
    BuseinessExtention, 
    DollarWithBg
};

export const fetchCases = async () => {
  const response = await fetch("/mocks/useCases.json");

  if (!response.ok) {
    throw new Error("Failed to fetch cases");
  }

  return response.json();
};
