import React from "react";
import { sortBlogs } from "../../utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-4 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex flex-row items-center justify-between">
        <h2 className=" inline-block font-thin uppercase text-accent text-2xl lg:text-4xl tracking-wider ">
          Recent
        </h2>
        <Link
          href="/categories/all"
          className="inline-block text-accent font-thin underline underline-offset-4 pb-1 hover:text-accent/40 duration-300 transition-all ease-in-out"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mt-16">
        {sortedBlogs.slice(2, 5).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
