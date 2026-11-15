export type PlaceStatus = "been" | "want";

export type PlacesType = {
  id: string;
  name: string;
  cuisine: string;
  area: string;
  price: 1 | 2 | 3 | 4;
  status: PlaceStatus;
  lat: number;
  lng: number;
  tags: string[];
  note: string;
  addedAt: string;
};
