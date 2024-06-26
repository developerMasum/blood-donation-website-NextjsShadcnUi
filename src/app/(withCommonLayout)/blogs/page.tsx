"use client";

import { useGetAllBlogsQuery } from "@/redux/api/donnerApi";
import React, { useState } from "react";
import BlogCard from "./components/BlogCard";
import { TBlog } from "@/types/blogs";

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading } = useGetAllBlogsQuery({});

  type BlogsResponse = {
    blogs: TBlog[];
  };

  const blogs: TBlog[] = (data as BlogsResponse)?.blogs || [];

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 6);

  return (
    <div className="mt-20 px-2 text-swift pb-20">
      <div className="mb-20 mt-40">
        {/* Any additional header or introduction content */}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          visibleBlogs.map((blog: TBlog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        )}
      </div>
      {!showAll && blogs.length > 6 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="text-white font-semibold bg-blue-500 dark:bg-blue-700 py-2 px-4 rounded-full hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
