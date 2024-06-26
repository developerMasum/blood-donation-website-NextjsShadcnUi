"use client"
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMyRequestsQuery } from "@/redux/api/donnerApi";

interface Donor {
  name: string;
  bloodType: string;
  location: string;
  availability: boolean;
  totalDonations: number;
}

interface TRequest {
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
  donor: Donor; 
}


const MyRequests = () => {
  const { data, isLoading } = useMyRequestsQuery({});
  // console.log(data?.donner);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const invoices: TRequest[] = data?.donner as TRequest[];

  if (!invoices || invoices.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        You don&apos;t have any Donation Requests
      </div>
    );
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Request Date</TableHead>
            <TableHead>Donor Name</TableHead>
            <TableHead>Blood Group</TableHead>
            <TableHead>Donor Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Hospital Name</TableHead>
            <TableHead>Reason</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices?.map((invoice: TRequest) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                {formatDate(invoice.dateOfDonation)}
              </TableCell>
              <TableCell className="font-medium">
                {invoice.donor?.name}
              </TableCell>
              <TableCell className="font-medium">
                {invoice.donor?.bloodType}
              </TableCell>
              <TableCell className="font-medium">
                {invoice.donor?.location}
              </TableCell>
              <TableCell className="font-medium">
                {invoice.requestStatus}
              </TableCell>
              <TableCell className="font-medium">
                {invoice.hospitalName}
              </TableCell>
              <TableCell>{invoice.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyRequests;
