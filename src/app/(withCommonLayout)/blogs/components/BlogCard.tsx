"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }: { blog: any }) => {
  // Destructure properties from the 'blog' object
  const { id, title, image, description } = blog;

  // State to track mouse hover
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };


  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Truncate the description to a certain length
  const truncateDescription = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Apply CSS classes based on hover state
      className={`max-w-sm w-full mx-auto shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out ${
        isHovered ? "hover:scale-105" : ""
      }`}
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto", // Adjust card layout as needed
        height: "100%", // Make the card take up the full height of its container
      }}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover"
        />
      )}
      <div className="dark:text-white px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {truncateDescription(description, 100)}
        </p>
      </div>
      <div className="px-6 pb-4">
        <Link
          href={`/blogs/${id}`}
          className={`flex items-center justify-end font-semibold underline py-2 px-4 rounded-full text-teal-700 transition duration-300 ease-in-out transform hover:scale-105`}
        >
          <span>Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
