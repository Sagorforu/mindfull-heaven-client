import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useEffect } from "react";
import { useState } from "react";
import SingleClass from "./SingleClass";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  console.log(classes)

  useEffect(() => {
    fetch("http://localhost:5000/manageClass")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="mb-20">
      <Helmet>
        <title>MindFull Heaven | Manage Classes</title>
      </Helmet>
      <PageTitle heading={"Manage Classes"}></PageTitle>
      <div className="grid grid-cols-3 gap-5">
        {
            classes.map((singleClass) => <SingleClass key={singleClass._id} singleClass={singleClass}></SingleClass>)
        }
      </div>
    </div>
  );
};

export default ManageClasses;
