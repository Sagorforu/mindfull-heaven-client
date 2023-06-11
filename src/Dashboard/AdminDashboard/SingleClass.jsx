import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SingleClass = ({ singleClass }) => {
  const {
    className,
    classPhoto,
    instructorEmail,
    instructorName,
    availableSeats,
    price,
    status,
    _id,
  } = singleClass;
  const [existingData, setExistingData] = useState([]);
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
            refetch()
            const filteredData = singleClass.filter((item) => item.id !== id);

        setExistingData(filteredData);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${className} is approve now!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl group">
      <figure className="px-10 pt-10">
        <img className="transform transition-transform duration-200 group-hover:scale-110" src={classPhoto} alt="yoga class" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {className}</h2>
        <h2 className="card-title">Instructor Name: {instructorName}</h2>
        <p>Instructor Email: {instructorEmail}</p>
        <p>Available Seats: {availableSeats}</p>
        <p>Price: ${price}</p>
        <p>
          Status:{" "}
          <span className="badge p-3 text-white bg-[#0A5403]">{status}</span>
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
                        onClick={() => handleApprove(_id)}
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
  );
};

export default SingleClass;
