import PageHeading from "../PageHeading";
import rawBlogs from "../data/blogs.json";
import blog1 from "../../assets/projects/website-optimization-image.webp";
import blog2 from "../../assets/projects/seo-image.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type BlogImageKey = "blog1" | "blog2";

type Blog = {
  id: number;
  title: string;
  image: BlogImageKey;
  excerpt: string;
};

const blogImage: Record<BlogImageKey, string> = {
  blog1,
  blog2,
};

const blogs = rawBlogs as Blog[];

const Blog = () => {
  return (
    <>
      <PageHeading>Blog</PageHeading>
      <div className="grid lg:grid-cols-2 grid-rows-auto gap-5">
        {blogs.map((blog) => {
          return (
            <div
              className="rounded-lg overflow-hidden bg-dark-400"
              key={blog.id}
            >
              <img src={blogImage[blog.image]}></img>
              <div className="mx-4 my-4.5">
                <p className="text-xl font-bold capitalize mb-1.5">{blog.title}</p>
                <p className="text-sm capitalize mb-1.5">{blog.excerpt}</p>
                <span className="inline-flex items-center my-2 text-xs lg:text-sm rounded-lg px-2 py-1  bg-[#333]">
                  <p className="capitalize text-[13px]">read more</p>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
