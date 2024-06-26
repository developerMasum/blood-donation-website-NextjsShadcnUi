"use client";
import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { TDonner, bloodGroups } from "@/types/donner";
import { useGetAllDonnerQuery } from "@/redux/api/donnerApi";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useDebounced } from "@/redux/hooks";
import {
  CirclesWithBar,
  MagnifyingGlass,
  RotatingLines,
} from "react-loader-spinner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectComponent } from "@/components/Forms/Select";
import { ComboboxPopover } from "@/components/Forms/Avilablity";
const formSchema = z.object({
  query: z.string(),
});
const DonnerListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodType, setBloodType] = useState("");
  const onSubmit = (data: FieldValues) => {
    setSearchTerm(data?.query);
  };

  const query: Record<string, any> = {};
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  // select
  const handleValueChange = (blood: string) => {
    setBloodType(blood);
  };

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  if (bloodType) {
    query["bloodType"] = bloodType;
  }
  if (debouncedTerm) {
    query["searchTerm"] = searchTerm;
    if (bloodType) {
      query["bloodType"] = bloodType;
    }
  }

  const { data, isLoading } = useGetAllDonnerQuery({ ...query });
  const donners: TDonner[] | undefined = data?.donner as TDonner[] | undefined;
  console.log(data);
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
    <div className="pt-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <form onChange={handleSubmit(onSubmit)} className="flex items-center">
          <Input
            type="text"
            placeholder="Search"
            {...register("query")}
            className="mr-2 w-72 md:w-96"
          />
          {errors.query && (
            <span className="text-red-500">
              Please enter a valid search query
            </span>
          )}
        </form>
        <div className="w-full flex justify-center md:w-auto">
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-4/5  md:lg:w-[280px]">
              <SelectValue placeholder="Select Blood Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {isLoading ? (
                  <SelectItem value="loading">Loading...</SelectItem>
                ) : (
                  bloodGroups.map((bloodType, index) => (
                    <SelectItem key={index} value={bloodType}>
                      {bloodType}
                    </SelectItem>
                  ))
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <RotatingLines
            visible={true}
            // height="200"
            width="200"
            // color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            // wrapperStyle={{}}
            // wrapperClass=""
          />
        </div>
      )}

      {donners && donners.length === 0 && (
        <div className="text-center mt-4">
          No items found for the {bloodType}.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-12">
        {donners &&
          donners.map((donner) => (
            <div key={donner.id} className="flex justify-center items-center">
              <Link href={`/donner-list/details/${donner.id}`}>
                <Card className="bg-red-700 w-[320px] md:lg:w-[250px] rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <CardContent className="flex aspect-square items-center justify-center gap-4 p-4 sm:p-6">
                    <div className="flex flex-col items-center p-4">
                      <div className="relative w-24 h-24 sm:w-48 sm:h-48">
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
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DonnerListPage;
