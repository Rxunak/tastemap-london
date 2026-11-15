import type { PlacesType } from "@/types/place";
import places from "@/data/places.json";
import { Button } from "@/components/ui/button";
import { SegmentedControl } from "@/components/shared/segmented-control";

function App() {
  const test = places as PlacesType[];
  return (
    <main className="min-h-svh font-display">
      <h1 className="p-4 text-2xl font-semibold ">TasteMap</h1>
      <Button variant="link">Where should we eat?</Button>
      <SegmentedControl />
    </main>
  );
}

export default App;
