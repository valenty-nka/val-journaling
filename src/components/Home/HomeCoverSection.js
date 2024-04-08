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
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 h-[85vh] relative overflow-hidden">
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
        />
        <div className="w-3/4 p-16 flex flex-col justify-center items-start z-0 text-light">
          <Tag
            link={`/categories/${slug(blog.tags[0])}`}
            name={blog.tags[0]}
            className="text-accent font-normal"
          />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-semibold text-xl">
              <span
                className="bg-gradient-to-r from-light to-light bg-[length:0px_1px]
              hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease py-1"
              >
                {blog.title}
              </span>
            </h1>
          </Link>

          <p className="inline-block mt-2 text-lg font-thin">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
