"use client"
import { useGetMyRequestsQuery } from '@/redux/api/donnerApi';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
}

const MyRequests = () => {
    const {data,isLoading} = useGetMyRequestsQuery({})
    if (isLoading) {
        <p>loaading.....</p>
    }
   const invoices:TRequest[]  = data?.donner as TRequest[]
    return (
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead >Hospital Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reason</TableHead>
              {/* <TableHead className="text-right">Amount</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices?.map((invoice: TRequest) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">
                  {invoice.hospitalName}
                </TableCell>
                {/* <TableCell>{invoice.hospitalAddress}</TableCell> */}
                <TableCell>{invoice.requestStatus}</TableCell>
                <TableCell >{invoice.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
         
        </Table>
      </div>
    );
};

export default MyRequests;