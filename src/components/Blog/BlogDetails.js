import { format, parseISO } from "date-fns";
import React from "react";
import Link from "next/link";
import { slug } from "github-slugger";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-2 md:px-10 border-b-[1px] border-accent text-accent py-1 flex items-center justify-between flex-wrap text-base sm:text-md font-light sm:mx-10 mx-2">
      <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
      {/* <span>10 views</span> */}
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="ml-0 sm:m-3">
        {blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
