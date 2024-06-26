"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetMeritWiseDonnerQuery } from "@/redux/api/dashboardApi";

export function Recent() {
  const { data } = useGetMeritWiseDonnerQuery({});
  console.log(data);

  return (
    <div className="space-y-8 border border-gray-300 p-8 border-opacity-40 rounded-lg shadow-sm">
      {data &&
        data.map((donor: any) => (
          <div
            key={donor.email}
            className="flex items-center p-4 border-b border-gray-200 last:border-0"
          >
            <Avatar className="h-12 w-12 rounded-full">
              <AvatarImage
                src={
                  donor.DonorProfile?.profilePhoto ||
                  "https://thumbs.dreamstime.com/b/blood-drop-talking-cartoon-illustration-53668689.jpg"
                }
                alt={donor.name}
              />
              <AvatarFallback>
                {donor.name
                  ? donor.name
                      .split(" ")
                      .map((n: any) => n[0])
                      .join("")
                  : "NA"}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{donor.name}</p>
              <p className="text-sm text-gray-500">{donor.email}</p>
            </div>
            <div className="ml-5 text-sm text-blue-600">{`+${donor.totalDonations} Times`}</div>
          </div>
        ))}
    </div>
  );
}
