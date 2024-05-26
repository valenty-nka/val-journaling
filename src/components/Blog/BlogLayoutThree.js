import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="group flex flex-col items-center text-accent">
      <Link href={blog.url} className="h-full overflow-hidden">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-110 duration-700 transition-all ease-in-expo brightness-90 group-hover:brightness-50"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-col w-full mt-4">
        <span className=" text-accent font-normal text-md">
          #{blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h1 className="font-light text-lg text-dark">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_1px]
              group-hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-linear py-1 text-sm sm:text-lg"
            >
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="text-gray/75 text-sm sm:text-md">
          {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
