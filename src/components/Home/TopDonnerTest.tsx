"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllDonnerQuery } from "@/redux/api/donnerApi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TDonner } from "@/types/donner";
import Autoplay from "embla-carousel-autoplay";
import { useGestBestDonnersQuery } from "@/redux/api/dashboardApi";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testt = () => {
  const { data, isLoading, isError } = useGestBestDonnersQuery({});
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 5,
      spacing: 5,
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <div ref={ref} className="keen-slider">
      {data.length > 0 ? (
        data.slice(0, 6).map((donner: TDonner) => (
          <div key={donner.id} className="keen-slider__slide">
            <Card className="bg-red-700 w-[250px] rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <CardContent className="flex aspect-square items-center justify-center gap-10 p-6">
                <div className="flex flex-col items-center p-4">
                  <div className="relative w-48 h-48">
                    <Image
                      src={
                        donner?.DonorProfile?.profilePhoto ||
                        "https://thumbs.dreamstime.com/b/blood-drop-talking-cartoon-illustration-53668689.jpg"
                      }
                      alt={donner.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full transition-transform transform hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-gray-300">
                      {donner.name}
                    </p>
                    <p className="text-sm text-gray-300">
                      Blood Group:
                      <span className="font-bold text-red-200">
                        {donner.bloodType}
                      </span>
                    </p>

                    <p className="text-sm font-bold text-gray-300">
                      {donner.availability === true
                        ? "Ready for Donation"
                        : "Not Available"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))
      ) : (
        <p>No donors found</p>
      )}
    </div>
  );
};

export default Testt;
