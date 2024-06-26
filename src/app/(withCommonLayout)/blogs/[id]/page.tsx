"use client";
import Image from "next/image";
import { format } from "date-fns";
import { useGetSingleBlogQuery } from "@/redux/api/donnerApi";

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const { data, isLoading, error } = useGetSingleBlogQuery(params.id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading blog details
      </div>
    );

  const formattedDate = format(new Date(data.createdAt), "dd MMMM yyyy");

  return (
    <div className="container mx-auto p-4">
      <div className=" rounded-lg p-6">
        {data.image && (
          <div className="mb-6">
            <Image
              src={data.image}
              alt={data.title}
              width={300}
              height={200}
              className="w-1/2 h-auto object-cover rounded-lg"
              // layout="responsive"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4 ">{data.title}</h1>
        <p className="text-gray-600 mb-6 font-semibold">{formattedDate}</p>
        <div className="prose max-w-none text-gray-600 ">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;

