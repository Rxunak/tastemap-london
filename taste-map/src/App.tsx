import type { PlacesType } from "@/types/place";
import places from "@/data/places.json";
import { Button } from "@/components/ui/button";
import { SegmentedControl } from "@/components/shared/segmented-control";
import { Navbar } from "@/components/shared/navbar";

function App() {
  const placesInfo = places as PlacesType[];
  return (
    <main className="min-h-svh font-display">
      <Navbar />
      <SegmentedControl placesInfo={placesInfo} />
    </main>
  );
}

export default App;
