"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { getUserInfo, storeUserInfo } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import {
  useCreateDonnerRequestMutation,
  useGetSingleDonnerQuery,
} from "@/redux/api/donnerApi";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { TUserType } from "../page";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  phoneNumber: z.string().regex(/^01[3-9]\d{8}$/, {
    message: "Phone number must start with 01 and must be 11 digits long",
  }),
  hospitalName: z.string().min(6, {
    message: "Hospital name must be at least 6 characters",
  }),
  hospitalAddress: z.string().min(6, {
    message: "Hospital address must be at least 6 characters",
  }),
  reason: z.string().min(2, {
    message: "Reason must be valid",
  }),
  dateOfDonation: z.date({
    required_error: "Date must be valid",
  }),
});

const ProfileForm = ({
  userInfo,
  currentDonnerId,
}: {
  userInfo: TUserType;
  currentDonnerId: string;
}) => {
  const { data, isLoading } = useGetSingleDonnerQuery(userInfo?.id as string);
  const [createDonnerRequest] = useCreateDonnerRequestMutation();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      hospitalName: "",
      hospitalAddress: "",
      reason: "",
      dateOfDonation: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      phoneNumber: values.phoneNumber,
      hospitalName: values.hospitalName,
      hospitalAddress: values.hospitalAddress,
      reason: values.reason,
      dateOfDonation: values.dateOfDonation,
      donorId: currentDonnerId,
    };
    try {
      const result = await createDonnerRequest(data).unwrap();
      if (result) {
        toast("Request sent successfully");
        router.push("/donner-list");
      }
    } catch (error) {
      console.log("Request failed:", error);
      toast.error("Request failed");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-4 ">
        <div className="w-full space-y-4 p-4 border-0 shadow-sm">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hospitalName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Full Name of Hospital"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hospitalAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital Address</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Hospital Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Reason for Donation"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfDonation"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Donation</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "dd-MMMM-yyyy")
                        ) : (
                          <span>Pick Your Date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const next15Days = new Date();
                        next15Days.setDate(today.getDate() + 15);
                        next15Days.setHours(23, 59, 59, 999);

                        return date < today || date > next15Days;
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Send Request
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
