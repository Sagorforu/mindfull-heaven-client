import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle/PageTitle";

const SingleBlog = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  const [blog, setBlog] = useState([]);
  const { yoga_name, introduction, description, conclusion, image } = blog;

  useEffect(() => {
    const singleBlog = blogs.find((blog) => blog.id == id);
    setBlog(singleBlog);
  }, [id, blogs]);

  return (
    <div className="mt-36 my-container">
      <PageTitle heading={`read now... ${yoga_name}`}></PageTitle>
      <img src={image} alt="" />
      <p className="text-xl font-bold text-slate-700 mt-3">
        Blog Name: {yoga_name}
      </p>
      <p className="text-xl font-bold text-slate-700 mt-3">
        Introduction:{" "}
        <span className="font-medium text-lg text-slate-700 mt-3">
          {introduction}
        </span>
      </p>
      <p className="text-xl font-bold text-slate-700 mt-3">
        Description:{" "}
        <span className="font-medium text-lg text-slate-700 mt-3">
          {description}
        </span>
      </p>
      <p className="text-xl font-bold text-slate-700 mt-3">
        Conclusion:{" "}
        <span className="font-medium text-lg text-slate-700 mt-3">
          {conclusion}
        </span>
      </p>
    </div>
  );
};

export default SingleBlog;
