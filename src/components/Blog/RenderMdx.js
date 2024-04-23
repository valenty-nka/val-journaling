"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div
      className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:text-accent prose-blockquote:font-light prose-blockquote:not-italic
    prose-h2:font-normal  prose-h3:font-normal prose-h3:text-slate-600 prose-h2:text-slate-600
    prose-h4:font-normal prose-h4:text-slate-600
    prose-strong:text-slate-600
    prose-a:text-accent
    first-letter:text-2xl
    sm:first-letter:text-4xl"
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
