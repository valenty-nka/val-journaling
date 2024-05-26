import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-accent h-full">
      <Link
        href={blog.url}
        className="col-span-12 xs:col-span-4 h-full overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-110 duration-700 transition-all ease-in-expo brightness-90 group-hover:brightness-50"
          sizes="(max-width:480px) 100vw, 35vw"
        />
      </Link>
      <div className="col-span-12 xs:col-span-8 w-full">
        <span className=" inline-block w-full text-accent font-normal text-sm sm:text-md">
          #{blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h1 className="font-light text-lg text-dark">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_1px]
              group-hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-linear py-1 text-base md:text-lg"
            >
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="text-gray/75 text-md block">
          {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
