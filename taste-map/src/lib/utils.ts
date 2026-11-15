import type { PriceTier } from "@/types/place";

export { cn } from "cn";

const PRICE_SYMBOLS: Record<PriceTier, string> = {
  1: "£",
  2: "££",
  3: "£££",
  4: "££££",
};

export const priceSymbolFormat = (price: PriceTier) => PRICE_SYMBOLS[price];
