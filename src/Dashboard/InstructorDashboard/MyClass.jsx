import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
// import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Components/Hooks/useAuth";
import { useEffect, useState } from "react";

const MyClass = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myClass/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>MindFull Heaven | My Class</title>
      </Helmet>
      <PageTitle heading={"My Class"}></PageTitle>
      <div className="grid grid-cols-3 gap-5 mb-20">
        {classes.map((singleClass) => (
          <div
            key={singleClass._id}
            className="card w-96 bg-base-100 shadow-xl group"
          >
            <figure className="px-10 pt-10">
              <img
                className="transform transition-transform duration-200 group-hover:scale-110"
                src={singleClass.classPhoto}
                alt="yoga class"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Class Name: {singleClass.className}
              </h2>
              <h2 className="card-title">
                Instructor Name: {singleClass.instructorName}
              </h2>
              <p>Instructor Email: {singleClass.instructorEmail}</p>
              <p>Available Seats: {singleClass.availableSeats}</p>
              <p>Price: ${singleClass.price}</p>
              {/* TODO: enrolled students come from after payment  */}
              <p>Enrolled Students: {"0"}</p>
              <p>
                Status:
                {singleClass.status === "denied" ? (
                  <span className="badge ms-3 p-3 text-white bg-red-600">
                    {singleClass.status}
                  </span>
                ) : (
                  <span className="badge ms-3 p-3 text-white bg-[#0A5403]">
                    {singleClass.status}
                  </span>
                )}
              </p>
              <div className="card-actions mt-5 flex justify-between">
                <button className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
