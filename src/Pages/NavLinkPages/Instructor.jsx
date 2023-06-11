import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/instructor")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructor(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>MindFull Heaven | Instructor</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-5 mb-20">
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
                Instructor Name: {teacher.name}
              </h2>
              <p>Instructor Email: {teacher.email}</p>
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
