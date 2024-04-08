import { allBlogs } from "@/.contentlayer/generated";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });
  return (
    <article>
      <div>
        <h1>#{params.slug}</h1>
        <span>Explore more categories</span>
      </div>
      <Categories categories={allCategories} active={params.slug} />
    </article>
  );
};

export default CategoryPage;
