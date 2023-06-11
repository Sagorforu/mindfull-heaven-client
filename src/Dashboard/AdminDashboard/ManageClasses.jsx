import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/manageClass");
    return res.data;
  });

  const handleApprove = (id) => {
    fetch(`http://localhost:5000/manageClass/approve/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${classes.className} is approve now!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mb-20">
      <Helmet>
        <title>MindFull Heaven | Manage Classes</title>
      </Helmet>
      <PageTitle heading={"Manage Classes"}></PageTitle>
      <div className="grid grid-cols-3 gap-5">
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
              <p>
                Status:{" "}
                <span className="badge p-3 text-white bg-[#0A5403]">
                  {singleClass.status}
                </span>
              </p>
              <div className="card-actions mt-5 flex justify-between">
                {singleClass.status === "approve" ? (
                  <button
                    disabled
                    className="bg-slate-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                  >
                    Approve
                  </button>
                ) : (
                  <button
                    onClick={() => handleApprove(singleClass._id)}
                    className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
                  >
                    Approve
                  </button>
                )}
                <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Deny
                </button>
                <button className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded">
                  FeedBack
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
