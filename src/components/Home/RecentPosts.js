import React from "react";
import { sortBlogs } from "../../utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="w-full flex flex-row items-center justify-between">
        <h2 className=" inline-block font-thin uppercase text-accent text-4xl tracking-wider ">
          Recent
        </h2>
        <Link
          href="/categories/all"
          className="inline-block text-accent font-thin underline underline-offset-4 pb-1 hover:scale-105 hover:text-slate-400 duration-300 transition-all ease-out"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
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
