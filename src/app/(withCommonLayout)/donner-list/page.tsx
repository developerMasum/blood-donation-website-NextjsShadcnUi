"use client";
import React from "react";
import SearchBox from "./components/SearchBox";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TDonner } from "@/types/donner";
import { useGetAllDonnerQuery } from "@/redux/api/donnerApi";

const DonnerListPAge = () => {
  const { data, isLoading } = useGetAllDonnerQuery({});
  const donners = data?.donner;

  return (
    <div>
      donar list page
      <SearchBox />
      {isLoading && <div>Loading...</div>}
      <div className="grid grid-cols-1 md:lg:grid-cols-6 gap-4 mt-12">
        {donners &&
          donners.map((donner: TDonner) => (
            <div key={donner.id} className="flex justify-center items-center  ">
              <Link href={`/donner-list/details/${donner.id}`}>
                <Card className="bg-red-700 w-[250px] rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <div className="flex flex-col items-center p-4">
                    <div className="relative w-48 h-48">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdxoy_bHgIrEGckeVLqGRxU2DmHTjKPVJjKFF4F_oiw&s"
                        alt="Dona"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full transition-transform transform hover:scale-110"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-lg font-semibold text-gray-900">
                        John Doe
                      </p>
                      <p className="text-sm text-gray-500">Blood Group: A+</p>
                      <p className="text-sm text-gray-500">
                        Total Donated:{" "}
                        <span className="font-bold">100 times</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Location: <span className="font-bold">Dhaka</span>
                      </p>
                      <p>Free to Donate</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DonnerListPAge;
