import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://mindfull-heaven-server.vercel.app/users/instructor")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructor(data);
      });
  }, []);
  return (
    <div className="mt-24">
      <Helmet>
        <title>MindFull Heaven | Instructor</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ms-5 gap-5 mb-20">
        {instructor.map((teacher) => (
          <div
            key={teacher._id}
            className="card w-96 bg-base-100 shadow-xl group"
          >
            <figure className="px-10 pt-10">
              <img
                className="transform transition-transform duration-200 group-hover:scale-110"
                src={teacher.photo}
                alt="yoga class"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="uppercase">Name:</span> {teacher.name}
              </h2>
              <p><span className="uppercase font-semibold me-2">Email:</span> {teacher.email}</p>
              <div className="card-actions mt-5 flex justify-between">
                <button className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded">
                  See Classes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
