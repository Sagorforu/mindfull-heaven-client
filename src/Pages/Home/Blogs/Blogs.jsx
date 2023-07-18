import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./blog.css";
import { Scrollbar } from "swiper";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <PageTitle heading={"Our Blogs"}></PageTitle>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        // className="mySwiper "
      >
        {blogs.map((blog) => (
          <SwiperSlide className="mt-10" key={blog.id}>
            <div>
              <div className=" h-32 sm:h-32 md:h-60 lg:h-[600px]">
                <img className="" src={blog.image} alt="" />
              </div>
              <p className="font-semibold mb-3 text-slate-700">
                {blog.yoga_name}
              </p>
              <Link to={`/singleBlog/${blog.id}`}>
                <button className="mb-4 bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Blogs;
