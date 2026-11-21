import { priceSymbolFormat, formatDate } from "@/lib/utils";
import type { PriceTier } from "@/types/place";

type placesCardsProps = {
  placesCardsProps: {
    itemId: string;
    itemRank?: number | null | undefined;
    itemName: string;
    itemCuisine: string;
    itemPrice: PriceTier;
    itemArea: string;
    itemDate?: string;
  };
};

export function PlacesCards({ placesCardsProps }: placesCardsProps) {
  return (
    <div
      key={placesCardsProps.itemId}
      className="flex justify-between bg-white rounded-xl p-4 items-center"
    >
      <div className="flex gap-4 items-center">
        <div
          className={`text-xl font-bold ${placesCardsProps.itemRank !== null && placesCardsProps.itemRank !== undefined && placesCardsProps.itemRank <= 3 ? "text-primary" : "text-gray-400"} `}
        >
          {!placesCardsProps.itemRank ? (
            <span className="inline-block size-5 rounded-full border-3 border-want" />
          ) : (
            placesCardsProps.itemRank
          )}
        </div>
        <div>
          <h1 className="font-bold text-sm">{placesCardsProps.itemName}</h1>
          <div className="flex gap-1 text-xs text-gray-500">
            {placesCardsProps.itemCuisine}
            <span>&#183;</span>

            {priceSymbolFormat(placesCardsProps.itemPrice)}
            <span>&#183;</span>
            {placesCardsProps.itemArea}
          </div>
        </div>
      </div>

      <div
        className={`${!placesCardsProps.itemRank ? "text-gray-500" : "bg-background w-10 rounded-2xl"}  text-center text-xs font-bold `}
      >
        {!placesCardsProps.itemRank
          ? placesCardsProps.itemDate
            ? formatDate(placesCardsProps.itemDate)
            : null
          : 10}
      </div>
    </div>
  );
}
