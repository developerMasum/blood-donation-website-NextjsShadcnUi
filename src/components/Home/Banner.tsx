import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import assets from "@/assets";

const Banner = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-around bg-[#c63737] text-slate-200 px-8 py-12 lg:min-h-screen">
      <div className="z-10 max-w-lg text-center lg:text-left lg:w-1/2 lg:pr-8">
        <p className="text-5xl lg:text-9xl font-bold text-white">#</p>
        <h1 className="text-4xl lg:text-7xl font-bold text-white uppercase">
          Be A Hero
        </h1>
        <p className="text-lg lg:text-3xl mb-4 text-[#ffffff] mt-3 uppercase font-bold">
          You don&apos;t have to be a Doctor
        </p>
        <p className="text-lg lg:text-3xl mb-4 text-white uppercase font-bold">
          To Save a life
        </p>
        <div className="flex gap-4 text-3xl lg:text-7xl font-bold text-white">
          <p> + </p>
          <p> - </p>
        </div>
        <p>
          Donating blood is one of the most selfless acts of kindness. It costs
          nothing, takes only a few moments, and can give someone a second
          chance at life. Your small act can save lives and transform
          communities.
        </p>
        <Button className="mt-4">Get Started</Button>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src={assets.images.banner}
          alt="Blood Hero"
          height={500}
          width={800}
          className="w-full h-full object-cover"
        />
        <div className="hidden lg:block absolute bottom-4 left-0 right-0 text-center">
          {/* <p>Social media</p> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
