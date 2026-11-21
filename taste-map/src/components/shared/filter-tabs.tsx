import { Button } from "@/components/ui/button";
import React from "react";

export function FilterTabs() {
  return (
    <div>
      <div>Price</div>
      <div>Cuisine</div>
      <Button variant="link">Clear all</Button>
    </div>
  );
}
