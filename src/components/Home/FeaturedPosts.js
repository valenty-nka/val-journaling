import React from "react";
import { sortBlogs } from "../../utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="relative w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="absolute top-[-3rem] inline-block text-accent uppercase text-4xl font-thin tracking- p-5 border-accent border-opacity-25 border-[1px] self-start bg-light z-10">
        Featured Posts
      </h2>
      <div className="border-accent border-opacity-25 border-[1px] grid grid-cols-2 grid-rows-2 gap-6 p-16">
        <article className="col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[4]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
