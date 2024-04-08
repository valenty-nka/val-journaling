import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-black">
        <div className="-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 text-xl py-2 font-light text-slate-300"
          />
          <h1 className="inline-block nt-6 font-normal text-4xl capitalize text-light leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 h-full bg-black/60">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square w-full h-full object-cover object-top brightness-50 "
          />
        </div>
      </div>
      <BlogDetails blog={blog} slug={params.slug} />
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border-[1px] border-solid border-accent/40 p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg capitalize cursor-pointer font-normal hover:text-accent/50 duration-200 transition-colors ease-in-out">
              Table of Content
            </summary>
            <ul className="mt-4 text-base font-in">
              {blog.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2
                      data-[level=two]:border-t border-solid border-dark/40
                      data-[level=three]:pl-6 flex items-center justify-start"
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}
                      <span className="hover:text-accent/50 duration-200 transition-colors ease-in-out">
                        {heading.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMdx blog={blog} />
      </div>
    </article>
  );
}
