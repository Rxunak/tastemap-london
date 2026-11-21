export type PlaceStatus = "been" | "want";

export type PriceTier = 1 | 2 | 3 | 4;

export type PlacesType = {
  id: string;
  name: string;
  cuisine: string;
  area: string;
  price: PriceTier;
  status: PlaceStatus;
  lat: number;
  lng: number;
  tags: string[];
  note: string;
  addedAt: string;
  rank?: number | null | undefined;
};
