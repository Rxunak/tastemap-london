import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PlacesType } from "@/types/place";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { priceSymbolFormat } from "@/lib/utils";

type PlaceTabsProps = {
  placesInfo: PlacesType[];
};

export function SegmentedControl({ placesInfo }: PlaceTabsProps) {
  const beenStatus = placesInfo.filter((place) => place.status == "been");
  const wantStatus = placesInfo.filter((place) => place.status == "want");

  console.log(beenStatus);
  return (
    <Tabs defaultValue="been" className="w-80 bg-background">
      <TabsList className=" bg-gray-200 w-full">
        <TabsTrigger value="been">
          Been <span>&#183;</span>
          {beenStatus.length}
        </TabsTrigger>
        <TabsTrigger value="want">
          Want to try <span>&#183;</span>
          {wantStatus.length}
        </TabsTrigger>
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
        <div className="flex gap-2 flex-col">
          {beenStatus.map((item) => (
            <div
              key={item.id}
              className="flex justify-between bg-white rounded-xl p-2"
            >
              <div className="flex gap-4">
                <div>{item.rank}</div>
                <div>
                  <h1>{item.name}</h1>
                  <div>
                    {item.cuisine}
                    <span>&#183;</span>

                    {priceSymbolFormat(item.price)}
                    <span>&#183;</span>
                    {item.area}
                  </div>
                </div>
              </div>

              <div>10</div>
            </div>
          ))}
        </div>
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
