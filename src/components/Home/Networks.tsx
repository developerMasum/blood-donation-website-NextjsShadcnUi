import React from "react";
import { Card} from "../ui/card";
import { CalendarClock, MapPin, Ungroup, Users } from "lucide-react";

const Networks = () => {
  return (
    <div className="flex flex-col items-center mt-12 px-5 md:lg:px-0">
      <p className="text-3xl text-red-700 font-bold text-center  uppercase mt-12 mb-4">
        #We are a network of
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Card className="w-full md:lg:w-52 border-0 flex flex-col items-center text-center">
          <Users color="red" size={60} />
          <p className="text-xl font-bold my-2 ">250+ Donner</p>
        </Card>
        <Card className="w-full md:lg:w-52 border-0 flex flex-col items-center text-center">
          <MapPin color="red" size={60} />
          <p className="text-xl font-bold my-2 ">5 Districts</p>
        </Card>
        <Card className="w-full md:lg:w-52 border-0 flex flex-col items-center text-center">
          <CalendarClock color="red" size={60} />
          <p className="text-xl font-bold my-2 ">24/7 Services</p>
        </Card>
        <Card className="w-full md:lg:w-52 border-0 flex flex-col items-center text-center">
          <Ungroup color="red" size={60} />
          <p className="text-xl font-bold my-2 ">12 Groups</p>
        </Card>
      </div>
    </div>
  );
};

export default Networks;
