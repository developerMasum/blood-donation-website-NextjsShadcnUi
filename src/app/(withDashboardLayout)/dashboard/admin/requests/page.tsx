"use client";

import {
  useGetAllDonnerQuery,
  useGetAllRequestsQuery,
  useGotRequestsQuery,
} from "@/redux/api/donnerApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UpdateDialog } from "./Components/UpdateDialog";
import { useState } from "react";
import { PhoneOutgoing } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface RequestInfo {
  id: string;
  donorId: string;
  requesterId: string;
  phoneNumber: string;
  dateOfDonation: string;
  hospitalName: string;
  hospitalAddress: string;
  reason: string;
  requestStatus: string;
  createdAt: string;
  updatedAt: string;
}

interface DonationRequest {
  id: string;
  phoneNumber: string;
  hospitalAddress: string;
  requestStatus: string;
  hospitalName: string;
  dateOfDonation: string;
  donor: {
    name: string;
    email: string;

    bloodType: string;
    totalDonations: number;
    location: string;
    DonorProfile: {
      age: string;
      lastDonationDate: string | null;
      contactNumber: string;
    };
  };
  requester: {
    name: string;
    email: string;
  };
}

// export interface DonationData {
//   donner: {
//     requestInfo: RequestInfo[];
//     donorInfo: DonorInfo;
//   };
// }

const DonationRequest = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetAllRequestsQuery({});
  // console.log(data?.requests)
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  if (!data || !data.requests) {
    return (
      <div className="flex justify-center items-center h-full">
        You don&apos;t have any Donation Requests
      </div>
    );
  }

  const request = data?.requests as DonationRequest[];

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Requester Name</TableHead>
            <TableHead>Need Blood Group</TableHead>
            <TableHead>Patient Number</TableHead>
            <TableHead>Donor Name</TableHead>
            <TableHead>Donor Age</TableHead>
            <TableHead>Donor Number</TableHead>
            {/* <TableHead>Donor Location</TableHead> */}
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {request?.map((req: DonationRequest) => (
            <TableRow key={req.id}>
              <TableCell className="font-medium">
                {req?.requester?.name}
              </TableCell>
              <TableCell className="font-medium">
                {req?.donor?.bloodType}
              </TableCell>
              <TableCell className="text-green-600">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={`tel:${req?.phoneNumber}`}>
                        <PhoneOutgoing />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{req?.phoneNumber}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell className="font-medium">{req.donor.name}</TableCell>
              <TableCell> {req.donor.DonorProfile.age}</TableCell>
              <TableCell className="text-red-600">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={`tel:${req.donor.DonorProfile.contactNumber}`}>
                        <PhoneOutgoing />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{req.donor.DonorProfile.contactNumber}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell className="text-sm font-semibold">
                {req.requestStatus === "PENDING" && (
                  <p className="text-orange-600"> Pending </p>
                )}
                {req.requestStatus === "REJECTED" && (
                  <p className="text-red-600"> Rejected </p>
                )}
                {req.requestStatus === "APPROVED" && (
                  <p className="text-green-700"> Approved </p>
                )}
              </TableCell>
              {/* <TableCell>
                <UpdateDialog open={open} setOpen={setOpen} id={req.id} />
              </TableCell> */}

              <TableCell>
                {req.requestStatus === "PENDING" ? (
                  <UpdateDialog open={open} setOpen={setOpen} id={req.id} />
                ) : (
                  <button disabled className="text-gray-600 cursor-not-allowed">
                    Update
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DonationRequest;
