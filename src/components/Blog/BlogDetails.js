import { format, parseISO } from "date-fns";
import React from "react";
import Link from "next/link";
import { slug } from "github-slugger";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-10 border-b-[1px] border-accent text-accent py-1 flex items-center justify-between flex-wrap text-md font-light mx-10">
      <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
      {/* <span>10 views</span> */}
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
