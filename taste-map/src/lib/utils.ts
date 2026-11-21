import type { PriceTier } from "@/types/place";
import { parseISO, format } from "date-fns";

export { cn } from "cn";

const PRICE_SYMBOLS: Record<PriceTier, string> = {
  1: "£",
  2: "££",
  3: "£££",
  4: "££££",
};

export const priceSymbolFormat = (price: PriceTier) => PRICE_SYMBOLS[price];

export const formatDate = (date: string) => {
  const result = parseISO(date);
  console.log(result);
  return format(result, "d MMM");
};
