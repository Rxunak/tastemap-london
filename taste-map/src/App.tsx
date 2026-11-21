import type { PlacesType } from "@/types/place";
import places from "@/data/places.json";
import { SegmentedControl } from "@/components/shared/segmented-control";
import { Navbar } from "@/components/shared/navbar";
import { FilterTabs } from "@/components/shared/filter-tabs";

function App() {
  const placesInfo = places as PlacesType[];
  return (
    <main className="min-h-svh font-display">
      <Navbar />
      <FilterTabs />
      <SegmentedControl placesInfo={placesInfo} />
    </main>
  );
}

export default App;
