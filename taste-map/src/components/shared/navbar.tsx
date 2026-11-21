import { Button } from "@/components/ui/button";
import logo from "../../../public/tastemap-logo.svg";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <main>
      <div className="flex justify-center items-center text-xs p-1 border-b border-gray-300 gap-3">
        You're exploring as a guest with a London starter map.{" "}
        <Button variant="link" className="p-0 text-xs justify-start">
          Sign up to save your places
        </Button>
      </div>
      <div className="flex items-center gap-4 p-2 pt-0">
        <img src={logo} alt="" className="w-22" />
        <Input placeholder="Search name, cuisine, area or tag" />
        <Button>Where should we eat?</Button>
        <Button variant="outline">Add place</Button>
        <Button variant="secondary">G</Button>
      </div>
    </main>
  );
}
