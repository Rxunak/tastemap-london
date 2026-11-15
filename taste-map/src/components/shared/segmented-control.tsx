import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PlacesType } from "@/types/place";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PlaceTabsProps = {
  placesInfo: PlacesType[];
};

export function SegmentedControl({ placesInfo }: PlaceTabsProps) {
  const beenStatus = placesInfo.filter((place) => place.status == "been");
  const wantStatus = placesInfo.filter((place) => place.status == "want");

  console.log(beenStatus);
  return (
    <Tabs defaultValue="been" className="w-100">
      <TabsList className=" bg-background w-full">
        <TabsTrigger value="been">Been</TabsTrigger>
        <TabsTrigger value="want">Want to try</TabsTrigger>
      </TabsList>
      <TabsContent value="been">
        <h1>
          Ranked by your head-to-head picks. Tap a place to see it on the map.
        </h1>
      </TabsContent>
      <TabsContent value="want">
        <h1>Newest first. Mark on as been to rank it.</h1>
      </TabsContent>
      <TabsContent value="been">
        <Card>
          <CardContent className="text-sm text-muted-foreground">
            {beenStatus.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="want">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
