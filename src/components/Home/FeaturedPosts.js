import React from "react";
import { sortBlogs } from "../../utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="relative w-full mt-16 sm:mt-24 md:mt-32 px-4 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="absolute top-3 sm:top-[-3rem] left-[1rem] sm:left-[3rem] md:left-[6rem] lg:left-[10rem] inline-block text-accent uppercase text-2xl lg:text-4xl font-thin tracking-wider p-2 sm:p-5 border-accent border-opacity-25 border-b-[1px] sm:border-[1px] self-start bg-light z-10">
        Featured Posts
      </h2>
      <div className="border-accent border-opacity-25 sm:border-[1px] grid grid-cols-2 grid-rows-2 gap-6 pt-16 mt-2 sm:mt-0 p-0 md:p-4 sxl:p-16">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[0]} />
        </article>
        <article className="col-span-2 lg:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-2 lg:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
