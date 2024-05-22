"use client";
import Image from "next/image";
import Link from "next/link";
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

const TopDonner = () => {
  const { data, isLoading, isError } = useGetAllDonnerQuery({});
  const donners = data?.donner;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <>
      <Carousel  className="w-full max-w-screen-md">
        <CarouselContent className="-ml-1">
          {donners && donners?.length > 0 ? (
            donners.slice(0, 5).map((donner: TDonner, index: number) => (
              <CarouselItem
                key={donner.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3 md:pl-12 "
              >
                <div className="p-1">
                  <Card className="bg-red-700 w-[250px] rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                    <CardContent className="flex aspect-square items-center justify-center gap-10 p-6">
                      <div className="flex flex-col items-center p-4">
                        <div className="relative w-48 h-48">
                          <Image
                            src={
                              donner.imageUrl ||
                              "https://via.placeholder.com/150"
                            }
                            alt={donner.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full transition-transform transform hover:scale-110"
                          />
                        </div>
                        <div className="mt-4 text-center">
                          <p className="text-lg font-semibold text-gray-900">
                            {donner.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Blood Group: {donner.bloodGroup}
                          </p>
                          <p className="text-sm text-gray-500">
                            Total Donated:{" "}
                            <span className="font-bold">
                              {donner.totalDonations} times
                            </span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Location:{" "}
                            <span className="font-bold">{donner.location}</span>
                          </p>
                          <p>Free to Donate</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <p>No donors found</p>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default TopDonner;
