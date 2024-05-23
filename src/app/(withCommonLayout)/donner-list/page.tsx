"use client";
import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TDonner } from "@/types/donner";
import { useGetAllDonnerQuery } from "@/redux/api/donnerApi";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useDebounced } from "@/redux/hooks";
const formSchema = z.object({
  query: z.string(),
});
const DonnerListPAge = () => {
   const [searchTerm, setSearchTerm] = useState("");
  const onSubmit = (data: FieldValues) => {
   setSearchTerm(data?.query);
  };
  const query: Record<string, any> = {};
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }
  const { data, isLoading } = useGetAllDonnerQuery({ ...query });
  const donners: TDonner[] | undefined = data?.donner as TDonner[] | undefined;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });
  
  return (
    <div>
      <div>
        <form onChange={handleSubmit(onSubmit)} className="flex items-center">
          <Input
            type="text"
            placeholder="Search"
            {...register("query")}
            className="mr-2"
          />
        
          {errors.query && (
            <span className="text-red-500">
              Please enter a valid search query
            </span>
          )}
        </form>
      </div>
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
                       {donner.name}
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
