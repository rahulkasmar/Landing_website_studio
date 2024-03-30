import React from "react";
import blog1 from "../images/blogs/blog1.jpg";
import blog2 from "../images/blogs/blog2.jpg";
import blog3 from "../images/blogs/blog3.jpg";

const Blog = () => {
  const data = [
    {
      title: "Nature Photography",
      desc: `Embark on a visual journey through our lens as we capture the raw beauty and intricate
       details of the natural world through our nature photography.`,
      img: blog1,
      path: "#",
    },
    {
      title: "Wedding Photography",
      desc: `Experience the magic of your special day through the lens of our dedicated wedding photography team. At our studio, 
      we specialize in capturing the love, joy, and timeless moments that make your wedding day unforgettable`,
      img: blog2,
      path: "#",
    },
    {
      title: "Portrait Photography",
      desc: `Discover the art of capturing the essence of who you are through our portrait photography services. At our studio, 
       we're dedicated to immortalizing your personality, beauty, and character in every frame`,
      img: blog3,
      path: "#",
    },
  ];
  return (
    <section
      className="clip2 w-full h-full bg-blogBg bg-no-repeat bg-cover md:mt-[-6rem]
        flex items-center justify-center text-white py-[8rem] !z-50">
      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-wrap gap-5">
        {data.map((blog, i) => (
          <div key={i} className="flex-[100%] md:flex-[25%] md:even:mt-[3rem]">
            <img className="w-full rounded-md" src={blog.img} alt="blogImg" />
            <div className="mt-5">
              <h1 className="text-2xl 2xl:text-4xl pb-3 font-medium capitalize">
                {blog.title}
              </h1>
              <p className="text-sm 2xl:text-xl capitalize">{blog.desc}</p>

              <button
                className="mt-4 bg-slate-600 w-full md:w-auto py-2 px-3 2xl:py-3 
                2xl:px-4 cursor-pointer text-sm hover:bg-slate-400">
                Read More 
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
