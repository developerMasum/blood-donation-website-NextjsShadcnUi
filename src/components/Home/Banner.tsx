import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import assets from "@/assets";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-around bg-[#e4e4e4e4] text-slate-800 px-8 py-12 h-screen">
      <div className="z-10 max-w-lg">
        <p className="text-9xl font-bold text-red-700">#</p>
        <h1 className="text-7xl font-bold text-red-700 uppercase">Be A Hero</h1>
        <p className="text-3xl mb-4 text-slate-800 mt-3 uppercase font-bold">
          You don&apos;t have to be a Doctor
        </p>

        <p className="text-3xl mb-4 text-red-700 uppercase font-bold">
          To Save a life
        </p>
        <div className="flex gap-4">
          <p className="text-6xl font-bold text-red-700"> + </p>
          <p className="text-6xl font-bold text-red-700">-</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          voluptas doloremque qui perferendis quaerat eligendi doloribus!
        </p>
        <Button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          Get Started
        </Button>
      </div>
      <div >
        <Image
          src={assets.images.banner}
          alt="Blood Hero"
          height={500}
          width={800}
          className="w-full h-full object-cover opacity-50"
        />
        <div>
         <p className="text-center">Social media</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
