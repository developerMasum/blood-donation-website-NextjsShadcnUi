import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export function SearchButton() {
  return (
    <div className="flex w-full justify-center items-center mt-12">
      <div className="flex w-full justify-center max-w-md items-center space-x-2">
        <Input type="text"  placeholder="Search ..." className="flex-1" />
        <Button type="submit" >Search</Button>
      </div>
    </div>
  );
}
