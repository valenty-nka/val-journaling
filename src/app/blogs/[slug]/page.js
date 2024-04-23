import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) return;

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes("http") ? img : siteMetadata.siteUrl + img,
    };
  });

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      images: ogImages,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      authors: siteMetadata.author,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages, // Must be an absolute URL
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes("http") ? img : siteMetadata.siteUrl + img,
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: siteMetadata.author,
        url: siteMetadata.siteUrl + blog.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-black">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={blog.tags[0]}
              link={`/categories/${slug(blog.tags[0])}`}
              className="px-6 text-xl py-2 font-light text-slate-300"
            />
            <h1 className="inline-block nt-6 font-normal text-2xl md:text-3xl lg:text-4xl capitalize text-light leading-normal relative w-5/6">
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
              className="aspect-square w-full h-full object-cover object-top brightness-50"
              priority
              sizes="100vw"
            />
          </div>
        </div>
        <BlogDetails blog={blog} slug={params.slug} />
        <div className="grid grid-cols-12 gap-y-4 lg:gap-8 xl:gap-16 mt-8 px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="border-b-[1px] border-solid border-accent/40 p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
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
                      data-[level=three]:pl-3
                      sm:data-[level=three]:pl-6 flex items-center justify-start"
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
    </>
  );
}
