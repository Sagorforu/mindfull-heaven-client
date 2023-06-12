import { useEffect, useState } from "react";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import useAuth from "../../../Components/Hooks/useAuth";

const PopularClasses = () => {
  const [sort, setSort] = useState("dec");
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/popularClass?sort=${sort}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularClasses(data);
      });
  }, [sort]);

  return (
    <div className="mt-24 my-container">
      <PageTitle heading={"Our popular classes"}></PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ms-5 gap-5 mb-20">
        {popularClasses.map((popular) => (
          <div
            key={popular?._id}
            className="card w-96 bg-base-100 shadow-xl group"
          >
            <figure className="px-10 pt-10">
              <img
                className="transform transition-transform duration-200 group-hover:scale-110"
                src={popular?.classPhoto
                }
                alt="yoga class"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="uppercase">Name:</span> {popular?.className}
              </h2>
              <h2 className="card-title">
                <span className="uppercase">Instructor:</span> {popular?.instructorName}
              </h2>
              <p>
                <span className="uppercase font-semibold me-2">Instructor Email:</span>{" "}
                {popular?.instructorEmail}
              </p>
              <p>
                <span className="uppercase font-semibold me-2">Students: </span>{" "}
                {popular?.enrolled}
              </p>
              <p>
                <span className="uppercase font-semibold me-2">Price: $</span>{" "}
                {popular?.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
