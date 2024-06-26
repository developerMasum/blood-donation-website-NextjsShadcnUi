"use client";
import React from "react";
import Link from "next/link";
import { HandHeart } from "lucide-react";
import { useGetBestDonnersWithTimeOfDonationsQuery } from "@/redux/api/dashboardApi";

const DonorList = () => {
  const { data, isLoading } = useGetBestDonnersWithTimeOfDonationsQuery({});
  // console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-red-500 p-8 w-[380px]">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white">
          List of Top blood donors
        </h1>
        <p className="text-white">Honored by Alor Pothik Blood Foundation</p>
      </div>
      <div className="space-y-4">
        {data.map((donor: any) => (
          <Link
            href="/donner-list"
            key={donor.id}
            className="block transform transition-transform hover:scale-105"
          >
            <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-2 rounded-full bg-red-500 ms-3">
                <HandHeart color="white" />
              </div>
              <div className="flex-1 p-4">
                <p className="text-lg font-semibold text-gray-900">
                  {donor.times} times
                </p>
                <p className="text-sm text-gray-500">
                  {donor.numberOfPeople} Donner
                </p>
              </div>
              <div className="p-4">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DonorList;
