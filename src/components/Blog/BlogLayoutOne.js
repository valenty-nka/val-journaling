import React from "react";
import Image from "next/image";
import Tag from "../Elements/Tag";
import Link from "next/link";
import { slug } from "github-slugger";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden relative">
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="object-center object-cover w-full h-full group-hover:scale-110 duration-500 transition-all ease-in-out brightness-50 hover:brightness-90"
      />
      <div className="w-full absolute bottom-0 p-10 z-20">
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="text-light font-light"
        />
        <Link href={blog.url} className="mt-6">
          <h1 className="font-light text-xl text-light">
            <span
              className="bg-gradient-to-r from-light to-light bg-[length:0px_1px]
              group-hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease py-1"
            >
              {blog.title}
            </span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;