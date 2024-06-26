import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import assets from "@/assets";
const DashboardPage = () => {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg  text-center max-w-md">
          <Image
            src={assets.images.goalLogo}
            alt="Slack Logo"
            width={600}
            height={600}
            className="mx-auto mb-6 w-56 h-56"
          />
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-6">
            <span className="text-red-700 font-semibold">
              Alor Pothik Blood Foundation
            </span>
            is a Blood Donation app for donors.
          </p>
          <Button className=" hover:bg-green-600 transition duration-300 pointer-events-none">
            Explore Dashboard
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Powered by
            <span className="text-red-700 font-semibold">
              @AlorPothikBloodFoundation
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
