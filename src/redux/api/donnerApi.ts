import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";

export const donnerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createdonner: build.mutation({
      query: (data) => ({
        url: "/donner/create-donner",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.donner],
    }),

    getAllDonner: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/donor-list",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta: IMeta) => {
        return {
          donner: response,
          meta,
        };
      },
      providesTags: [tagTypes.donner],
    }),

    deletedonner: build.mutation({
      query: (id) => ({
        url: `/donner/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.donner],
    }),
    //get single doctor
    getSingleDonner: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/donor/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.donner],
    }),
    // update a doctor
    updatedonner: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/donner/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.donner, tagTypes.user],
    }),
  }),
});

export const { useGetAllDonnerQuery,useGetSingleDonnerQuery } = donnerApi;
