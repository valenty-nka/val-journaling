import React from "react";
import { sortBlogs } from "../../utils";
import Image from "next/image";
import Tag from "../Elements/Tag";
import Link from "next/link";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return (
    <div className="w-full inline-block mt-10 sm:mt-0">
      <article className="flex flex-col items-start justify-end mx-4 sm:mx-10 h-[60vh] sm:h-[85vh] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 h-full z-0
        bg-gradient-to-b from-transparent from-0% to-slate-600
        "
        />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="object-center object-cover w-full h-full hover:scale-105 duration-500 transition-all ease-in-out -z-10"
          sizes="100vw"
          priority
        />
        <div className="w-full lg:w-3/4 p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start z-0 text-light">
          <Tag
            link={`/categories/${slug(blog.tags[0])}`}
            name={blog.tags[0]}
            className="text-accent font-normal"
          />
          <Link href={blog.url}>
            <h1 className="font-semibold text-md md:text-lg lg:text-xl">
              <span
                className="bg-gradient-to-r from-light to-light bg-[length:0px_1px]
              hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease"
              >
                {blog.title}
              </span>
            </h1>
          </Link>

          <p className="hidden sm:inline-block mt-2 md:text-md lg:text-lg font-thin">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
